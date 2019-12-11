process.env.NODE_ENV = 'development'
require('../../../build/babel/registerBabel')()
require('reflect-metadata')
const { Container } = require('typedi')
const express = require('express')
const { ___internal } = require('../../../libs')

const { PluginRunner, ExpressToken } = ___internal

const app = express()

Container.set(ExpressToken, app)

PluginRunner.getInstance(app).run()
