<template>
  <HomeHeader class="fixed w-full" />
  <main class="flex-1 bg-system-light">
    <Hero />

    <Story />

    <Enjoy />

    <News />

    <Menu />

    <Access />
  </main>
  <PageFooter class="overflow-hidden" />
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
