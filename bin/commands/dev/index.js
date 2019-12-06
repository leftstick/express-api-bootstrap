const { fork } = require('child_process')
const signale = require('signale')

const { diffTsConfig } = require('../../helper/tsconfigTool')
const { getExecArgs } = require('../../helper/inspect')

function start(scriptPath) {
  const execArgv = getExecArgs(process.execArgv.slice(0))

  const child = fork(scriptPath, process.argv.slice(2), { execArgv })

  child.on('message', data => {
    const type = (data && data.type) || null
    if (type === 'RESTART') {
      signale.warn(`${data.data || ''}, server will be restarted`)
      child.kill()
      start(scriptPath)
      return
    }
    if (type === 'STOP') {
      child.kill()
      return
    }
  })

  return child
}

module.exports = {
  cmd: 'dev',
  description: 'Launch application in debug mode',
  options: [],
  action() {
    const compareResult = diffTsConfig()
    if ('NO_TSCONFIG_PROVIDED' === compareResult) {
      return signale.warn('tsconfig.json not found, use `boot init` first')
    } else if (compareResult) {
      signale.warn('tsconfig.json you provided has something different as it should be, see blow:')
      console.log(compareResult)
      return signale.warn(
        'you have to change it back first, otherwise `boot dev/build/serve` may not working as expected'
      )
    }

    start(require.resolve('./realDev'))
  }
}
