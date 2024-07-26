<template>
  <h2 :class="[props.center && 'text-center', 'capitalize text-h2']">{{ props.text }}</h2>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  center: Boolean
})
</script>
