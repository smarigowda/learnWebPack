var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var port = 8082;
var compiler = webpack(config);

new WebpackDevServer(compiler, {
	publicPath: config.output.publicPath,
	stats: { color: true },
	hot: true
}).listen(port, 'localhost', function(err, result) {
	if( err ) {
		console.log(err)
	} 
	console.log('listening at localhost port ' + port);
});