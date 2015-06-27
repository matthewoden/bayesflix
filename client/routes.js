'use strict';
import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

//Components
var App = require('./containers/app/');
var Home = require('./containers/home/');
var Search =  require('./containers/search/');
var Suggestions = require('./containers/suggestions/');

export default (
      <Route handler={ App } path="/" >
        <DefaultRoute handler={ Home } />
        <Route path="/search" handler={ Search } />
        <Route path="/suggestions" handler={ Suggestions } />
        <NotFoundRoute handler={ Home } />
      </Route>
    );