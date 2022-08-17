const path = require('path')

module.exports = {
	entry: './src/index.js', // 指定 webpack 打包入口點
	output: {
		filename: 'js/main.js', // 指定打包後的檔名
		path: path.resolve(__dirname, 'dist'), // 因為這邊必須寫絕對路徑，所以通常會借助於 node 的 path.resolve 來拼接路徑 (__dirname 是目前路徑)
	},
	module: {
		// loader 設定都寫在這
		rules: [
			{
				test: /\.css$/i, // 正則表達式指定匹配檔案
				use: ['style-loader', 'css-loader'], // 由後往前執行。先執行負責解析 css 的 'css-laoder'，再執行負責把樣式掛到 DOM 上的 'style-loader'
			},
		],
	},
}
