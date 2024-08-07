<template>
  <div class="py-[1.875rem]">
    <section
      ref="imgWrapperRefs"
      :class="[
        index % 2 !== 0 && 'md:order-last',
        'lounge-img-wrapper flex h-[25rem] gap-1 lg:h-[30rem]'
      ]"
    >
      <span
        v-for="(_, index) in 3"
        :ref="(el) => (elements[index].selector = el)"
        :key="index"
        :class="[`con-${index}`, 'h-full bg-no-repeat']"
        :style="{
          width: `${imgWidth}px`,
          backgroundImage: `url(${props.image})`,
          backgroundPositionX: `${positionX[index]}`,
          backgroundSize: `auto ${height + 60}px`
        }"
      />
      <!-- backgroundPositionY: `${positionY[index]}`,
      transform: `${translateY[index]}`, -->
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useElementSize } from '@vueuse/core'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  index: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})

const imgWrapperRefs = ref(null)
const { width, height } = useElementSize(imgWrapperRefs)

/* 1/3 圖片 的寬 */
const imgWidth = computed(() => {
  return (width.value - 8) / 3
})

/* 圖片定位 */
const positionX = computed(() => ({
  0: `calc(50% + ${imgWidth.value}px + 4px)`,
  1: `calc(50%)`,
  2: `calc(50% - ${imgWidth.value}px - 4px)`
}))
// const positionY = computed(() => ({
//   0: '-60px',
//   1: '0px',
//   2: '-60px'
// }))

/* 位移 */
// const translateY = computed(() => ({
//   0: 'translateY(30px)',
//   1: 'translateY(-30px)',
//   2: 'translateY(30px)'
// }))
const elements = [
  { selector: ref(null), initialY: 30, targetY: -30 },
  { selector: ref(null), initialY: -30, targetY: 30 },
  { selector: ref(null), initialY: 30, targetY: -30 }
]

onMounted(() => {
  elements.forEach((element) => {
    console.log(element.selector.value)
    gsap.set(element.selector.value, {
      backgroundPositionY: element.initialY === 30 ? '-60px' : '0px',
      y: element.initialY
    })

    gsap.to(element.selector, {
      scrollTrigger: {
        trigger: element.selector.value, // 指定用來觸發動畫的元素
        markers: true, // 顯示標記，用於調試
        start: 'top bottom', // 元件進入視窗底部時開始動畫
        end: 'bottom top', // 元件完全離開視窗頂部時結束動畫
        scrub: true // 動畫播放是否以視窗滾動播放
      },
      backgroundPositionY: element.targetY === -30 ? '0px' : '-60px',
      y: element.targetY
    })
  })
})
</script>
