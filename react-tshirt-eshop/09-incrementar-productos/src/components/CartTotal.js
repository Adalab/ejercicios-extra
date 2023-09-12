import React from 'react';

const Cart = props => {
  return (
    <tr className="text--bold">
      <td>Total</td>
      <td colSpan="3" className="text-align-right">
        {props.total} €
      </td>
    </tr>
  );
};

export default Cart;
