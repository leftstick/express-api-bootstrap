export interface IPluginType {
  /**
   * configuration for api
   */
  api?: IApiConfig
}

interface IApiConfig {
  /**
   * prefix for all APIs. Default is: /apis
   */
  prefix?: string
  successResponseResolver?: (data: any) => any
  failureResponseResolver?: (code: number) => any
}
