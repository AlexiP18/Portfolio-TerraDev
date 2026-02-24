import React from 'react';

function BlogIa() {
  const pillars = [
    {
      title: 'Discovery asistido por IA',
      body:
        'Usamos embeddings para clasificar feedback de usuarios, tickets y entrevistas. El resultado es un mapa temático priorizado que aterriza directo en el roadmap.',
    },
    {
      title: 'Product ops aumentado',
      body:
        'Copilotos alineados a tu tono editorial redactan notas de release, documentación viva y microcopys. Los prompts se versionan en Git y se revisan como código.',
    },
    {
      title: 'Customer Experience autónomo',
      body:
        'Bots expertos conectados a una base vectorial privada responden L1 y preparan handoff con contexto completo a los agentes humanos.',
    },
  ];

  const safeguards = [
    'Contratos de datos con trazabilidad de uso y expiración.',
    'Filtro de PII en la entrada y salida de cada asistente.',
    'Panel de observabilidad que rastrea prompts, costos y métricas de calidad.',
  ];

  return (
    <div className="card">
      <div className="spark" />
      <div className="pill">Inteligencia Artificial</div>
      <h1>Integrar IA generativa sin romper tus operaciones</h1>
      <p>
        Esta guía describe cómo ensamblamos una cadena de valor IA→producto→operaciones para compañías que necesitan innovar sin comprometer seguridad ni compliance. Cubrimos la arquitectura, los
        equipos necesarios y los riesgos a monitorear.
      </p>

      <section className="hero-metrics" style={{ marginTop: '1.5rem' }}>
        <h2>3 pilares técnicos</h2>
        <div className="grid two" style={{ marginTop: '1rem' }}>
          {pillars.map((section) => (
            <article className="case-card" key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '2.5rem' }}>
        <h2>Ruta de implementación 6 semanas</h2>
        <ol className="card-list">
          <li>Diagnóstico de fuentes de datos, integraciones y restricciones legales.</li>
          <li>Diseño de prompts y agentes con KPIs de calidad + training set curado.</li>
          <li>Pilotaje cerrado con circuit breaker y métricas de satisfacción.</li>
          <li>Escalamiento: automatización de retraining, cost management y gobierno.</li>
        </ol>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Salvaguardas críticas</h2>
        <ul className="card-list">
          {safeguards.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default BlogIa;
