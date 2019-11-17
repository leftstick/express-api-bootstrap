const { fork } = require('child_process')
const signale = require('signale')

module.exports = function start(scriptPath) {
  const execArgv = process.execArgv.slice(0)

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
