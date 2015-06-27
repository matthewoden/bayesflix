'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonLoaders = [
{
  test: /\.jsx?$/,
  loaders: ['babel-loader'],
  exclude: /node_modules/,
},
{ test: /\.png$/, loader: 'url-loader' },
// Copy precomposed image files over to assets path
{ test: /.*precomposed\.png$/, loader: 'file-loader?name=images/[name].[ext]'},
{ test: /\.jpg$/, loader: 'file-loader' },
{ test: /\.json$/, loader: 'json' }
];

module.exports = {
  client: {
    loaders:commonLoaders.concat(
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader','css-loader?modules&&localIdentName=[name]_[local]!postcss'),
    })
  },
  server: {
    loaders: commonLoaders.concat({
      test: /\.css$/,
      loader: 'css/locals?modules&&localIdentName=[name]_[local]!postcss'
    }),
  }
};


