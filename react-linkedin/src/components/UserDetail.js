import React from 'react';
import { Link } from 'react-router-dom';

const UserDetail = props => {
  if (props.user === undefined) {
    return (
      <div className="modal">
        <div className="modal__dialog">
          <div className="modal__content">
            <header className="modal__header">
              <h2 className="modal__title">Usuario no encontrado</h2>
              <Link to="/">
                <span className="modal__close icon fas fa-times"></span>
              </Link>
            </header>
            <section>
              <p>Búscate la vida</p>
            </section>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="modal">
        <div className="modal__dialog">
          <div className="modal__content">
            <header className="modal__header">
              <h2 className="modal__title">{props.user.name}</h2>
              <Link to="/">
                <span className="modal__close icon fas fa-times"></span>
              </Link>
            </header>
            <section>
              <img className="card__img" src={props.user.image} alt={props.user.name} />
              <ul className="ml-1 mt-1">
                <li>Género: {props.user.gender}</li>
                <li>Email: {props.user.email}</li>
                <li>Nick: {props.user.username}</li>
                <li>Ciudad: {props.user.city}</li>
                <li>País: {props.user.country}</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
  }
};

export default UserDetail;
