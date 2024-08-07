<template>
  <div class="border py-[1.875rem]">
    <section
      ref="imgWrapperRefs"
      :class="[
        index % 2 !== 0 && 'md:order-last',
        'lounge-img-wrapper flex h-[25rem] gap-1 border lg:h-[30rem]'
      ]"
    >
      <span
        v-for="(_, index) in 3"
        :key="index"
        class="h-full bg-no-repeat"
        :style="{
          width: `${imgWidth}px`,
          backgroundColor: 'red',
          backgroundImage: `url(${props.image})`,
          backgroundPositionX: `${positionX[index]}`,
          backgroundPositionY: `${positionY[index]}`,
          transform: `${translateY[index]}`,
          backgroundSize: `auto ${height + 60}px`
        }"
      />
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useElementSize } from '@vueuse/core'

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
const positionY = computed(() => ({
  0: '-60px',
  1: '0px',
  2: '-60px'
}))

/* 位移 */
const translateY = computed(() => ({
  0: 'translateY(30px)',
  1: 'translateY(-30px)',
  2: 'translateY(30px)'
}))
</script>
