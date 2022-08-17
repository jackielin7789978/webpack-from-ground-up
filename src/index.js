import { add } from './js/functions' //引入另一個 js 檔的 function
const greetings = 'Hello Webpack'

console.log(greetings)
console.log(add(3, 7))

// 執行 npm run build 之後，webpack 會幫我們把檔案包成一包
