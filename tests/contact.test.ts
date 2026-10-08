import { afterEach, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { defineComponent, nextTick } from 'vue'
import { Field, Form, ErrorMessage, defineRule } from 'vee-validate'
import { required, email } from '@vee-validate/rules'
import dayjs from 'dayjs'
import ContactUs from '@/components/ContactUs.vue'

defineRule('required', required); defineRule('email', email)
let wrapper: ReturnType<typeof mount> | undefined
afterEach(() => { wrapper?.unmount(); document.body.innerHTML = ''; vi.restoreAllMocks() })
async function setup() {
  document.body.innerHTML = '<div id="app"></div>'
  wrapper = mount(ContactUs, { attachTo: '#app', global: {
    components: { VField: Field, VForm: Form, ErrorMessage, VDatePicker: defineComponent({ template: '<div><slot inputValue="" :inputEvents="{}" /></div>' }) },
    mocks: { $dayjs: dayjs }, stubs: { transition: false }
  } })
  await wrapper.get('button').trigger('click'); await nextTick(); await flushPromises()
}
async function submit() {
  document.querySelector('form')!.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
  await flushPromises(); await new Promise(resolve => setTimeout(resolve, 70)); await flushPromises()
}
async function fill(id: string, value: string) {
  const element = document.getElementById(id) as HTMLInputElement
  element.value = value
  element.dispatchEvent(new Event('input', { bubbles: true }))
  element.dispatchEvent(new Event('change', { bubbles: true }))
  await flushPromises()
}

it('keeps invalid submission open and focuses the first required field', async () => {
  await setup(); await submit()
  expect(document.querySelector('[role="dialog"]')).not.toBeNull()
  expect(document.activeElement?.id).toBe('shop')
  expect(document.querySelectorAll('.error-message').length).toBe(4)
})

it('rejects an invalid email and preserves the original valid-submit close behavior', async () => {
  await setup(); await fill('shop', '本店'); await fill('phone', '0900000000'); await fill('comments', 'QA 測試'); await fill('email', 'bad')
  await submit(); expect(document.querySelector('[role="dialog"]')).not.toBeNull()
  await fill('email', 'qa@example.com'); await submit()
  expect(document.querySelector('[role="dialog"]')).toBeNull()
  expect(document.body.style.overflow).toBe('')
})

it('clears the previous form and errors when closed and reopened', async () => {
  await setup(); await fill('name', 'QA'); await submit()
  document.querySelector('[role="dialog"]')!.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
  await new Promise(resolve => setTimeout(resolve, 60)); await nextTick()
  await wrapper!.get('button').trigger('click'); await flushPromises()
  expect((document.getElementById('name') as HTMLInputElement).value).toBe('')
  expect(document.querySelectorAll('.error-message').length).toBe(0)
})
