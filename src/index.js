import './css/style.css'
// 改用 Vue 來開發吧
import { createApp } from 'vue/dist/vue.esm-bundler.js' // 指定使用這個版本的 vue，才會對 template 進行編譯

// 寫一個極簡單的 vue app
const app = createApp({
	template: `
        <h1>你好，我是 {{ name }}</h1>
		<p>使用 Webpack Dev Server 達成 Hot Module Reload 超簡單</p>
		<p>只要 npm install -D webpack-dev-server</p>
		<p>然後在 package.json 多加一個腳本 "dev": "webpack serve" 就可以了</p>
    `,
	data() {
		return {
			name: 'Vue',
		}
	},
})

app.mount('#app')
