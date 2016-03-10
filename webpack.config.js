module.exports = {
	entry: __dirname + '/app/main.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	devtool: 'eval-source-map',
	devServer: {
		contentBase: './public',
		colors: true,
		historyApiFallback: true,
		inline: true
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json',
				exclude: 'node_modules'
			},
			{
				test: /\.js$/,
				exclude: 'node_modules',
				loader: 'babel',
				query: {
					presets: [ 'es2015', 'react' ]
				}
			}
		]
	}
}