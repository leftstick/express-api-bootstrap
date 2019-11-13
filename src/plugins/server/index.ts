import express from 'express'
import signale from 'signale'
import os from 'os'
import { isEmpty } from '@/src/core/helper/object'
import { PluginOrderEnum } from '@/src/core/app/lifecycle'
import { IPluginType } from '@/src/plugins/server/type'
import { IPlugin } from '@/src/plugins/plugin'

export default () => {
  return <IPlugin>{
    namespace: 'server',
    order: PluginOrderEnum.FINAL_STAGE,
    configHandler(config: IPluginType): IPluginType {
      if (isEmpty(config) || isEmpty(config.server)) {
        return {
          server: {
            port: 8080
          }
        }
      }

      return {
        server: {
          port: config.server.port
        }
      }
    },
    pluginHandler(app: express.Express, config: IPluginType) {
      if (isEmpty(config) || isEmpty(config.server) || isEmpty(config.server.port)) {
        signale.error('No server config found')
        return
      }
      const { port } = config.server

      app.listen(port, '0.0.0.0', () => {
        signale.success('App running at:')

        getIpAddresses().forEach(ip => {
          signale.info(`http://${ip}:${port}`)
        })
      })
    }
  }
}

function getIpAddresses() {
  const ifaces = os.networkInterfaces()

  return Object.values(ifaces)
    .reduce((p, c) => p.concat(c), [])
    .filter(iface => iface.family === 'IPv4')
    .map(iface => iface.address)
}
