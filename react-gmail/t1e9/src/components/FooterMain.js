import React from 'react';
import { Link, Route } from 'react-router-dom';

const FooterMain = () => {
  const renderLinkToHome = props => {
    if (props.match.isExact === false) {
      return (
        <>
          /
          <Link className="nav__link text--decoration--none" to="/">
            Ir a la home
          </Link>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="col2">
      <small className="text--primary-light">
        <Link className="nav__link text--decoration--none" to="/privacy">
          Política de privacidad
        </Link>
        /
        <Link className="nav__link text--decoration--none" to="/cookies">
          Cookies
        </Link>
        <Route path="/" children={renderLinkToHome} />
      </small>
      <small className="text--primary-light text-align-right">
        Ejercicio de React / Desarrollado con ❤ Adalab
      </small>
    </div>
  );
};

export default FooterMain;
