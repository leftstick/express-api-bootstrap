module.exports.isEmpty = function(obj) {
  return obj === undefined || obj === null
}

module.exports.isEmptyString = function(obj) {
  return obj === ''
}

module.exports.omit = function(obj, ...keys) {
  return Object.keys(obj)
    .filter(k => !keys.includes(k))
    .reduce((prev, cur) => {
      prev[cur] = obj[cur]
      return prev
    }, {})
}
