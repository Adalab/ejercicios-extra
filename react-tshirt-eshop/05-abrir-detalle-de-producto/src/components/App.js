import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Products from './Products';
import ProductDetail from './ProductDetail';
import api from '../services/api';

const App = () => {
  // state
  const [products, setProducts] = useState([]);
  const [filterText, setFilterText] = useState('');

  // api
  useEffect(() => {
    api.getDataFromApi().then(data => {
      setProducts(data);
    });
  }, []);

  // events

  const handleFilter = filterText => {
    setFilterText(filterText);
  };

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
      <Switch>
        <Route exact path="/">
          <div className="col2">
            <Products products={filteredProducts} handleFilter={handleFilter} />
          </div>
        </Route>
        <Route path="/product-detail/:productId" component={renderDetail} />
      </Switch>
    </>
  );
};

export default App;
