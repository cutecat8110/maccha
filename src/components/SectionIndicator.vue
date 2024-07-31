<template>
  <h3 class="flex items-center gap-x-2 text-sub-title uppercase">
    <span class="h-[1px] w-10 bg-gradient-to-r from-white/0 to-white/80"></span>
    {{ props.text }}
  </h3>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String
  }
})
</script>
