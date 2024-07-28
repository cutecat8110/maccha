<template>
  <button
    type="button"
    :class="[
      props.block ? 'flex' : 'inline-flex',
      'h-10 gap-x-2 items-center justify-center transition-all truncate',
      stateClass
    ]"
  >
    <span v-if="$slots.leading" class="shrink-0 icon-base">
      <slot name="leading" />
    </span>
    <span class="truncate">
      <slot />
    </span>
    <span v-if="$slots.trailing" class="shrink-0 icon-base">
      <slot name="trailing" />
    </span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  block: Boolean,
  state: {
    type: String as PropType<'outline' | 'link'>,
    default: 'link'
  }
})

const stateClass = computed<string>(() => {
  return {
    outline:
      'px-6 border border-white/30 text-sub-title xl:text-title rounded-full backdrop-blur-xl hover:border-white hover:bg-white/30',
    link: 'px-4'
  }[props.state]
})
</script>
