import React, {Component} from 'react';

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import About from "./pages/About"
import Blog from "./pages/Blog"
import Reservation from "./pages/Reservation"
import Contacts from "./pages/Contacts"

import {
  BrowserRouter, Route, Switch
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/menu" component={Menu}/>
          <Route path="/" exact component={Home}/>
          <Route path="/cart" exact component={Cart}/>
          <Route path="/about" exact component={About}/>
          <Route path="/blog" exact component={Blog}/>
          <Route path="/reservation" exact component={Reservation}/>
          <Route path="/contacts" exact component={Contacts}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
