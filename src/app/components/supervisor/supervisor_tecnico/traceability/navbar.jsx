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
            <NavLink to="/all-risultati">Risultati</NavLink>
          </li>
          <li className="custom-nav-item">
            <NavLink to="/tracciabilita-avvitature">Avvitature</NavLink>
          </li>
          <li className="custom-nav-item">
            <NavLink to="/tracciabilita-barcode">Barcode</NavLink>
          </li>
          <li className="custom-nav-item">
            <NavLink to="/tracciabilita-termoforo">Termoforo</NavLink>
          </li>
          <li className="custom-nav-item">
            <NavLink to="/tracciabilita-coppia">Coppia</NavLink>
          </li>
          {/*<li className="custom-nav-item">
            <NavLink to="/tracciabilita-barcode">Heater</NavLink>
          </li>
          <li className="custom-nav-item">
            <NavLink to="/tracciabilita-barcode">Carico</NavLink>
          </li>
          <li className="custom-nav-item">
            <NavLink to="/tracciabilita-barcode">Carico Manuale</NavLink>
          </li>
          <li className="custom-nav-item">
            <NavLink to="/tracciabilita-barcode">Logistica</NavLink>
          </li>
          <li className="custom-nav-item">
            <NavLink to="/tracciabilita-barcode">Qualità</NavLink>
          </li>
          <li className="custom-nav-item">
            <NavLink to="/tracciabilita-barcode">Scarti</NavLink>
          </li>
          <li className="custom-nav-item">
            <NavLink to="/tracciabilita-barcode">Seeger</NavLink>
          </li>
          <li className="custom-nav-item">
            <NavLink to="/tracciabilita-barcode">Torque</NavLink>
          </li>

          <li className="custom-nav-item">
            <NavLink to="/tracciabilita-collaudo">Collaudo??</NavLink>
          </li>
          {/*<li className="custom-nav-item">
            <NavLink to="/tracciabilita-supervisor">Supervisor</NavLink>
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
