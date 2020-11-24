import React from 'react';
import '../stylesheets/CartItem.scss';

const CartItem = props => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.price} €</td>
      <td>
        <button className="card__btn" title="Quitar una unidad más de este producto">
          -
        </button>
        {props.units}
        <button className="card__btn" title="Añadir una unidad más de este producto">
          +
        </button>
        <button
          className="card__btn fas fa-trash"
          title="Eliminar este producto de la cesta"
        ></button>
      </td>
      <td className="text-align-right">{props.price * props.units} €</td>
    </tr>
  );
};

export default CartItem;
