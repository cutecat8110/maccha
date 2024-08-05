<template>
  <section class="common-section-padding relative min-h-screen bg-system-dark text-white">
    <div class="lounge-bg">
      <span class="line-1"></span>
      <span class="line-2"></span>
      <span class="line-3"></span>
    </div>
    <div class="container relative z-0 flex flex-col gap-y-20">
      <SvgBamboo class="bamboo-r" />

      <!-- 標題 -->
      <div class="space-y-2 text-center">
        <h2 class="section-title">店鋪</h2>
        <p class="section-sub-title text-system-main-400">lounge</p>
      </div>

      <div class="space-y-20 md:space-y-[7.5rem] lg:space-y-[12.5rem]">
        <div
          v-for="(lounge, index) in loungeList"
          :key="index"
          class="space-y-10 md:space-y-20 lg:space-y-[7.5rem]"
        >
          <div
            :class="[
              index % 2 !== 0 ? 'lg:pr-10 xl:pr-20' : 'lg:pl-10 xl:pl-20',
              'grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-x-20'
            ]"
          >
            <!-- 圖片 -->
            <img
              :class="[index % 2 !== 0 && 'md:order-last', 'lounge-img aspect-square object-cover']"
              :src="lounge.img"
              alt=""
            />

            <!-- 店鋪資訊 -->
            <div class="lg:p-10">
              <h3 class="mb-6 text-nowrap text-h6 text-system-gray-50 md:mb-10 lg:text-h4">
                {{ lounge.name }}
              </h3>

              <div class="lounge-content mb-1">
                <div>地址</div>
                <div>{{ lounge.address }}</div>
                <div>電話號碼</div>
                <div>{{ lounge.phone }}</div>
                <div>席位數</div>
                <div>{{ lounge.capacity }}</div>
                <div>營業時間</div>
                <div v-html="lounge.business"></div>
                <div>定休日</div>
                <div>{{ lounge.dayOff }}</div>
                <div>停車場</div>
                <div>{{ lounge.parking }}</div>
              </div>

              <div class="flex justify-end">
                <UiButton
                  class="link-base text-body-2 text-system-gray-50"
                  href="https://instagram.com/cutecat8110"
                  tag="a"
                  target="_blank"
                >
                  <template #leading>
                    <SvgInstagram class="" />
                  </template>
                  Instagram 最新情報
                </UiButton>
              </div>
            </div>
          </div>

          <div
            :id="lounge.id"
            :ref="(el) => (lounge.mapRefs = el as HTMLElement | null)"
            class="h-[25rem] md:h-[30rem]"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Loader } from '@googlemaps/js-api-loader'

import googleMapStyles from './google-map-styles.json'

const loungeList = ref([
  {
    id: 'GOOGLE_MAP_01',
    mapRefs: ref<HTMLElement | null>(null),
    name: 'MACCHA 本店',
    img: '/img/lounge01.jpg',
    address: '408 台中市南屯區公益路二段 51 號 18 樓',
    phone: '04 2326 5860',
    capacity: '21 席',
    business: '11:00 - 16:00 ( L.O. 15:30 )<br/>18:00 - 23:00 ( L.O. 22:30 )',
    dayOff: '年中無休',
    parking: '本館地下停車場',
    location: { lat: 24.151, lng: 120.651 }
  },
  {
    id: 'GOOGLE_MAP_02',
    mapRefs: ref<HTMLElement | null>(null),
    name: 'MACCHA 文創店',
    img: '/img/lounge02.jpg',
    address: '402 台中市南區復興路三段 362 號',
    phone: '04 2217 7777',
    capacity: '48 席',
    business: '11:00 - 16:00 ( L.O. 15:30 )<br/>18:00 - 23:00 ( L.O. 22:30 )',
    dayOff: '不定休',
    parking: '戶外停車場',
    location: { lat: 24.133, lng: 120.682 }
  }
])

// ApiKey
const apiKey = import.meta.env.VITE_API_KEY
const loader = new Loader({
  apiKey,
  version: 'weekly'
})

