<template>
  <footer class="footer">
    <div class="container flex flex-col gap-y-10 md:flex-row md:justify-between">
      <div class="flex flex-col gap-y-10 items-center md:items-start">
        <!-- 連結．首頁 -->
        <router-link to="/">
          <SvgLogo class="text-[2.5rem] md:text-[4rem]" />
        </router-link>

        <div class="flex flex-col md:flex-row gap-6 w-full md:px-0">
          <!-- 按鈕．聯絡我們 -->
          <UiButton state="outline">CONTACT US</UiButton>
          <!-- 連結．線上商店 -->
          <UiButton state="outline">
            ONLINE SHOP
            <template #trailing>
              <SvgCart />
            </template>
          </UiButton>
        </div>
      </div>

      <div class="flex flex-col items-center gap-y-10 justify-end md:gap-y-10 md:items-end">
        <!-- 社群導航 -->
        <nav class="flex gap-10 text-icon">
          <a href="https://www.facebook.com/cutecat8110" target="_blank">
            <SvgFacebook class="icon-base" />
          </a>
          <a href="https://instagram.com/cutecat8110" target="_blank">
            <SvgInstagram class="icon-base" />
          </a>
          <a href="https://x.com/cutecat8110" target="_blank">
            <SvgTwitter class="icon-base" />
          </a>
        </nav>
        <!-- 版權聲明 -->
        <p class="text-center md:text-right md:leading-10">&copy; MATCHA. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @apply common-section-padding xl:pt-20 xl:pb-[7.5rem] bg-system-dark text-white  border-t-8 border-transparent;
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
