import React from 'react';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import Title from './Title';

const Cart = props => {
  const cartProducts = props.cartProducts.map(cartProduct => {
    return (
      <CartItem
        key={cartProduct.id}
        name={cartProduct.name}
        units={cartProduct.units}
        price={cartProduct.price}
      />
    );
  });

  return (
    <div>
      <Title title="Cesta de la compra" />
      <table className="table">
        <CartHeader />
        <tbody>{cartProducts}</tbody>
      </table>
    </div>
  );
};

export default Cart;
