import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Links from '../Links';

const Root = () => (
  <Router>
    <Fragment>
      <Links />
      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route path="/about" render={() => <h1>About</h1>} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </Fragment>
  </Router>
);

export default Root;
