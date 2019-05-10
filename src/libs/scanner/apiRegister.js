const express = require('express')
const { reap } = require('safe-reaper')
const { isEmpty } = require('../../helper/object')
const { responseHandler } = require('../responseHandler')

/**
 * @typedef {object} ScanOptions - options for scanning
 * @property {string} pattern Pattern to be matched
 * @property {string} cwd The current working directory in which to search. Defaults to process.cwd()
 * @property {string} ignore Add a pattern or an array of glob patterns to exclude matches. Defaults to ['\*\*\/\_\*.js', '\*\*\/\_\*\/\*.js']
 */

/**
 * @typedef {object} ScannedModule - module scanned
 * @property {string} filePath path of module
 * @property {object} moduleInstance object
 * @property {string} code code text of module
 * @property {object} ast ast
 */

/**
 * @typedef {object} RegisterOptions - options of register function
 * @property {ScanOptions} scanOpts
 * @property {string} apiPrefix - prefix will be prepended in every registered api
 */

/**
 * @typedef {object} APIInfo - info of API
 * @property {string} api
 * @property {string} apiMethod - method name of API
 * @property {function} apiHandler - API handler
 */

/**
 *
 * @param {express.Express} app
 * @param {Array<ScannedModule>} scannedModules
 * @param {RegisterOptions} registerOptions
 */
module.exports.registerAPIs = function(app, scannedModules, registerOptions) {
  const cachedRoute = {}

  /**
   * @type {Array<APIInfo>}
   */
  const apiInfos = scannedModules.reduce(
    (prev, scannedModule) => prev.concat(parseRouteInfo(scannedModule, cachedRoute)),
    []
  )
  const router = express.Router()

  apiInfos.forEach(apiInfo => {
    router[apiInfo.httpMethod](apiInfo.api, (req, res) => {
      const result = apiInfo.apiHandler(req, res)
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

  app.use(registerOptions.apiPrefix, router)
}

/**
 *
 * @param {ScannedModule} scannedModule
 * @param {[key: string]: any} cachedRoute
 * @return {Array<APIInfo>}
 */
function parseRouteInfo(scannedModule, cachedRoute) {
  const moduleMethods = Object.keys(scannedModule.moduleInstance)

  const apiInfos = getAPIInfo(moduleMethods, scannedModule)

  for (let i = 0; i < apiInfos.length; i++) {
    const apiInfo = apiInfos[i]

    if (!apiInfo.api.startsWith('/')) {
      throw new Error(`API ${apiInfo.httpMethod}_${apiInfo.api} is declared with incorrect @api`)
    }
    if (apiInfo.api[1] === '/') {
      throw new Error(`API ${apiInfo.httpMethod}_${apiInfo.api} is declared with incorrect @api`)
    }
    if (cachedRoute[`${apiInfo.httpMethod}_${apiInfo.api}`]) {
      throw new Error(
        `[${apiInfo.httpMethod} ${apiInfo.api}] was declared duplicated at [${scannedModule.filePath}]`
      )
    }
    cachedRoute[`${apiInfo.httpMethod}_${apiInfo.api}`] = true
  }
  return apiInfos
}

/**
 *
 * @param {Array<string>} moduleMethods
 * @param {ScannedModule} scannedModule
 *
 * @returns {Array<APIInfo>}
 */
function getAPIInfo(moduleMethods, scannedModule) {
  const asts = scannedModule.ast

  return moduleMethods
    .filter(moduleMethod => getAstByMethodName(asts, moduleMethod))
    .filter(moduleMethod => !!getCommentValueByKey(getAstByMethodName(asts, moduleMethod).tags, 'api'))
    .map(moduleMethod => {
      const findAst = getAstByMethodName(asts, moduleMethod)
      const httpMethod = getCommentValueByKey(findAst.tags, 'method')
      if (!httpMethod) {
        throw new Error(
          `You missed declaration @method for API [${moduleMethod}] at [${scannedModule.filePath}]`
        )
      }
      return {
        apiHandler: scannedModule.moduleInstance[moduleMethod],
        httpMethod: getCommentValueByKey(findAst.tags, 'method'),
        api: getCommentValueByKey(findAst.tags, 'api')
      }
    })
}

/**
 *
 * @param {Array<{title: string, name: string}>} tags
 * @param {string} key
 */
function getCommentValueByKey(tags, key) {
  return (tags.find(tag => tag.title.toLowerCase() === key) || {}).name || ''
}

/**
 *
 * @param {Array<object>} asts
 * @param {string} methodName
 */
function getAstByMethodName(asts, methodName) {
  return asts.find(a => reap(a, 'code.context.name') === methodName)
}
