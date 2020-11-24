import React from 'react';

const CartHeader = () => {
  return (
    <thead>
      <tr className="text--bold">
        <td>Producto</td>
        <td>Precio</td>
        <td>Unidades</td>
        <td className="text-align-right">Total</td>
      </tr>
    </thead>
  );
};

export default CartHeader;
