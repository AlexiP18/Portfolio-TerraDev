import React from 'react';

function Servicios() {
  return (
    <div className="card">
      <div className="spark" />
      <div className="pill">Servicios técnicos</div>
      <h1>Equipos especializados en backend, frontend y DevOps</h1>
      <p>
        Diseñamos squads que entran y salen según la necesidad: arquitectura de APIs, interfaces en React/Next y pipelines DevOps listos para producción.
      </p>
      <div className="grid two service-grid">
        <div>
          <h3>Backend Engineering</h3>
          <p>Node.js, NestJS, Express, microservicios y bases de datos relacionales/noSQL con monitoreo integrado.</p>
          <ul className="card-list">
            <li>Diseño de APIs REST/GraphQL</li>
            <li>Integración con colas, mensajería y terceros</li>
            <li>Observabilidad con OpenTelemetry, Datadog, Grafana</li>
          </ul>
        </div>
        <div>
          <h3>Frontend Experience</h3>
          <p>Interfaces accesibles, performance-first y design systems mantenibles.</p>
          <ul className="card-list">
            <li>React, Next.js, Remix, Vite</li>
            <li>Storybook, Chromatic, testing end-to-end</li>
            <li>Internacionalización, modo oscuro y temas escalables</li>
          </ul>
        </div>
        <div>
          <h3>DevOps & Platform</h3>
          <p>Infraestructura en AWS, GCP o Azure con pipelines automatizados.</p>
          <ul className="card-list">
            <li>IaC con Terraform/Pulumi</li>
            <li>Kubernetes, serverless, edge runtimes</li>
            <li>CI/CD, seguridad y auditoría continua</li>
          </ul>
        </div>
        <div>
          <h3>Product Support</h3>
          <p>Playbooks de handoff, runbooks, documentación viva y soporte a equipos internos.</p>
          <ul className="card-list">
            <li>Workshops y training para tu equipo</li>
            <li>KPIs de adopción, dashboards y alertas</li>
            <li>Roadmap compartido con stakeholders</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
