import React from 'react';

const FilterByCities = props => {
  const handleChange = ev => {
    props.handleFilter({
      value: ev.target.value,
      key: 'location',
      checked: ev.target.checked
    });
  };

  const citiesElements = props.cities.map((city, index) => {
    return (
      <label key={index} className="display-block">
        <input type="checkbox" name="location" value={city} onChange={handleChange} />
        {city}
      </label>
    );
  });
  return (
    <>
      <label className="form__label display-block" htmlFor="gender">
        Ciudad:
      </label>
      {citiesElements}
    </>
  );
};

export default FilterByCities;
