import express from 'express'

import { PluginOrderEnum } from '@/src/core/app/lifecycle'

export interface IPluginFactory {
  (opts: any): IPlugin
}

export interface IPlugin {
  namespace: string
  order: PluginOrderEnum
  configHandler<T>(config: T): T
  pluginHandler<T>(app: express.Express, config: T): any
}
