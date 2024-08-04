<template>
  <div class="flex h-52 flex-col justify-between p-6">
    <div class="space-y-4">
      <h4 class="text-h6 text-system-gray-800">{{ props.dish.name }}</h4>

      <p class="menu-content">
        {{ props.dish.content }}
      </p>
    </div>

    <p class="menu-price">{{ props.dish.price }}</p>
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
