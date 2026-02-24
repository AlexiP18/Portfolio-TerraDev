import React from 'react';

function Blog() {
  return (
    <div className="card">
      <div className="spark" />
      <div className="pill">Notas & Research</div>
      <h1>Ideas frescas sobre producto, diseño y tecnología aplicada</h1>
      <div className="grid" style={{marginTop: '2rem'}}>
        <article className="case-card">
          <h3>Playbooks de descubrimiento: cómo alineamos negocio, UX y data en 10 días</h3>
          <p>
            Deconstruimos nuestro formato de workshop híbrido: plantillas, decisiones clave y cómo llegamos a un backlog priorizado listo para sprints.
          </p>
          <button className="ghost-btn">Leer síntesis</button>
        </article>
        <article className="case-card">
          <h3>Motion systems para productos serios: principios y librerías</h3>
          <p>
            Motion no es decoración. Explicamos cómo definimos tokens, duraciones y microinteracciones para interfaces financieras y B2B.
          </p>
          <button className="ghost-btn">Ver framework</button>
        </article>
        <article className="case-card">
          <h3>Escalando Frontend con equipos distribuidos</h3>
          <p>
            Tooling, convenciones y automatizaciones que mantenemos en proyectos multi-squad con React, Turborepo y contratos claros.
          </p>
          <button className="ghost-btn">Explorar guía</button>
        </article>
      </div>
    </div>
  );
}

export default Blog;
