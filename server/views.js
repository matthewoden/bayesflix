'use strict';
//React
import fs from 'fs';
import React from 'react';
import Router from 'react-router';
import DocumentTitle from 'react-document-title';

import Routes from '../assets/prerender/app';
import Html from '../client/components/fullPage/';
import Stats from '../client/stats.json';

let css;

fs.readFile('./assets/public/app.css', 'utf8', function (err, data) {
  if (err) {
    console.log(err);
  }
  css = data;
});


module.exports = function(req, res, next) {
  Router.run(Routes, req.url, function (Handler, state) {
    var chunk = req.url === "/" ? 'home' : req.url.split('/')[1];
    var title  = DocumentTitle.rewind();
    var markup = React.renderToString(<Handler />);
    var initialProps = {data:true}; //todo, fetch props, stringify.
    var html   = React.renderToStaticMarkup(<Html
                                            title={title}
                                            hash={Stats.hash}
                                            css={css}
                                            initialProps={JSON.stringify(initialProps)}
                                            chunk={chunk}
                                            markup={markup} />);
    res.send('<!DOCTYPE html>' + html);
  });
};

