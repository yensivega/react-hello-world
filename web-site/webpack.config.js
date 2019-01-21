var path = require('path');
var HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './app/index.js',
	watch: true,
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_boundle.js'
	},
	module: {
		rules: [
			{ test: /\.(js)$/, use: 'babel-loader'},
			{ test: /\.css$/, use: ['style-loader', 'css-loader' ]}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: 'app/index.html'
		})
	]
};