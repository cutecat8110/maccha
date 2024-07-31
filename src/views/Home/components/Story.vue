<template>
  <section class="story-wrapper">
    <div class="story-container">
      <!-- 大標題 -->
      <div class="space-y-2 text-center">
        <h2 class="text-h2 uppercase">maccha</h2>
        <p class="text-h6 capitalize text-system-main-400">story</p>
      </div>

      <!-- 故事區塊: 1 -->
      <div class="space-y-10">
        <!-- 指示文字 -->
        <SectionIndicator text="concept" />

        <!-- 圖文區塊 -->
        <div class="space-y-10 lg:space-y-20">
          <!-- 圖文組合 1 -->
          <div class="story-content">
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

    <!-- 間隔區塊 -->
    <div class="flex justify-evenly">
      <!-- 背景裝飾: 網狀 -->
      <div class="relative">
        <img
          class="absolute top-1/2 z-0 max-w-[50vw] -translate-x-1/2 -translate-y-1/2"
          src="/img/decoration.png"
          alt="網狀背景裝飾"
        />
      </div>

      <!-- 功效介紹 -->
      <div
        class="flex flex-col items-center gap-10 border border-white/30 p-10 md:flex-row lg:gap-20 lg:p-20"
      >
        <h4 class="space-y-4 text-center text-title md:text-start lg:text-h6">
          <div>雖然不為人所熟知，</div>
          <div>但抹茶對身心有著眾多益處。</div>
        </h4>

        <ul class="benefits-wrapper">
          <li>減輕壓力</li>
          <li>放鬆身心</li>
          <li>抗衰老</li>
          <li>幫助減肥</li>
          <li>增強專注力</li>
          <li>抗氧化作用</li>
          <li>預防癌症</li>
        </ul>
      </div>

      <!-- 背景裝飾: 網狀 -->
      <div class="relative">
        <img
          class="absolute top-1/2 z-0 max-w-[50vw] -translate-x-1/2 -translate-y-1/2"
          src="/img/decoration.png"
          alt="網狀背景裝飾"
        />
      </div>
    </div>

    <!-- 故事區塊: 2 -->
    <div class="container space-y-10">
      <!-- 指示文字 -->
      <SectionIndicator class="md:justify-end" text="brand" />
      <div class="space-y-10 lg:space-y-20">
        <!-- 圖文組合 3 -->
        <div class="story-content">
          <!-- 圖片 -->
          <div class="story-img-wrapper">
            <img class="story-img" src="/img/story03.jpg" alt="抹茶茶園" />
          </div>

          <!-- 文字描述 -->
          <div class="story-text-wrapper md:text-vrl md:text-nowrap">
            <h4 class="story-sub-title">100% 宇治單一產地抹茶</h4>

            <p class="story-text">無混合，可品味不同品種的單一產地抹茶。</p>

            <p class="story-text">
              延續超過 400 年的本簀栽培和手摘一番茶，<br />
              產量非常稀少。
            </p>

            <p class="story-text">
              我們將這前所未有的多品種、<br />
              單一茶園的抹茶帶給全世界的抹茶愛好者。
            </p>
          </div>
        </div>

        <!-- 圖文組合 4 -->
        <div class="story-content">
          <!-- 圖片 -->
          <div class="story-img-wrapper md:order-last">
            <img class="story-img" src="/img/story04.jpg" alt="抹茶茶園" />
          </div>

          <!-- 文字描述 -->
          <div class="story-text-wrapper md:text-vrl md:text-nowrap">
            <h4 class="story-sub-title">最大限度地享受抹茶</h4>

            <p class="story-text">美麗的色澤、清新濃郁的香氣、深邃豐富的口感。</p>

            <p class="story-text">
              我們使用江戶切子抹茶玻璃杯為您提供極致的抹茶體驗，<br />
              與全新美食搭配，體驗獨特風味。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.story-wrapper {
  @apply common-section-padding space-y-20 bg-system-dark text-white lg:space-y-[12.5rem];
}

.story-container {
  @apply container relative space-y-10 lg:space-y-20;
}

.story-content {
  @apply flex flex-col items-center gap-10 md:grid md:grid-cols-2 lg:gap-20;
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

.benefits-wrapper {
  @apply text-vlr text-body-2 !leading-10 !tracking-[.5em] lg:text-body;

  * {
    @apply flex items-center gap-2 text-system-gray-50;
    &::before {
      @apply bg-gradient-to-b from-white/0 to-white/80;
      display: block;
      content: '';
      width: 1px;
      height: 1rem;
    }
  }
}
</style>
