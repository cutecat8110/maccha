<template>
  <div
    class="group flex cursor-pointer select-none flex-col bg-system-gray-800 transition-colors duration-500 hover:bg-system-gray-600"
  >
    <div class="aspect-video overflow-hidden md:aspect-square">
      <img
        class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        :src="props.news.src"
        :alt="props.news.alt"
      />
    </div>
    <div class="space-y-2 p-6 text-sub-title lg:text-title">
      <p
        class="text-system-gray-400 transition-colors duration-500 group-hover:text-system-gray-200"
      >
        {{ props.news.type }}
        <span></span>
        {{ props.news.date }}
      </p>
      <p class="line-clamp-1">{{ props.news.content }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  news: {
    type: Object as PropType<{
      type: string
      src: string
      alt: string
      date: string
      content: string
    }>,
    required: true
  }
})
</script>
