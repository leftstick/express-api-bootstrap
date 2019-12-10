import express from 'express'
import { resolve } from 'path'
import chokidar from 'chokidar'
import { cwd, ProcessCtrl } from '@/src/core/env'
import { debounce } from '@/src/core/helper/func'
import { IPlugin, PluginOrderEnum } from '@/src/core/plugin/pluginType'
import { IPluginType } from '@/src/plugins/cors/type'

export default () => {
  return <IPlugin>{
    order: PluginOrderEnum.BEFORE_API_INIT,
    configHandler(config: IPluginType): IPluginType {
      return config
    },
    pluginHandler(app: express.Express, config: IPluginType) {
      if (process.env.NODE_ENV !== 'development') {
        return
      }
      const srcDir = resolve(cwd(), 'src')
      const bootConfigFile = resolve(cwd(), '.bootrc.ts')

      const debounceRestart = debounce((msg: string) => {
        ProcessCtrl.restart(msg)
      }, 800)

      chokidar
        .watch([srcDir, bootConfigFile], { ignoreInitial: true })
        .on('add', path => debounceRestart(`${path} added`))
        .on('addDir', path => debounceRestart(`Dir ${path} added`))
        .on('change', path => debounceRestart(`${path} changed`))
        .on('unlink', path => debounceRestart(`${path} removed`))
        .on('unlinkDir', path => debounceRestart(`Dir ${path} removed`))
    }
  }
}
