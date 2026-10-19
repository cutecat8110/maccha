# MACCHA - 抹茶形象官網

![Node](https://img.shields.io/badge/Node.js-v22.23.3-brightgreen.svg)
![Vue](https://img.shields.io/badge/Vue.js-v3-blue.svg)
![Tailwindcss](https://img.shields.io/badge/Tailwindcss-v3-deepskyblue.svg)

> 以抹茶為主題的形象網站，透過暗色視覺、捲動動畫與飲品甜點菜單呈現品牌氛圍。

![MACCHA 主視覺與章節導覽](public/img/demo.png)

## 📋 專案概述

此專案從企劃、設計到前端皆獨立開發，使用 Vue、TypeScript 與 Tailwind CSS。以 RWD 響應式設計為基礎，結合章節導覽、輪播、捲動動效與店鋪地圖，呈現網站設計及前端開發能力。

**[Demo](https://cutecat8110.github.io/maccha/)** · [設計稿](https://www.figma.com/design/cIh6r51LX2ZPM78ezNH4YR/Maccha?node-id=0-1&t=pVNl1J6qQyzy6WAS-1)

## 🔨 核心技術

<table>
    <tbody>
    <tr>
        <td>
        <a href="https://vuejs.org/"> Vue 3 </a>
        </td>
        <td>JavaScript 框架</td>
    </tr>
    <tr>
        <td>
        <a href="https://www.typescriptlang.org/"> TypeScript </a>
        </td>
        <td>JavaScript 的超集</td>
    </tr>
    <tr>
        <td>
        <a href="https://tailwindcss.com/"> Tailwind CSS </a>
        </td>
        <td>CSS 框架</td>
    </tr>
    </tbody>
</table>

## 🛠️ 擴展套件

<table>
    <tbody>
        <tr>
            <td>
                <a href="https://vueuse.org/"> VueUse </a>
            </td>
            <td>Vue 3 Composition API 的實用函數庫</td>
        </tr>
        <tr>
            <td>
                <a href="https://swiperjs.com/"> Swiper </a>
            </td>
            <td>輪播/滑動組件</td>
        </tr>
        <tr>
            <td>
                <a href="https://gsap.com/"> GSAP </a>
            </td>
            <td>高效動畫庫，創建平滑動畫效果</td>
        </tr>
        <tr>
            <td>
                <a href="https://github.com/googlemaps/js-api-loader">Google Maps JavaScript</a>
            </td>
            <td>輕鬆載入地圖功能</td>
        </tr>
        <tr>
            <td>
                <a href="https://vcalendar.io/">v-calendar</a>
            </td>
            <td>功能豐富的日曆和日期選擇組件</td>
        </tr>
        <tr>
            <td>
                <a href="https://vee-validate.logaretm.com/v4/">vee-validate</a>
            </td>
            <td>簡化表單驗證的 Vue.js 庫</td>
        </tr>
        <tr>
            <td>
                <a href="https://day.js.org/">dayjs</a>
            </td>
            <td>輕量級日期處理庫</td>
        </tr>
        <tr>
            <td>
                <a href="https://michalsnik.github.io/aos/">AOS</a>
            </td>
            <td>捲動動畫庫，滾動時觸發動畫效果</td>
        </tr>
    </tbody>
</table>

## 🌸 啟動指南

使用 `.node-version` 指定的 Node 22.23.3：

```sh
npm ci
npm run dev
```

地圖金鑰可在 `.env.local` 設定 `VITE_API_KEY`，並限制允許的網站來源。

## 使用說明

聯絡表單僅驗證輸入，不寄信、訂位或保存資料。新聞卡片與 VIEW ALL 為靜態展示。地圖載入失敗時可使用位置連結。
