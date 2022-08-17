// 用 JS 寫一些 DOM 元素
import '../css/style.css' // 引入 css 檔
import '../css/button.scss' // 引入 scss 檔

const title = document.createElement('h1')
title.innerText = '我是台北黑體，我好看嗎' //測試一下剛才引入的中文字型
title.className = 'title'

const title2 = document.createElement('h2')
title2.innerHTML = '我是源泉圓體，我真可愛' //測試另一種字型
title2.className = 'title2'

const button = document.createElement('button')
button.innerText = '按一下'

document.body.appendChild(title)
document.body.appendChild(title2)
document.body.append(button)
