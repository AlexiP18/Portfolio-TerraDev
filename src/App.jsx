import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio.jsx';
import Servicios from './pages/Servicios.jsx';
import Proyectos from './pages/Proyectos.jsx';
import Equipo from './pages/Equipo.jsx';
import Contacto from './pages/Contacto.jsx';
import Blog from './pages/Blog.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;