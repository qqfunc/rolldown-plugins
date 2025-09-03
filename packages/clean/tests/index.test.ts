import { describe, it } from 'vitest'
import { rolldown } from 'rolldown'
import clean from '../dist/index.js'

describe.concurrent('test ', () => {
  it('', async () => {
    await rolldown({
      input: 'src/index.ts',
      plugins: [clean()],
    })
  })
})
