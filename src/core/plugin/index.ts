import express from 'express'
import signale from 'signale'
import { join } from 'path'

import { PluginOrderEnum, InternalPluginOrderEnum } from '@/src/core/plugin/pluginType'
import { cwd, ProcessCtrl } from '@/src/core/env'
import { isArray, isEmpty } from '@/src/core/helper/object'

import cors from '@/src/plugins/cors'
import api from '@/src/plugins/api'
import requestParser from '@/src/plugins/requestParser'
import server from '@/src/plugins/server'
import watcher from '@/src/plugins/watcher'

import { IPlugin } from '@/src/core/plugin/pluginType'
import { getRawUserConfig, IConfig } from '@/src/core/env/userConfigReader'

interface IPluginDef {
  module: (...args: any) => IPlugin
  options: any
}

export function getExternalPlugins(rawConfig: IConfig) {
  const factories = getExternalPluginFactories(rawConfig)
  return factories.map(factory => {
    return factory.module(factory.options)
  })
}

function getExternalPluginFactories(rawConfig: IConfig) {
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
    ...plugins.map(plugin => ({ mp: join(cwd(), 'plugins', plugin.name), options: plugin.options })),
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

export class PluginRunner {
  private static instance: PluginRunner

  private app: express.Express
  private plugins: IPlugin[]
  private userConfig: IConfig

  private constructor(app: express.Express) {
    this.app = app
    const rawConfig = getRawUserConfig()
    const internalPlugins: IPlugin[] = [cors(), watcher(), requestParser(), api(), server()]

    this.plugins = [...internalPlugins, ...getExternalPlugins(rawConfig)]
    this.userConfig = this.plugins.reduce((p, c) => {
      return {
        ...p,
        ...c.configHandler(p)
      }
    }, Object.assign({}, rawConfig))
  }

  static getInstance(app: express.Express): PluginRunner {
    if (!PluginRunner.instance) {
      PluginRunner.instance = new PluginRunner(app)
    }
    return PluginRunner.instance
  }

  getUserConfig() {
    return this.userConfig
  }

  async run() {
    await this.execPlugins(InternalPluginOrderEnum.FIRST_STAGE)
    await this.execPlugins(PluginOrderEnum.BEFORE_API_INIT)
    await this.execPlugins(PluginOrderEnum.API_INIT)
    await this.execPlugins(PluginOrderEnum.AFTER_API_INIT)
    await this.execPlugins(InternalPluginOrderEnum.FINAL_STAGE)
  }

  private async execPlugins(order: PluginOrderEnum | InternalPluginOrderEnum) {
    const getPlugins = this.plugins.filter(p => p.order === order)
    await Promise.all(
      getPlugins.map(p => p.pluginHandler(this.app, Object.assign({}, this.userConfig)) || Promise.resolve())
    )
    return undefined
  }
}
