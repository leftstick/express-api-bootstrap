export interface ICommand {
  cmd: string
  description: string
  action: IAction
}

interface IAction {
  (args: any): void
}
