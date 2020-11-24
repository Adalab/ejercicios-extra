import React from 'react';
import Products from './Products';
import api from '../services/api';

api.getDataFromApi().then(data => {
  console.log(data);
});

const App = () => {
  return (
    <>
      <div className="col2">
        <Products />
      </div>
    </>
  );
};

export default App;
