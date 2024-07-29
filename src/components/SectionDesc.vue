<template>
  <h2 :class="[props.center && 'text-center', 'text-h2 capitalize']">{{ props.text }}</h2>
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
