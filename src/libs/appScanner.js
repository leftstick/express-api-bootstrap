const express = require('express')
const Parser = require('parse-comments')
const { readFileSync } = require('fs')
const { reap } = require('safe-reaper')
const { scanAPIs } = require('../helper/scanner')
const { isEmpty } = require('../helper/object')
const { logger } = require('./logger')
const { responseHandler } = require('./responseHandler')

/**
 * @typedef {object} ScanOptions - options for scanning
 * @property {string} pattern Pattern to be matched
 * @property {string} cwd The current working directory in which to search. Defaults to process.cwd()
 * @property {string} ignore Add a pattern or an array of glob patterns to exclude matches. Defaults to ['\*\*\/\_\*.js', '\*\*\/\_\*\/\*.js']
 */

/**
 * @param {express.Express} app
 */
module.exports.withExpressApp = function(app) {
  const parser = new Parser()
  const cachedRoute = {}

  /**
   * @param {Object} options
   * @param {ScanOptions} options.scanOpts
   * @param {string} options.apiPrefix - prefix will be prepended in every registered api
   */
  function registerAPIs(options) {
    const apis = scanAPIs(options.scanOpts)

    const apiModules = apis.map(api => ({
      filePath: api,
      moduleInstance: require(api),
      code: readFileSync(api, { encoding: 'utf-8' })
    }))

    const routeInfos = apiModules.reduce(
      (prev, apiModule) => prev.concat(parseRouteInfo(parser, apiModule, cachedRoute)),
      []
    )

    register(app, routeInfos, options.apiPrefix)

    return routeInfos
  }

  return registerAPIs
}

/**
 *
 * @param {Parser} parser
 * @param {{filePath: string, moduleInstance: object, code: string}} apiModule
 * @param {[key: string]: any} cachedRoute
 */
function parseRouteInfo(parser, apiModule, cachedRoute) {
  const ast = parser.parse(apiModule.code)
  const apiMethods = Object.keys(apiModule.moduleInstance)

  apisExposedShouldHaveDeclaration(apiMethods, ast)

  const routeInfos = getRouteInfo(apiMethods, ast, apiModule.moduleInstance)

  for (let i = 0; i < routeInfos.length; i++) {
    const routeInfo = routeInfos[i]

    if (!routeInfo.api.startsWith('/')) {
      logger.error(`API ${routeInfo.httpMethod}_${routeInfo.api} is declared with incorrect @api`)
      throw new Error(`API ${routeInfo.httpMethod}_${routeInfo.api} is declared with incorrect @api`)
    }
    if (routeInfo.api[1] === '/') {
      logger.error(`API ${routeInfo.httpMethod}_${routeInfo.api} is declared with incorrect @api`)
      throw new Error(`API ${routeInfo.httpMethod}_${routeInfo.api} is declared with incorrect @api`)
    }

    if (cachedRoute[`${routeInfo.httpMethod}_${routeInfo.api}`]) {
      logger.error(
        `You defined API [${routeInfo.httpMethod} ${
          routeInfo.api
        }] more than once, please verify your code first`
      )
      throw new Error(
        `You defined API [${routeInfo.httpMethod} ${
          routeInfo.api
        }] more than once, please verify your code first`
      )
    }
    cachedRoute[`${routeInfo.httpMethod}_${routeInfo.api}`] = true
  }
  return routeInfos
}

function apisExposedShouldHaveDeclaration(apiMethods, ast) {
  for (let i = 0; i < apiMethods.length; i++) {
    const apiMethod = apiMethods[i]
    if (ast.every(a => reap(a, 'code.context.name') !== apiMethod)) {
      logger.error(`You missed declaration for API [${apiMethod}]`)
      throw new Error(`You missed declaration for API [${apiMethod}]`)
    }
  }
}

/**
 *
 * @param {Array<string>} apiMethods
 * @param {any} ast
 * @param {Object} moduleInstance
 *
 * @returns {Array<{apiHandler: Function, httpMethod: string, api: string}>}
 */
function getRouteInfo(apiMethods, ast, moduleInstance) {
  return apiMethods.map(apiMethod => {
    const { tags } = ast.find(a => reap(a, 'code.context.name') === apiMethod)
    return {
      apiHandler: moduleInstance[apiMethod],
      httpMethod: (tags.find(tag => tag.title.toLowerCase() === 'method') || {}).name || '',
      api: (tags.find(tag => tag.title.toLowerCase() === 'api') || {}).name || ''
    }
  })
}

/**
 *
 * @param {express.Express} app
 * @param {Array<{apiHandler: Function, httpMethod: string, api: string}>} routeInfos
 * @param {string} apiPrefix
 */
function register(app, routeInfos, apiPrefix) {
  const router = express.Router()

  routeInfos.forEach(routeInfo => {
    router[routeInfo.httpMethod](routeInfo.api, (req, res) => {
      const result = routeInfo.apiHandler(req, res)
      if (result && result.then && result.catch) {
        result.then(
          data => {
            if (isEmpty(data)) {
              return
            }
            res.json(responseHandler.onNormalResponse(data))
          },
          err => {
            res.json(responseHandler.onErrorResponse(err))
          }
        )
        return
      }
      if (result) {
        res.json(responseHandler.onNormalResponse(result))
      }
    })
  })

  app.use(apiPrefix, router)
}
