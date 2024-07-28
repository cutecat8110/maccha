<template>
  <HomeHeader class="fixed inset-x-0 top-0" />
  <main class="flex-1 bg-system-light">
    <Hero />

    <Story />

    <Enjoy />

    <News />

    <Menu />

    <Access />
  </main>
  <PageFooter />
</template>

<script setup lang="ts">
import HomeHeader from './components/HomeHeader.vue'
import Hero from './components/Hero.vue'
import Story from './components/Story.vue'
import Enjoy from './components/Enjoy.vue'
import News from './components/News.vue'
import Menu from './components/Menu.vue'
import Access from './components/Access.vue'
</script>

<style lang="scss">
#app {
  @apply flex flex-col;
}
</style>
