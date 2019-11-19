declare module NodeJS {
  export interface Global {
    toFixturesDir(...args: string[]): string
    removeCwd(...filePaths: string[]): string[]
  }
}
