const rollup = require('rollup')
const del = require('del')
const { resolve } = require('path')
const config = require('./api.rollup.config')
const signale = require('signale')

module.exports = function() {
  return del(resolve(__dirname, '../', 'libs'))
    .then(() => {
      return rollup.rollup(config.inputOpts)
    })
    .then(bundle => {
      return bundle.write(config.outputOpts)
    })
    .then(() => {
      signale.success('libs/index.js generated')
    })
}
