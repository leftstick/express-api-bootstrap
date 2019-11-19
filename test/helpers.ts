import path from 'path'

global.toFixturesDir = (...args: string[]) => {
  return path.resolve(__dirname, 'fixtures', ...args)
}

global.removeCwd = (...filePaths: string[]) => {
  return filePaths.map(f => f.replace(process.cwd(), ''))
}
