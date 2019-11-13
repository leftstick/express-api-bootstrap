import express from 'express'
import { lifecycleHook, LifecycleEnum } from '@/src/core/app/lifecycle'
import pluginRunner from '@/src/core/app/runnter/pluginRunner'

export default function() {
  const app = express()

  pluginRunner(app)
  lifecycleHook.fire(LifecycleEnum.BEFORE_API_INIT, app)
  lifecycleHook.fire(LifecycleEnum.AFTER_API_INIT, app)
  lifecycleHook.fire(LifecycleEnum.FINAL_STAGE, app)
}
