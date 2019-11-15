import { resolve } from 'path'

export function cwd() {
  return process.cwd()
}

export function getProjectBaseRoot() {
  if (process.env.NODE_ENV === 'development') {
    return resolve(cwd(), 'src')
  }
  return resolve(cwd(), 'dist')
}
