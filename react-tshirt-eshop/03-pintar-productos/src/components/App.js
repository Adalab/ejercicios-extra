import React, { useState, useEffect } from 'react';
import Products from './Products';
import api from '../services/api';

const App = () => {
  const [products, setProducts] = useState([]);

  // api
  useEffect(() => {
    api.getDataFromApi().then(data => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <div className="col2">
        <Products products={products} />
      </div>
    </>
  );
};

export default App;
