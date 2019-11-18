const { join } = require('path')
const cwd = process.cwd()

require('@babel/register')({
  presets: [
    require.resolve('@babel/preset-typescript'),
    [
      require.resolve('babel-preset-umi'),
      {
        env: { targets: { node: 10 } },
        transformRuntime: false
      }
    ]
  ],
  plugins: [require.resolve('./tspath-mapping-plugin')],
  only: [
    filePath => {
      if (filePath === join(cwd, '.bootrc.ts')) {
        return true
      }
      if (filePath.startsWith(join(cwd, 'dist'))) {
        return true
      }
      return filePath.includes('express-api-bootstrap/types')
    }
  ],
  extensions: ['.ts', '.js'],
  babelrc: false,
  cache: false
})
