import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import data from "../data"

class Reservation extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="content">
          <div className="ic">More Website Templates @ TemplateMonster.com - December 02, 2013!</div>
          <div className="container_12">
            <div className="grid_8">
              <h3>Reserve Your Table</h3>
              <img src={data.imgshiefs[4].image} alt="" className="img_inner fleft"/>
                <div className="extra_wrapper">
                  <p className="col1">Hoivamus at magna non nunc tristiquencus. Fliquam nibh ante, egestas id dictum
                    modo luctus libero. Praesent faucibus malesuad faucibu. </p>
                  <p>Dorem ipsum dolor sit amet, consecteturer adipiscing elit. Nullam consectetur orci se nulla
                    facilisis consequat. Kurabitur vellore sit amet nulla ullamcorper ermentum. In vitae varius
                    auguem.</p>
                </div>
                <p>Gamus at magna non nunc tristique rhoncus. Aliquam nibh ante, egestas id dictum ammodo luctus libero.
                  Praesent faucibus malesuada faucibus. Forem ipsum dolor sit ametconsectetur adipiscing elit. <span
                    className="cont_phone">For Parties call (023) 101-1100</span> . Nullam consectetur orci sed. </p>
                Murabitur vel lorem sit amet nulla ullamcorper fermentum. In vitae varius augue, eu consectetur ligula.
                Etiam dui eros. <span className="cont_phone">For Parties call (023) 101-1100</span> <br/>
                <Link to="#" className="reserv"><span>@ </span> Click here to Make Link reservation Online</Link>
            </div>
            <div className="grid_4">
              <div className="hours">
                <div className="title">Our Hours</div>
                <div>
                  Lunch<br/>
                  Tues - Sat 11:45 am - 2:30 pm<br/>
                  Brunch<br/>
                  Sunday 10:30 am - 2 pm<br/>
                  Cafe Dinner<br/>
                  Sun - Fri 5:30 pm - 9:00 pm<br/>
                  Prix Fixe Dinner<br/>
                  Saturday 5:30 pm - 9:00 pm<br/>
                  Greens to Go<br/>
                  Mon - Thurs 8:30 am - varies <br/>
                </div>
              </div>
              <h3 className="head3">Our news</h3>
              <div className="news">
                <time dateTime="2013-01-01">Sept<span>04</span></time>
                <div className="extra_wrapper">
                  <p className="col1"><Link to="#">Fliquam nibh ante, egestas id </Link></p>In vitae varius auguemonsectetur
                  ligulatiam dui eros, laoreet sit
                </div>
              </div>
              <div className="news">
                <time dateTime="2013-01-01">Oct<span>08</span></time>
                <div className="extra_wrapper">
                  <p className="col1"><Link to="#">Fliquam nibh ante, egestas id </Link></p>In vitae varius auguemonsectetur
                  ligulatiam dui eros, laoreet sit
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Reservation;