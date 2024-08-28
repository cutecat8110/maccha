<template>
  <UiButton state="outline" @click="toggleContactUs(true)">
    contact us
    <template #trailing>
      <SvgMail />
    </template>
  </UiButton>

  <!-- mobile．聯絡我們 -->
  <UiModal v-model="isContactUsOpen">
    <div class="flex min-h-full items-center py-20 text-white">
      <Teleport to="body">
        <UiButton
          class="link-base fixed right-4 top-4 z-[61] text-white"
          state="icon"
          @click="toggleContactUs(false)"
        >
          <SvgClose class="text-icon-close" />
        </UiButton>
      </Teleport>

      <VForm v-slot="{ errors, validate }" as="">
        <form class="w-full" @submit="submitForm($event, validate)">
          <div class="container flex flex-col items-center gap-y-14">
            <!-- 標題 -->
            <div class="space-y-2 text-center">
              <h2 class="section-title">聯絡我們</h2>
              <p class="section-sub-title text-system-main-400">contact us</p>
            </div>

            <div class="contact-input-wrapper" data-aos="fade-down">
              <!-- 來店日期 -->
              <label for="visitDate"> 來店日期 </label>
              <div class="relative">
                <VDatePicker
                  v-model.string="fromData.visitDate"
                  :masks="{
                    modelValue: 'YYYY/MM/DD'
                  }"
                  :min-date="$dayjs().format('YYYY/MM/DD')"
                >
                  <template #default="{ inputValue, inputEvents }">
                    <VField
                      id="visitDate"
                      v-model.trim="fromData.visitDate"
                      v-on="inputEvents"
                      :class="[
                        errors.visitDate && '!bg-system-danger-600 focus:!text-white',
                        'contact-input'
                      ]"
                      name="visitDate"
                      label=" "
                      type="text"
                      :value="inputValue"
                    />
                  </template>
                </VDatePicker>
              </div>

              <!-- 時段 -->
              <label for="timeSlot"> 時段 </label>
              <div class="relative">
                <VField
                  id="timeSlot"
                  v-model.trim="fromData.timeSlot"
                  :class="[
                    errors.timeSlot && '!bg-system-danger-600 focus:!text-white',
                    'contact-select peer'
                  ]"
                  name="timeSlot"
                  label=" "
                  as="select"
                >
                  <option value="" disabled>請選擇時段</option>
                  <option v-for="(time, index) in timeSlotOptions" :key="index" :value="time">
                    {{ time }}
                  </option>
                </VField>

                <SvgArrow
                  class="contact-select-appearance text-white peer-focus:-scale-x-100 peer-focus:text-system-gray-800"
                />
              </div>

              <!-- 店舖 -->
              <label for="shop">
                店舖
                <div class="required">必填</div>
              </label>

              <div id="shopWrapper" class="relative">
                <VField
                  id="shop"
                  v-model.trim="fromData.shop"
                  :class="[
                    errors.shop && '!bg-system-danger-600 focus:!text-white',
                    'contact-select peer'
                  ]"
                  name="shop"
                  label=" "
                  as="select"
                  rules="required"
                >
                  <option :class="errors.shop && 'bg-system-light text-black'" value="" disabled>
                    請選擇店舖
                  </option>
                  <option
                    v-for="(shop, index) in shopOptions"
                    :key="index"
                    :class="errors.shop && 'bg-system-light text-black'"
                    :value="shop"
                  >
                    {{ shop }}
                  </option>
                </VField>

                <SvgArrow
                  :class="[
                    errors.shop && '!text-white',
                    'contact-select-appearance text-white peer-focus:-scale-x-100 peer-focus:text-system-gray-800'
                  ]"
                />

                <ErrorMessage class="error-message" name="shop" />
              </div>

              <!-- 姓名 -->
              <label for="name"> 姓名 </label>
              <VField
                id="name"
                v-model.trim="fromData.name"
                :class="[errors.name && '!bg-system-danger-600 focus:!text-white', 'contact-input']"
                name="name"
                label=" "
                type="text"
              />

              <!-- 電話 -->
              <label for="phone">
                電話
                <div class="required">必填</div>
              </label>
              <div id="phoneWrapper" class="relative">
                <VField
                  id="phone"
                  v-model.trim="fromData.phone"
                  :class="[
                    errors.phone && '!bg-system-danger-600 focus:!text-white',
                    'contact-input'
                  ]"
                  name="phone"
                  label=" "
                  type="phone"
                  rules="required"
                />
                <ErrorMessage class="error-message" name="phone" />
              </div>

              <!-- 地址 -->
              <label for="address"> 地址 </label>
              <VField
                id="address"
                v-model.trim="fromData.address"
                :class="[
                  errors.address && '!bg-system-danger-600 focus:!text-white',
                  'contact-input'
                ]"
                name="address"
                label=" "
                type="text"
              />

              <!-- E-mail -->
              <label for="email">
                E-mail
                <div class="required">必填</div>
              </label>
              <div id="emailWrapper" class="relative">
                <VField
                  id="email"
                  v-model.trim="fromData.email"
                  :class="[
                    errors.email && '!bg-system-danger-600 focus:!text-white',
                    'contact-input'
                  ]"
                  name="email"
                  label=" "
                  type="text"
                  rules="required|email"
                />
                <ErrorMessage class="error-message" name="email" />
              </div>

              <!-- 意見欄 -->
              <label for="comments">
                意見欄
                <div class="required">必填</div>
              </label>
              <div id="commentsWrapper" class="relative">
                <VField
                  id="comments"
                  v-model.trim="fromData.comments"
                  :class="[
                    errors.comments && '!bg-system-danger-600 focus:!text-white',
                    'contact-textarea'
                  ]"
                  name="comments"
                  label=" "
                  as="textarea"
                  rows="5"
                  rules="required"
                />
                <ErrorMessage class="error-message" name="comments" />
              </div>
            </div>

            <!-- 按鈕．送出 -->
            <div class="flex justify-center pt-10">
              <UiButton
                class="h-12 w-full max-w-60 cursor-pointer rounded-none"
                type="submit"
                state="outline"
              >
                confirmation
                <template #trailing>
                  <SvgMail />
                </template>
              </UiButton>
            </div>
          </div>
        </form>
      </VForm>
    </div>
  </UiModal>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap'

