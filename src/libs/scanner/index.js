/* eslint-disable */
const express = require('express')
const bodyParser = require('body-parser')
/* eslint-enable */

const Parser = require('parse-comments')
const { readFileSync } = require('fs')

const { scanAPIs } = require('../../helper/scanner')
const { registerAPIs } = require('./apiRegister')

const { enableCors } = require('../cors')
const { setLogger, logger } = require('../logger')
const { setupRequestParser } = require('../requestParser')
const { setupResponseHandler } = require('../responseHandler')

/**
 * @typedef {object} Logger - options for logger
 * @property {Function} debug log debug info
 * @property {Function} info log normal info
 * @property {Function} warn log warning info
 * @property {Function} error log error info
 * @property {Function} fatal log fatal info
 */

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
 * @typedef {object} ResponseHandler - handler
 * @property {function(any):({errorCode: number, data: any})=} onNormalResponse
 * @property {function(ResponseError):({errorCode: number, message: string})=} onErrorResponse
 */

/**
 * @typedef {object} RegisterOptions - options of register function
 * @property {ScanOptions} scanOpts
 * @property {string} apiPrefix - prefix will be prepended in every registered api
 * @property {boolean} enableCors - whether to enable cors
 * @property {Logger} logger - setup custom logger
 * @property {function(bodyParser): any} requestParser - setup custom requestParser. 'app.use(bodyParser.json())' by default
 * @property {ResponseHandler} responseHandler - setup custom response handler
 */

/**
 * @param {express.Express} app
 */
module.exports.withExpressApp = function(app) {
  const parser = new Parser()

  /**
   * @param {RegisterOptions} options
   */
  function register(options) {
    try {
      setLogger(app, options.logger)
      enableCors(app, options.enableCors)
      setupRequestParser(app, options.requestParser)
      setupResponseHandler(options.responseHandler)

      const scannedFiles = scanAPIs(options.scanOpts)

      /**
       * @type {Array<ScannedModule>}
       */
      const scannedModules = scannedFiles.map(api => {
        const code = readFileSync(api, { encoding: 'utf-8' })
        return {
          filePath: api,
          moduleInstance: require(api),
          code,
          ast: parser.parse(code)
        }
      })

      registerAPIs(app, scannedModules, options)
    } catch (error) {
      logger.error(error)
      process.exit(-1)
    }
  }

  return register
}
