import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact/xxx/xxx/xx">Contact</Link>
  </nav>
);

export default NavLinks;