const isContactUsOpen = ref(false)

const toggleContactUs = (event: boolean) => {
  isContactUsOpen.value = event
}

const submitForm = async (event: Event, validate: Function) => {
  event.preventDefault()
  const result = await validate()

  if (!result.valid) {
    Object.keys(result.errors).forEach((i: string) => {
      const elem = document.getElementById(`${i}Wrapper`)
      gsap
        .timeline({ repeat: 1, yoyo: true })
        .to(elem, { x: 1, duration: 0.1 })
        .to(elem, { x: -2, duration: 0.1 })
        .to(elem, { x: 4, duration: 0.1 })
    })
  } else {
    toggleContactUs(false)
  }
}

const fromData = ref({
  visitDate: '',
  timeSlot: '',
  shop: '',
  name: '',
  phone: '',
  address: '',
  email: '',
  comments: ''
})

watchEffect(() => {
  if (isContactUsOpen.value == false) {
    fromData.value = {
      visitDate: '',
      timeSlot: '',
      shop: '',
      name: '',
      phone: '',
      address: '',
      email: '',
      comments: ''
    }
  }
})

const timeSlotOptions = ref([
  '11:00-12:00',
  '12:00-13:00',
  '13:00-14:00',
  '14:00-15:00',
  '15:00-16:00',
  '18:00-19:00',
  '19:00-20:00',
  '20:00-21:00',
  '21:00-22:00',
  '22:00-23:00'
])

const shopOptions = ref(['本店', '文創店'])
</script>

<style lang="scss" scoped>
.contact-input-wrapper {
  @apply grid w-full max-w-[33.75rem] items-center gap-x-10 gap-y-6;
  grid-template-columns: auto 1fr;

  label {
    @apply text-title text-system-gray-50;
  }

  .contact-input {
    @apply h-14 w-full bg-system-gray-600/70 p-6 text-body font-bold outline-none transition-all duration-500 hover:bg-system-gray-400 focus:bg-system-light focus:text-system-gray-800;
  }
  .contact-textarea {
    @apply w-full bg-system-gray-600/70 p-6 text-body font-bold outline-none transition-all duration-500 hover:bg-system-gray-400 focus:bg-system-light focus:text-system-gray-800;
  }

  .contact-select {
    @apply relative h-14 w-full appearance-none bg-system-gray-600/70 px-6 text-body font-bold outline-none transition-all duration-500 hover:bg-system-gray-400 focus:bg-system-light focus:text-system-gray-800;
  }
  .contact-select-appearance {
    @apply pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 rotate-90 text-icon transition-all duration-500;
  }

  .error-message {
    @apply absolute -top-[1.125rem] right-0 block text-end text-tiny font-bold text-system-danger-600;
  }

  .required {
    @apply mt-1 text-sub-title text-system-danger-600;
  }
}
</style>
