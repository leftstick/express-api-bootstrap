const path = require('path')
const json = require('rollup-plugin-json')
const typescript = require('rollup-plugin-typescript2')
const autoExternal = require('rollup-plugin-auto-external')
const tsconfig = require('../tsconfig.json')
const pkg = require('../package.json')

module.exports.inputOpts = {
  input: 'src/cli.ts',
  plugins: [
    autoExternal({
      builtins: true,
      dependencies: true,
      packagePath: path.resolve(__dirname, '..', 'package.json'),
      peerDependencies: true
    }),
    json(),
    typescript({
      typescript: require('typescript'),
      tsconfigOverride: {
        ...tsconfig,
        compilerOptions: { ...tsconfig.compilerOptions, declaration: false }
      }
    })
  ]
}

module.exports.outputOpts = {
  file: pkg.main,
  format: 'cjs',
  banner: '#!/usr/bin/env node'
}
