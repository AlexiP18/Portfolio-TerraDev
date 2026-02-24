import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio.jsx';
import Servicios from './pages/Servicios.jsx';
import Proyectos from './pages/Proyectos.jsx';
import Equipo from './pages/Equipo.jsx';
import Contacto from './pages/Contacto.jsx';
import Blog from './pages/Blog.jsx';
import Navbar from './components/Navbar.jsx';
import './App.css';

function App() {
  useEffect(() => {
    const handlePointerMove = (event) => {
      const card = event.target.closest('.card');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--x', `${x}%`);
      card.style.setProperty('--y', `${y}%`);
    };

    const handlePointerLeave = (event) => {
      const card = event.target.closest('.card');
      if (!card) return;
      card.style.removeProperty('--x');
      card.style.removeProperty('--y');
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave, true);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave, true);
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <main className="page-frame">
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
