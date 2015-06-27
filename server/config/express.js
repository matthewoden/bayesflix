/**
 * Express configuration
 */

'use strict';

var express = require('express');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var path = require('path');
var config = require('./environment');
var request = require('request');


module.exports = function(app) {
  var env = app.get('env');
  app.use(methodOverride());
  app.use(cookieParser());


  if ('production' === env) {
    app.use(favicon(path.join(config.root, 'assets', 'favicon.ico'), 86400000));
    app.use(express.static(path.join(config.root, 'assets')));
    app.set('appPath', config.root + '/assets');
    app.use(morgan('dev'));
  } else {
    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(path.join(config.root, 'assets')));
    app.set('appPath', 'assets');
    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be last
  }
};