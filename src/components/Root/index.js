import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Content from '../Content';
import Header from '../Header';
import Links from '../Links';

const Root = () => (
  <Router>
    <Fragment>
      <Links />
      <Header />
      <Content />
    </Fragment>
  </Router>
);

export default Root;
