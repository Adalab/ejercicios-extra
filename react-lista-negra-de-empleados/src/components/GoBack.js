import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GoBack extends Component {
  render() {
    return (
      <div className="app__go-back">
        <Link className="app__go-back-link" to="/">
          Volver al listado
        </Link>
      </div>
    );
  }
}

export default GoBack;
