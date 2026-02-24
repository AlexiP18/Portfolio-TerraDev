import React from 'react';

function Proyectos() {
  return (
    <div className="card">
      <div className="spark" />
      <div className="pill">Casos recientes</div>
      <h1>Construimos ecosistemas digitales para challengers y líderes globales</h1>
      <div className="grid" style={{marginTop: '2rem'}}>
        {[
          {
            badge: 'Product · Retail',
            title: 'Market Store · Ecommerce modular',
            desc: 'Refactorizamos el repositorio Market-store para convertirlo en una experiencia omnicanal: catálogo dinámico, panel de administración y flujos de checkout desacoplados listos para escalar a nuevas verticales.',
            bullets: ['Stack React + Node + Mongo', 'Gestor de inventario en tiempo real', 'Componentes reutilizables para campañas y landing pages'],
            media: {
              src: 'https://placehold.co/640x360/1d232a/ffffff?text=Market+Store',
              alt: 'Mockup del dashboard Market Store',
              label: 'Storefronts'
            }
          },
          {
            badge: 'HealthTech · Ops',
            title: 'Hospital System · Plataforma clínica',
            desc: 'HospitalSystem evolucionó a un cockpit operativo para clínicas: agenda médica, ingreso de pacientes, módulo de farmacia y tableros para reportes regulatorios.',
            bullets: ['Arquitectura modular con roles y permisos', 'Vistas responsivas para front desk y médicos', 'Integraciones básicas HL7/FHIR-ready'],
            media: {
              src: 'https://placehold.co/640x360/1c2b34/edf2f7?text=Hospital+System',
              alt: 'Mockup operativo Hospital System',
              label: 'Patient Flow'
            }
          },
          {
            badge: 'Logistics · Energy',
            title: 'Fuel System · Gestión de combustible',
            desc: 'Sobre fuel-system construimos un sistema de control para estaciones: monitorea cargas, genera alertas de consumo y consolida reportes financieros diarios.',
            bullets: ['API REST para operaciones en campo', 'Dashboards con métricas de consumo y fraude', 'Soporte offline-first para brigadas móviles'],
            media: {
              src: 'https://placehold.co/640x360/131c24/c8f5e7?text=Fuel+System',
              alt: 'Mockup operacional Fuel System',
              label: 'Energy Ops'
            }
          }
        ].map((project) => (
          <article className="case-card" key={project.title}>
            <div className="project-media">
              <img src={project.media.src} alt={project.media.alt} loading="lazy" />
              <small>{project.media.label}</small>
            </div>
            <header>
              <span className="badge">{project.badge}</span>
              <h3>{project.title}</h3>
            </header>
            <p>{project.desc}</p>
            <ul className="card-list">
              {project.bullets.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Proyectos;
