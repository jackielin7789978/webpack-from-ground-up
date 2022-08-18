### 加入 HTML & CSS
Webpack 本體僅支援 JavaScript 的打包，但 webpack 強大的社群開發出各種不同的 loaders 和 plugins，所以不只 JavaScript，所有我們在前端專案中使用的資源 (CSS、圖片、字體等) 都能被 Webpack 處理打包。

### CSS Loader 和 Style Loader
Webpack 認得 JavaScript 的 ES Module、CommonJS、AMD 等語法，但 CSS 的 `@import`、`url()` 它是看不懂的，因此需要使用 [CSS Loader](https://webpack.js.org/loaders/css-loader/) 協助
把它轉換成 webpack 看得懂的 `import/require()` 語法。成功解析後，我們還需要另一個 [Style Loader](https://webpack.js.org/loaders/style-loader/) 來協助我們把打包好的 CSS 檔案掛到 HTML 中。

首先把這些第三方 loaders 裝起來
`npm install -D css-loader style-loader`，再到 [webpack.config.js](https://github.com/jackielin7789978/webpack-from-ground-up/blob/02_add_css/webpack.config.js) 加入相關設定。

完成後就可以自由在專案中寫 css，記得要把 css import 到入口檔案 (`src/indes.jx`) 中，你寫的 css 檔才會被加入打包依賴中。
