import React from 'react';

const Filters = props => {
  const handleFilter = ev => {
    props.handleFilter(ev.target.value);
  };

  return (
    <form className="mb-1">
      <label className="form__label" htmlFor="name">
        Filtrar por nombre:
      </label>
      <input className="form__input-text" type="text" id="name" onChange={handleFilter} />
    </form>
  );
};

export default Filters;
