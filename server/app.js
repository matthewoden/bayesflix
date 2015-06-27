'use strict';
require("babel/register");
// Set default node environment to development
process.env.NODE_ENV =  process.env.NODE_ENV || 'develop';
var config     = require('./config/environment');
var express    = require('express');
var mongoose   = require('mongoose');
var livereload = require('livereload');
var path = require('path');
//dev server
var app = express();

var server = livereload.createServer();
server.watch(path.resolve(__dirname+"/../assets"));

app.use(require('connect-livereload')());

//config
require('./config/express')(app)
//api
require('./routes')(app);
// handle database connections.
// uncomment below to use mongo, and mongodb logging.
// require('./db')();

app.listen(config.port, config.ip, function() {
  console.log('Express server listening on %d, in %s mode.', config.port, app.get('env'));
});

