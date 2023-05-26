import React from 'react';
import './navBar.scss'
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className="nav-bar">
        <ul className="nav-list">
        <li><NavLink className="aLink" to="/">Forside</NavLink></li>
        <li><NavLink className="aLink" to="/products">Produkter</NavLink></li>
        <h2>bageriet</h2>
        <li><NavLink className="aLink" to="/contact">Kontakt</NavLink></li>
        <li><NavLink className="aLink" to="/login">Login</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
