import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
       BrowserRouter as Router,
       Route,
       Link
     } from 'react-router-dom';



class Nav extends Component {

  render(){

    return (

      <div className="nav nav_static">
        <ul className="menu">
          <li><Link className="link" to="/"><span>首页</span></Link></li>

          <li >
            <span>教材与电子资源</span>
            <div className="submenuWrapper">
              <div className="submenuContainer">
                <ul className="submenu">
                  <li><Link className="link" to="">关于我们</Link></li>
                  <li><Link className="link" to="">课程简介</Link></li>
                  <li><Link className="link" to="">教材概览</Link></li>
                  <li><Link className="link" to="">电子资源</Link></li>
                </ul>
              </div>
            </div>
          </li>

          <li>
              <span>实验室教学系统</span>
              <div className="submenuWrapper">
                <div className="submenuContainer">
                  <ul className="submenu">
                    <li><Link className="link" to="">关于我们</Link></li>
                    <li><Link className="link" to="">实验教学系统的组成</Link></li>
                    <li><Link className="link" to="">实验教学系统的用户对象</Link></li>
                    <li><Link className="link" to="">开发实验系统的动机和目的</Link></li>
                  </ul>
                  <ul className="submenu">
                    <li><Link className="link" to="">实验教学系统的优势</Link></li>
                    <li><Link className="link" to="">实验项目介绍</Link></li>
                    <li><Link className="link" to="">实验教学实例</Link></li>
                    <li><Link className="link" to="">实验学时和学期安排</Link></li>
                  </ul>
                  <ul className="submenu">
                    <li><Link className="link" to="">无线网络技术教学社区</Link></li>
                    <li><Link className="link" to="">多功能实验箱购买</Link></li>
                  </ul>
                </div>
              </div>

          </li>

          <li>
              <li><Link className="link" to="/"><span>常见问题</span></Link></li>
          </li>

        </ul>
      </div>
    );

  }
}


export default Nav;
