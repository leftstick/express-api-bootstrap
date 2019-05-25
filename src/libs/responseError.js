class ResponseError extends Error {
  constructor(message, code, stack) {
    super(message)
    this.code = code
    this.stack = stack
  }
}

module.exports = ResponseError
