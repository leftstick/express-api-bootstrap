import '@/src/core/babel/registerBabel'
import signale from 'signale'

import { join } from 'path'

import { cwd } from '@/src/core/env'

export function getRawUserConfig(): { [index: string]: any } {
  try {
    // tslint:disable-next-line: non-literal-require
    return require(join(cwd(), '.bootrc.ts'))
  } catch (error) {
    signale.warn('.bootrc.ts not found, preset config used')
    return {}
  }
}
