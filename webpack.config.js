var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [ 
		'webpack-dev-server/client?http://0.0.0.0:8082', // WebpackDevServer host and port
	  	'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
	  	'./entry.js' // Your appʼs entry point
	],
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ 
				test: /\.css$/,
				loader: "style!css"
			},
			//{ test: /\.jsx?$/, loader: ['react-hot', 'jsx?harmony'], include: path.join(__dirname) },
			{
			      test: /\.jsx?$/,
			      exclude: /(node_modules|bower_components)/,
			      loader: 'babel'
			}
			//{ test: /\.js?$/, loaders: ['babel'], include: path.join(__dirname) }
		]
	},
	plugins: [
	  new webpack.HotModuleReplacementPlugin()
	]
}