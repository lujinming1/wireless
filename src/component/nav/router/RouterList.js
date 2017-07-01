import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {
       BrowserRouter as Router,
       Route,
       Link
     } from 'react-router-dom';

import Home from '../../home/Home';
import Book from '../../book/Book';
import Experiment from '../../experiment/Experiment';

class RouterList extends Component{


  render(){
    return(
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/book" component={Book} />
        <Route path="/experiment" component={Experiment} />
      </div>
    );
  }
}

export default RouterList;
