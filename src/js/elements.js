// 用 JS 寫一些 DOM 元素
import '../css/style.css' // 引入 css 檔
import '../css/button.scss' // 引入 scss 檔

const title = document.createElement('h1')
title.innerText = 'Hello, Webpack'
title.className = 'title'

const button = document.createElement('button')
button.innerText = 'Click Me'

document.body.appendChild(title)
document.body.append(button)
