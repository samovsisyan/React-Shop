import React, {Component} from 'react';
import {getCart, getTotal, getTotalProducts} from "../helper/cart";
import Emitter from "../helper/Emitter";
import {Link} from "react-router-dom";
import data from "../data";

export default class HeaderCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCount: getTotalProducts(),
      total: getTotal(),
      open: false,
    }

    Emitter.add('UPDATE_CART', this.cartUpdate)
  }

  cartUpdate = () => {
    this.setState({
      totalCount: getTotalProducts(),
      total: getTotal(),
    })
  }
  divopen = () => {
    const localCart = getCart();
    const mapforleave = data.products.filter((p) => localCart[p.id])
    this.setState({open: true,})
    if (this.state.open === true){
      return (
        <div className="divopen">
          {mapforleave.map((p) => (
            <p key={p.id}>
              <p>{p.id}</p>
              <p>{p.name}</p>
              <p>
                <input type="text" value={p.id}/>
              </p>
              <p>{this.state.total}</p>
            </p>
          ))}
        </div>
      );
    }
  }
  render() {
    return (
      <div className="HeaderCart" onMouseMove={this.divopen}>
        <Link to="/cart">
          <img width="25" height="25" src="/images/shopping-cart.svg" alt="cart"/>
        </Link>
        {this.state.totalCount}
        ----
        {this.state.total}
      </div>
    );
  }
}

