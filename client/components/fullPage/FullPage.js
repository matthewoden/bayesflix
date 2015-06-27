'use strict';
import React from 'react';

class FullPage extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>{this.props.title}</title>
          <meta name="description" content=""/>
          <meta name="viewport" content="width=device-width"/>
          <link rel="stylesheet" type="text/css" href={"/assets/app.css"}/>
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}/>
          <script src={"/assets/app.js"}></script>
        </body>
      </html>
    );
  }
}

export default FullPage;