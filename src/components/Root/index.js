import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Links from '../Links';

const Root = () => (
  <Router>
    <Fragment>
      <Links />
      <Route
        path="/"
        render={({ match, location }) => (
          <div>
            <p>root</p>
            <p>{JSON.stringify(match)}</p>
            <p>{JSON.stringify(location)}</p>
            <p>{new URLSearchParams(location.search).get('id')}</p>
          </div>
        )}
      />
    </Fragment>
  </Router>
);

export default Root;
