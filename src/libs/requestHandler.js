const bodyParser = require('body-parser')

/**
 * You can setup any custom request related middlewares here.
 *
 * 'app.use(bodyParser.json())' by default
 *
 * @param {express.Express} app
 * @param {function(bodyParser): any} customHandler
 */
module.exports.withRequestHandler = function(app, customHandler) {
  if (!customHandler) {
    return app.use(bodyParser.json())
  }
  return customHandler(bodyParser)
}
