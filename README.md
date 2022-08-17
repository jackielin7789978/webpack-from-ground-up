### 打包圖片、字體等其他資源

學會打包 css 檔後，接著來看如何讓 webpack 打包其他資源。

### Webpack 5 - [Asset Modules](https://webpack.js.org/guides/asset-modules/#root)

Webpack 4 以前，處理圖片或字體的資源也需要使用對應的 loaders；不過在 Webpack 5 以後，這些都可以由 Webpack 原生支援，只要將檔案設定成對應的 module type 即可。實際設定請看 `webpack.config.js`。

#### 專案使用字體

-   [台北黑體](https://sites.google.com/view/jtfoundry/zh-tw)
-   [源泉圓體](https://github.com/ButTaiwan/gensen-font)