// 實例化
onMounted(() => {
  loader.importLibrary('maps').then(async () => {
    const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary

    loungeList.value.forEach((element) => {
      const map = new Map(element.mapRefs as HTMLElement, {
        center: element.location,
        zoom: 18,
        disableDefaultUI: true,
        styles: googleMapStyles
      })

      const svgMarker = {
        path: 'M0 0H75V60H42.2789L37.6601 68L33.0413 60H0V0ZM19.6348 24.627C20.2937 27.951 23.562 31.1223 27.9235 31.1223C28.3807 31.1223 28.851 31.0879 29.3305 31.0142C29.7441 30.9512 30.0277 30.5648 29.9647 30.1522C29.9017 29.7386 29.5143 29.4593 29.1027 29.518C25.0659 30.1333 21.7147 27.3348 21.1194 24.3322C20.796 22.7032 20.3722 20.8201 19.4258 19.0931C19.2261 18.7295 18.9061 18.1898 18.5798 17.6565C22.1773 17.3457 25.2254 17.4897 28.0894 18.8468C29.6549 19.5881 30.9256 21.0824 31.488 22.8438C31.8129 23.8629 32.0223 25.3368 31.4512 27.0046C29.9211 24.6052 28.0103 22.5509 25.7297 20.8715C25.3927 20.6232 24.919 20.6955 24.6718 21.0324C24.4235 21.3689 24.4958 21.8426 24.8322 22.0903C28.2925 24.6386 30.8524 28.1115 32.4422 32.4129C32.5547 32.7184 32.8446 32.908 33.152 32.908C33.2393 32.908 33.3275 32.8929 33.4143 32.8604C33.8065 32.7155 34.0068 32.2806 33.8618 31.8884C33.4381 30.7422 32.9489 29.6504 32.3961 28.6152C33.3915 26.6458 33.5893 24.4495 32.9295 22.3841C32.242 20.2305 30.675 18.3969 28.7376 17.4795C24.8487 15.6377 20.749 15.8898 17.2126 16.2704L16 16.4013L16.655 17.4296C17.1151 18.151 17.7769 19.2346 18.0993 19.8223C18.9415 21.3597 19.3337 23.1085 19.6348 24.627ZM35.9832 36.8957C34.4545 40.005 33.8048 42.4771 33.6628 43.0652C33.5643 43.4715 33.8135 43.8807 34.2193 43.9787C34.2795 43.9932 34.3396 44 34.3983 44C34.7391 44 35.0489 43.7678 35.1333 43.4216C35.3408 42.5649 36.6804 37.4989 40.4209 32.4997C40.4946 32.4929 40.5687 32.4789 40.6405 32.4493C43.8535 31.131 47.5344 31.9645 47.5712 31.9732C47.9775 32.0653 48.3857 31.8156 48.4803 31.4088C48.5748 31.0021 48.3242 30.5953 47.9169 30.4998C47.7807 30.4678 45.0932 29.8545 42.1168 30.4411C44.1793 28.16 46.7964 26.0199 50.1045 24.4553C50.4822 24.2769 50.6441 23.8255 50.4652 23.4479C50.2863 23.0697 49.8335 22.9082 49.4577 23.0871C47.3623 24.0781 45.5335 25.2893 43.9316 26.6167L44.4911 24.6643C44.6055 24.2624 44.3737 23.8435 43.9723 23.7286C43.5728 23.6137 43.1524 23.8454 43.0366 24.2473L41.9108 28.176C41.8802 28.2797 41.8749 28.3844 41.8889 28.4848C39.715 30.686 38.0709 33.066 36.8447 35.2594C35.7834 32.9104 35.6166 30.3359 36.39 27.9132C37.2491 25.2228 39.1923 22.9388 41.5893 21.8038C46.0362 19.6986 50.7546 19.5406 56.3719 20.0676C55.7979 20.9951 55.1855 22.0171 54.8311 22.6634C53.4581 25.1656 52.8414 27.9103 52.3701 30.2864C51.8349 32.9889 50.3362 35.319 48.2587 36.679C46.0105 38.1505 43.1956 38.5291 39.8943 37.8038C39.4861 37.717 39.0818 37.9725 38.993 38.3803C38.9029 38.789 39.1618 39.1924 39.5695 39.2816C40.7389 39.5381 41.8715 39.6661 42.9536 39.6661C45.2595 39.6661 47.3419 39.0872 49.0868 37.9449C51.5386 36.3401 53.2317 33.7249 53.8547 30.5807C54.3036 28.3151 54.8888 25.7048 56.1586 23.3906C56.6376 22.5141 57.6189 20.9093 58.2977 19.8446L58.9542 18.8157L57.7411 18.6853C52.5766 18.1297 46.5919 17.7603 40.9416 20.4361C38.1727 21.7475 35.9328 24.3705 34.9485 27.4531C33.9512 30.5759 34.3081 33.9135 35.9521 36.8516L35.9568 36.8587C35.9603 36.8638 35.964 36.8688 35.9677 36.8738C35.973 36.8809 35.9784 36.8881 35.9832 36.8957Z',
        fillColor: '#FFFFFF',
        fillOpacity: 0.9,
        strokeWeight: 0,
        rotation: 0,
        scale: 1,
        anchor: new google.maps.Point(37.5, 34)
      }

      new google.maps.Marker({
        map,
        position: element.location,
        icon: svgMarker,
        title: 'point'
      })
    })
  })
})
</script>

<style lang="scss" scoped>
.lounge-bg {
  @apply absolute inset-0 h-full w-full;
  .line-1,
  .line-2,
  .line-3 {
    @apply absolute inset-0 h-full w-full;
  }

  .line-1 {
    background-image: linear-gradient(
      -60deg,
      transparent 37px,
      #222222 38px,
      transparent 39px,
      transparent
    );
    background-size: 44px 76px;
  }
  .line-2 {
    background-image: linear-gradient(
      60deg,
      transparent 37px,
      #222222 38px,
      transparent 39px,
      transparent
    );
    background-size: 44px 76px;
  }
  .line-3 {
    background-image: linear-gradient(
      transparent 18px,
      #222222 19px,
      transparent 20px,
      transparent
    );
    background-size: 44px 38px;
    background-position: 0 0px;
  }
}

.lounge-content {
  @apply grid gap-4 border-y border-system-gray-400 py-6 md:gap-6 md:py-10;
  grid-template-columns: auto 1fr;
  :nth-child(odd) {
    @apply text-nowrap text-sub-title text-system-gray-200 lg:text-title;
  }
  :nth-child(even) {
    @apply text-body-2 lg:text-body;
  }
}

:deep(.gmnoprint),
:deep(.gm-style-cc) {
  display: none;
}
</style>
