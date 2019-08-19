import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

class Contacts extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="content contact">
          <div className="container_12">
            <div className="grid_12">
              <div id="map"/>
            </div>
            <div className="clear"/>
            <div className="grid_4">
              <h3 className="head3">Address</h3>
              <div className="map">
                <address>
                  <dl>
                    <dt>The Company Name Inc. <br/>
                      8901 Marmora Road,<br/>
                      Glasgow, D04 89GR.
                    </dt>
                    <dd><span>Freephone:</span>+1 800 559 6580</dd>
                    <dd><span>Telephone:</span>+1 800 603 6035</dd>
                    <dd><span>FAX:</span>+1 800 889 9898</dd>
                    <dd>E-mail: <Link to="#" className="col2">mail@demolink.org</Link></dd>
                    <dd>Skype: <Link to="#" className="col2">@skypename</Link></dd>
                  </dl>
                </address>
                <p>We’re glad to provide support services for all <Link
                  to="http://www.templatemonster.com/website-templates.php" rel="nofollow" className="col2">premium
                  designs</Link>
                  that we produce. The goodies that are available for free (free templates) go without support. </p>
                If you’re looking for some professionals to help you polish the chosen free theme, address to <Link
                to="http://www.templatetuning.com/" rel="nofollow" className="col2">Template Tuning </Link>
                guys for help. Please note that it’s Link paid service.
              </div>
            </div>
            <div className="grid_8">
              <h3 className="head3">Contact Form</h3>
              <form id="form">

                <div className="success_wrapper">
                  <div className="success-message">Contact form submitted</div>
                </div>
                <label className="name">
                  <input type="text" placeholder="Name:" data-constraints="@Required @JustLetters"/>
                  <span className="empty-message">*This field is required.</span>
                  <span className="error-message">*This is not Link valid name.</span>
                </label>

                <label className="email">
                  <input type="text" placeholder="E-mail:" data-constraints="@Required @Email"/>
                  <span className="empty-message">*This field is required.</span>
                  <span className="error-message">*This is not Link valid email.</span>
                </label>
                <label className="phone">
                  <input type="text" placeholder="Phone:" data-constraints="@Required @JustNumbers"/>
                  <span className="empty-message">*This field is required.</span>
                  <span className="error-message">*This is not Link valid phone.</span>
                </label>
                <label className="message">
                  <textarea placeholder="Message:" data-constraints='@Required @Length(min=20,max=999999)'/>
                  <span className="empty-message">*This field is required.</span>
                  <span className="error-message">*The message is too short.</span>
                </label>
                <div>
                  <div className="clear"/>
                  <div className="btns">
                    <Link to="#" data-type="reset" className="btn">Clear</Link>
                    <Link to="#" data-type="submit" className="btn">Send</Link></div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default Contacts;