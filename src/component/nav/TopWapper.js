import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Nav from './Nav';
import '../../style/nav/TopNav.css';
class TopWapper extends Component {

  render(){
    return (
      <div className="topWapper">
        <Nav />
      </div>
    );
  }
}

export default TopWapper;
