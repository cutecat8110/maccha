# MACCHA｜抹茶形象網站

![Node](https://img.shields.io/badge/Node.js-v22.23.3-brightgreen.svg)
![Vue](https://img.shields.io/badge/Vue.js-v3-blue.svg)
![Tailwindcss](https://img.shields.io/badge/Tailwindcss-v3-deepskyblue.svg)

響應式切版、捲動動畫與菜單瀏覽，包含店鋪地圖及聯絡表單。

**[Demo](https://cutecat8110.github.io/maccha/)** · [設計稿](https://www.figma.com/design/cIh6r51LX2ZPM78ezNH4YR/Maccha?node-id=0-1&t=pVNl1J6qQyzy6WAS-1)

![MACCHA 主視覺與章節導覽](public/img/demo.png)

<details>
<summary>使用說明</summary>

聯絡表單僅驗證輸入，不寄信、訂位或保存資料。新聞卡片與 VIEW ALL 為靜態展示。地圖載入失敗時可使用位置連結。

</details>

<details>
<summary>開發、測試與部署</summary>

使用 `.node-version` 指定的 Node 22.23.3：

```bash
npm ci
npm run dev
npm test
npm run type-check
npm run lint
npm run build
npm run preview -- --host 127.0.0.1
```

- 網站使用 `/maccha/` 路徑，正式產物輸出至 `docs/`；GitHub Pages 使用 `main` 分支的 `/docs`。
- `VITE_API_KEY` 為 Google Maps **瀏覽器用** API key，會進入公開產物；應在 Google Cloud 限制網站來源與可使用的 API。不要在任何 `VITE_*` 變數放入伺服器秘密。現有地圖設定沿用，沒有更動帳務或配額。
- 本機可用 `.env.local` 覆寫地圖設定；未設定 key 或 SDK 載入失敗時提供位置連結。測試會 mock 地圖 SDK，不呼叫 Google API。
- 聯絡表單原本只驗證輸入並關閉，沒有寄信、訂位或後端儲存；新聞卡片與 VIEW ALL 也保留原有展示行為。
- 保留原字型、圖片及裁切方式。非首屏圖片延後載入，地圖接近店鋪區時才初始化。
- `src/assets/fonts/*-site.woff2` 由原字型建立常用字集；完整 TTF 保留作為其他輸入字元的備援。修改網站文案後，可於安裝 `fonttools[woff]` 的 Python 環境執行 `python qa/build-font-subsets.py`，再重新 build。腳本及產物已提交，一般啟動不需要 Python。

完整修正編號、兩輪測試、截圖與限制：[QA_CHANGELOG.md](QA_CHANGELOG.md)。

### 素材維護

原始圖片與設計保留，網站引用預先產生的 WebP。更新原圖後，以 Node 22 執行 `npm ci`、`npm run images:optimize`；一併提交 WebP 與 `qa/image-sizes.json`，一般發布不會即時轉圖。圖片來源與輸出清單在 `scripts/image-sources.json`。之後執行原本的 `npm run build`，同步發布 `docs/`。

</details>

<details>
<summary>技術與套件</summary>

[Vue 3](https://vuejs.org/) · [TypeScript](https://www.typescriptlang.org/) · [Tailwind CSS](https://tailwindcss.com/) · [VueUse](https://vueuse.org/) · [Swiper](https://swiperjs.com/) · [GSAP](https://greensock.com/gsap/) · [Google Maps JavaScript](https://www.npmjs.com/package/@googlemaps/js-api-loader) · [v-calendar](https://vcalendar.io/) · [vee-validate](https://vee-validate.logaretm.com/v4/) · [dayjs](https://day.js.org/) · [AOS](https://michalsnik.github.io/aos/)

</details>

[QA 紀錄](QA_CHANGELOG.md) · [介面設計規範](DESIGN_GUIDELINES.md)
