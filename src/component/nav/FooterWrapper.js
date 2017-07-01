import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Nav from './Nav';
import '../../style/nav/FooterWrapper.css';

import qr_code from '../../images/qr_code.png';

class FooterWrapper extends Component {

  render(){
    return (
      <div className="footerWrapper">
        <div className="footer">
          <Nav />
          <div className="footerqrcode">
            <img src={qr_code} className="qrcode" alt="qr_code"/>
          </div>
          <hr />
          <div className="copyright">
            <span className="text">
              版权公告 版权所有。
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterWrapper;
