import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../../scenes/Home';

const Root = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Home} />
      {/* <Route path="/about" render={() => <h1>About</h1>} /> */}
      <Route path="/about">{({ match }) => match && <h1>About</h1>}</Route>
    </Fragment>
  </Router>
);

export default Root;
