import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/old/123">Old</Link>
    <Link to="/new/456">New</Link>
    <Link to="/protected">Protected</Link>
  </nav>
);

export default Links;
