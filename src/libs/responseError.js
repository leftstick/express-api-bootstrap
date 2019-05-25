class ResponseError extends Error {
  constructor(messageOrError, code) {
    if (messageOrError instanceof Error) {
      super(messageOrError.message)
      this.originalName = messageOrError.name
      this.stack = messageOrError.stack
    } else {
      super(messageOrError)
    }
    this.name = 'ResponseError'
    this.code = code
  }
}

module.exports = ResponseError
