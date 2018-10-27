import React, { Fragment } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Links from '../Links';
import Home from '../../scenes/Home';
import Form from '../../scenes/Form';

const Root = () => (
  <Router>
    <Fragment>
      <Links />
      <Route exact path="/" component={Home} />
      <Route path="/form" component={Form} />
    </Fragment>
  </Router>
);

export default Root;
