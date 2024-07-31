<template>
  <section class="story-wrapper space-y-20 lg:space-y-[12.5rem]">
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
        <div class="space-y-10 lg:space-y-20">
          <!-- 圖文組合 1 -->
          <div class="story-content reverse">
            <!-- 圖片 -->
            <div class="story-img-wrapper md:order-last">
              <img class="story-img" src="/img/story01.jpg" alt="抹茶粉、竹製刷子和抹茶茶碗" />
            </div>

            <!-- 文字描述 -->
            <div class="story-text-wrapper md:text-vrl md:text-nowrap">
              <h4 class="story-sub-title">將抹茶融入你的生活方式</h4>

              <p class="story-text">
                傳統茶道中的抹茶現在以全新方式呈現， <br />
                不受傳統約束，將抹茶融入您的生活。
              </p>
            </div>
          </div>

          <!-- 圖文組合 2 -->
          <div class="story-content">
            <!-- 圖片 -->
            <div class="story-img-wrapper">
              <img class="story-img" src="/img/story02.jpg" alt="一盤抹茶粉、盛滿抹茶粉的湯杓" />
            </div>

            <!-- 文字描述 -->
            <div class="story-text-wrapper">
              <h4 class="story-sub-title">抹茶：天然的能量源</h4>

              <p class="story-text">
                抹茶以整片茶葉研磨而成，是營養豐富的超級食物。 <br />
                富含抗氧化成分和天然咖啡因，每一杯都是理想的能量飲品選擇。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h4>
        雖然不為人所熟知，<br />
        但抹茶對身心有著眾多益處。
      </h4>

      <ul>
        <li></li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.story-wrapper {
  @apply common-section-padding bg-system-dark text-white;
}

.story-content {
  @apply flex flex-col items-center gap-10 md:grid md:grid-cols-2 lg:gap-20;
  &.reverse {
    @apply md:flex-row-reverse;
  }
}

.story-img {
  @apply h-full w-full object-cover;
}

.story-text-wrapper {
  @apply flex flex-col items-center gap-y-6 text-center md:items-start md:justify-center md:p-10 md:text-start lg:gap-y-10;
}

.md\:text-vrl {
  .story-sub-title {
    @apply md:tracking-[.2em];
  }
  .story-text {
    @apply md:tracking-[.5em];
  }
}

.story-sub-title {
  @apply text-h6 lg:text-h4 lg:leading-none;
}

.story-text {
  @apply text-body-2 leading-6 text-system-gray-50 lg:text-body lg:leading-8;
}
</style>
