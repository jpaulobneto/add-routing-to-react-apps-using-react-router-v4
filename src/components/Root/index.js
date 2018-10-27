import React, { Fragment } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Links from '../Links';

const loggedIn = true;

const Root = () => (
  <Router>
    <Fragment>
      <Links />
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route
        path="/new/:str"
        render={({ match }) => (
          <h1>
            New:
            {` ${match.params.str}`}
          </h1>
        )}
      />
      <Route
        path="/old/:str"
        render={({ match }) => <Redirect to={`/new/${match.params.str}`} />}
      />
      <Route
        path="/protected"
        render={() => (loggedIn ? <h1>Welcome to the protected page</h1> : <Redirect to="/new/login" />)
        }
      />
    </Fragment>
  </Router>
);

export default Root;
