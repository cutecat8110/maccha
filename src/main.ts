import './assets/styles/aos.scss'
import './assets/styles/swiper.css'
import './assets/styles/tailwind.css'

/* Vee Validate */
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import { email, min, required } from '@vee-validate/rules'
import { ErrorMessage, Field, Form, configure, defineRule } from 'vee-validate'
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
configure({
  generateMessage: localize({ zh_TW: zhTW }) // 載入繁體中文語系
})
setLocale('zh_TW') // 設定預設語系

/* v-calendar */
import VCalendar from 'v-calendar'
import 'v-calendar/style.css'

import { createPinia } from 'pinia'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { createApp } from 'vue'

import dayjs from '@/plugins/dayjs'

import App from './App.vue'
import router from './router'

const app = createApp(App)

/* 全局註冊 */
app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)
// Vee Validate
app.component('ErrorMessage', ErrorMessage)
app.component('VField', Field)
app.component('VForm', Form)

app.use(VCalendar)

app.use(createPinia())
app.use(router)
app.use(dayjs)

app.mount('#app')
