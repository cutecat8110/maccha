<template>
  <div :class="[props.index % 2 !== 0 && 'md:order-last']" class="py-10">
    <section ref="imgWrapperRefs" class="lounge-img-wrapper flex aspect-square gap-[.125rem]">
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

/* 圖片 1/3 寬 */
const imgWidth = computed(() => {
  return (width.value - 4) / 3
})

/* 圖片 X 定位 */
const positionX = computed(() => [
  `calc(50% + ${imgWidth.value}px + 2px)`,
  `calc(50%)`,
  `calc(50% - ${imgWidth.value}px - 2px)`
])

/* 圖片 Y 定位 & 位移 */
const elements = ref<
  {
    selector: HTMLElement | null
    initialY: number
    targetY: number
  }[]
>([
  { selector: null, initialY: 20, targetY: -30 },
  { selector: null, initialY: -30, targetY: 40 },
  { selector: null, initialY: 40, targetY: -20 }
])

onMounted(() => {
  elements.value.forEach((element) => {
    if (element.selector) {
      gsap.fromTo(
        element.selector,
        {
          backgroundPositionY: `${(element.initialY + 40) * -1}px`,
          y: element.initialY
        },
        {
          backgroundPositionY: `${(element.targetY + 40) * -1}px`,
          y: element.targetY,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: element.selector,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.7
          }
        }
      )
    }
  })

  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 0)
})
</script>
