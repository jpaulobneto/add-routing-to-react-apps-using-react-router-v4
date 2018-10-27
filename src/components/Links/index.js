import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => (
  <nav>
    <Link to="/?id=123">Inline</Link>
    <Link to={{ pathname: '/', search: 'id=456' }}>Object</Link>
  </nav>
);

export default NavLinks;
