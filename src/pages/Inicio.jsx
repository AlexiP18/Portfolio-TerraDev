import React from 'react';

function Inicio() {
  return (
    <div className="card">
      <div className="spark" />
      <div className="pill">Estudio independiente · Latinoamérica</div>
      <div className="hero-layout">
        <div className="hero-copy">
          <h1>Diseñamos, construimos y lanzamos productos con intención</h1>
          <p>
            Acompañamos a equipos de producto desde la definición estratégica hasta la entrega en producción. Combinamos investigación, diseño de sistemas y código limpio para mantener coherencia en cada release.
          </p>
          <ul className="hero-meta">
            <li>
              <span>Focus</span>
              <p>Fintech, healthtech, retail y plataformas SaaS.</p>
            </li>
            <li>
              <span>Formato</span>
              <p>Pods dedicados 6-12 semanas con handoff documentado.</p>
            </li>
            <li>
              <span>Resultado</span>
              <p>Experiencias consistentes, listas para escalar y medir.</p>
            </li>
          </ul>
        </div>
        <div className="hero-panel">
          <p className="hero-panel__label">Estado del estudio</p>
          <div className="hero-panel__metric">
            <span>02</span>
            <small>Slots disponibles Q2</small>
          </div>
          <div className="hero-panel__list">
            <div>
              <p>Discovery & Strategy</p>
              <small>Sprints de 10 días · backlog listo para equipo interno</small>
            </div>
            <div>
              <p>Product Build</p>
              <small>Design system + front-end + devops orquestado</small>
            </div>
            <div>
              <p>Growth Enablement</p>
              <small>Dashboards, experimentación y handoff de analítica</small>
            </div>
          </div>
        </div>
      </div>
      <div className="grid two hero-metrics">
        <div className="metric">
          <span>+120</span>
          <span>Productos lanzados</span>
        </div>
        <div className="metric">
          <span>9.7/10</span>
          <span>Satisfacción clientes</span>
        </div>
        <div className="metric">
          <span>28</span>
          <span>Pares creativos</span>
        </div>
        <div className="metric">
          <span>14 años</span>
          <span>Construyendo futuro</span>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
