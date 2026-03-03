import React, { useState } from 'react';

/* ─────────────────────────────────────────────────────────────
   COMPONENTE: INPUT con borde inferior
───────────────────────────────────────────────────────────── */
function FieldInput({ label, id, required, children }) {
  const [focused, setFocused] = useState(false);
  const borderColor = focused ? '#2DD4BF' : 'rgba(255,255,255,0.18)';

  const baseStyle = {
    background: 'transparent',
    borderBottom: `1.5px solid ${borderColor}`,
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderRadius: 0,
    outline: 'none',
    color: '#F8FAFC',
    width: '100%',
    padding: '0.65rem 0',
    fontSize: '0.95rem',
    fontFamily: 'Inter, sans-serif',
    transition: 'border-color 0.2s',
    caretColor: '#2DD4BF',
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="font-ui font-medium text-xs uppercase tracking-widest transition-colors duration-200"
        style={{ color: focused ? '#2DD4BF' : '#64748B' }}
      >
        {label}{required && <span className="text-primary ml-0.5">*</span>}
      </label>
      {React.cloneElement(children, {
        id,
        style: baseStyle,
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
      })}
    </div>
  );
}

/* Íconos */
const IconEmail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconLocation = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconGithub = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);
const IconLinkedin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const IconX = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   PÁGINA CONTACTO
───────────────────────────────────────────────────────────── */
function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', tipo: '', mensaje: '' });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);
    setTimeout(() => { setEnviando(false); setEnviado(true); }, 1800);
  };

  return (
    <div className="flex flex-col w-full min-h-screen">

      {/* ── Cabecera ──────────────────────────────────── */}
      <div
        className="relative overflow-hidden pt-20 pb-10"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% -5%, rgba(45,212,191,0.07) 0%, transparent 65%), #0B1120',
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-ui font-medium text-xs text-primary uppercase tracking-widest">
              Contacto · Hablemos
            </span>
          </div>
          <h1 className="font-heading font-bold text-text-main text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
            ¿Tienes un proyecto en mente?{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #2DD4BF, #67e8f9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Cuéntanos.
            </span>
          </h1>
          <p className="font-body text-text-body text-base sm:text-lg max-w-xl">
            Respondemos en menos de 24 horas. Sin formularios interminables ni ventas agresivas.
          </p>
        </div>
      </div>

      {/* ── Split screen ────────────────────────────── */}
      <section className="flex-1 w-full max-w-6xl mx-auto px-6 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">

          {/* Columna izquierda: Info */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-28">
            <div className="flex flex-col gap-6">
              <h2 className="font-heading font-bold text-text-main text-xl">Información de contacto</h2>

              <a href="mailto:hola@terrabyte.ec" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                               border border-primary/20 bg-primary/8 text-primary
                               group-hover:bg-primary/15 group-hover:border-primary/40 transition-all duration-200">
                  <IconEmail />
                </div>
                <div className="flex flex-col gap-0.5 pt-0.5">
                  <p className="font-ui font-medium text-xs text-text-muted uppercase tracking-wider">Email</p>
                  <p className="font-body text-text-main group-hover:text-primary transition-colors duration-200">
                    hola@terrabyte.ec
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                               border border-primary/20 bg-primary/8 text-primary">
                  <IconLocation />
                </div>
                <div className="flex flex-col gap-0.5 pt-0.5">
                  <p className="font-ui font-medium text-xs text-text-muted uppercase tracking-wider">Ubicación</p>
                  <p className="font-body text-text-main">Ambato, Ecuador</p>
                  <p className="font-body text-xs text-text-muted">UTC−5 · Trabajo remoto global</p>
                </div>
              </div>
            </div>

            <div className="h-px bg-white/[0.08]" />

            <div className="flex flex-col gap-3">
              <p className="font-ui font-medium text-xs text-text-muted uppercase tracking-wider">Redes sociales</p>
              <div className="flex items-center gap-3">
                {[
                  { icon: <IconGithub />,   href: 'https://github.com',   label: 'GitHub' },
                  { icon: <IconLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: <IconX />,        href: 'https://x.com',        label: 'X / Twitter' },
                ].map(({ icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
                    className="w-10 h-10 rounded-xl border border-white/10 text-text-body
                               hover:border-primary/30 hover:text-primary hover:bg-primary/8
                               flex items-center justify-center transition-all duration-200">
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl border border-green-500/20 bg-green-500/5">
              <span className="w-2 h-2 rounded-full bg-green-400 shrink-0 animate-pulse" />
              <div className="flex flex-col gap-0.5">
                <p className="font-ui font-semibold text-sm text-green-400">Disponibles para nuevos proyectos</p>
                <p className="font-body text-xs text-text-muted">Capacidad abierta · Q2 2026</p>
              </div>
            </div>
          </div>

          {/* Columna derecha: Formulario */}
          <div
            className="rounded-2xl p-7 sm:p-9 border border-white/[0.09] bg-white/[0.02]"
            style={{ backdropFilter: 'blur(12px)' }}
          >
            {enviado ? (
              <div className="flex flex-col items-center justify-center text-center gap-5 py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center border border-primary/30 bg-primary/10">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF"
                    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-text-main text-2xl">¡Mensaje recibido!</h3>
                <p className="font-body text-text-body text-sm max-w-sm leading-relaxed">
                  Te respondemos en menos de 24 horas. Si es urgente, escríbenos a{' '}
                  <a href="mailto:hola@terrabyte.ec" className="text-primary hover:underline">hola@terrabyte.ec</a>
                </p>
                <button
                  onClick={() => { setEnviado(false); setForm({ nombre: '', email: '', tipo: '', mensaje: '' }); }}
                  className="font-ui text-sm text-primary hover:underline mt-2"
                >
                  Enviar otro mensaje →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                  <h2 className="font-heading font-bold text-text-main text-xl">Cuéntanos tu proyecto</h2>
                  <p className="font-body text-text-muted text-sm">Sin compromiso. Evaluamos si podemos ayudarte de verdad.</p>
                </div>

                <FieldInput label="Nombre completo" id="nombre" required>
                  <input type="text" required placeholder="Ej: Ana Torres"
                    value={form.nombre} onChange={handleChange} />
                </FieldInput>

                <FieldInput label="Email de trabajo" id="email" required>
                  <input type="email" required placeholder="ana@empresa.com"
                    value={form.email} onChange={handleChange} />
                </FieldInput>

                <FieldInput label="Tipo de proyecto" id="tipo" required>
                  <select required value={form.tipo} onChange={handleChange}
                    style={{ appearance: 'none', cursor: 'pointer' }}>
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="web">Aplicación Web</option>
                    <option value="movil">Aplicación Móvil</option>
                    <option value="sistema">Sistema Empresarial</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="api">API / Microservicios</option>
                    <option value="otro">Otro</option>
                  </select>
                </FieldInput>

                <FieldInput label="Cuéntanos más" id="mensaje" required>
                  <textarea required rows={4}
                    placeholder="¿Qué quieres construir? ¿Cuál es el problema que necesitas resolver?"
                    value={form.mensaje} onChange={handleChange}
                    style={{ resize: 'none' }} />
                </FieldInput>

                <button
                  type="submit"
                  disabled={enviando}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl
                             font-ui font-semibold text-base transition-all duration-200
                             disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background: enviando ? '#1a8a7a' : '#2DD4BF',
                    color: '#0B1120',
                    boxShadow: enviando ? 'none' : '0 0 20px rgba(45,212,191,0.35)',
                  }}
                >
                  {enviando ? (
                    <>
                      <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                      </svg>
                      Enviando…
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacto;
