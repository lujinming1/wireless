import React, { Component } from 'react';
import {
       BrowserRouter as Router,
       Route,
       Link
     } from 'react-router-dom';

import logo from '../images/logo.PNG';
import '../style/App.css';
import createBrowserHistory from 'history/createBrowserHistory';

import TopWapper from './nav/TopWapper';
import FooterWrapper from'./nav/FooterWrapper';
import Home from './home/Home';
import Book from './book/Book';
import Experiment from './experiment/Experiment';






const customHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Router history={customHistory}>
            <div className="router-div">
              <TopWapper />
              <div className="wrapper wrapperNavOff">
                <Route exact path="/" component={Home} />
                <Route path="/book" component={Book} />
                <Route path="/experiment" component={Experiment} />
              </div>

              <FooterWrapper />



          </div>


        </Router>

      </div>
    );
  }
}

export default App;
