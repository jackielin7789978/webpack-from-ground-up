// 用 JS 寫一些 DOM 元素
import '../css/style.css' // 引入 css 檔

const title = document.createElement('h1')
title.innerText = 'Hello, Webpack'
title.className = 'title'

document.body.appendChild(title)
