const rollup = require('rollup')
const config = require('./api.rollup.config')
const signale = require('signale')

module.exports = function() {
  return rollup
    .rollup(config.inputOpts)
    .then(bundle => {
      return bundle.write(config.outputOpts)
    })
    .then(() => {
      signale.success('libs/index.js generated')
    })
}
