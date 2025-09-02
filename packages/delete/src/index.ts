import fs from 'node:fs'
import type { Plugin } from 'rolldown'

export default function (dir: string | undefined): Plugin {
  return {
    name: 'delete',
    generateBundle(options) {
      const path = dir ?? options.dir
      if (typeof path === 'string') {
        fs.rmSync(path, { force: true, recursive: true })
      }
    },
  }
}
