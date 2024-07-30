<template>
  <header :class="['header', isDark && 'is-dark']">
    <div class="container relative flex items-center justify-between py-3 lg:py-5">
      <!-- LOGO．連結．首頁 -->
      <router-link class="link-base" to="/">
        <SvgLogo class="text-icon lg:text-logo-2" />
      </router-link>

      <!-- 導航欄 -->
      <nav class="hidden gap-x-2 lg:flex">
        <UiButton
          :class="[activeSection === 'story' && 'active']"
          class="menu-btn"
          href="#story"
          tag="a"
        >
          story
        </UiButton>

        <UiButton
          :class="[activeSection === 'enjoy' && 'active']"
          class="menu-btn"
          href="#enjoy"
          tag="a"
        >
          enjoy
        </UiButton>

        <UiButton
          :class="[activeSection === 'news' && 'active']"
          class="menu-btn"
          href="#news"
          tag="a"
        >
          news
        </UiButton>

        <UiButton
          :class="[activeSection === 'menu' && 'active']"
          class="menu-btn"
          href="#menu"
          tag="a"
        >
          menu
        </UiButton>

        <UiButton
          :class="[activeSection === 'access' && 'active']"
          class="menu-btn"
          href="#access"
          tag="a"
        >
          access
        </UiButton>

        <!-- 連結．線上商店 -->
        <router-link class="link-base" to="/">
          <UiButton class="" href="#access" tag="span">
            <template #leading>
              <SvgCart />
            </template>
            online shop
          </UiButton>
        </router-link>
      </nav>
      <UiButton class="link-base lg:hidden" state="icon">
        <SvgMenu />
      </UiButton>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useIntersectionObserver, useWindowScroll } from '@vueuse/core'

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
const isDark = computed(() => y.value > window.innerHeight / 5)
</script>

<style lang="scss" scoped>
.header {
  @apply border-transparent text-white transition-all duration-500;

  &::before {
    content: '';
    @apply absolute inset-0 opacity-0 backdrop-blur-xl transition-all duration-500;
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
    @apply absolute bottom-0 h-1 w-1 rounded-full bg-system-main-400 transition-all duration-500;
  }
}
</style>
