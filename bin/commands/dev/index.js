module.exports = {
  cmd: 'dev',
  description: 'Launch application in debug mode',
  action() {
    process.env.NODE_ENV = 'development'
    require('./realDev')
  }
}
