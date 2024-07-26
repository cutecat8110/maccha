<template>
  <HomeHeader class="overflow-hidden" />
  <main class="flex-1 bg-system-light">
    <section class="container">
      <SectionDesc text="main" />
    </section>
  </main>
  <PageFooter class="overflow-hidden" />
</template>

<script setup lang="ts">
import HomeHeader from './components/HomeHeader.vue'
</script>

<style lang="scss">
#app {
  @apply flex flex-col;
}
</style>
