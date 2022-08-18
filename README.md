### Public 資料夾

平常用 vue cli 建專案的時候，除了 `src` 資料夾還會有一個 `public` 資料夾，裡面存放不須被打包的靜態資源，譬如 favicon (瀏覽器分頁上的小小 icon)。
這個 favicon 是在模板 html 中引入的，沒有被 `src/index.js` 或其他依賴圖中的檔案引入，因此不會被 webpack 打包，也就代表它不會被輸出到 `dist` 資料夾，也不會被 devServer 保存在內存中。

### 用 CopyWebpackPlugin 複製靜態資源

[CopyWebpackPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/#root) 可以將指定檔案/資料夾複製到打包資料夾中。

同樣需要先安裝 `npm install -D copy-webpack-plugin`

接著在 webpack.config.js 中指定複製 `public` 資料夾就可以了

### Webpack Dev Server 如何存取靜態資源

如同前面介紹過的，devServer 不會輸出打包後的檔案，而是將檔案暫時保留在內存中，那它怎麼知道要去哪裡找靜態資源呢？

根據[官方文件](https://webpack.js.org/configuration/dev-server/#devserverstatic)，devServer 有一個 `static` 設定，可以指定伺服器要去哪裡取得靜態資源。
devServer 預設會到 `public` 資料夾存取靜態資源，要注意的是這裡的 `public` 資料夾並不是我們現在資料夾中的那一個，而是打包後的 `public` 資料夾。
所以如果我們的靜態資源並不是指定複製到 `public` 資料夾，這邊就要同時修改一下設定。
