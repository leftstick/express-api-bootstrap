const express = require('express')
const { resolve } = require('path')
const { withExpressApp, withCors } = require('../')

const app = express()

withCors(app)

withExpressApp(app)({
  scanOpts: {
    cwd: resolve(__dirname, 'apis'),
    pattern: '**/*.js',
    ignore: ['**/_*.js']
  },
  apiPrefix: '/apis'
})

app.listen(9876, () => {
  console.log('server running at 9876')
})
