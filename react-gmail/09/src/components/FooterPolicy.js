import React from 'react';
import { Link } from 'react-router-dom';

const FooterPolicy = () => {
  return (
    <>
      <h4 className="title--medium pb-1">Política de privacidad:</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt delectus voluptates nulla
        assumenda hic, molestiae at quibusdam repudiandae magnam accusantium sed accusamus amet sunt
        molestias explicabo natus eum temporibus. Eum.
      </p>
      <Link to="/">
        <span
          title="Volver"
          className="btn--close fas fa-times-circle text--decoration--none"
        ></span>
      </Link>
    </>
  );
};

export default FooterPolicy;
