const path = require('path')

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
  extensions: ['.ts'],
  only: [path.resolve(process.cwd(), '.bootrc.ts')],
  babelrc: false,
  cache: false
})
