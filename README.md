### 加入 Vue

平常開發 Vue 專案都是用 vue cli 或現在的 vite cli，自動架好一個專案，但其實自己架一個 webpack + vue 專案也不會很難。
這個分支會用最簡易的方式使用 Vue，下一個分支才會使用 SFC (Single File Component) 來開發。
`npm install vue@next`

### 補充知識：你知道 Vue 有幾個版本嗎？

點開 /node_modules/vue/dist，你會看到裡面打包出好幾種不同版本的 vue，這邊簡單介紹一下他們的不同。

`vue.global.js` → CDN 引入的版本，會導出一個全域的 `Vue`
`vue.esm-browser.js` → 在瀏覽器用 `<script type=”module”>` 使用，會透過原生 ES module 導入
`vue.esm-bundler.js` → 在打包工具中使用
`vue.cjs.js` → server 端渲染使用 (node.js)
加上 `runtime` → 使用 runtime 版本，沒有 compiler
加上 `prod` → 使用 production 壓縮版本

**webpack 預設使用 `vue.runtime.esm-bundler.js` (SFC 開發時使用)**
因此，在沒有進行額外設定之下，要指定使用 `vue.esm-bundler.js` ，才能 compile 元件 template

### Feature flags Warning？

成功打包後，在瀏覽器開啟 devtools 應該會看到一個 feature flags 警告。解決方法可以看[這裡的說明](https://github.com/vuejs/core/tree/main/packages/vue#bundler-build-feature-flags)。
簡單來說，這是因為我們指定使用 `vue.esm-bundler.js` 這個版本，所以需要一些額外設定，Vue 才能正常執行 tree-shaking。
以 Webpack 來說，可以透過內建的 `DefinePlugin` 來設定 (見 `webpack.config.js`)
