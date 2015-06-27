'use strict';

import React from 'react';
import Page from '../../components/page/';
import pageStyles from '../../components/page/page.css';
import type from '../../components/global/typography.css';

export default class Home extends React.Component {
    displayName: 'Home';
    render() {
      return (
        <Page title="Home">
          <div className={pageStyles.container}>
            <h1 className={type.pageTitle}>Home</h1>
          </div>
        </Page>
      );
    }
}