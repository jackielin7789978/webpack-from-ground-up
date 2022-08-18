### 加入 CSS 預處理器和 PostCSS
現在應該很少人只寫單純的 CSS 了，如果想在 webpack 專案中寫 `sass`、`less` 等 CSS 預處理器也沒問題，只要加上對應的 loader 即可。

PostCSS 也是一個常見的工具，可以對我們寫好的 CSS 檔案進行額外處理，譬如自動加上瀏覽器前綴，或是把新潮的 CSS 語法轉換成舊語法，以達到更廣泛的瀏覽器支援等等。
PostCSS 提供很多插件和預設設定，我們使用最常見的預設組合 `postcss-preset-env` 來做處理。

`npm install -D sass sass-loader postcss postcss-loader postcss-preset-env`

東西都裝好後，一樣要到 [webpack.config.js](https://github.com/jackielin7789978/webpack-from-ground-up/blob/03_add_sass_postcss/webpack.config.js) 增加相關設定。
