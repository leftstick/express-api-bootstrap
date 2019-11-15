import { ICommand } from '@/src/commands/ICommand'

export default <ICommand>{
  cmd: 'dev',
  description: 'Launch application in debug mode',
  action() {
    process.env.NODE_ENV = 'development'
    import('@/src/commands/dev/realDev')
  }
}
