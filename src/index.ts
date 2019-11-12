import '@/src/core/babel/registerBabel'

import { join } from 'path'

import { getUserConfig } from '@/src/core/config/reader'

console.log('config', getUserConfig())
