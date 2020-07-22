import React from 'react';

const Loading = props => {
  return props.loading ? <div className="loading mt-1" /> : null;
};

export default Loading;
