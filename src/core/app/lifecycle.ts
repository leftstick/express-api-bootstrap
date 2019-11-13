import EventEmitter from 'events'
import express from 'express'

class LifecycleHook extends EventEmitter {
  when(stage: LifecycleEnum | PluginOrderEnum, cb: IListener): void {
    this.on(stage, cb)
  }

  fire(stage: LifecycleEnum | PluginOrderEnum, app?: express.Express): void {
    this.emit(stage, app)
  }
}

export enum LifecycleEnum {
  PROCESS_SHUTDOWN = 'PROCESS_SHUTDOWN'
}

export enum PluginOrderEnum {
  BEFORE_API_INIT = 'BEFORE_API_INIT',
  AFTER_API_INIT = 'AFTER_API_INIT',
  FINAL_STAGE = 'FINAL_STAGE'
}

export interface IListener {
  (app: express.Express): void
}

export const lifecycleHook = new LifecycleHook()
