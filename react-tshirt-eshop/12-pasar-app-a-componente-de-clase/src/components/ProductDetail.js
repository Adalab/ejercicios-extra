import React from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';

const ProductDetail = props => {
  return (
    <>
      <Title title={`Detalle del producto: ${props.name}`} />
      <article className="card">
        <img src={props.imageUrl} className="card__img" alt={`Producto: ${props.name}`} />
        <h3 className="card__title">{props.name}</h3>
        <p className="card__description">
          Precio: <span className="text--bold">{props.price} €</span>
        </p>
        <p className="card__description">
          Descripción: <span className="text--bold">{props.description}</span>
        </p>
        <p className="card__description">
          Tallas: <span className="text--bold">{props.sizes.join(' - ')}</span>
        </p>
      </article>
      <Link to="/" title="Volver al listado de productos">
        Volver al listado de productos
      </Link>
    </>
  );
};

export default ProductDetail;
