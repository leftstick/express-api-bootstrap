export enum LifecycleEnum {
  PROCESS_SHUTDOWN = 'PROCESS_SHUTDOWN'
}

export enum PluginOrderEnum {
  BEFORE_API_INIT = 'BEFORE_API_INIT',
  API_INIT = 'API_INIT',
  AFTER_API_INIT = 'AFTER_API_INIT'
}

export enum InternalPluginOrderEnum {
  FIRST_STAGE = 'FIRST_STAGE',
  FINAL_STAGE = 'FINAL_STAGE'
}
