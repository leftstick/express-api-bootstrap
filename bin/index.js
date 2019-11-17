#!/usr/bin/env node

const program = require('commander')
const updater = require('update-notifier')
const pkg = require('../package.json')

const commands = require('./commands')

// Notify update when process exits
updater({ pkg }).notify({ defer: true })

commands.forEach(cmd => {
  program
    .command(cmd.cmd)
    .description(cmd.description)
    .action(cmd.action)
})

program.parse(process.argv)
