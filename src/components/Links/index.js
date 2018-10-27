import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to={{ pathname: '/about' }}>About</Link>
    <Link replace to="/contact">Contact</Link>
  </nav>
);

export default Links;
