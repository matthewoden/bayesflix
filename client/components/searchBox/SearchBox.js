import React from 'react';
import style from './searchBox.css';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input type="text" className={style.main} placeholder="Search for a Movie Here"/>
      );
  }
}

export default SearchBox;