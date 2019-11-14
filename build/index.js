const cli = require('./cli')
const api = require('./api')

Promise.all([cli(), api()])
