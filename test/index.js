const express = require('express')
const { resolve } = require('path')
const { withExpressApp } = require('../')

const app = express()

const test4 = 1

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
  },
  middleware: [
    {
      func: test1,
      match: ['/match', '/ignore'],
      ignore: 123123
    },
    {
      func: test2,
      ignore: ['/ignore']
    },
    test3,
    test4
  ]
})

app.listen(9876, () => {
  console.log('server running at 9876')
})

function test1(req, res, next) {
  console.log('中间件  test1 match ')
  next()
}

function test2(req, res, next) {
  console.log('中间件 test2 ignore')
  next()
}

function test3(req, res, next) {
  console.log('全局 test3 ')
  next()
}
