import React from 'react';
import Product from './Product';
import Filters from './Filters';
import Title from './Title';

const Products = () => {
  return (
    <div>
      <Title title="Listado de camisetas" />
      <Filters />
      <section className="cards">
        <Product
          imageUrl="//beta.adalab.es/ejercicios-extra/api/eshop/assets/images/node-js.jpg"
          name="Node JS"
          price="16"
        />
        <Product
          imageUrl="//beta.adalab.es/ejercicios-extra/api/eshop/assets/images/javascript.jpg"
          name="JavaScript"
          price="15"
        />
        <Product
          imageUrl="//beta.adalab.es/ejercicios-extra/api/eshop/assets/images/react.jpg"
          name="React JS"
          price="13"
        />
      </section>
    </div>
  );
};

export default Products;
