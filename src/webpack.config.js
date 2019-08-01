var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		main: './script/app.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].bundle.js',
		chunkFilename: '[id].chunk.js'
	},
	module : {
		rules : [
			{
				test: /\.styl$/,
				use: [
					{
						loader: "style-loader" // creates style nodes from JS strings
					},
					{
						loader: "css-loader" // translates CSS into CommonJS
					},
					{
						loader: "stylus-loader" // compiles Stylus to CSS
					}
				]
			},
			//{
			//	test: /\.js$/,
			//	exclude: [/node_modules/],
			//	use: {
			//		loader: "babel-loader"
			//	}
			//},
			//{
			//	test: /\.ts$/,
			//	loaders: [
			//		'babel-loader',
			//		{
			//			loader: 'awesome-typescript-loader',
			//			options: {
			//				configFileName: 'tsconfig.json'
			//			}
			//		},
			//		'angular2-template-loader',
			//		'angular-router-loader'
			//	],
			//	exclude: [/node_modules/]
			//},
			{
				test: /\.html$/,
				loader: 'html-loader'
			}
		]
	},
	optimization: {
		noEmitOnErrors: true
		//splitChunks: {
		//	cacheGroups: {
		//		vendors: {
		//			test: /[\\/]node_modules[\\/]/,
		//			priority: -10
		//		},
		//		default: {
		//			minChunks: 2,
		//			priority: -20,
		//			reuseExistingChunk: true
		//		}
		//	}
		//}
	},
	plugins : [
	  new HtmlWebpackPlugin({
		hash     : false,
		inject   : 'head',
		template : './script/index.html'
	  })
	]
};