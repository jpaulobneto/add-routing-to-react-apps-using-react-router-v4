import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/menu">Menu</Link>
  </nav>
);

export default Links;
