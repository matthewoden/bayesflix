'use strict';

import React from 'react';
import Page from '../../components/page/';
import pageStyles from '../../components/page/page.css';
import type from '../../components/global/typography.css';

export default class PageOne extends React.Component {
    displayName: 'pageOne';

    render () {
        return (
          <Page title="Page One">
            <div className={pageStyles.container}>
              <h1 className={type.pageTitle}>Search</h1>
            </div>
          </Page>
        );
    }
}