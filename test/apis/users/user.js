/**
 * @method get
 * @api /users/:id
 */
module.exports.getUsers = async function(req, res) {
  const { url, originalUrl, params } = req

  res.json({
    url,
    originalUrl,
    id: params.id
  })
}

/**
 * @method post
 * @api /users
 */
module.exports.createUser = async function(req, res) {
  const { url, originalUrl, params } = req

  res.json({
    url,
    originalUrl,
    id: params.id
  })
}
