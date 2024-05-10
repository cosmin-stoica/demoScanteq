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
            <NavLink to="/gestionelavorazioni">Gestione Lavorazioni</NavLink>
          </li>
          <li className="custom-nav-item">
            <NavLink to="/gestionecommesse">Gestione Commesse</NavLink>
          </li>
          <li className="custom-nav-item">
            <NavLink to="/gestionecomponenti">Gestione Componenti</NavLink>
          </li>
          <li className="custom-nav-item">
            <NavLink to="/gestioneinfoausiliarie">Gestione Info Ausiliarie</NavLink>
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
