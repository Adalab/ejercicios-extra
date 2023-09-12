import React from 'react';

const FilterByGender = props => {
  const handleChange = ev => {
    props.handleFilter({
      value: ev.target.value,
      key: 'gender'
    });
  };
  return (
    <>
      <label className="form__label display-block" htmlFor="gender">
        Género:
      </label>

      <select className="form__input-text" name="gender" id="gender" onChange={handleChange}>
        <option value="all">Todos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
        <option value="no-binary">No binario</option>
      </select>
    </>
  );
};

export default FilterByGender;
