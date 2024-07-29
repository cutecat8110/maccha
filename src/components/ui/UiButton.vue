<template>
  <component
    :is="props.tag"
    :type="props.tag === 'button' ? 'button' : null"
    :class="[
      props.block ? 'flex' : 'inline-flex',
      'h-10 items-center justify-center gap-x-2 truncate transition-all duration-500',
      stateClass
    ]"
  >
    <span v-if="$slots.leading" class="icon-base shrink-0">
      <slot name="leading" />
    </span>
    <span :class="['truncate', props.state === 'icon' && 'icon-base']">
      <slot />
    </span>
    <span v-if="$slots.trailing" class="icon-base shrink-0">
      <slot name="trailing" />
    </span>
  </component>
</template>

<script setup lang="ts">
const props = defineProps({
  tag: {
    type: String as PropType<'button' | 'a' | 'span'>,
    default: 'button'
  },
  block: Boolean,
  state: {
    type: String as PropType<'outline' | 'link' | 'icon'>,
    default: 'link'
  }
})

const stateClass = computed<string>(() => {
  return {
    outline:
      'px-6 border border-white/30 text-sub-title xl:text-title rounded-full backdrop-blur-xl hover:border-white uppercase',
    link: 'px-4 text-body-2 xl:text-body capitalize',
    icon: 'w-10'
  }[props.state]
})
</script>
