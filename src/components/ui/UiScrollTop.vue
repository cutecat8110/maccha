<template>
  <Transition name="scroll-top">
    <div v-if="scrollTopIsShow" class="pointer-events-none fixed bottom-3 w-full lg:bottom-5">
      <div class="flex flex-row-reverse pr-3 2xl:container lg:pr-5 2xl:pr-0">
        <UiButton class="ui-scroll-top 2xl:translate-x-10" state="icon" @click="scrollTop()">
          <SvgKeyboardArrowUp />
        </UiButton>
      </div>
    </div>
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
