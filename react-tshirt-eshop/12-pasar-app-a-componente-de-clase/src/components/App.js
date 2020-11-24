import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './Cart';
import Loading from './Loading';
import Products from './Products';
import ProductDetail from './ProductDetail';
import api from '../services/api';
import ls from '../services/localStorage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cartProducts: [],
      filterText: '',
      isLoading: false
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.renderDetail = this.renderDetail.bind(this);
    this.incrementCartProduct = this.incrementCartProduct.bind(this);
    this.decrementCartProduct = this.decrementCartProduct.bind(this);
    this.deleteCartProduct = this.deleteCartProduct.bind(this);
  }

  componentDidMount() {
    // init loading and get from local storage
    this.setState({
      isLoading: true,
      cartProducts: ls.getFromLocalStorage()
    });
    // call to api
    api.getDataFromApi().then(data => {
      this.setState({
        products: data,
        isLoading: false
      });
    });
  }

  componentDidUpdate() {
    ls.setInLocalStorage(this.state.cartProducts);
  }

  // events

  handleFilter(filterText) {
    this.setState({ filterText: filterText });
  }

  incrementCartProduct(clickedProductId) {
    const cartProductFound = this.findProductInCart(clickedProductId);
    if (cartProductFound) {
      cartProductFound.units += 1;
    } else {
      const clickedProduct = this.state.products.find(product => clickedProductId === product.id);
      clickedProduct.units = 1;
      this.state.cartProducts.push(clickedProduct);
    }
    this.setState({ cartProducts: this.state.cartProducts });
  }

  decrementCartProduct(clickedProductId) {
    const cartProductFound = this.findProductInCart(clickedProductId);
    if (cartProductFound.units > 1) {
      cartProductFound.units -= 1;
      this.setState({ cartProducts: this.state.cartProducts });
    } else {
      this.deleteCartProduct(clickedProductId);
    }
  }

  deleteCartProduct(clickedProductId) {
    const cartProductIndexFound = this.state.cartProducts.findIndex(
      cartProduct => clickedProductId === cartProduct.id
    );
    this.state.cartProducts.splice(cartProductIndexFound, 1);
    this.setState({ cartProducts: this.state.cartProducts });
  }

  findProductInCart(clickedProductId) {
    return this.state.cartProducts.find(cartProduct => clickedProductId === cartProduct.id);
  }

  // render

  renderDetail(props) {
    const routeProductId = props.match.params.productId;
    const foundProduct = this.state.products.find(product => routeProductId === product.id);
    if (foundProduct) {
      return (
        <ProductDetail
          name={foundProduct.name}
          price={foundProduct.price}
          description={foundProduct.description}
          imageUrl={foundProduct.imageUrl}
          sizes={foundProduct.sizes}
        />
      );
    } else {
      return <p>Producto no encontrado</p>;
    }
  }

  renderFilteredProducts() {
    return this.state.products.filter(product => {
      return product.name.toLowerCase().includes(this.state.filterText.toLowerCase());
    });
  }

  render() {
    return (
      <>
        {this.state.isLoading === true ? <Loading /> : null}
        <Switch>
          <Route exact path="/">
            <div className="col2">
              <Products
                products={this.renderFilteredProducts()}
                filterText={this.state.filterText}
                handleFilter={this.handleFilter}
                incrementCartProduct={this.incrementCartProduct}
              />
              <Cart
                cartProducts={this.state.cartProducts}
                incrementCartProduct={this.incrementCartProduct}
                decrementCartProduct={this.decrementCartProduct}
                deleteCartProduct={this.deleteCartProduct}
              />
            </div>
          </Route>
          <Route path="/product-detail/:productId" component={this.renderDetail} />
        </Switch>
      </>
    );
  }
}

// const App = () => {
//   // state

//   const [products, setProducts] = useState([]);
//   const [cartProducts, setCartProducts] = useState(ls.getFromLocalStorage());
//   const [filterText, setFilterText] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   // effects

//   useEffect(() => {
//     setIsLoading(true);
//     api.getDataFromApi().then(data => {
//       setProducts(data);
//       setIsLoading(false);
//     });
//   }, []);

//   useEffect(() => {
//     ls.setInLocalStorage(cartProducts);
//   });

//   // events

//   const handleFilter = filterText => {
//     setFilterText(filterText);
//   };

//   const incrementCartProduct = clickedProductId => {
//     const cartProductFound = findProductInCart(clickedProductId);
//     if (cartProductFound) {
//       cartProductFound.units += 1;
//     } else {
//       const clickedProduct = products.find(product => clickedProductId === product.id);
//       clickedProduct.units = 1;
//       cartProducts.push(clickedProduct);
//     }
//     setCartProducts([...cartProducts]);
//   };

//   const decrementCartProduct = clickedProductId => {
//     const cartProductFound = findProductInCart(clickedProductId);
//     if (cartProductFound.units > 1) {
//       cartProductFound.units -= 1;
//       setCartProducts([...cartProducts]);
//     } else {
//       deleteCartProduct(clickedProductId);
//     }
//   };

//   const deleteCartProduct = clickedProductId => {
//     const cartProductIndexFound = cartProducts.findIndex(
//       cartProduct => clickedProductId === cartProduct.id
//     );
//     cartProducts.splice(cartProductIndexFound, 1);
//     setCartProducts([...cartProducts]);
//   };

//   const findProductInCart = clickedProductId => {
//     return cartProducts.find(cartProduct => clickedProductId === cartProduct.id);
//   };

//   // render

//   const filteredProducts = products.filter(product => {
//     return product.name.toLowerCase().includes(filterText.toLowerCase());
//   });

//   const renderDetail = props => {
//     const routeProductId = props.match.params.productId;
//     const foundProduct = products.find(product => routeProductId === product.id);
//     if (foundProduct) {
//       return (
//         <ProductDetail
//           name={foundProduct.name}
//           price={foundProduct.price}
//           description={foundProduct.description}
//           imageUrl={foundProduct.imageUrl}
//           sizes={foundProduct.sizes}
//         />
//       );
//     } else {
//       return <p>Producto no encontrado</p>;
//     }
//   };

//   return (
//     <>
//       {isLoading === true ? <Loading /> : null}
//       <Switch>
//         <Route exact path="/">
//           <div className="col2">
//             <Products
//               products={filteredProducts}
//               filterText={filterText}
//               handleFilter={handleFilter}
//               incrementCartProduct={incrementCartProduct}
//             />
//             <Cart
//               cartProducts={cartProducts}
//               incrementCartProduct={incrementCartProduct}
//               decrementCartProduct={decrementCartProduct}
//               deleteCartProduct={deleteCartProduct}
//             />
//           </div>
//         </Route>
//         <Route path="/product-detail/:productId" component={renderDetail} />
//       </Switch>
//     </>
//   );
// };

export default App;
