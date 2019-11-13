import '@/src/core/babel/registerBabel'

import { join } from 'path'

import { getRawUserConfig } from '@/src/core/env/userConfigReader'

console.log('config', getRawUserConfig())
