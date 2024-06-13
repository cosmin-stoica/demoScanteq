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
            <NavLink to="/stato-postazioni">Panoramica</NavLink>
          </li>
          <li className="custom-nav-item">
            <NavLink to="/postazioni">Postazioni</NavLink>
          </li>
          {/*<li className="custom-nav-item">
            <NavLink to="/controllo-per-postazione">Controllo per postazione</NavLink>
  </li>*/}
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
