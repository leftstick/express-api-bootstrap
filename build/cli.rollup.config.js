const pkg = require('../package.json')
const tsconfig = require('../tsconfig.json')
const { inputOpts, outputOpts } = require('./common.rollup.config')

module.exports.inputOpts = {
  ...inputOpts({
    ...tsconfig,
    compilerOptions: { ...tsconfig.compilerOptions, declaration: false }
  }),
  input: 'src/cli.ts'
}

module.exports.outputOpts = {
  ...outputOpts,
  file: 'bin/index.js',
  banner: '#!/usr/bin/env node'
}
