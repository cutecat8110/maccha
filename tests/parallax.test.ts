import { afterEach, expect, it, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'

afterEach(() => { vi.restoreAllMocks(); vi.unstubAllGlobals() })

it('creates parallax only for the motion-safe preference and releases its media context', async () => {
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
  const queries: Array<{ media: string; matches: boolean; listeners: Array<() => void>; addListener: (fn: () => void) => void; removeListener: (fn: () => void) => void }> = []
  vi.stubGlobal('matchMedia', (media: string) => {
    const existing = queries.find(query => query.media === media)
    if (existing) return existing
    const query = {
      media, matches: false, listeners: [] as Array<() => void>,
      addListener(fn: () => void) { this.listeners.push(fn) },
      removeListener(fn: () => void) { this.listeners = this.listeners.filter(listener => listener !== fn) },
      addEventListener(_event: string, fn: () => void) { this.listeners.push(fn) },
      removeEventListener(_event: string, fn: () => void) { this.removeListener(fn) }
    }
    queries.push(query)
    return query
  })
  const { gsap } = await import('gsap')
  const { default: LoungeImg } = await import('@/views/Home/components/LoungeImg.vue')
  const animate = vi.spyOn(gsap, 'fromTo')
  const wrapper = mount(LoungeImg, { props: { index: 0, image: '/fixture.webp' } })
  await flushPromises()
  expect(animate).not.toHaveBeenCalled()
  const query = queries.find(item => item.media === '(prefers-reduced-motion: no-preference)')!
  expect(query).toBeDefined()
  query.matches = true
  gsap.matchMediaRefresh()
  await flushPromises()
  expect(animate).toHaveBeenCalledTimes(3)
  query.matches = false
  gsap.matchMediaRefresh()
  await flushPromises()
  expect(wrapper.findAll('span').every(span => !span.element.style.transform)).toBe(true)
  wrapper.unmount()
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  ScrollTrigger.disable()
})
