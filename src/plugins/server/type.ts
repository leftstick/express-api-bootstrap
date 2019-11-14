export interface IPluginType {
  server?: IServerConfig
}

interface IServerConfig {
  /**
   * port will be used to launch the API server.
   *
   * Default is: 8080
   */
  port?: number
  /**
   * Files to be served in this directory. Default is: /public/
   *
   * Or false to disable this feature
   */
  staticDir?: string | false
}
