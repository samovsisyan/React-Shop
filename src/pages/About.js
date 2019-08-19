import React, {Component} from 'react';
import Header from '../components/Header'
import {Link} from "react-router-dom";
import data from "../data";
import Footer from "../components/Footer";

class About extends Component {
  constructor(props){
    super(props)
    this.state={
      image: data.imgshiefs.image,
    }
  }


  render() {
    return (
      <div>
        <Header/>
        <div className="content">
          <div className="ic">More Website Templates @ TemplateMonster.com - December 02, 2013!</div>
          <div className="container_12">
            <div className="grid_8">
              <h3>About Us</h3>
              <img src={data.imgshiefs[4].image} alt="" className="img_inner fleft"/>
                <div className="extra_wrapper">
                  <p className="col1">Following the <span><Link to="http://blog.templatemonster.com/free-website-templates/" rel="dofollow">link</Link></span>, you’ll learn more about this goodie produced by <br/> TemplateMonster.com.</p>
                  <p className="col1">Want to get more designs of this kind? Check out the category of premium <span><Link to="http://www.templatemonster.com/category/cafe-and-restaurant-website-templates/" rel="nofollow">Cafe &amp; Restaurant templates</Link></span>.</p>
                  <p>Aliquam nibh ante, egestas id dictum modo luctus libero. Praesent faucibus malesorem ipsum dolor sit amet, consecteturer. </p>
                </div>
                at magna non nunc tristique rhoncus. Aliquam nibh ante, egestas id dictum ammodo luctus libero. Praesent
                faucibus malesuada faucibus. Lorem ipsum dolor sit ametconsectetur adipiscing elit. Nullam consectetur
                orci sed nulla facilisis consequat.
            </div>
            <div className="grid_4">
              <h3>Features</h3>
              <p className="col1 pad1">Magna non nunc tristiquencus. Aliquam nibh ante, egestas id dictum modo luctus
                libero. </p>
              <p className="pad1">Dolor sit amet, consectetureripiscingelit. Nullam consectetur orci se nullafaci.</p>
              <ul className="list">
                <li><Link to="#">Curabitur Vellore Sit</Link></li>
                <li><Link to="#">Eu Consectetur Ligula</Link></li>
                <li><Link to="#">Dui eros Laoreet Sit amet </Link></li>
                <li><Link to="#">Estvel Dertolino</Link></li>
                <li><Link to="#">Commodo Venenatis Erossce</Link></li>
                <li><Link to="#">Adipiscing Quam id Risus </Link></li>
                <li><Link to="#">Sagittis Consequat Lacus </Link></li>
                <li><Link to="#">Onterdumoin ut </Link></li>
              </ul>
            </div>
            <div className="grid_12">
              <h3 className="head1">The Best of Professionals</h3>
            </div>
            {data.imgshiefs.map((value)=>(
              <div className="grid_3">
                <div className="box maxheight">
                  <img src={value.image} alt=""/>
                  <div className="title"><Link to="#">{value.name}</Link></div>
                  {value.text}
                </div>
              </div>
            ))}
          </div>
          </div>
        <Footer/>
      </div>
    );
  }
}
export default About;