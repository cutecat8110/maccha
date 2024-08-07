<template>
  <div :class="[index % 2 !== 0 && 'md:order-last']" class="py-10">
    <section ref="imgWrapperRefs" class="lounge-img-wrapper flex h-[25rem] gap-[2px] lg:h-[30rem]">
      <span
        v-for="(_, index) in 3"
        :ref="(el) => (elements[index].selector = el as HTMLElement | null)"
        :key="index"
        :class="[`con-${index}`, 'h-full bg-no-repeat']"
        :style="{
          width: `${imgWidth}px`,
          backgroundImage: `url(${props.image})`,
          backgroundPositionX: `${positionX[index]}`,
          backgroundSize: `auto ${height + 80}px`
        }"
      />
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
  return (width.value - 4) / 3
})

/* 圖片定位 */
const positionX = computed(() => [
  `calc(50% + ${imgWidth.value}px + 2px)`,
  `calc(50%)`,
  `calc(50% - ${imgWidth.value}px - 2px)`
])

const elements = ref<
  {
    selector: HTMLElement | null
    initialY: number
    targetY: number
  }[]
>([
  { selector: null, initialY: -20, targetY: 20 },
  { selector: null, initialY: 10, targetY: -10 },
  { selector: null, initialY: -10, targetY: 10 }
])

onMounted(() => {
  elements.value.forEach((element) => {
    gsap.fromTo(
      element.selector,
      {
        backgroundPositionY: `${(element.initialY + 40) * -1}px`,
        y: element.initialY
      },
      {
        backgroundPositionY: `${(element.targetY + 40) * -1}px`,
        y: element.targetY,
        scrollTrigger: {
          trigger: element.selector, // 指定用來觸發動畫的元素
          start: 'top center', // 元件進入視窗底部時開始動畫
          end: 'bottom center', // 元件完全離開視窗頂部時結束動畫
          scrub: 1.6 // 動畫播放是否以視窗滾動播放
        }
      }
    )
  })
})
</script>
