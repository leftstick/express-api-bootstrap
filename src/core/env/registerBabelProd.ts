import { join } from 'path'
import { cwd } from '@/src/core/env'

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
  only: [join(cwd(), '.bootrc.ts')],
  extensions: ['.ts'],
  babelrc: false,
  cache: false
})
