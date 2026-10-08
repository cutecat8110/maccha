import { afterEach, describe, expect, it, vi } from 'vitest'
import router from '@/router'

const originalFonts = Object.getOwnPropertyDescriptor(document, 'fonts')
afterEach(() => {
  document.body.innerHTML = ''
  if (originalFonts) Object.defineProperty(document, 'fonts', originalFonts)
  else Reflect.deleteProperty(document, 'fonts')
  vi.unstubAllGlobals()
})

describe('page scroll restoration', () => {
  it('waits for font layout before restoring a saved position', async () => {
    let ready!: () => void
    const fontsReady = new Promise<void>(resolve => { ready = resolve })
    Object.defineProperty(document, 'fonts', { configurable: true, value: { ready: fontsReady } })
    const saved = { left: 0, top: 4381 }
    let settled = false
    const result = Promise.resolve(router.options.scrollBehavior!(router.resolve('/#news'), router.resolve('/'), saved))
      .then(value => { settled = true; return value })
    await Promise.resolve()
    expect(settled).toBe(false)
    ready()
    expect(await result).toEqual(saved)
  })

  it.each([[768, 64], [992, 80]])('positions anchors below the fixed header at %ipx', async (width, top) => {
    vi.stubGlobal('innerWidth', width)
    document.body.innerHTML = '<section id="news"></section>'
    const result = await router.options.scrollBehavior!(router.resolve('/#news'), router.resolve('/'), null)
    expect(result).toEqual({ el: '#news', top })
  })
})
