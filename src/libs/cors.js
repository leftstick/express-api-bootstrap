/**
 * should be called before withExpressApp
 *
 * @param {express.Express} app
 */
module.exports.withCors = function(app) {
  app.use('*', (req, res, next) => {
    if (!req.get('Origin')) {
      return next()
    }
    res.set('Access-Control-Allow-Origin', req.headers.origin)
    res.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PATCH, PUT, HEAD, TRACE, DELETE')
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Range')
    res.set('Access-Control-Allow-Credentials', 'true')
    if ('OPTIONS' === req.method) {
      return res.status(200).end()
    }
    return next()
  })
}
