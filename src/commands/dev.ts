import { defineCommand } from 'citty'
import { consola } from 'consola'

export default defineCommand({
  meta: { name: 'dev' },
  run () {
    consola.info('on run dev')
    consola.info(`Current version of Node.js (${process.versions.node}) `)
  }
})
