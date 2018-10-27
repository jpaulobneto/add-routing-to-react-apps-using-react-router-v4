import React from 'react';
import { NavLink } from 'react-router-dom';

const isActiveFunc = (match, location) => {
  console.log(match, location);
  return match;
};

const NavLinks = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">
      Home
    </NavLink>
    <NavLink activeStyle={{ color: 'green' }} to="/about">
      About
    </NavLink>
    <NavLink isActive={isActiveFunc} activeClassName="active" to="/contact">
      Contact
    </NavLink>
  </nav>
);

export default NavLinks;
