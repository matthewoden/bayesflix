'use strict';

import React from 'react';
import Page from '../../components/page/';
import pageStyles from '../../components/page/page.css';
import type from '../../components/global/typography.css';

export default class PageTwo extends React.Component {
    displayName: 'pageTwo';
    render() {
        return (
          <Page title="Page Two">
            <div className={pageStyles.container}>
              <h1 className={type.pageTitle}>Suggestions</h1>
            </div>
          </Page>
        );
    }
}