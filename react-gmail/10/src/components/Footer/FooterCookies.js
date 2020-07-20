import React from 'react';
import { Link } from 'react-router-dom';

const FooterConfig = () => {
  return (
    <div>
      <h4 className="title--medium pb-1">Cookies:</h4>
      <p>Esta web no usa cookies, pero sí que usa un poquito de local storage ;)</p>
      <Link to="/">
        <span title="Volver" className="btn--close fas fa-times-circle text--decoration--none" />
      </Link>
    </div>
  );
};

export default FooterConfig;
