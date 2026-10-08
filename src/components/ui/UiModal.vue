<template>
  <Teleport to="body">
    <transition name="modal" @after-leave="release">
      <div
        v-if="isOpen"
        v-bind="$attrs"
        ref="dialog"
        role="dialog"
        aria-modal="true"
        :aria-label="label"
        tabindex="-1"
        class="fixed inset-0 z-[60] bg-system-dark/60 outline-none backdrop-blur-xl"
        @keydown="onKeydown"
      >
        <div class="absolute inset-0 overflow-y-auto overflow-x-hidden overscroll-contain">
          <slot />
        </div>
        <slot name="close" />
      </div>
    </transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { isTopModal, lockModal, unlockModal } from '@/utils/modal-lock'

defineProps<{ label: string }>()
defineOptions({ inheritAttrs: false })
const dialog = ref<HTMLElement | null>(null)
const owner = Symbol('modal')
let opener: HTMLElement | null = null
let locked = false

/* 控制彈窗顯示 */
const isOpen = defineModel<boolean>({
  default: false
})

watch(isOpen, async (open) => {
  if (!open) return
  if (!locked) opener = document.activeElement as HTMLElement | null
  lockModal(owner)
  locked = true
  await nextTick()
  if (isOpen.value) dialog.value?.focus({ preventScroll: true })
}, { immediate: true })

function release() {
  if (isOpen.value) return
  unlockModal(owner)
  locked = false
  if (opener?.isConnected) opener.focus({ preventScroll: true })
}

function onKeydown(event: KeyboardEvent) {
  if (!isTopModal(owner) || event.defaultPrevented) return
  if (event.key === 'Escape') {
    event.preventDefault()
    isOpen.value = false
  }
  if (event.key !== 'Tab') return
  const elements = Array.from(dialog.value?.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex="0"]'
  ) ?? []).filter((element) => element.getClientRects().length > 0)
  const first = elements[0]
  const last = elements[elements.length - 1]
  if (!first) { event.preventDefault(); dialog.value?.focus(); return }
  const current = document.activeElement
  if (event.shiftKey && (current === first || current === dialog.value)) {
    event.preventDefault(); last?.focus()
  } else if (!event.shiftKey && (current === last || current === dialog.value)) {
    event.preventDefault(); first.focus()
  }
}

onBeforeUnmount(() => { unlockModal(owner) })
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
