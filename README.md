### 加入 [Babel](https://babeljs.io/)

前面寫的所有程式碼，打包出來後有可能無法在某些瀏覽器中執行，這是因為我們還沒使用 Babel 幫我們進行轉譯。
現代前端開發非常依賴 Babel，它可以幫我們把 ES6, 7, 8 或更新的 JS 語法轉成 ES5 語法，讓比較舊的瀏覽器也能夠執行。
TypeScript、React 中使用的 jsx 語法等，瀏覽器其實也都是不認得的，都需要經過 Babel 處理。

### Babel Loader

要在 Webpack 專案中使用 babel，需要安裝對應的 [babel-loader](https://webpack.js.org/loaders/babel-loader/#root)。
除了 loader 之外，babel 核心程式碼和轉譯需要用到的 preset 也要一併安裝。

`npm install -D babel-loader @babel/core @babel/preset-env`

安裝後設定一樣參考 [webpack.config.js](https://github.com/jackielin7789978/webpack-from-ground-up/blob/06_babel/webpack.config.js)

### 應用

在 `src/index.js` 中寫一個 ES6 的箭頭函式，打包後 (經過 babel 轉譯)，去 `dist/js/main.js` 搜尋這個函式，會發現箭頭函式被轉成 ES5 語法。
