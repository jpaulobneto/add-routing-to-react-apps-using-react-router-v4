import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Links from '../Links';

const Root = () => (
  <Router>
    <Fragment>
      <Links />
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route path="/about" render={() => <h1>About</h1>} />
      <Route path="/contact" render={() => <h1>Contact</h1>} />
      <Route
        path="/:page?/:subpage?"
        render={({ match }) => (
          <h1>
            PAGE:
            {' '}
            {match.params.page || 'Home'}
            <br />
            SUBPAGE:
            {' '}
            {match.params.subpage}
            <br />
          </h1>
        )}
      />
      <Route
        path="/:a(\d{2}-\d{2}-\d{4}):b(\.[a-z]+)"
        render={({ match }) => (
          <h1>
            paramA:
            {' '}
            {match.params.a}
            <br />
            paramB:
            {' '}
            {match.params.b}
            <br />
          </h1>
        )}
      />
    </Fragment>
  </Router>
);

export default Root;
