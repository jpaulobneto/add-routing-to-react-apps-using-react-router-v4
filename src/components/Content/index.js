import React from 'react';
import { Route } from 'react-router-dom';

const Content = ({ match }) => (
  <div className="header">
    <Route
      path="/:page"
      render={({ match }) => (
        <p>
          {match.params.page}
          {' '}
          header
        </p>
      )}
    />
  </div>
);

export default Content;
