import React from 'react';
import '../stylesheets/CartItem.scss';

const CartItem = props => {
  const handleIncrementCartProduct = () => {
    props.incrementCartProduct(props.id);
  };

  const handleDecrementCartProduct = () => {
    props.decrementCartProduct(props.id);
  };

  const handleDeleteCartProduct = () => {
    props.deleteCartProduct(props.id);
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.price} €</td>
      <td>
        <button
          className="card__btn"
          title="Quitar una unidad más de este producto"
          onClick={handleDecrementCartProduct}
        >
          -
        </button>
        {props.units}
        <button
          className="card__btn"
          title="Añadir una unidad más de este producto"
          onClick={handleIncrementCartProduct}
        >
          +
        </button>
        <button
          className="card__btn fas fa-trash"
          title="Eliminar este producto de la cesta"
          onClick={handleDeleteCartProduct}
        ></button>
      </td>
      <td className="text-align-right">{props.price * props.units} €</td>
    </tr>
  );
};

export default CartItem;
