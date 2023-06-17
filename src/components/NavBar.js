import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <h1>Math Magicians</h1>
      <div>
        <NavLink to="/" className="nav-item">Home</NavLink>
        <span className="nav-item">|</span>
        <NavLink to="calculator" className="nav-item">Calculator</NavLink>
        <span className="nav-item">|</span>
        <NavLink to="quote" className="nav-item">Quotes</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
