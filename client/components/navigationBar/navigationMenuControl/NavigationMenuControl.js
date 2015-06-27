import React from 'react';
import classNames from 'classNames';
import styles from './navigationMenuControl.css';

export default class NavigationMenuControl extends React.Component {
  displayName: 'NavigationMenuControl';
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.onMenuToggle){
      this.props.onMenuToggle();
    }
  }

  render() {
    var classes = classNames(styles.icon, (!this.props.open || styles.iconActive));
    return(
      <div className={styles.menuControl}>
        <div className={classes} onClick={this.handleClick}>
          <div className={styles.iconInner}/>
        </div>
      </div>
    );
  }
}

