import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {
       BrowserRouter as Router,
       Route,
       Link
     } from 'react-router-dom';

import Nav from './Nav';
import '../../style/nav/TopNav.css';
class TopWapper extends Component {

  constructor(props){
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }


    handleMouseOver(event){
      var cur_elem = event.currentTarget;
      cur_elem.className = "hover";
      cur_elem.children[1].style.display = 'block';

      this.props.navOn();


    }

    handleMouseOut(event){
      var cur_elem = event.currentTarget;
      cur_elem.className = "";
      cur_elem.children[1].style.display = 'none';

      this.props.navOff();

    }

    
  render(){
    return (
      <div className="topWapper" >

            <div className="nav nav_static"  >
              <ul className="menu">
                <li><Link className="link" to="/"><span>首页</span></Link></li>

                <li onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                  <span>教材与电子资源</span>
                  <div className="submenuWrapper">
                    <div className="submenuContainer">
                      <ul className="submenu">
                        <li><Link className="link" to="/book/Our">关于我们</Link></li>
                        <li><Link className="link" to="/book/BookIndex">课程简介</Link></li>
                        <li><Link className="link" to="/book/BookOverview">教材概览</Link></li>
                        <li><Link className="link" to="/book/BookResource">电子资源</Link></li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    <span>实验室教学系统</span>
                    <div className="submenuWrapper">
                      <div className="submenuContainer">
                        <ul className="submenu">
                          <li><Link className="link" to="/experiment/EOur">关于我们</Link></li>
                          <li><Link className="link" to="/experiment/ExperimentConstruct">实验教学系统的组成</Link></li>
                          <li><Link className="link" to="/experiment/ExperimentUser">实验教学系统的用户对象</Link></li>
                          <li><Link className="link" to="/experiment/ExperimentMotive">开发实验系统的动机和目的</Link></li>
                        </ul>
                        <ul className="submenu">
                          <li><Link className="link" to="/experiment/ExperimentSuperiorit">实验教学系统的优势</Link></li>
                          <li><Link className="link" to="/experiment/ExperimentItem">实验项目介绍</Link></li>
                          <li><Link className="link" to="/experiment/ExperimentCase">实验教学实例</Link></li>
                          <li><Link className="link" to="/experiment/ExperimentPlan">实验学时和学期安排</Link></li>
                        </ul>
                        <ul className="submenu">
                          <li><Link className="link" to="/experiment/ExperimentCommunity">无线网络技术教学社区</Link></li>
                          <li><Link className="link" to="/experiment/ExperimentBuy">多功能实验箱购买</Link></li>
                        </ul>
                      </div>
                    </div>

                </li>

                <li>
                    <li><Link className="link" to="/question"><span>常见问题</span></Link></li>
                </li>

              </ul>
            </div>
      </div>
    );
  }
}

export default TopWapper;
