'use strict';
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');
//basic Hot Loader configuration
var config     = require('./server/config/environment');

new WebpackDevServer(webpack(webpackConfig), {
    publicPath:  "http://localhost:8080/assets/",
    contentBase: "./client",
    hot:         true,
    inline:      true,
    lazy:        false,
    quiet:       true,
    noInfo:      false,
    headers:     {"Access-Control-Allow-Origin": "*"},
    stats:       {colors: true},
    host:        "0.0.0.0",
    historyApiFallback: true
}).listen(9090, config.ip, function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Webpack development server listening on %d, in %s mode.', 9090, process.env.NODE_ENV);
});