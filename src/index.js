const { withExpressApp } = require('./libs/appScanner')
const { withCors } = require('./libs/cors')
const { withLogger, logger } = require('./libs/logger')
const { withRequestHandler } = require('./libs/requestHandler')
const { withResponseHandler } = require('./libs/responseHandler')
const { ResponseError } = require('./libs/responseError')

module.exports.withExpressApp = withExpressApp

module.exports.withCors = withCors

module.exports.withLogger = withLogger

module.exports.withRequestHandler = withRequestHandler

module.exports.withResponseHandler = withResponseHandler

module.exports.logger = logger

module.exports.ResponseError = ResponseError
