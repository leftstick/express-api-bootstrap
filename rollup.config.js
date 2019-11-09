import path from 'path'
import json from 'rollup-plugin-json'
import typescript from 'rollup-plugin-typescript2'
import autoExternal from 'rollup-plugin-auto-external'
import pkg from './package.json'

export default {
  input: 'src/index.ts', // our source file
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      banner: '#!/usr/bin/env node'
    }
  ],
  plugins: [
    autoExternal({
      builtins: true,
      dependencies: true,
      packagePath: path.resolve(__dirname, 'package.json'),
      peerDependencies: true
    }),
    json(),
    typescript({
      typescript: require('typescript')
    })
  ]
}
