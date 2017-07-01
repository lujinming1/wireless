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

            <img src={qr_code} className="qrcode" alt="qr_code"/>

          <Nav />
        </div>
      </div>
    );
  }
}

export default FooterWrapper;
