// Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavClass = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`navbarpane ${isActive ? 'nonactive' : 'active'}`}>
      <div className="custom-navbar">
        <ul className="custom-nav-list">
        <h1>Menu</h1>
          <li className="custom-nav-item">
            <NavLink to="/errori-postazioni">Errori Postazioni</NavLink>
            </li>
          <li className="custom-nav-item">
            <NavLink to="/log-postazioni">Log Postazioni</NavLink>
          </li>
          <li className="custom-nav-item">
            <NavLink to="/analytics">Analisi Statica</NavLink>
          </li>
          <li className="custom-nav-item">
            <NavLink to="/analisi-dinamica">Analisi Dinamica</NavLink>
          </li>
        </ul>
      </div>
      <button
        className="navbar-toggler"
        onClick={toggleNavClass}
      >
        ☰
      </button>
    </div>
  );
};

export default Navbar;
