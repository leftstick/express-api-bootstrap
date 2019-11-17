import express from 'express'
import signale from 'signale'
import { join } from 'path'

import { PluginOrderEnum, InternalPluginOrderEnum } from '@/src/core/plugin/pluginType'
import { cwd, ProcessCtrl } from '@/src/core/env'
import { isArray, isEmpty } from '@/src/core/helper/object'

import cors from '@/src/plugins/cors'
import api from '@/src/plugins/api'
import server from '@/src/plugins/server'
import watcher from '@/src/plugins/watcher'

import { IPlugin } from '@/src/core/plugin/pluginType'
import { getRawUserConfig } from '@/src/core/env/userConfigReader'

const rawConfig = getRawUserConfig()

interface IPluginDef {
  module: (...args: any) => IPlugin
  options: any
}

const internalPlugins = [cors(), watcher(), api(), server()]

export function getExternalPlugins() {
  const factories = getExternalPluginFactories()
  return factories.map(factory => {
    return factory.module(factory.options)
  })
}

export function getExternalPluginFactories() {
  if (!isArray(rawConfig.plugins)) {
    return []
  }

  if (hasIncorrectPlugin(rawConfig.plugins)) {
    signale.error('incorrect plugin configured')
    ProcessCtrl.stop()
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
          module: mod.default || mod,
          options: mp.options
        }
      } catch (error) {
        return null
      }
    })
    .filter((mod): mod is IPluginDef => !!mod)
}

const plugins = [...internalPlugins, ...getExternalPlugins()]

export const userConfig = plugins.reduce((p, c) => {
  return {
    ...p,
    ...c.configHandler(p)
  }
}, Object.assign({}, rawConfig))

async function execPlugins(order: PluginOrderEnum | InternalPluginOrderEnum, app: express.Express) {
  const getPlugins = plugins.filter(p => p.order === order)
  await Promise.all(getPlugins.map(p => p.pluginHandler(app, Object.assign({}, userConfig)) || Promise.resolve()))
  return undefined
}

export const pluginRunner = {
  async firstStage(app: express.Express): Promise<void> {
    return execPlugins(InternalPluginOrderEnum.FIRST_STAGE, app)
  },
  async beforeApiInit(app: express.Express): Promise<void> {
    return execPlugins(PluginOrderEnum.BEFORE_API_INIT, app)
  },
  async apiInit(app: express.Express): Promise<void> {
    return execPlugins(PluginOrderEnum.API_INIT, app)
  },
  async afterApiInit(app: express.Express): Promise<void> {
    return execPlugins(PluginOrderEnum.AFTER_API_INIT, app)
  },
  async lastStage(app: express.Express): Promise<void> {
    return execPlugins(InternalPluginOrderEnum.FINAL_STAGE, app)
  }
}
