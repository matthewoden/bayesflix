'use strict';
var path = require('path');

module.exports = {
  client:{
    path: path.resolve(__dirname, '../assets/public'),
    publicPath:'/assets/',
    filename: '[name].js',
    chunkFilename:'[name].js'
  },

  server:{
    path: path.resolve(__dirname, '../assets/prerender'),
    publicPath:'/assets/',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
   },
};
