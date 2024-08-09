<template>
  <header :class="['header', isDark && 'is-dark']">
    <div class="container relative flex items-center justify-between py-3 lg:py-5">
      <!-- LOGO．連結．首頁 -->
      <router-link class="link-base" to="/" @click="refreshPage">
        <SvgLogo class="text-icon lg:text-logo-2" />
      </router-link>

      <!-- desktop．導航欄 -->
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
          :class="[activeSection === 'lounge' && 'active']"
          class="menu-btn"
          href="#lounge"
          tag="a"
        >
          lounge
        </UiButton>

        <!-- 連結．線上商店 -->
        <router-link class="link-base" to="/">
          <UiButton tag="span">
            <template #leading>
              <SvgCart />
            </template>
            online shop
          </UiButton>
        </router-link>
      </nav>

      <!-- mobile．導航欄 -->
      <UiButton class="link-base lg:hidden" state="icon" @click="toggleMenu(true)">
        <SvgMenu />
      </UiButton>

      <UiModal v-model="isMenuOpen">
        <div class="relative flex min-h-full items-center text-white">
          <UiButton
            class="link-base absolute right-4 top-4"
            state="icon"
            @click="toggleMenu(false)"
          >
            <SvgClose class="text-icon-close" />
          </UiButton>

          <div class="container flex flex-col items-center gap-6">
            <nav class="flex flex-col gap-2">
              <UiButton
                :class="[activeSection === 'story' && 'active']"
                class="menu-btn"
                href="#story"
                tag="a"
                @click="toggleMenu(false)"
              >
                story
              </UiButton>

              <UiButton
                :class="[activeSection === 'enjoy' && 'active']"
                class="menu-btn"
                href="#enjoy"
                tag="a"
                @click="toggleMenu(false)"
              >
                enjoy
              </UiButton>

              <UiButton
                :class="[activeSection === 'news' && 'active']"
                class="menu-btn"
                href="#news"
                tag="a"
                @click="toggleMenu(false)"
              >
                news
              </UiButton>

              <UiButton
                :class="[activeSection === 'menu' && 'active']"
                class="menu-btn"
                href="#menu"
                tag="a"
                @click="toggleMenu(false)"
              >
                menu
              </UiButton>

              <UiButton
                :class="[activeSection === 'lounge' && 'active']"
                class="menu-btn"
                href="#lounge"
                tag="a"
                @click="toggleMenu(false)"
              >
                lounge
              </UiButton>
            </nav>

            <!-- 連結．線上商店 -->
            <router-link to="/" @click="toggleMenu(false)">
              <UiButton state="outline" tag="span">
                online shop
                <template #trailing>
                  <SvgCart />
                </template>
              </UiButton>
            </router-link>
          </div>
        </div>
      </UiModal>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core'

/* Logo 刷新 */
const route = useRoute()
const router = useRouter()
const refreshPage = (event: MouseEvent) => {
  if (route.path === '/') {
    // 禁止默認行為
    event.preventDefault()
    // 刷新頁面
    router.go(0)
  }
}

/* 滾輪進入區塊 */
const activeSection = ref('')
const sectionIds = ['hero', 'story', 'enjoy', 'news', 'menu', 'lounge', 'footer']
const onScroll = () => {
  let scrollPosition = window.scrollY + 200
  for (let i = sectionIds.length - 1; i >= 0; i--) {
    let section = document.getElementById(sectionIds[i])
    if (section && scrollPosition >= section.offsetTop) {
      activeSection.value = sectionIds[i]
      break
    }
  }
}
onMounted(() => {
  window.addEventListener('scroll', onScroll)
  onScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

/* header 背景 */
const { y } = useWindowScroll()
const isDark = computed(() => y.value > window.innerHeight / 5)

/* menu */
const isMenuOpen = ref(false)
const toggleMenu = (event: boolean) => {
  isMenuOpen.value = event
}
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
