<template>
  <section class="common-section-padding bg-system-light">
    <div class="container grid grid-cols-12 gap-x-10 gap-y-10">
      <!-- 標題 -->
      <div
        class="col-span-12 flex flex-col items-center gap-y-6 md:col-span-3 md:gap-y-10 md:p-10 md:pb-20"
      >
        <div class="flex flex-col items-center gap-y-6 space-y-2 md:gap-y-10">
          <h2 class="text-vlr text-h4 leading-none tracking-[.2em] text-system-main-600 lg:text-h2">
            極享
          </h2>
          <p class="text-title capitalize lg:text-h6">Enjoy</p>
        </div>

        <p
          class="md:text-vrl text-center text-body-2 leading-6 text-system-gray-600 md:text-start md:leading-8 md:tracking-[.5em] lg:text-body lg:leading-8 lg:tracking-[.5em]"
        >
          在忙碌生活中，<br />給自己片刻奢華的放鬆。
        </p>
      </div>

      <div class="col-span-12 flex flex-col gap-y-6 md:col-span-9 md:gap-y-10">
        <div class="flex flex-1 flex-col gap-y-4 md:gap-y-6">
          <Swiper
            class="w-full flex-1"
            :autoplay="{
              delay: 5000
            }"
            :effect="'fade'"
            :loop="true"
            :modules="[Autoplay, EffectFade]"
            @slideChange="onSlideChange"
            @swiper="onSwiper"
          >
            <SwiperSlide v-for="(enjoy, index) in enjoyList" :key="index">
              <img :src="enjoy.src" :alt="enjoy.alt" />
            </SwiperSlide>
          </Swiper>

          <nav>
            <ul class="flex gap-x-2">
              <li
                v-for="(enjoy, index) in enjoyList"
                :key="index"
                :class="[
                  'h-1 flex-1 cursor-pointer transition-colors duration-500 md:w-20 md:flex-none',
                  currentIndex == index ? 'bg-system-gray-400' : 'bg-system-gray-50'
                ]"
                @click="goToSlide(index)"
              ></li>
            </ul>
          </nav>
        </div>
        <div class="line-clamp-2 flex h-12 gap-6 text-title lg:text-h6">
          <p>{{ `0${currentIndex + 1}.` }}</p>
          <p>
            {{ enjoyList[currentIndex].caption }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Autoplay, EffectFade } from 'swiper/modules'
const enjoyList = ref([
  {
    src: '/img/enjoy01.jpg',
    alt: '調製抹茶拿鐵的過程，將牛奶倒入冰抹茶中',
    caption: '進門即可享受專屬的外帶飲品服務，體驗尊榮款待。'
  },
  {
    src: '/img/enjoy02.jpg',
    alt: '室內的玻璃窗戶前掛著一串小燈泡，反映窗外綠意',
    caption: '抬頭所見，柔和燈光映襯精緻設計的菜單，為每個選擇增添儀式感。'
  },
  {
    src: '/img/enjoy03.jpg',
    alt: '現代咖啡廳的內部設計，有木質窗戶和舒適的座椅區',
    caption: '溫馨舒適的座位區，讓您在優雅的氛圍中盡情放鬆，享受片刻的寧靜。'
  }
])

/* 輪播 refs init */
const enjoySwiperRefs = ref(null)
const onSwiper = (swiper) => {
  enjoySwiperRefs.value = swiper
}

/* 當前輪播 */
const currentIndex = ref(0)
const onSlideChange = () => {
  if (enjoySwiperRefs.value) {
    currentIndex.value = enjoySwiperRefs.value.realIndex
  }
}

/* 輪播導航 */
const goToSlide = (index: number) => {
  if (enjoySwiperRefs.value) {
    enjoySwiperRefs.value.slideTo(enjoySwiperRefs.value.loopedSlides + index)
  }
}
</script>

<style lang="scss" scoped>
.swiper-slide img {
  @apply block h-full w-full object-cover;
}
</style>
