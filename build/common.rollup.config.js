const path = require('path')
const json = require('@rollup/plugin-json')
const typescript = require('rollup-plugin-typescript2')
const transformPaths = require('@zerollup/ts-transform-paths')
const autoExternal = require('rollup-plugin-auto-external')

module.exports.inputOpts = function(tsconfig) {
  return {
    inlineDynamicImports: true,
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
        tsconfigOverride: tsconfig,
        transformers: [service => transformPaths(service.getProgram())],
        cacheRoot: path.resolve(__dirname, '..', '.tscache')
      })
    ]
  }
}

module.exports.outputOpts = {
  format: 'cjs'
}
