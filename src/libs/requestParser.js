const chalk = require('chalk')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

/**
 * You can setup any custom request related middlewares here.
 *
 * 'app.use(bodyParser.json()); app.use(cookieParser());' by default
 *
 * @param {express.Express} app
 * @param {function({bodyParser: bodyParser, cookieParser: cookieParser}): any} customHandler
 */
module.exports.setupRequestParser = function(app, customHandler) {
  if (!customHandler) {
    app.use(bodyParser.json())
    app.use(cookieParser())
    return
  }
  customHandler(createDeprecatedBodyParser())
}

function createDeprecatedBodyParser() {
  const deprecatedBodyParser = {
    ...bodyParser,
    bodyParser,
    cookieParser
  }

  Object.keys(bodyParser).forEach(key => {
    Object.defineProperty(deprecatedBodyParser, key, {
      get() {
        console.log(chalk.yellow('Argument as bodyParser is deprecated: '))
        console.warn(
          chalk.yellow('You should use it as {bodyParser: bodyParser, cookieParser: cookieParser}')
        )
        return bodyParser[key]
      }
    })
  })

  return deprecatedBodyParser
}
