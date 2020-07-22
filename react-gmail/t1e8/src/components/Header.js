import React from 'react';
import { Link } from 'react-router-dom';
import HeaderForm from './HeaderForm';

function Header(props) {
  return (
    <header className="col2 mb-1">
      <div>
        <h1 className="title">
          <Link to="/" className="text--decoration--none">
            <span className="fas fa-envelope-open-text mr-1"></span>
            Gmail
          </Link>
        </h1>
      </div>

      <HeaderForm
        textFilter={props.textFilter}
        handleInboxFilter={props.handleInboxFilter}
        handleDeleteFilter={props.handleDeleteFilter}
        handleTextFilter={props.handleTextFilter}
      />
    </header>
  );
}

export default Header;
