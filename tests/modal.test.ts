import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import UiModal from '@/components/ui/UiModal.vue'
import { lockModal, unlockModal } from '@/utils/modal-lock'

const wrappers: ReturnType<typeof mount>[] = []
afterEach(() => { wrappers.forEach(w => w.unmount()); wrappers.length = 0; document.body.innerHTML = ''; vi.restoreAllMocks() })
const settle = async () => { await nextTick(); await new Promise(resolve => setTimeout(resolve, 60)) }

function setup() {
  document.body.innerHTML = '<div id="app"></div>'
  vi.spyOn(HTMLElement.prototype, 'getClientRects').mockReturnValue([{}] as unknown as DOMRectList)
  const host = defineComponent({
    components: { UiModal },
    data: () => ({ open: false }),
    template: '<button id="opener" @click="open=true">Open</button><UiModal v-model="open" label="Test"><button id="first">First</button><input id="last" /></UiModal>'
  })
  const wrapper = mount(host, { attachTo: '#app', global: { stubs: { transition: false } } })
  wrappers.push(wrapper)
  return wrapper
}

describe('modal interaction', () => {
  it('locks the page, moves focus, closes with Escape and returns focus', async () => {
    const wrapper = setup()
    const opener = document.querySelector<HTMLButtonElement>('#opener')!
    opener.focus(); await wrapper.get('#opener').trigger('click'); await settle()
    const dialog = document.querySelector<HTMLElement>('[role="dialog"]')!
    expect(document.activeElement).toBe(dialog)
    expect(document.body.style.overflow).toBe('hidden')
    expect(document.querySelector<HTMLElement>('#app')!.inert).toBe(true)
    dialog.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    await settle()
    expect(document.querySelector('[role="dialog"]')).toBeNull()
    expect(document.body.style.overflow).toBe('')
    expect(document.activeElement).toBe(opener)
  })

  it('wraps Tab and Shift+Tab inside the dialog', async () => {
    const wrapper = setup(); await wrapper.get('#opener').trigger('click'); await settle()
    const first = document.querySelector<HTMLElement>('#first')!
    const last = document.querySelector<HTMLElement>('#last')!
    last.focus(); last.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true }))
    expect(document.activeElement).toBe(first)
    first.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true, cancelable: true }))
    expect(document.activeElement).toBe(last)
  })

  it('restores the original scroll state when unmounted while open', async () => {
    const wrapper = setup(); document.body.style.overflow = 'clip'
    await wrapper.get('#opener').trigger('click'); await settle(); wrapper.unmount(); wrappers.pop()
    expect(document.body.style.overflow).toBe('clip')
    expect(document.querySelector<HTMLElement>('#app')!.inert).toBe(false)
    document.body.style.overflow = ''
  })

  it('keeps scrolling locked until the last dialog releases it', () => {
    const one = Symbol(), two = Symbol()
    lockModal(one); lockModal(two); unlockModal(one)
    expect(document.body.style.overflow).toBe('hidden')
    unlockModal(two)
    expect(document.body.style.overflow).toBe('')
  })
})
