<template>
  <HomeHeader class="fixed inset-x-0 top-0 z-30" />
  <main class="relative flex-1 bg-system-light">
    <Hero id="hero" />

    <Story id="story" />

    <Enjoy id="enjoy" />

    <News id="news" />

    <Menu id="menu" />

    <Access id="access" />
  </main>
  <PageFooter id="footer" />
</template>

<script lang="ts" setup>
import Access from './components/Access.vue'
import Enjoy from './components/Enjoy.vue'
import Hero from './components/Hero.vue'
import HomeHeader from './components/HomeHeader.vue'
import Menu from './components/Menu.vue'
import News from './components/News.vue'
import Story from './components/Story.vue'
</script>

<style lang="scss">
#app {
  @apply flex flex-col;
}
</style>
