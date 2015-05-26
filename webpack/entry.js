'use strict';
var env = require('./utils').env;

module.exports = env({
  develop: {
    vendor: [
    'react',
    'react-router',
    'amplify-store'
    ],
    app: [
      'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server',
      './app/Index.js',
      ],
    },

  production: {
      vendor: [
      'react',
      'react-router',
      'amplify-store',
      ],
      app: [ './app/Index.js'],
    },

  prerender: {
      app: [ './app/Routes.js'],
    },
});
