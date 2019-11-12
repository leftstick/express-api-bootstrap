import program from 'commander'
import updater from 'update-notifier'
import pkg from '@/package.json'

import commands from '@/src/commands'

// Notify update when process exits
updater({ pkg }).notify({ defer: true })

commands.forEach(cmd => {
  program
    .command(cmd.cmd)
    .description(cmd.description)
    .action(cmd.action)
})

program.parse(process.argv)
