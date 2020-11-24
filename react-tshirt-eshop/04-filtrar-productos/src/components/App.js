import React, { useState, useEffect } from 'react';
import Products from './Products';
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

  return (
    <>
      <div className="col2">
        <Products products={filteredProducts} handleFilter={handleFilter} />
      </div>
    </>
  );
};

export default App;
