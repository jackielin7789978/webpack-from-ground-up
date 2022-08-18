### 初次嘗試 Webpack 打包
首先安裝 webpack 和 webpack cli `npm install -D webpack webpack-cli`

然後在 package.json 中加入

```
 "scripts": [
     "build": "webpack"
 ]
```

接下來在 terminal 執行 `npm run build` ，webpack 會預設在 `src` 資料夾之下找到 `index.js`，執行打包後將檔案輸出到 `dist` 資料夾中。

### [webpack.config.js](https://github.com/jackielin7789978/webpack-from-ground-up/blob/01_add_webpack/webpack.config.js)
所有 webpack 相關設定都會寫在這個檔案裡面，譬如指定不同的 entry point 和檔案輸出位置等等。
