<template>
  <div class="flex flex-col bg-system-gray-800">
    <img
      class="aspect-video object-cover md:aspect-square"
      :src="props.news.src"
      :alt="props.news.alt"
    />
    <div class="space-y-2 p-6 text-sub-title lg:text-title">
      <p class="text-system-gray-400">
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
