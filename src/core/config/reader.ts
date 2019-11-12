import { join } from 'path'

import { cwd } from '@/src/core/env'

export function getUserConfig() {
  // tslint:disable-next-line: non-literal-require
  return require(join(cwd(), '.bootrc.ts'))
}
