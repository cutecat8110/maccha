<template>
  <section class="hero-wrapper text-white" data-aos="fade">
    <div class="mask">
      <div class="container relative flex h-full flex-col items-start justify-center gap-y-12">
        <div class="space-y-2" data-aos="print" data-aos-delay="500" data-aos-duration="2000">
          <h1 class="text-h3 lg:text-h1">宇治抹茶新篇章</h1>
          <p class="text-title capitalize text-system-main-400 lg:text-h6">
            for maccha lovers project
          </p>
        </div>
        <UiButton href="#enjoy" state="outline" tag="a"> enjoy now </UiButton>

        <div class="absolute bottom-10 right-[3.25rem] origin-bottom-right rotate-90">
          <div class="flex items-center gap-4 text-body-2 uppercase leading-10" data-aos="fade">
            scroll
            <div class="flex h-[1px] w-20 overflow-hidden">
              <span class="scroll-line"></span>
            </div>
          </div>
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
    rgba(255, 255, 255, 0.6) 33%,
    rgba(255, 255, 255, 0.6) 67%,
    rgba(255, 255, 255, 0) 100%
  );
  animation: scrollLine 5s infinite linear;
}

@keyframes scrollLine {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  20% {
    opacity: 0.4;
  }
  60% {
    opacity: 1;
  }
  80% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
}
</style>
