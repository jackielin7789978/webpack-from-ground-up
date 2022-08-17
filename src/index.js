import './js/elements' //必須在入口處引入用到的檔案，webpack 才會把它納入打包依賴中

// 寫一些 ES6 語法給 Babel 轉譯
const message = 'hello Babel'
const greeting = (msg) => console.log(msg)
greeting(message)
