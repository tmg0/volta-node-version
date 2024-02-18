#!/usr/bin/env node
import { defineCommand, runMain, runCommand } from 'citty'
import { consola } from 'consola'
import { description, name, version } from '../package.json'
import dev from './commands/dev'

const main = defineCommand({
  meta: { name, version, description },
  subCommands: { dev },
  setup () {
    consola.info('on setup main')
    consola.info(`Current version of Node.js (${process.versions.node}) `)
    runCommand(dev, { rawArgs: [] })
  }
})

runMain(main)
