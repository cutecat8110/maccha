<template>
  <section class="hero-wrapper text-white">
    <div class="mask">
      <div class="container relative flex h-full flex-col items-start justify-center gap-y-12">
        <div class="space-y-2">
          <h1 class="text-h3 lg:text-h1">宇治抹茶新篇章</h1>
          <p class="text-title capitalize text-system-main-400 lg:text-h6">
            for matcha lovers project
          </p>
        </div>
        <UiButton href="#enjoy" state="outline" tag="a"> enjoy now </UiButton>

        <div
          class="absolute bottom-10 right-[3.25rem] flex origin-bottom-right rotate-90 items-center gap-4 text-body-2 uppercase leading-10"
        >
          scroll
          <div class="scroll-line"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-wrapper {
  @apply h-screen bg-system-gray-600;
  background: url('/img/hero.jpg') center/cover no-repeat;
}

.mask {
  @apply h-full;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.4) 30%,
    rgba(0, 0, 0, 0.4) 70%,
    rgba(0, 0, 0, 0.6) 100%
  );
}

.scroll-line {
  @apply h-[1px] w-20;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.8) 33%,
    rgba(255, 255, 255, 0.8) 67%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
