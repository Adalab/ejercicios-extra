import React from 'react';

const Product = props => {
  return (
    <article className="card">
      <img src={props.imageUrl} className="card__img" alt={`Producto: ${props.name}`} />
      <h3 className="card__title">{props.name}</h3>
      <p className="card__description">{props.price} €</p>
      <button className="card__btn" title="Añadir este producto a la cesta">
        Añadir a la cesta
      </button>
      <button className="card__btn" title="Ver el detalle de este producto">
        Ver detalle del producto
      </button>
    </article>
  );
};

export default Product;
