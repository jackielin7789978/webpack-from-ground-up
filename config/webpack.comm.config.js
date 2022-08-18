const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack') // 引入 webpack 內建的方法
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
	entry: './src/index.js', // 指定 webpack 打包入口點
	output: {
		filename: 'js/main.js', // 指定打包後的檔名
		path: path.resolve(__dirname, '../dist'), // 因為這邊必須寫絕對路徑，所以通常會借助於 node 的 path.resolve 來拼接路徑 (__dirname 是目前路徑)
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../src'), // 設定路徑別名
		},
		extensions: ['.js', '.json', '.wasm', '.vue'], // 這邊的檔案類型引入時不必寫副檔名
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
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader', // 使用 babel
					// 這整塊 options 可以另外寫成 .babel.config.js，設定很多的時候可以考慮獨立出去
					options: {
						presets: ['@babel/preset-env'], // 指定預設 (類似插件集)，裡面包含所有常見的 JS 語法轉換插件
					},
				},
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack + Vue3', //自訂 html title
			template: 'index.html', //指定模板
		}),
		new DefinePlugin({
			BASE_URL: "'./'", // 填充到 ejs html 模板中
			__VUE_OPTIONS_API__: true, //根據 devtools 報的 feature flag 警告，加上這兩個設定
			__VUE_PROD_DEVTOOLS__: false,
		}),

		new VueLoaderPlugin(),
	], //插件通常會 export 出一個 class，在這邊 new 一個新的實例出來就可以使用
}
