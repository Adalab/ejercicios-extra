import React from 'react';
import HeaderForm from './HeaderForm';

function Header(props) {
  return (
    <header className="col2 mb-1">
      <div>
        <h1 className="title">
          <span className="fas fa-envelope-open-text"></span>
          Gmail
        </h1>
      </div>

      <HeaderForm
        handleInboxFilter={props.handleInboxFilter}
        handleDeleteFilter={props.handleDeleteFilter}
        handleTextFilter={props.handleTextFilter}
      />
    </header>
  );
}

export default Header;
