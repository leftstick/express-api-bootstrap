import { join } from 'path'

import { cwd } from '@/src/core/env'

require('@babel/register')({
  presets: [
    require.resolve('@babel/preset-typescript'),
    [
      require.resolve('babel-preset-umi'),
      {
        env: { targets: { node: 8 } },
        transformRuntime: false
      }
    ]
  ],
  ignore: [/node_modules/],
  only: [join(cwd(), '.bootrc.ts')],
  extensions: ['.ts'],
  babelrc: false,
  cache: false
})
