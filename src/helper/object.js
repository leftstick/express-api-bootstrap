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

module.exports.isArray = function(arr) {
  if (Object.prototype.toString.call(arr) === '[object Array]') {
    return true
  }
  return false
}

module.exports.isObject = function(obj) {
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    return true
  }
  return false
}

module.exports.isFunc = function(func) {
  if (Object.prototype.toString.call(func) === '[object Function]') {
    return true
  }
  return false
}
