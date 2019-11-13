import '@/src/core/babel/registerBabel'
import signale from 'signale'
import { join } from 'path'

import { cwd } from '@/src/core/env'
import { isArray, isEmpty } from '@/src/core/helper/object'
import { lifecycleHook, LifecycleEnum } from '@/src/core/app/lifecycle'
import cors from '@/src/plugins/cors'
import server from '@/src/plugins/server'
import { getRawUserConfig } from '@/src/core/env/userConfigReader'

const internalPlugins = [cors(), server()]

export function getExternalPlugins() {
  const factories = getExternalPluginFactories()
  return factories.map(factory => {
    return factory.mod(factory.options)
  })
}

export function getExternalPluginFactories() {
  const rawConfig = getRawUserConfig()

  if (!isArray(rawConfig.plugins)) {
    return []
  }

  if (hasIncorrectPlugin(rawConfig.plugins)) {
    signale.error('incorrect plugin configured')
    lifecycleHook.fire(LifecycleEnum.PROCESS_SHUTDOWN)
    return []
  }

  return getExternalPluginModules(rawConfig.plugins)
}

function hasIncorrectPlugin(plugins: any[]) {
  return plugins.some(plugin => isEmpty(plugin) || isEmpty(plugin.name))
}

function getExternalPluginModules(plugins: any[]) {
  const modulePaths = [
    ...plugins.map(plugin => ({ mp: join(cwd(), plugin.name), options: plugin.options })),
    ...plugins.map(plugin => ({ mp: join(cwd(), 'node_modules', plugin.name), options: plugin.options }))
  ]

  return modulePaths
    .map(mp => {
      try {
        // tslint:disable-next-line: non-literal-require
        const mod = require(mp.mp)
        return {
          mod: mod.default || mod,
          options: mp.options
        }
      } catch (error) {
        return null
      }
    })
    .filter((mod): mod is { mod: any; options: any } => !!mod)
}

export default [...internalPlugins, ...getExternalPlugins()]
