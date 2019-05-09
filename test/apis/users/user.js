/**
 * @method get
 * @api /users/:id
 */
module.exports.getUsers = function(req) {
  const { url, originalUrl, params } = req

  return {
    url,
    originalUrl,
    id: params.id
  }
}

/**
 * @method post
 * @api /users
 */
module.exports.createUser = function(req, res) {
  const { url, originalUrl, params } = req

  res.json({
    url,
    originalUrl,
    id: params.id
  })
}
