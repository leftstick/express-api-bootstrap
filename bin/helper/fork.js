const { fork } = require('child_process')

module.exports = function start(scriptPath) {
  const execArgv = process.execArgv.slice(0)

  const child = fork(scriptPath, process.argv.slice(2), { execArgv })

  child.on('message', data => {
    const type = (data && data.type) || null
    if (type === 'RESTART') {
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
