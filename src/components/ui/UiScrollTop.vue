<template>
  <Transition name="scroll-top">
    <UiButton
      v-if="scrollTopIsShow"
      class="ui-scroll-top fixed bottom-3 right-3 md:bottom-6 md:right-6 2xl:bottom-10 2xl:right-10"
      state="icon"
      @click="scrollTop()"
    >
      <SvgKeyboardArrowUp />
    </UiButton>
  </Transition>
</template>

<script lang="ts" setup>
import { useWindowScroll, useWindowSize } from '@vueuse/core'

/* 至頂 */
const { height } = useWindowSize()
const { y } = useWindowScroll({ behavior: 'smooth' })
const scrollTop = () => {
  y.value = 0
}

// 至頂: 按鈕顯示
const scrollTopIsShow = computed(() => y.value > height.value / 4)
</script>

<style lang="scss" scoped>
.ui-scroll-top {
  @apply pointer-events-auto z-30 rounded-full border border-white/0 bg-system-dark/30 text-white transition-all duration-500 hover:border-white/30 hover:bg-system-dark/60;
}

.scroll-top-enter-active {
  transition: all 0.2s ease-out;
}

.scroll-top-leave-active {
  transition: all 0.15s ease-in;
}

.scroll-top-enter-from {
  opacity: 0;
  transform: translateY(-1.5rem);
}

.scroll-top-leave-to {
  opacity: 0;
  transform: translateY(-1.5rem);
}
</style>
