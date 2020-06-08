import express from 'express'
import signale from 'signale'
import os from 'os'
import path from 'path'
import { cwd, ProcessCtrl } from '@/src/core/env'
import { isEmpty, isString } from '@/src/core/helper/object'
import { InternalPluginOrderEnum, IPlugin } from '@/src/core/plugin/pluginType'
import { IPluginType } from '@/src/plugins/server/type'

export default () => {
  return <IPlugin>{
    order: InternalPluginOrderEnum.FINAL_STAGE,
    configHandler(config: IPluginType): IPluginType {
      if (isEmpty(config) || isEmpty(config.server)) {
        return {
          server: {
            port: 8080,
            staticDir: path.resolve(cwd(), 'public'),
            trustProxy: false
          }
        }
      }

      return {
        server: {
          port: isEmpty(config.server.port) ? 8080 : config.server.port,
          staticDir: isEmpty(config.server.staticDir) ? path.resolve(cwd(), 'public') : config.server.staticDir,
          trustProxy: isEmpty(config.server.trustProxy) ? false : config.server.trustProxy
        }
      }
    },
    pluginHandler(app: express.Express, config: IPluginType) {
      if (
        isEmpty(config) ||
        isEmpty(config.server) ||
        isEmpty(config.server.port) ||
        isEmpty(config.server.staticDir) ||
        isEmpty(config.server.trustProxy)
      ) {
        signale.error('No server config found')
        return
      }

      const { port, staticDir } = config.server

      if (isString(staticDir)) {
        app.use(express.static(staticDir))
      }
      if (config.server.trustProxy === true) {
        app.enable('trust proxy')
      }

      return new Promise(resolve => {
        app.listen(port, '0.0.0.0', err => {
          if (err) {
            signale.error(err)
            ProcessCtrl.stop()
            return
          }
          const addresses = getIpAddresses()
          signale.success(`App running at below link${addresses.length > 1 ? 's' : ''}:`)

          addresses.forEach((ip: string) => {
            signale.info(`http://${ip}:${port}${config['api']['prefix']}`)
            resolve()
          })
        })
      })
    }
  }
}

function getIpAddresses() {
  const ifaces = os.networkInterfaces()

  const interfaces = Object.values(ifaces).filter((f): f is os.NetworkInterfaceInfo[] => !!f)

  return interfaces
    .reduce((p, c) => p!.concat(c!), [])
    .filter(iface => iface.family === 'IPv4')
    .map(iface => iface.address)
}
