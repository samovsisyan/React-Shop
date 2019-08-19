import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import data from "../data";

class Blog extends Component {
  render() {
    const {blog} = data
    return (
      <div>
        <Header/>
          <div className="content">
            <div className="ic">More Website Templates @ TemplateMonster.com - December 02, 2013!</div>
            <div className="container_12">
              <div className="grid_8">
                <h3 className="">Blog</h3>
                <div className="post">
                  <img src={data.blog[0].image} alt="" className="img_inner fleft"/>
                    <div className="extra_wrapper">
                      <div className="title col3"><Link to="#">Fusce adipiscing quam id risusyn </Link></div>
                      <p className="col1">
                        <time dateTime="2013-01-01">22.10.2013</time>
                        <span></span>posted by
                        <Link to="#">admin</Link><span></span><Link to="#">comments:5</Link>
                      </p>
                      Etiam dui eros, laoreet sit amet est vel,odo venenatis eros. Fusce adipiscing quam id risus
                      sagittis, non consequaty lacus terdm. Proin ut tincidunt nulla, eu sodales arcum. Quisque viverra
                      nulla nunc, eu ultrices. libero ultricies egehasellus.
                      <br/>
                        <Link to="#" className="link1">More Info</Link>
                    </div>
                </div>
                <div className="post">
                  <img src={data.blog[1].image} alt="" className="img_inner fleft"/>
                    <div className="extra_wrapper">
                      <div className="title col3"><Link to="#">Piscing quam id risusyn sagittisyl</Link></div>
                      <p className="col1">
                        <time dateTime="2013-01-01">18.10.2013</time>
                        <span></span>posted by
                        <Link to="#">admin</Link><span></span><Link to="#">comments:3</Link>
                      </p>
                      Jtiam dui eros, laoreet sit amet est vel,odo venenatis eros. Musce adipiscing quam ill risus
                      sagittis, non consequat lacus terdo. Droin ut tincidunt nulla, eu sodales arcu. Quisque viverra
                      nulla nunc, eu ultrice. libero ultricies egehasellus dertoli.
                      <br/>
                        <Link to="#" className="link1">More Info</Link>
                    </div>
                </div>
                <div className="post">
                  <img src={data.blog[2].image} alt="" className="img_inner fleft"/>
                    <div className="extra_wrapper">
                      <div className="title col3"><Link to="#"/></div>
                      <p className="col1">
                        <time dateTime="2013-01-01">16.10.2013</time>
                        <span></span>posted by
                        <Link to="#">admin</Link><span></span><Link to="#">comments:2</Link>
                      </p>
                      Viam dui eros, laoreet sit amet est vel,odot venenatis eros. Busce adipiscing quam ko risus
                      sagittis, non consequati lacus terdy. Oroin ut tincidunt nulla, eu sodales arcum. Buisque viverra
                      nulla nunc, eu ultrice. libero ultricies egehasellus molotiko.
                      <br/>
                        <Link to="#" className="link1">More Info</Link>
                    </div>
                </div>
              </div>
              <div className="grid_3 prefix_1">
                <h3 className="head3">Categories</h3>
                <ul className="list">
                  <li><Link to="#">Aurabitur Mellore Jito</Link></li>
                  <li><Link to="#">Kou Monsectetur Gigula</Link></li>
                  <li><Link to="#">Nui eros Vaoreet Dit Sawstvel</Link></li>
                  <li><Link to="#">Commodo Venenatis Erossce </Link></li>
                  <li><Link to="#">Nedipiscing Muam id Risus</Link></li>
                  <li><Link to="#">Ittis Consequat Lacus </Link></li>
                  <li><Link to="#">Onterdumoin ut </Link></li>
                  <li><Link to="#">Mincidunt Тullau Sodales </Link></li>
                  <li><Link to="#">Buisque Viverra nulla </Link></li>
                  <li><Link to="#">Ultrices Libero Ultricieeget.</Link></li>
                  <li><Link to="#">Phasellus Accumsan Justo </Link></li>
                </ul>
                <h3 className="head3">Archives</h3>
                <ul className="list">
                  <li><Link to="#">November - 2013</Link></li>
                  <li><Link to="#">October - 2013</Link></li>
                  <li><Link to="#">September - 2013</Link></li>
                  <li><Link to="#">August - 2013</Link></li>
                  <li><Link to="#">July-2013</Link></li>
                  <li><Link to="#">June-2013</Link></li>
                </ul>
              </div>
            </div>
          </div>
        <Footer/>
        </div>
      );
    }
    }

export default Blog;