### 使用常見 Webpack Plugins

除了 Loaders 以外，Webpack 的另一個核心功能就是 Plugins。
這邊會安裝兩個常見的插件 - [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin) 和 [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/)。

#### clean-webpack-plugin

這個做的事情比較簡單，就是在每次打包之前，幫我們先刪掉前一個打包好的 dist 資料夾。

#### html-webpack-plugin

顧名思義，這個插件負責處理 html 相關功能，它可以幫我們自動生成 html 並引入打包好的 js 檔。
另外，我們也可以使用自訂模板來生成 html。這個插件能做的設定蠻多的，可以參考 [GitHub 文件](https://github.com/jantimon/html-webpack-plugin#options)。

安裝完成後，相關設定一樣參考 `webpack.config.js`
