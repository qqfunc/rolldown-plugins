import fs from 'node:fs'
import type { Plugin } from 'rolldown'

export default function (path?: string): Plugin {
  return {
    name: 'clean',
    generateBundle(options) {
      path = path ?? options.dir ?? options.file
      if (typeof path === 'string') {
        fs.rmSync(path, { force: true, recursive: true })
      }
    },
  }
}
