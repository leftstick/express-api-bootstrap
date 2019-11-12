export enum PluginOrderEnum {
  BEFORE_API_INIT,
  AFTER_API_INIT
}

export interface IPlugin {
  order: PluginOrderEnum
}
