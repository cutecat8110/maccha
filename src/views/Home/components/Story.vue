<template>
  <section class="story-wrapper">
    <!-- 標題 -->
    <div class="space-y-2 text-center">
      <h2 class="section-title">maccha</h2>
      <p class="section-sub-title text-system-main-400">story</p>
    </div>

    <div class="space-y-20 lg:space-y-[12.5rem]">
      <!-- 抹茶文化 -->
      <section class="container space-y-10">
        <!-- 標示 -->
        <SectionIndicator data-aos="fade-left" text="concept" />

        <div class="space-y-10 lg:space-y-20">
          <!-- 內容組合 1 -->
          <article class="story-content">
            <!-- 圖片 -->
            <div class="aspect-square md:order-last" data-aos="fade">
              <img class="story-img" src="/img/story01.jpg" alt="抹茶粉、竹製刷子和抹茶茶碗" />
            </div>

            <!-- 文字 -->
            <div class="story-text-wrapper md:text-vrl md:text-nowrap">
              <h4 class="story-sub-title" data-aos="zoom-in-right">將抹茶融入你的生活方式</h4>

              <p class="story-text" data-aos="zoom-in-right">
                傳統茶道中的抹茶現在以全新方式呈現， <br />
                不受傳統約束，將抹茶融入您的生活。
              </p>
            </div>
          </article>

          <!-- 內容組合 2 -->
          <article class="story-content">
            <!-- 圖片 -->
            <div class="aspect-square" data-aos="fade">
              <img class="story-img" src="/img/story02.jpg" alt="一盤抹茶粉、盛滿抹茶粉的湯杓" />
            </div>

            <!-- 文字 -->
            <div class="story-text-wrapper">
              <h4 class="story-sub-title" data-aos="zoom-in-left-2">抹茶：天然的能量源</h4>

              <p class="story-text" data-aos="zoom-in-left-2">
                抹茶以整片茶葉研磨而成，是營養豐富的超級食物。 <br />
                富含抗氧化成分和天然咖啡因，每一杯都是理想的能量飲品選擇。
              </p>
            </div>
          </article>
        </div>
      </section>

      <!-- 功效介紹 -->
      <section class="flex justify-evenly">
        <!-- 左側網狀背景 -->
        <div class="relative" data-aos="fade">
          <img
            class="absolute top-1/2 z-0 max-w-[50vw] -translate-x-1/2 -translate-y-1/2"
            src="/img/decoration.png"
            alt="網狀背景裝飾"
          />
        </div>

        <!-- 功效介紹 -->
        <div
          class="flex flex-col items-center gap-10 p-10 md:flex-row lg:gap-20 lg:p-20"
          data-aos="border"
        >
          <!-- 動效．框線 -->
          <span class="line absolute bottom-0 left-0 h-0 w-[1px] bg-white/30"></span>
          <span class="line absolute left-0 top-0 h-[1px] w-0 bg-white/30"></span>
          <span class="line absolute right-0 top-0 h-0 w-[1px] bg-white/30"></span>
          <span class="line absolute bottom-0 right-0 h-[1px] w-0 bg-white/30"></span>

          <h4 class="space-y-4 text-center text-title md:text-start lg:text-h6" data-aos="print">
            <div>雖然不為人所熟知，</div>
            <div>但抹茶對身心有著眾多益處。</div>
          </h4>

          <ul class="benefits-wrapper" data-aos="fade-down">
            <li>減輕壓力</li>
            <li>放鬆身心</li>
            <li>抗衰老</li>
            <li>幫助減肥</li>
            <li>增強專注力</li>
            <li>抗氧化作用</li>
            <li>預防癌症</li>
          </ul>
        </div>

        <!-- 右側網狀背景 -->
        <div class="relative" data-aos="fade">
          <img
            class="absolute top-1/2 z-0 max-w-[50vw] -translate-x-1/2 -translate-y-1/2"
            src="/img/decoration.png"
            alt="網狀背景裝飾"
          />
        </div>
      </section>

      <!-- 品牌故事 -->
      <section class="container space-y-10">
        <!-- 標示 -->
        <SectionIndicator class="md:justify-end" data-aos="fade-left" text="brand" />

        <div class="space-y-10 lg:space-y-20">
          <!-- 內容組合 3 -->
          <article class="story-content">
            <!-- 圖片 -->
            <div class="aspect-square" data-aos="fade">
              <img class="story-img" src="/img/story03.jpg" alt="抹茶茶園" />
            </div>

            <!-- 文字 -->
            <div class="story-text-wrapper md:text-vrl md:text-nowrap">
              <h4 class="story-sub-title" data-aos="zoom-in-left">
                <span class="text-tb md:leading-[1.2] md:tracking-normal"> 1</span>
                <span class="text-tb md:leading-[1.2] md:tracking-normal"> 0</span>
                <span class="text-tb md:leading-[1.2] md:tracking-normal"> 0</span>
                <span class="text-tb md:leading-[1.2] md:tracking-normal"> %</span>
                宇治單一產地抹茶
              </h4>

              <p class="story-text" data-aos="zoom-in-left">
                無混合，可品味不同品種的單一產地抹茶。
              </p>

              <p class="story-text" data-aos="zoom-in-left">
                延續超過 <span class="text-tb md:leading-[1.5] md:tracking-normal">4</span>
                <span class="text-tb md:leading-[1.5] md:tracking-normal">0</span>
                <span class="text-tb md:leading-[1.5] md:tracking-normal">0</span>
                年的本簀栽培和手摘一番茶，<br />
                產量非常稀少。
              </p>

              <p class="story-text" data-aos="zoom-in-left">
                我們將這前所未有的多品種、<br />
                單一茶園的抹茶帶給全世界的抹茶愛好者。
              </p>
            </div>
          </article>

          <!-- 內容組合 4 -->
          <article class="story-content">
            <!-- 圖片 -->
            <div class="aspect-square md:order-last" data-aos="fade">
              <img class="story-img" src="/img/story04.jpg" alt="抹茶茶園" />
            </div>

            <!-- 文字 -->
            <div class="story-text-wrapper md:text-vrl md:text-nowrap">
              <h4 class="story-sub-title" data-aos="zoom-in-right">最大限度地享受抹茶</h4>

              <p class="story-text" data-aos="zoom-in-right">
                美麗的色澤、清新濃郁的香氣、深邃豐富的口感。
              </p>

              <p class="story-text" data-aos="zoom-in-right">
                我們使用江戶切子抹茶玻璃杯為您提供極致的抹茶體驗，<br />
                與全新美食搭配，體驗獨特風味。
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.story-wrapper {
  @apply common-section-padding space-y-10 bg-system-dark text-white lg:space-y-20;
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

  li {
    @apply flex items-center gap-2 text-system-gray-50;
    &::before {
      @apply block h-4 w-[1px] bg-gradient-to-b from-white/0 to-white/80 content-[''];
    }
  }
}
</style>
