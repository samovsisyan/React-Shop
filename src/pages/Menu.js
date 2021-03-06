import React, {Component} from 'react';
import CategoryList from "../components/CategoryList";
import data from '../data'
import Product from "../components/Product";
import Wrapper from "../components/Wrapper";
import ProductModal from "../components/ProductModal";
import '../assets/css/touchTouch.css';
import Emitter from "../helper/Emitter";

class Menu extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      selectedCat: data.category[0].id,
    }
    Emitter.add('CHANGE_CATEGORY', this.handleCatChange);
  }


  componentWillUnmount() {
    Emitter.remove('CHANGE_CATEGORY', this.handleCatChange);
  }


  handleCatChange = (id) => {
    this.setState({selectedCat: id})
  }

  render() {
    const {products} = data
    const {selectedCat} = this.state
    const productsF = products.filter((prod) => {
      return prod.category.indexOf(selectedCat) > -1
    });

    return (
      <Wrapper>
        <div className="content">
          <div className="ic">
            More Website Templates @ TemplateMonster.com - December 02, 2013!
          </div>
          <div className="container_12">
            <div className="grid_12">
              <h3 className="head2">Our Menu</h3>
            </div>
            <div className="tabs tb gallery">
              <CategoryList/>
              <div className="div-tabs">
                <div className="tab-content gallery1">
                  {productsF.map((prod) => (
                    <Product key={prod.id} data={prod}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductModal/>
      </Wrapper>
    );
  }
}


export default Menu;
