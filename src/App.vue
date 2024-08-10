<template>
  <RouterView />
  <UiScrollTop />
</template>

<script setup>
import AOS from 'aos'

onMounted(() => {
  AOS.init({
    duration: 1000,
    easing: 'cubic-bezier(0.08, 0.92, 0.35, 1)',
    offset: 20
  })
})
</script>
