import React from 'react';
import Cart from './Cart';
import Products from './Products';
import ProductDetail from './ProductDetail';
import Loading from './Loading';

const App = () => {
  return (
    <>
      <Loading />
      <div className="col2">
        <Products />
        <Cart />
      </div>
      <ProductDetail
        name="Node JS"
        price="16"
        description="Camiseta de Node JS"
        sizes={['s', 'l', 'xl']}
        imageUrl="//beta.adalab.es/ejercicios-extra/api/eshop/assets/images/node-js.jpg"
      />
    </>
  );
};

export default App;
