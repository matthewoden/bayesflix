'use strict';
var express      = require('express');
var path         = require('path');
var views        = require('./views')

//application routes
module.exports = function(app) {
  //application routes
  app.use('/api/movies', require('./api/movies'));

  //client side assets
  app.use('/assets', express.static(path.join(__dirname,'../assets/public')));
  app.use('*', views);
};
