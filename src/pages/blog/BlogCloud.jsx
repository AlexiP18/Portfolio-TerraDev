import React from 'react';

function BlogCloud() {
  const practices = [
    {
      label: 'Arquitectura Zero Trust',
      detail: 'Service mesh (Istio/Linkerd) con mTLS obligatorio, políticas OPA y segmentación multi-account.',
    },
    {
      label: 'Operaciones GitOps',
      detail: 'Terraform + ArgoCD/Flux para declarar infraestructura y apps. Chaos drills semanales para validar resiliencia.',
    },
    {
      label: 'FinOps y compliance continuo',
      detail: 'Budgets automatizados, tagging obligatorio y reportes SOC2/PCI generados desde la misma fuente de verdad.',
    },
  ];

  return (
    <div className="card">
      <div className="spark" />
      <div className="pill">Cloud Native</div>
      <h1>Cloud moderno para plataformas que escalan cada semana</h1>
      <p>
        Este playbook resume cómo operamos plataformas multi-región con releases semanales. Incluye arquitectura de referencia, prácticas de SRE y gobierno financiero para mantener control.
      </p>

      <section style={{ marginTop: '1.8rem' }}>
        <h2>Arquitectura de referencia</h2>
        <p>
          Malla de servicios + API Gateway, clústeres EKS/GKE con nodos spot y on-demand, bases distribuidas (Aurora, Spanner) y colas/event buses resilientes. Todo versionado en Terraform y probado con
          Terratest.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Prácticas esenciales</h2>
        <div className="custom-grid two" style={{ marginTop: '1rem' }}>
          {practices.map((item) => (
            <article className="case-card" key={item.label}>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '2.2rem' }}>
        <h2>Checklist de lanzamientos cloud</h2>
        <ul className="card-list">
          <li>Pruebas de carga automatizadas antes de cada release mayor.</li>
          <li>Alertas SLO + tableros compartidos con negocio.</li>
          <li>Backups cifrados y drills de recuperación documentados.</li>
          <li>Revisión FinOps mensual con objetivos de costo por feature.</li>
        </ul>
      </section>
    </div>
  );
}

export default BlogCloud;
