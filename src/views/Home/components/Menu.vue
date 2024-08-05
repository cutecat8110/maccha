<template>
  <section class="common-section-padding bg-system-light">
    <div class="container relative flex flex-col gap-y-10 lg:px-[92px]">
      <SvgBamboo class="bamboo-l" />

      <!-- 標題 -->
      <div class="flex items-end justify-center md:justify-between">
        <div class="flex flex-col items-center gap-4">
          <h2 class="section-title text-system-main-600">食饌</h2>
          <p class="section-sub-title">Menu</p>
        </div>

        <p class="hidden text-body-2 text-system-gray-600 md:block">精選 MATCHA 篇章</p>
      </div>

      <!-- 單一菜單 -->
      <div class="relative flex flex-col items-center gap-y-4 border border-system-gray-400 p-6">
        <p
          class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-system-light px-5 text-tiny uppercase text-system-gray-600 lg:text-sub-title"
        >
          course menu
        </p>
        <h3 class="text-h5 text-system-gray-800 lg:text-h3">
          {{ menuSingle.name }}
        </h3>
        <p class="menu-content">
          {{ menuSingle.content }}
        </p>
        <p class="menu-price">
          {{ menuSingle.price }}
        </p>
      </div>

      <!-- 菜單列表 -->
      <div class="menu-section-wrapper">
        <!-- 菜單組 1 -->
        <div class="menu-section">
          <template v-for="(dish, index) in menuList.slice(0, 3)" :key="index">
            <MenuCard class="flex-1 shrink-0" :dish="dish" />
            <div v-if="index < 2" class="shrink-0 border-t border-dashed border-system-gray-400" />
          </template>
        </div>

        <!-- mobile．分隔線 -->
        <div class="shrink-0 border-t border-dashed border-system-gray-400 md:hidden" />

        <!-- 菜單組 2 -->
        <div class="menu-section">
          <template v-for="(dish, index) in menuList.slice(3, 6)" :key="index">
            <MenuCard class="flex-1 shrink-0" :dish="dish" />
            <div v-if="index < 2" class="shrink-0 border-t border-dashed border-system-gray-400" />
          </template>
        </div>

        <!-- mobile．分隔線 -->
        <div class="shrink-0 border-t border-dashed border-system-gray-400 md:hidden" />
      </div>

      <!-- 備註信息 -->
      <p class="text-center text-tiny text-system-gray-600 md:text-start lg:text-body-2">
        ＊ 根據產量與季節變化，產品內容可能會有所調整。
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import MenuCard from './MenuCard.vue'

const menuSingle = ref({
  name: '單一產地抹茶品飲套餐',
  content: '兩款單一產地抹茶 及 精緻抹茶小點',
  price: 'NT$ 700 起'
})

const menuList = ref([
  {
    name: '【茶室】宇治抹茶聖代套餐',
    content: '純正宇治抹茶，搭配精緻手作聖代與單一產地特選抹茶',
    price: 'NT$ 700 起'
  },
  {
    name: '【茶室】抹茶布丁塔套餐',
    content: '抹茶塔與布丁的絕妙結合，呈現精緻甜點的極致美味',
    price: 'NT$ 550 起'
  },
  {
    name: '【露台菜單】宇治抹茶精選小點',
    content: '抹茶布丁、抹茶塔、抹茶巧克力可頌、焙茶巧克力可頌、紅豆奶油可頌、抹茶磅蛋糕等...',
    price: 'NT$ 79 起'
  },
  {
    name: '【外帶】宇治抹茶創意飲品',
    content: '本日特選宇治抹茶、抹茶拿鐵、抹茶檸檬、季節限定抹茶特飲等...',
    price: 'NT$ 109 起'
  },
  {
    name: '【外帶】極致抹茶巧克力 / 幸福焙茶巧克力',
    content: '比飲用更能體驗宇治茶的極致巧克力',
    price: 'NT$ 230'
  },
  {
    name: '【禮品】宇治抹茶夾心餅乾 / 焙茶夾心餅乾',
    content: '無論居家享用或作為禮品，都是最佳選擇，極致口感的完美體驗。',
    price: '抹茶 NT$ 690 / 焙茶 NT$ 590'
  }
])
</script>

<style lang="scss" src="@/assets/styles/menu.scss" scoped></style>
