import React, { Component } from 'react';
import {
       BrowserRouter as Router,
       Route,
       Link
     } from 'react-router-dom';

import logo from '../images/logo.PNG';
import '../style/App.css';
import createBrowserHistory from 'history/createBrowserHistory';


import Home from './Home';
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
            <div className="nav nav_static">
              <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li>
                  <span>Book</span>
                  <div>
                    <ul>
                      <li><Link to="/book">Book</Link></li>
                    </ul>
                  </div>


                </li>
                <li><Link to="/experiment">Experiment</Link></li>
              </ul>
            </div>

            <div>
            <Route exact path="/" component={Home} />
            <Route path="/book" component={Book} />
            <Route path="/experiment" component={Experiment} />
            </div>

          </div>
        </Router>

      </div>
    );
  }
}

export default App;
