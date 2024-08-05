<template>
  <div class="flex flex-col gap-y-4 px-9 py-6 md:px-6">
    <h4 class="line-clamp-3 text-title text-system-gray-800 lg:text-h6">{{ props.dish.name }}</h4>

    <p class="menu-content mb-auto line-clamp-4">
      {{ props.dish.content }}
    </p>

    <p class="menu-price mt-6 text-end md:text-start">{{ props.dish.price }}</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  dish: {
    type: Object as PropType<{
      name: string
      content: string
      price: string
    }>,
    required: true
  }
})
</script>

<style lang="scss" src="@/assets/styles/menu.scss" scoped></style>
