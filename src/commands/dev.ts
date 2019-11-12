import { ICommand } from '@/src/commands/ICommand'

export default <ICommand>{
  cmd: 'dev',
  description: 'Launch application in debug mode',
  action() {
    console.log('fucn you')
  }
}
