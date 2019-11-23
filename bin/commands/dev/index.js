const { fork } = require('child_process')
const signale = require('signale')

const { diffTsConfig } = require('../../helper/tsconfigTool')

const usedPorts = []

function start(scriptPath) {
  const execArgv = process.execArgv.slice(0)
  const inspectArgvIndex = execArgv.findIndex(argv => argv.includes('--inspect-brk'))

  if (inspectArgvIndex > -1) {
    const inspectArgv = execArgv[inspectArgvIndex]
    execArgv.splice(
      inspectArgvIndex,
      1,
      inspectArgv.replace(/--inspect-brk=(.*)/, (match, s1) => {
        let port
        try {
          port = parseInt(s1) + 1
        } catch (e) {
          port = 9230 // node default inspect port plus 1.
        }
        if (usedPorts.includes(port)) {
          port += 1
        }
        usedPorts.push(port)
        return `--inspect-brk=${port}`
      })
    )
  }

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
