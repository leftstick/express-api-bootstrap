#!/usr/bin/env node

const program = require('commander')
const updater = require('update-notifier')
const pkg = require('../package.json')

const commands = require('./commands')

// Notify update when process exits
updater({ pkg }).notify({ defer: true })

commands.forEach(cmd => {
  const oneCommand = program
    .command(cmd.cmd)
    .description(cmd.description)
    .action(cmd.action)
  if (cmd.options) {
    cmd.options.forEach(o => {
      oneCommand.option(o.flags, o.description, o.defaultValue)
    })
  }
})

program.parse(process.argv)
