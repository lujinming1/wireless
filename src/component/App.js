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
import RouterList from './nav/router/RouterList';


const customHistory = createBrowserHistory();

class App extends Component {

  constructor(props){
    super(props);
    this.navOn = this.navOn.bind(this);
    this.navOff = this.navOff.bind(this);
  }

  navOn(){
    return function(){
      var wrapper = this.wrapper;
      wrapper.className = "wrapper wrapperNavOn";
    }.bind(this);
  }

  navOff(){
    return function(){
      var wrapper = this.wrapper;
      wrapper.className = "wrapper wrapperNavOff";
    }.bind(this);
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Router history={customHistory}>
            <div className="router-div">
              <TopWapper navOn={this.navOn()} navOff={this.navOff()}/>
              <div ref={(wrapper) => {this.wrapper = wrapper}} className="wrapper wrapperNavOff">
                <RouterList />
              </div>

              <FooterWrapper />



          </div>


        </Router>

      </div>
    );
  }
}

export default App;
