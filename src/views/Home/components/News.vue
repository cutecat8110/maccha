<template>
  <section class="common-section-padding bg-system-dark text-white">
    <div class="container relative space-y-10">
      <SvgBamboo class="bamboo-r" />

      <!-- 標題 -->
      <div class="flex items-end gap-4">
        <h2 class="section-title">最新</h2>
        <p class="section-sub-title text-system-main-400">News</p>
      </div>

      <!--  輪播 -->
      <Swiper
        class="hidden overflow-visible md:block"
        :slides-per-view="slidesView"
        :space-between="40"
      >
        <SwiperSlide v-for="(news, index) in newsList" :key="index">
          <!-- <img :src="news.src" :alt="news.alt" />
          <div class="space-y-2 p-6 text-sub-title lg:text-title">
            <p class="text-system-gray-400">
              {{ news.type }}
              <span></span>
              {{ news.date }}
            </p>
            <p class="line-clamp-1">{{ news.content }}</p>
          </div> -->
          <NewsCard :news="news" />
        </SwiperSlide>
      </Swiper>

      <div class="flex flex-col gap-y-6 md:hidden">
        <!-- <div
          v-for="(news, index) in newsList.slice(2)"
          :key="index"
          class="flex flex-col bg-system-gray-800"
        >
          <img class="aspect-video object-cover" :src="news.src" :alt="news.alt" />
          <div class="space-y-2 p-6 text-sub-title">
            <p class="text-system-gray-400">
              {{ news.type }}
              <span></span>
              {{ news.date }}
            </p>
            <p class="line-clamp-1">{{ news.content }}</p>
          </div>
        </div> -->
        <NewsCard v-for="(news, index) in newsList.slice(2)" :key="index" :news="news" />
      </div>

      <div class="flex flex-row-reverse">
        <UiButton href="#enjoy" state="outline" tag="a">
          view all
          <template #trailing>
            <SvgArrow />
          </template>
        </UiButton>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import NewsCard from './NewsCard.vue'

import { useWindowSize } from '@vueuse/core'

const newsList = ref([
  {
    type: '線上',
    src: '/img/news01.jpg',
    alt: '',
    date: '2024.06.01',
    content: '2024年夏季中元禮品特輯已公開！【官方線上商店】'
  },
  {
    type: '線上',
    src: '/img/news02.jpg',
    alt: '',
    date: '2024.06.01',
    content: '2024年父親節禮品已公開！【官方線上商店】'
  },
  {
    type: '新品',
    src: '/img/news03.jpg',
    alt: '',

    date: '2024.06.01',
    content: '甜祇園 × MATCHA 合作甜點第一彈「宇治抹茶奶油夾心餅乾 巧妙堆疊」將於4月20日開始銷售'
  },
  {
    type: '預購',
    src: '/img/news04.jpg',
    alt: '',
    date: '2024.06.01',
    content: 'MATCHA 會員限定月替甜點第3彈『宇治抹茶奶油泡芙』現已開放預訂。'
  }
])

const { width } = useWindowSize()

const slidesView = computed(() => {
  return width.value > 960 ? 3 : 2
})
</script>
