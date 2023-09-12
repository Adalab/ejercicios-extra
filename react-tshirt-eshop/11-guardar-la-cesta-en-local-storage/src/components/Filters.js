import React from 'react';

const Filters = props => {
  const handleFilter = ev => {
    props.handleFilter(ev.target.value);
  };

  const handleFormSubmit = ev => {
    ev.preventDefault();
  };

  return (
    <form className="mb-1" onSubmit={handleFormSubmit}>
      <label className="form__label" htmlFor="name">
        Filtrar por nombre:
      </label>
      <input
        className="form__input-text"
        type="text"
        id="name"
        value={props.filterText}
        onChange={handleFilter}
      />
    </form>
  );
};

export default Filters;
