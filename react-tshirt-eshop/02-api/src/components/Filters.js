import React from 'react';

const Filters = () => {
  return (
    <form className="mb-1">
      <label className="form__label" htmlFor="name">
        Filtrar por nombre:
      </label>
      <input className="form__input-text" type="text" id="name" />
    </form>
  );
};

export default Filters;
