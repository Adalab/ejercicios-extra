import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BlackCriatura extends Component {
  render() {
    const { fullName, image, age, city } = this.props;
    return (
      <div className="person">
        <h2 className="person__name">{fullName}</h2>
        <img src={image} alt={fullName} className="person__image" />
        <div className="person__age">{age}</div>
        <div className="person__city">{city}</div>
      </div>
    );
  }
}

BlackCriatura.propTypes = {
  fullName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired
};

export default BlackCriatura;
