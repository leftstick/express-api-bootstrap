const express = require('express')
const { resolve } = require('path')
const { withExpressApp } = require('../')

const app = express()

withExpressApp(app)({
  scanOpts: {
    cwd: resolve(__dirname, 'apis'),
    pattern: '**/*.js',
    ignore: ['**/_*.js']
  },
  apiPrefix: '/apis',
  logger: {
    info: console.dir
  },
  responseHandler: {
    onNormalResponse(data) {
      return {
        data,
        success: true
      }
    }
  }
})

app.listen(9876, () => {
  console.log('server running at 9876')
})
