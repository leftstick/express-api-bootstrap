const fork = require('../../helper/fork')

module.exports = {
  cmd: 'dev',
  description: 'Launch application in debug mode',
  action() {
    fork(require.resolve('./realDev'))
  }
}
