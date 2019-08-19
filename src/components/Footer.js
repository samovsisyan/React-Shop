import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container_12">
          <div className="grid_6 prefix_3">
            <Link to="/" className="f_logo">
              <img src="/images/logo.png" alt=""/>
            </Link>
            <div className="copy">
              &copy; 2013 |
              <Link to="#">Privacy Policy</Link> <br/> Website Developed by
              <a href="https://www.facebook.com/haykbernetsyan.5" rel="nofollow" target="_blank"> Hayk Bernetsyan</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
