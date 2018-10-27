import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Links from '../Links';
import Home from '../../scenes/Home';
import Menu from '../../scenes/Menu';

const Root = () => (
  <Router>
    <Fragment>
      <Links />
      <Route exact path="/" component={Home} />
      <Route path="/menu" component={Menu} />
    </Fragment>
  </Router>
);

export default Root;
