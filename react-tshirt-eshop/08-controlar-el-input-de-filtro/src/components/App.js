import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from './Loading';
import Products from './Products';
import ProductDetail from './ProductDetail';
import api from '../services/api';

const App = () => {
  // state
  const [products, setProducts] = useState([]);
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

  console.log(isLoading);

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
            />
          </div>
        </Route>
        <Route path="/product-detail/:productId" component={renderDetail} />
      </Switch>
    </>
  );
};

export default App;
