import React from 'react';
import { Link } from 'react-router';
import NavigationMenuControl from './navigationMenuControl/';
import SearchBox from '../searchBox/';

import styles from './navigationBar.css';

export default class Navigation extends React.Component {
  displayName: 'Navigation';
  constructor(props){
    super(props);
    this.state = { open: false };
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleMenuToggle() {
    this.setState({open:!this.state.open});
  }

  closeMenu(){
    this.setState({open:false});
  }

  render() {
    return(
    <div className={styles.outer}>
      <div className={styles.inner}>
        <NavigationMenuControl onMenuToggle={this.handleMenuToggle} open={this.state.open}/>
        <Link onClick={this.closeMenu} className={styles.brand} to="/">
          Bayes Flix
        </Link>
        <SearchBox/>
        <div className={styles.clearfix}/>
      </div>
    </div>
    );
  }
}