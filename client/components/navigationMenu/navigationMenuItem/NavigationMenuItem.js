import React from 'react';
import { Link } from 'react-router';
import styles from './navigationMenuItem.css';

class NavigationItem extends React.Component {
  displayName: 'NavigationItem';
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if(this.props.onMenuToggle){
      this.props.onMenuToggle();
    }
  }

  render() {
    return(
      <Link
        activeClassName={styles.itemActive}
        onClick={this.handleClick}
        className={styles.item}
        brand={this.props.brand}
        to={this.props.linkTo}>
          {this.props.children}
      </Link>
    );
  }
}

NavigationItem.defaultProps = {
  brand: false
};

NavigationItem.propTypes = {
  brand: React.PropTypes.bool,
  linkTo: React.PropTypes.string.isRequired,
};

export default NavigationItem;