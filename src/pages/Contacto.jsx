import React from 'react';

function Contacto() {
  return (
    <div className="card">
      <div className="spark" />
      <div className="pill">Contacto directo</div>
      <h1>Déjanos tu correo y te contactamos</h1>
      <p>
        Escríbenos tu email corporativo y uno de nuestros socios te responderá con un calendario de disponibilidad y próximos pasos.
      </p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <label className="contact-form__label" htmlFor="contact-email">
          Correo corporativo
          <span>Respondemos en menos de 48 horas hábiles.</span>
        </label>
        <div className="contact-field">
          <span className="contact-field__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="presentation" focusable="false">
              <path d="M3.75 5h16.5A1.75 1.75 0 0 1 22 6.75v10.5A1.75 1.75 0 0 1 20.25 19H3.75A1.75 1.75 0 0 1 2 17.25V6.75A1.75 1.75 0 0 1 3.75 5Zm0 1.5a.25.25 0 0 0-.25.25v.44l8.09 5.05a.75.75 0 0 0 .82 0l8.09-5.05v-.44a.25.25 0 0 0-.25-.25H3.75Zm16.5 11a.25.25 0 0 0 .25-.25V8.45l-7.3 4.56a2.25 2.25 0 0 1-2.4 0L3.5 8.45v8.8c0 .14.11.25.25.25h16.5Z" />
            </svg>
          </span>
          <input
            id="contact-email"
            className="contact-field__input"
            type="email"
            placeholder="tu@empresa.com"
            aria-label="Correo electrónico"
            required
          />
          <span className="contact-field__hint">Usa tu dominio empresarial</span>
        </div>
        <button type="submit">Enviar correo</button>
      </form>
      <p className="contact-form__note">También puedes escribirnos directo a <strong>hola@opencode.studio</strong>.</p>
    </div>
  );
}

export default Contacto;
