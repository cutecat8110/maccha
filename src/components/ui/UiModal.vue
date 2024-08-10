<template>
  <Teleport to="body">
    <transition name="modal">
      <div
        v-if="isOpen"
        id="ModalScrollWrapper"
        class="fixed inset-0 z-[60] overflow-y-auto overflow-x-hidden bg-system-dark/60 backdrop-blur-xl"
      >
        <slot />
      </div>
    </transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { useScrollLock } from '@vueuse/core'

/* 控制彈窗顯示 */
const isOpen = defineModel<boolean>({
  default: false
})

/* 開啟彈窗鎖滾輪 */
const isLocked = useScrollLock(document.body)
watchEffect(() => (isLocked.value = isOpen.value))
</script>

<style lang="scss" scoped>
.modal-enter-active {
  transition:
    opacity 0.225s ease-in,
    filter 0.225s ease-in;
}

.modal-leave-active {
  transition:
    opacity 0.225s ease-out,
    filter 0.225s ease-out;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
