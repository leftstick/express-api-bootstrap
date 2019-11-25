export interface IPluginType {
  /**
   * server configuration
   */
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
  /**
   * Indicates the app is behind a front-facing proxy, and to
   * use the X-Forwarded-* headers to determine the connection
   * and the IP address of the client.
   *
   * Default is false
   */
  trustProxy?: boolean
}
