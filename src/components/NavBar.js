import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="calculator">Calculator</NavLink>
      <NavLink to="quote">Quotes</NavLink>
    </div>
  );
}

export default NavBar;
