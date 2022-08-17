const path = require('path')

module.exports = {
	mode: 'development', // 開發模式，不壓縮打包檔案
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
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: ['postcss-preset-env'],
							},
						},
					},
				], // 由後往前執行。
			},
			{
				test: /\.s[ac]ss$/i, //目標檔案 .sass or .scss
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: ['postcss-preset-env'],
							},
						},
					},
				],
			},
			{
				test: /\.(jpg|png|svg)$/i,
				type: 'asset', // 指定 module 類型 (webpack 5)，取代 webpack 4 以前的 'url-loader'
				generator: {
					filename: 'imgs/[name]_[hash:4][ext]',
				},
			},
			{
				test: /\.(eot|ttf|ttc|woff2?)$/, //常見字體檔案
				type: 'asset/resource', // 指定 module 類型 (webpack 5)，對應 'file-loader'
				generator: {
					filename: 'font/[name]_[hash:6][ext]', // 命名規則
				},
			},
		],
	},
}
