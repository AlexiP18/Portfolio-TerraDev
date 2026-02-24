import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <div className="card">
      <div className="spark" />
      <div className="pill">Notas & Research</div>
      <h1>Ideas frescas sobre producto, diseño y tecnología aplicada</h1>
      <div className="grid" style={{marginTop: '2rem'}}>
        <article className="case-card">
          <h3>IA en cadenas de producto</h3>
          <p>
            Cómo integramos modelos generativos y asistentes autónomos en research, content ops y soporte a clientes sin romper compliance.
          </p>
          <Link className="ghost-btn" to="/blog/ia">Leer caso IA</Link>
        </article>
        <article className="case-card">
          <h3>Herramientas CASE para equipos híbridos</h3>
          <p>
            Evaluamos CASE low-code/no-code y entornos visuales para acelerar handoffs entre diseño, producto y devs.
          </p>
          <Link className="ghost-btn" to="/blog/case">Entrar al análisis</Link>
        </article>
        <article className="case-card">
          <h3>Playbook Cloud Native</h3>
          <p>
            Observabilidad, escalado automático y gobernanza multi-cloud para plataformas con releases semanales.
          </p>
          <Link className="ghost-btn" to="/blog/cloud">Ver playbook cloud</Link>
        </article>
      </div>
    </div>
  );
}

export default Blog;
