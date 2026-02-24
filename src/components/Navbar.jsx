import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <span>OpenCode</span>
          <small>Estudio Digital</small>
        </Link>
        <ul className="navbar-list">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/proyectos">Proyectos</Link></li>
          <li><Link to="/equipo">Equipo</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
        <Link to="/contacto" className="navbar-cta">Hablemos</Link>
      </div>
    </nav>
  );
}

export default Navbar;
