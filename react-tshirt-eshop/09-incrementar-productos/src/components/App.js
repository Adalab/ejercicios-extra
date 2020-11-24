import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './Cart';
import Loading from './Loading';
import Products from './Products';
import ProductDetail from './ProductDetail';
import api from '../services/api';

const App = () => {
  // state
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // api

  useEffect(() => {
    setIsLoading(true);
    api.getDataFromApi().then(data => {
      setProducts(data);
      setIsLoading(false);
    });
  }, []);

  // events

  const handleFilter = filterText => {
    setFilterText(filterText);
  };

  const addToCart = clickedProductId => {
    // buscar si el producto está en la cesta
    const cartProductFound = cartProducts.find(cartProduct => {
      return clickedProductId === cartProduct.id;
    });
    if (cartProductFound) {
      cartProductFound.units += 1;
    } else {
      const clickedProduct = products.find(product => {
        return clickedProductId === product.id;
      });
      clickedProduct.units = 1;
      cartProducts.push(clickedProduct);
    }
    // copiar con concat:
    // const newCartProducts = cartProducts.concat([]);
    // console.log(newCartProducts === cartProducts, newCartProducts, cartProducts);
    // copiar con spread:
    // const newCartProducts2 = [...cartProducts];
    // console.log(newCartProducts2 === cartProducts, newCartProducts2, cartProducts);
    setCartProducts([...cartProducts]);
  };

  // render

  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(filterText.toLowerCase());
  });

  const renderDetail = props => {
    const routeProductId = props.match.params.productId;
    const foundProduct = products.find(product => {
      return routeProductId === product.id;
      // if (routeProductId === product.id) {
      //   return true;
      // } else {
      //   return false;
      // }
    });
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
  };

  return (
    <>
      {isLoading === true ? <Loading /> : null}
      <Switch>
        <Route exact path="/">
          <div className="col2">
            <Products
              products={filteredProducts}
              filterText={filterText}
              handleFilter={handleFilter}
              addToCart={addToCart}
            />
            <Cart cartProducts={cartProducts} />
          </div>
        </Route>
        <Route path="/product-detail/:productId" component={renderDetail} />
      </Switch>
    </>
  );
};

export default App;
