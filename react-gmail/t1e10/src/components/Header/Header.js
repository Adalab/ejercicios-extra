import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import HeaderForm from './HeaderForm';
import HeaderFilters from './HeaderFilters';

function Header(props) {
  return (
    <header>
      <div className="col2 mb-1">
        <div>
          <h1 className="title">
            <Link to="/" className="text--decoration--none">
              <span className="fas fa-envelope-open-text mr-1" />
              Gmail
            </Link>
          </h1>
        </div>

        <Switch>
          <Route exact path="/">
            <HeaderForm
              textFilter={props.textFilter}
              handleInboxFilter={props.handleInboxFilter}
              handleDeleteFilter={props.handleDeleteFilter}
              handleTextFilter={props.handleTextFilter}
            />
          </Route>
        </Switch>
      </div>

      <Switch>
        <Route exact path="/">
          <HeaderFilters showInbox={props.showInbox} textFilter={props.textFilter} />
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
