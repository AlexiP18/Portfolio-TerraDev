import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/proyectos">Proyectos</Link></li>
        <li><Link to="/equipo">Equipo</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;