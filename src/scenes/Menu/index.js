import React, { Fragment } from 'react';
import { Link, Route } from 'react-router-dom';

const Menu = () => (
  <Fragment>
    <h1>Menu</h1>
    <Link to="/menu/food">Food</Link>
    <Link to="/menu/drinks">Drinks</Link>
    <Link to="/menu/sides">Sides</Link>
    <Route path="/menu/:section" render={({ match }) => <h2>{match.params.section}</h2>} />
  </Fragment>
);

export default Menu;
