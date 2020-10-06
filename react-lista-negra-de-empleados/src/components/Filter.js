import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { keyupAction } = this.props;
    return (
      <div className="app__filter">
        <div className="app__filter-item">
          <input
            type="text"
            className="app__filter-full-name"
            placeholder="Busca a los culpables 💀"
            onKeyUp={keyupAction}
          />
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  keyupAction: PropTypes.func.isRequired
};

export default Filter;
