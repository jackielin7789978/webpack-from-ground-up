### Hot Module Reload

為了提升開發效率，通常我們不會每改一次程式碼就重新 `npm run build`，而是透過模組熱更新 (HMR) 功能來監聽程式碼，並自動將更新的模組重新打包後渲染出來。
Webpack Dev Server 就是用來實現 HMR 的工具。

### Webpack Dev Server

Webpack 的 watch mode 提供監聽程式碼並重新打包的功能，但無法做到瀏覽器的 live reload (live reload 是 vscode 的 live server 幫我們做的)。
而 Webpack Dev Server 可以同時做到這兩件事情。

Webpack Dev Server 主要做兩件事：

1. 用 node express 起一個 local server
2. 透過 memfs 這個 library，把打包後的檔案留在內存，提升更新效率
