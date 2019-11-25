import { resolve } from 'path'
import { existsSync } from 'fs'
import { isEmpty } from '@/src/core/helper/object'

export function cwd() {
  return process.cwd()
}

export function getProjectBaseRoot() {
  if (process.env.NODE_ENV === 'development') {
    return resolve(cwd(), 'src')
  }
  if (existsSync(resolve(cwd(), 'dist', 'src'))) {
    return resolve(cwd(), 'dist', 'src')
  }
  return resolve(cwd(), 'dist')
}

export const ProcessCtrl = {
  stop() {
    if (isEmpty(process.send)) {
      return
    }
    process.send({
      type: ProcessSingle.STOP
    })
  },
  restart(msg: string) {
    if (isEmpty(process.send)) {
      return
    }
    process.send({
      type: ProcessSingle.RESTART,
      data: msg
    })
  }
}

export enum ProcessSingle {
  STOP = 'STOP',
  RESTART = 'RESTART'
}
