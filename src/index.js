// 最常見的開發模式 vue SFC
import { createApp } from 'vue' // 預設使用 'vue.runtime.esm-bundler.js'
import App from './App'

// 傳入 root component App
const app = createApp(App)
app.mount('#app')
