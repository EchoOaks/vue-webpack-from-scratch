const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/main.js',
	module: {
		rules: [
		  {
			test: /\.vue$/,
			loader: 'vue-loader'
		  },
		  {
			test: /\.js$/,
			loader: 'babel-loader'
		  },
		  {
			test: /\.css$/,
			use: [
			  'vue-style-loader',
			  'css-loader'
			]
		  }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({template: 'src/assets/index.html'}),
		new VueLoaderPlugin()
	]
}
