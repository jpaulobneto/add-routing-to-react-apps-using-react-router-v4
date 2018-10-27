import React from 'react';
import { Route } from 'react-router-dom';

const Header = ({ match }) => (
  <div className="header">
    <Route
      path="/:page"
      render={({ match }) => (
        <h1>
          {match.params.page}
          {' '}
          content
        </h1>
      )}
    />
  </div>
);

export default Header;
