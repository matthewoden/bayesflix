import React from 'react';
import classNames from 'classNames';
import styles from './navigationMenu.css';
import NavigationMenuItem from './navigationMenuItem/';

export default class NavigationMenu extends React.Component {
  displayName: 'Navigation Menu';
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    if(this.props.menuToggle){
      this.props.menuToggle();
    }
  }
  render(){
    let classes = classNames(styles.main, (!this.props.open || styles.open));

    return (
      <div className={classes}>
        <NavigationMenuItem  onMenuToggle={this.closeMenu} linkTo="/search">Search</NavigationMenuItem>
        <NavigationMenuItem onMenuToggle={this.closeMenu} linkTo="/suggestions">Suggestions</NavigationMenuItem>
      </div>
    );
  }
}

NavigationMenu.defaultProps = {
  open: false
};

NavigationMenu.propTypes = {
  open: React.PropTypes.bool
};
