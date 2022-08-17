import './css/style.css'
// 改用 Vue 來開發吧
import { createApp } from 'vue/dist/vue.esm-bundler.js' // 指定使用這個版本的 vue，才會對 template 進行編譯

// 寫一個極簡單的 vue app
const app = createApp({
	template: `
        <h1>你好，我是 {{ name }}</h1>
    `,
	data() {
		return {
			name: 'Vue',
		}
	},
})

app.mount('#app')
