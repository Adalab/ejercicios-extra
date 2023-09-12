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
        id={cartProduct.id}
        name={cartProduct.name}
        units={cartProduct.units}
        price={cartProduct.price}
        incrementCartProduct={props.incrementCartProduct}
        decrementCartProduct={props.decrementCartProduct}
        deleteCartProduct={props.deleteCartProduct}
      />
    );
  });

  // total

  const total = props.cartProducts.reduce((acc, cartProduct) => {
    return acc + cartProduct.units * cartProduct.price;
  }, 0);

  return (
    <div>
      <Title title="Cesta de la compra" />
      <table className="table">
        <CartHeader />
        <tbody>{cartProducts}</tbody>
        <CartTotal total={total} />
      </table>
    </div>
  );
};

export default Cart;
