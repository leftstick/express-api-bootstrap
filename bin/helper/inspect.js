/**
 * @param rawExecArgs {Array<string>}
 */
module.exports.getExecArgs = function(rawExecArgs) {
  const inspectArgvIndex = rawExecArgs.findIndex(argv => argv.includes('--inspect-brk'))
  if (inspectArgvIndex < 0) {
    return null
  }

  return rawExecArgs.map((arg, i) => {
    if (i !== inspectArgvIndex) {
      return arg
    }
    return arg.replace(/--inspect-brk=(.*)/, (match, s1) => {
      let port
      try {
        port = parseInt(s1) + 1
      } catch (e) {
        port = 9230 // node default inspect port plus 1.
      }
      return `--inspect-brk=${port}`
    })
  })
}
