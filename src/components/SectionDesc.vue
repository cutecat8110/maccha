<template>
  <h2 class="capitalize text-h2">{{ props.text }}</h2>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>
