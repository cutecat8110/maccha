<template>
  <header :class="['header', isDark && 'is-dark']">
    <div class="container relative flex items-center justify-between py-3 lg:py-5">
      <!-- LOGO．連結．首頁 -->
      <router-link to="/" class="link-base">
        <SvgLogo class="text-icon lg:text-logo-2" />
      </router-link>

      <!-- 導航欄 -->
      <nav class="hidden gap-x-2 lg:flex">
        <UiButton
          tag="a"
          href="#story"
          class="menu-btn"
          :class="[activeSection === 'story' && 'active']"
        >
          story
        </UiButton>
        <UiButton
          tag="a"
          href="#enjoy"
          class="menu-btn"
          :class="[activeSection === 'enjoy' && 'active']"
        >
          enjoy
        </UiButton>
        <UiButton
          tag="a"
          href="#news"
          class="menu-btn"
          :class="[activeSection === 'news' && 'active']"
        >
          news
        </UiButton>
        <UiButton
          tag="a"
          href="#menu"
          class="menu-btn"
          :class="[activeSection === 'menu' && 'active']"
        >
          menu
        </UiButton>
        <UiButton
          tag="a"
          href="#access"
          class="menu-btn"
          :class="[activeSection === 'access' && 'active']"
        >
          access
        </UiButton>

        <!-- 連結．線上商店 -->
        <router-link to="/" class="link-base">
          <UiButton tag="span" href="#access" class="">
            <template #leading>
              <SvgCart />
            </template>
            online shop
          </UiButton>
        </router-link>
      </nav>
      <UiButton state="icon" class="link-base lg:hidden">
        <SvgMenu />
      </UiButton>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
import { useWindowScroll } from '@vueuse/core'

/* 滾輪進入區塊 */
const activeSection = ref('')
onMounted(() => {
  const sections = document.querySelectorAll('section')

  sections.forEach((section) => {
    useIntersectionObserver(
      section,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          activeSection.value = section.id
        }
      },
      { threshold: 0.5 }
    )
  })
})

/* header 背景 */
const { y } = useWindowScroll()
const isDark = computed(() => y.value > window.innerHeight)
</script>

<style lang="scss" scoped>
.header {
  @apply border-transparent text-white transition-all duration-500;

  &::before {
    content: '';
    @apply absolute inset-0 opacity-0 transition-all duration-500;
  }

  &.header.is-dark::before {
    @apply bg-gradient-to-b from-system-dark/90 to-system-dark/70 opacity-100;
  }
}

.menu-btn {
  @apply relative after:scale-0 after:opacity-0 hover:after:scale-100 hover:after:opacity-100;

  &.active {
    @apply after:scale-100 after:opacity-100;
  }

  &::after {
    content: '';
    width: 0.25rem;
    height: 0.25rem;
    @apply absolute bottom-0 h-1 w-1 rounded-full bg-system-main-400 backdrop-blur-xl transition-all duration-500;
  }
}
</style>
