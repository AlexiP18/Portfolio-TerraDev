import React from 'react';

function BlogCase() {
  const stack = [
    {
      name: 'GenMyModel + PlantUML',
      notes: 'Modelado colaborativo con auto-generación de esquemas GraphQL y documentación sincronizada.',
    },
    {
      name: 'OutSystems',
      notes: 'Entrega acelerada de backoffice y workflows; exportamos componentes para integrarlos en repos tradicionales.',
    },
    {
      name: 'Codebots',
      notes: 'Generación de código limpio a partir de modelos DSL, con pruebas unitarias incluidas.',
    },
  ];

  return (
    <div className="card">
      <div className="spark" />
      <div className="pill">Herramientas CASE</div>
      <h1>CASE platforms para acelerar el delivery sin deuda</h1>
      <p>
        Las herramientas CASE (Computer-Aided Software Engineering) volvieron con fuerza gracias al auge low-code. Compartimos nuestra matriz para elegir la herramienta correcta según dominio,
        compliance y equipos híbridos.
      </p>

      <section style={{ marginTop: '1.8rem' }}>
        <h2>Criterios clave</h2>
        <ul className="card-list">
          <li>Soporte para versionado git-friendly y pipelines CI/CD.</li>
          <li>Generación de artefactos trazables (UML, APIs, pruebas).</li>
          <li>Extensibilidad: SDKs para integrar design systems y reglas custom.</li>
        </ul>
      </section>

      <section style={{ marginTop: '2.2rem' }}>
        <h2>Stack recomendado 2026</h2>
        <div className="custom-grid two" style={{ marginTop: '1rem' }}>
          {stack.map((tool) => (
            <article className="case-card" key={tool.name}>
              <h3>{tool.name}</h3>
              <p>{tool.notes}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '2.2rem' }}>
        <h2>Plan de adopción</h2>
        <ol className="card-list">
          <li>Mapear dominios y procesos que se benefician de modelado visual.</li>
          <li>Construir un design system / librería de componentes compartida.</li>
          <li>Configurar pipelines de validación automática para artefactos CASE.</li>
          <li>Habilitar training cruzado entre analistas y devs para mantener paridad.</li>
        </ol>
      </section>
    </div>
  );
}

export default BlogCase;
