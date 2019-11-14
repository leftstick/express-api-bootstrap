const pkg = require('../package.json')
const tsconfig = require('../tsconfig.json')
const { inputOpts, outputOpts } = require('./common.rollup.config')

module.exports.inputOpts = {
  ...inputOpts(tsconfig),
  input: 'src/index.ts'
}

module.exports.outputOpts = {
  ...outputOpts,
  file: pkg.main
}
