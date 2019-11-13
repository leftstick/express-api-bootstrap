import express from 'express'
import plugins from '@/src/plugins'
import { lifecycleHook, LifecycleEnum } from '@/src/core/app/lifecycle'

export default function(app: express.Express) {
  const config = plugins.reduce((p, c) => {
    return {
      ...p,
      ...c.configHandler(p)
    }
  }, Object.assign({}, rawConfig))

  lifecycleHook.when(LifecycleEnum.AFTER_API_INIT, () => {
    plugins
      .filter(plugin => plugin.order === LifecycleEnum.AFTER_API_INIT)
      .forEach(plugin => {
        plugin.pluginHandler(app, config)
      })
  })
}
