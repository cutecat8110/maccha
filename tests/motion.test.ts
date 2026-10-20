import { afterEach, expect, it, vi } from 'vitest'
import { defineComponent, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import Enjoy from '@/views/Home/components/Enjoy.vue'
import UiScrollTop from '@/components/ui/UiScrollTop.vue'

const preference = ref<'reduce' | 'no-preference'>('reduce')
vi.mock('@vueuse/core', async (importOriginal) => ({
  ...await importOriginal<typeof import('@vueuse/core')>(),
  usePreferredReducedMotion: () => preference,
  useWindowScroll: () => ({ y: ref(1000) }),
  useWindowSize: () => ({ height: ref(800) })
}))
afterEach(() => { preference.value = 'reduce'; vi.restoreAllMocks() })

it('stops automatic photos for reduced motion, follows preference changes and keeps manual slides available', async () => {
  const Swiper = defineComponent({ name: 'Swiper', props: ['speed'], template: '<div><slot /></div>' })
  const wrapper = mount(Enjoy, { global: { stubs: { Swiper, SwiperSlide: { template: '<div><slot /></div>' } } } })
  const api = { realIndex: 0, autoplay: { stop: vi.fn(), start: vi.fn() }, destroyed: false }
  const slider = wrapper.findComponent(Swiper)
  slider.vm.$emit('swiper', api); await nextTick()
  expect(api.autoplay.stop).toHaveBeenCalledOnce()
  expect(slider.props('speed')).toBe(0)
  slider.vm.$emit('slideChange', { ...api, realIndex: 1 }); await nextTick()
  expect(wrapper.text()).toContain('02.')
  preference.value = 'no-preference'; await nextTick()
  expect(api.autoplay.start).toHaveBeenCalledOnce()
  expect(slider.props('speed')).toBe(300)
  preference.value = 'reduce'; await nextTick()
  expect(api.autoplay.stop).toHaveBeenCalledTimes(2)
  wrapper.unmount()
})

it('returns to the top without smooth motion when requested', async () => {
  const scroll = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
  const wrapper = mount(UiScrollTop)
  await wrapper.get('[aria-label="回到頂端"]').trigger('click')
  expect(scroll).toHaveBeenLastCalledWith({ top: 0, behavior: 'auto' })
  preference.value = 'no-preference'; await nextTick()
  await wrapper.get('[aria-label="回到頂端"]').trigger('click')
  expect(scroll).toHaveBeenLastCalledWith({ top: 0, behavior: 'smooth' })
  wrapper.unmount()
})
