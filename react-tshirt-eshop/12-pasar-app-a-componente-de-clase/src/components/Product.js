import React from 'react';
import { Link } from 'react-router-dom';

const Product = props => {
  const handleAddToCardClick = () => {
    props.incrementCartProduct(props.id);
  };

  return (
    <article className="card">
      <img src={props.imageUrl} className="card__img" alt={`Producto: ${props.name}`} />
      <h3 className="card__title">{props.name}</h3>
      <p className="card__description">{props.price} €</p>

      <button
        className="card__btn"
        title="Añadir este producto a la cesta"
        onClick={handleAddToCardClick}
      >
        Añadir a la cesta
      </button>

      <Link
        to={`/product-detail/${props.id}`}
        className="card__btn"
        title="Ver el detalle de este producto"
      >
        Ver detalle del producto
      </Link>
    </article>
  );
};

export default Product;
