import React, { Component, Fragment } from 'react';
import GoBack from './GoBack';

class NoBlackData extends Component {
  render() {
    return (
      <Fragment>
        <p>No hay datos que pintar</p>
        <GoBack />
      </Fragment>
    );
  }
}

export default NoBlackData;
