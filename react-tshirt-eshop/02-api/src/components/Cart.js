import React from 'react';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import Title from './Title';

const Cart = () => {
  return (
    <div>
      <Title title="Cesta de la compra" />
      <table className="table">
        <CartHeader />
        <tbody>
          <CartItem name="React JS" units="2" price="13" />
          <CartItem name="Javascript" units="3" price="15" />
          <CartTotal total="71" />
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
