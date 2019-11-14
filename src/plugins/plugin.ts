import express from 'express'

import { PluginOrderEnum, InternalPluginOrderEnum } from '@/src/core/env/lifecycle'

export interface IPluginFactory {
  (opts: any): IPlugin
}

export interface IPlugin {
  namespace: string
  order: PluginOrderEnum & InternalPluginOrderEnum
  configHandler<T>(config: T): T
  pluginHandler<T>(app: express.Express, config: T): Promise<void> | undefined
}
