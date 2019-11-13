import { ICommand } from '@/src/commands/ICommand'
import run from '@/src/core/app/runnter'

export default <ICommand>{
  cmd: 'dev',
  description: 'Launch application in debug mode',
  action() {
    console.log('fucn you')
    run()
  }
}
