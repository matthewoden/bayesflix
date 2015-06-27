'use strict';
import React from 'react';
import DocumentTitle from 'react-document-title';
import styles from './page.css';

export default class Page extends React.Component {
  render(){
    return(
      <DocumentTitle title={this.props.title + (this.props.footer || " | React Seed")}>
        <div className={styles.page}>
          {this.props.children}
        </div>
      </DocumentTitle>
      );
  }
}