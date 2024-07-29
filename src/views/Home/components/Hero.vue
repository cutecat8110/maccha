<template>
  <section class="hero-wrapper">
    <div class="mask"></div>
  </section>
</template>

<style lang="scss" scoped>
.hero-wrapper {
  @apply bg-system-gray-600 h-screen;
  background-image: url('/img/hero.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.mask {
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.4) 30%,
    rgba(0, 0, 0, 0.4) 70%,
    rgba(0, 0, 0, 0.6) 100%
  );
}
</style>
