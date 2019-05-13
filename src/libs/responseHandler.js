const responseHandler = {
  onNormalResponse(data) {
    return {
      errorCode: 200,
      data
    }
  },
  onErrorResponse(err) {
    return {
      errorCode: err.code,
      message: err.message
    }
  }
}

/**
 * @typedef {object} ResponseError - options for custom Error
 * @property {string} name name of this error class
 * @property {string} message message of this error
 * @property {string} stack stack information of this error
 * @property {number} code errorCode
 */

/**
 * @typedef {object} ResponseHandler - handler
 * @property {function(any):({errorCode: number, data: any})=} onNormalResponse
 * @property {function(ResponseError):({errorCode: number, message: string})=} onErrorResponse
 */

/**
 * You can setup response transformer for normal/error case individually
 *
 * @param {ResponseHandler} opts
 */
module.exports.setupResponseHandler = function(opts) {
  if (opts && opts.onNormalResponse) {
    responseHandler.onNormalResponse = opts.onNormalResponse
  }

  if (opts && opts.onErrorResponse) {
    responseHandler.onErrorResponse = opts.onErrorResponse
  }
}

module.exports.responseHandler = responseHandler
