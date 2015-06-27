'use strict';

//utils
var makeStats = require('./utils').makeStats;

//plugins
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Clean = require('clean-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");
var prodPlugins = [];
var gzipPlugin = [];
if(process.env.NODE_ENV === "production"){
  prodPlugins = [
    new webpack.DefinePlugin(
      { 'process.env': { 'NODE_ENV': JSON.stringify('production') }
    }),
    //minify everything
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    ];

    gzipPlugin = [
    new CompressionPlugin({
      asset: "{file}.gz",
      algorithm: "gzip",
      regExp: /\.js$|\.html$|\.css$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    ];
}

module.exports = {
  client:[
    //clean out assets directory.
    //new Clean(['../assets']), //Clean out build directory
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    //no repeats
    new webpack.optimize.DedupePlugin(),
    //get hashed css
    new ExtractTextPlugin('[name].css'),
    //Create Statsfile (needed for prerender);
    makeStats
  ].concat(prodPlugins.concat(gzipPlugin)),

  server:[new webpack.optimize.DedupePlugin()].concat(prodPlugins),
};


