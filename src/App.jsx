import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
import Inicio from './pages/Inicio.jsx';
import Servicios from './pages/Servicios.jsx';
import Metodologia from './pages/Metodologia.jsx';
import Portafolio from './pages/Portafolio.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Proyectos from './pages/Proyectos.jsx';
import Equipo from './pages/Equipo.jsx';
import Contacto from './pages/Contacto.jsx';
import Blog from './pages/Blog.jsx';
import BlogIa from './pages/blog/BlogIa.jsx';
import BlogCase from './pages/blog/BlogCase.jsx';
import BlogCloud from './pages/blog/BlogCloud.jsx';
import BlogBalsamiq from './pages/blog/BlogBalsamiq.jsx';
import BlogVisualParadigm from './pages/blog/BlogVisualParadigm.jsx';
import BlogFigma from './pages/blog/BlogFigma.jsx';
import BlogMicrosoftVisio from './pages/blog/BlogMicrosoftVisio.jsx';
import BlogStructurizr from './pages/blog/BlogStructurizr.jsx';
import BlogLucidchart from './pages/blog/BlogLucidchart.jsx';
import BlogOdoo from './pages/blog/BlogOdoo.jsx';
import BlogQodo from './pages/blog/BlogQodo.jsx';
import CaseStudyMedia from './pages/CaseStudyMedia.jsx';
import Privacidad from './pages/Privacidad.jsx';
import Terminos from './pages/Terminos.jsx';
import Cookies from './pages/Cookies.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

// Lazy-load: separa react-syntax-highlighter en chunk propio
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'));
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
      <ScrollToTop />
      <Navbar />
      <main>
        {/* Páginas full-width: gestionan su propio layout */}
        <Routes>
          <Route path="/"            element={<Inicio />} />
          <Route path="/servicios"   element={<Servicios />} />
          <Route path="/metodologia" element={<Metodologia />} />
          <Route path="/portafolio"  element={<Portafolio />} />
          <Route path="/portafolio/media" element={<CaseStudyMedia />} />
          <Route path="/nosotros"    element={<Nosotros />} />
          <Route path="/contacto"    element={<Contacto />} />
          <Route path="/privacidad"  element={<Privacidad />} />
          <Route path="/terminos"    element={<Terminos />} />
          <Route path="/cookies"     element={<Cookies />} />
          <Route path="/blog"        element={<Blog />} />
          <Route path="/blog/balsamiq" element={<BlogBalsamiq />} />
          <Route path="/blog/visual-paradigm" element={<BlogVisualParadigm />} />
          <Route path="/blog/figma" element={<BlogFigma />} />
          <Route path="/blog/microsoft-visio" element={<BlogMicrosoftVisio />} />
          <Route path="/blog/structurizr" element={<BlogStructurizr />} />
          <Route path="/blog/lucidchart" element={<BlogLucidchart />} />
          <Route path="/blog/odoo" element={<BlogOdoo />} />
          <Route path="/blog/qodo" element={<BlogQodo />} />
          <Route path="/blog/:slug"  element={
            <Suspense fallback={<div style={{ background: '#0B1120', minHeight: '100vh' }} />}>
              <BlogPost />
            </Suspense>
          } />

          {/* Resto de páginas: envueltas en el contenedor de card */}
          <Route path="/*" element={
            <div className="page-frame">
              <div className="main-container">
                <Routes>
                  <Route path="/proyectos"  element={<Proyectos />} />
                  <Route path="/equipo"     element={<Equipo />} />
                  <Route path="/blog/ia"    element={<BlogIa />} />
                  <Route path="/blog/case"  element={<BlogCase />} />
                  <Route path="/blog/cloud" element={<BlogCloud />} />
                  <Route path="/blog/balsamiq" element={<BlogBalsamiq />} />
                </Routes>
              </div>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
