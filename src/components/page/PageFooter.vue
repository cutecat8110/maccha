<template>
  <footer class="footer">
    <div class="container flex flex-col gap-y-10 lg:flex-row lg:justify-between">
      <div class="flex flex-col items-center gap-y-10 lg:items-start">
        <!-- LOGO．連結．首頁 -->
        <router-link class="link-base" to="/" @click="refreshPage">
          <SvgLogo class="text-logo-2 lg:text-logo" />
        </router-link>

        <div class="flex w-full flex-col gap-6 lg:flex-row lg:px-0">
          <!-- 按鈕．聯絡我們 -->
          <UiButton state="outline">contact us</UiButton>
          <!-- 連結．線上商店 -->
          <UiButton state="outline">
            online shop
            <template #trailing>
              <SvgCart />
            </template>
          </UiButton>
        </div>
      </div>

      <div class="flex flex-col items-center justify-end gap-y-10 lg:items-end lg:gap-y-10">
        <!-- 社群導航 -->
        <nav class="flex gap-6 text-icon">
          <UiButton
            class="link-base"
            href="https://www.facebook.com/cutecat8110"
            state="icon"
            tag="a"
            target="_blank"
          >
            <SvgFacebook />
          </UiButton>
          <UiButton
            class="link-base"
            href="https://instagram.com/cutecat8110"
            state="icon"
            tag="a"
            target="_blank"
          >
            <SvgInstagram />
          </UiButton>
          <UiButton
            class="link-base"
            href="https://x.com/cutecat8110"
            state="icon"
            tag="a"
            target="_blank"
          >
            <SvgTwitter />
          </UiButton>
          <UiButton
            class="link-base"
            href="https://github.com/cutecat8110/matcha"
            state="icon"
            tag="a"
            target="_blank"
          >
            <SvgGithub />
          </UiButton>
        </nav>
        <!-- 版權聲明 -->
        <p class="text-center text-system-gray-200 lg:text-right lg:leading-10">
          &copy; MATCHA. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
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
</script>

<style lang="scss" scoped>
.footer {
  @apply common-section-padding border-t-8 border-transparent bg-system-dark text-white lg:pb-[7.5rem] lg:pt-20;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.3) 30%,
    transparent 30%
  );
  background-size: 6px 0.5rem;
  background-repeat: repeat-x;
  background-origin: border-box;
}
</style>
