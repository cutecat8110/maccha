<template>
  <section class="story-wrapper">
    <div class="container space-y-10 lg:space-y-20">
      <!-- 標題 -->
      <div class="space-y-2 text-center">
        <h2 class="text-h2 uppercase">maccha</h2>
        <p class="text-h6 capitalize text-system-main-400">story</p>
      </div>

      <!-- 內容 -->
      <div class="space-y-10">
        <!-- 指示文字 -->
        <SectionIndicator text="concept" />

        <!-- 圖文區塊 -->
        <div class="space-y-20">
          <!-- 圖文組合 1 -->
          <div class="flex flex-col items-center gap-10 lg:flex-row-reverse lg:gap-20">
            <!-- 圖片 -->
            <div class="story-img-wrapper">
              <img class="story-img" src="/img/story01.jpg" alt="抹茶粉、竹製刷子和抹茶茶碗" />
            </div>

            <!-- 文字描述 -->
            <div
              class="lg:text-vrl flex shrink-0 flex-col items-center gap-y-6 text-center lg:flex-1 lg:items-start lg:justify-center lg:gap-y-10 lg:text-nowrap lg:p-10"
            >
              <p class="text-h6 lg:text-h4">將抹茶融入你的生活方式</p>

              <div
                class="flex flex-col items-center gap-y-2 text-body-2 text-system-gray-50 lg:items-start lg:gap-y-4 lg:text-body"
              >
                <p>傳統茶道中的抹茶現在以全新方式呈現，</p>
                <p>不受傳統約束，將抹茶融入您的生活。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.story-wrapper {
  @apply common-section-padding bg-system-dark text-white;
}

.story-img-wrapper {
  @apply shrink-0 px-5 md:px-0 lg:flex-1;
}

.story-img {
  @apply w-full md:max-w-[32.25rem] lg:max-w-max;
}
</style>
