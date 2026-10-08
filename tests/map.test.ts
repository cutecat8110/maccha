import { afterEach, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import Lounge from '@/views/Home/components/Lounge.vue'

const mocks = vi.hoisted(() => ({ load: vi.fn(), map: vi.fn() }))
vi.mock('@googlemaps/js-api-loader', () => ({ Loader: class { importLibrary = mocks.load } }))
afterEach(() => { vi.unstubAllEnvs(); vi.clearAllMocks() })
const create = () => mount(Lounge, { global: { stubs: { LoungeImg: true } } })

it('shows usable map links when no browser map key is configured', async () => {
  vi.stubEnv('VITE_API_KEY', '')
  const wrapper = create(); await flushPromises()
  expect(wrapper.text()).toContain('地圖暫時無法載入')
  expect(wrapper.findAll('a[href*="google.com/maps/search"]').length).toBe(2)
  expect(mocks.load).not.toHaveBeenCalled(); wrapper.unmount()
})

it('handles a rejected map SDK request without an unhandled error', async () => {
  vi.stubEnv('VITE_API_KEY', 'fixture-key'); mocks.load.mockRejectedValueOnce(new Error('offline'))
  const wrapper = create(); await flushPromises()
  expect(wrapper.text()).toContain('地圖暫時無法載入'); wrapper.unmount()
})

it('does not create maps when the SDK resolves after the view was removed', async () => {
  vi.stubEnv('VITE_API_KEY', 'fixture-key')
  let resolve!: (value: unknown) => void
  mocks.load.mockReturnValueOnce(new Promise(done => { resolve = done }))
  const wrapper = create(); wrapper.unmount(); resolve({ Map: mocks.map }); await flushPromises()
  expect(mocks.map).not.toHaveBeenCalled()
})
