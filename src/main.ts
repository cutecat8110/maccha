import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination';
import './assets/styles/tailwind.css'

import { createPinia } from 'pinia'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// 全局註冊
app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)

app.use(createPinia())
app.use(router)

app.mount('#app')
