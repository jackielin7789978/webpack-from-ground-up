### 現代化 Vue 開發 - Single File Component

雖然我們已經幫專案加入 vue，但仍是採用直接在根元件寫 options 的方式開發，而現實生活中多半不會用這種方式開發。通常我們會寫 `.vue` 檔案，也就是常聽到的 SFC (Single File Component)，`.vue` 檔讓我們可以在同一個檔案中寫單一元件的 template, script 和 style。

### Vue Loader

同樣地，原生 Webpack 也看不懂 `.vue` 檔案，需要使用 [vue-loader](https://vue-loader.vuejs.org/guide/#vue-cli) 來載入。官方文件中安裝的 `vue-template-compiler` 是 Vue 2 的套件，負責編譯 template，Vue 3 是用 @vue/compiler-sfc 這個套件來取代，而且安裝 Vue 3 的時候也已經安裝好了，所以這裡只需要單純安裝 `vue-loader`。

`npm install -D vue-loader`

Vue Loader 同時也提供一個 `VueLoaderPlugin`，需要一起寫在 `webpack.config.js` 中。

設定好後就可以用熟悉的方式寫 `.vue` 檔了。
