import React from 'react';
import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────────────────────────
   DATOS
───────────────────────────────────────────────────────────── */

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Diseño en tiempo real',
    body: 'Crea y edita interfaces de usuario con actualizaciones en vivo visibles para todos los colaboradores, sin necesidad de guardar ni sincronizar manualmente.',
    accent: '#f472b6',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Prototipos interactivos',
    body: 'Convierte tus diseños en prototipos navegables con transiciones, animaciones y flujos de usuario sin escribir una sola línea de código.',
    accent: '#e879f9',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Colaboración simultánea',
    body: 'Varios diseñadores pueden trabajar en el mismo archivo al mismo tiempo. Ver el cursor de cada colaborador en tiempo real elimina los conflictos de versiones.',
    accent: '#fb923c',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
      </svg>
    ),
    title: 'Biblioteca de componentes',
    body: 'Crea, comparte y reutiliza componentes de diseño en toda la organización. Un cambio en la biblioteca se refleja automáticamente en todos los proyectos.',
    accent: '#34d399',
  },
];

const CAPABILITIES = [
  {
    name: 'Basado en navegador',
    tag: 'Web',
    tagColor: '#f472b6',
    desc: 'Funciona directamente en el navegador usando WebGL, ofreciendo un rendimiento comparable al de aplicaciones nativas sin necesidad de instalación.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    name: 'Plugins y extensiones',
    tag: 'Ecosistema',
    tagColor: '#e879f9',
    desc: 'Compatible con cientos de plugins de la comunidad que extienden sus funcionalidades: desde generadores de datos hasta integración con sistemas de diseño.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" /><line x1="16" y1="8" x2="2" y2="22" /><line x1="17.5" y1="15" x2="9" y2="15" />
      </svg>
    ),
  },
  {
    name: 'Generación de código',
    tag: 'Dev Mode',
    tagColor: '#fb923c',
    desc: 'Modo developer que genera código CSS, iOS y Android automáticamente desde los diseños, facilitando el traspaso entre diseñadores y desarrolladores.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

const COMPARISON = [
  { pro: 'Colaboración en tiempo real', con: 'Requiere conexión a internet' },
  { pro: 'Interfaz moderna e intuitiva', con: 'Puede volverse pesado en proyectos grandes' },
  { pro: 'Funciona directamente en el navegador', con: 'Algunas funciones avanzadas son de pago' },
  { pro: 'Permite crear prototipos interactivos', con: 'No está enfocado en diagramas UML' },
  { pro: 'Soporta diseño de alta fidelidad', con: 'Puede ser complejo para principiantes' },
  { pro: 'Amplia biblioteca de componentes reutilizables', con: 'Dependencia de la nube' },
];

/* ─────────────────────────────────────────────────────────────
   COMPONENTE PRINCIPAL
───────────────────────────────────────────────────────────── */

function BlogFigma() {
  return (
    <div className="flex flex-col w-full">

      {/* ── HERO ────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '6rem',
          paddingBottom: '3.5rem',
          background:
            'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(244,114,182,0.09) 0%, transparent 65%), #0B1120',
        }}
      >
        {/* Dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #f472b6 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem' }}>

          {/* ← Volver */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-ui text-sm text-text-muted
                       hover:text-primary transition-colors duration-200 mb-8 group"
          >
            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:-translate-x-1"
            >
              <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 5 5 12 12 19" />
            </svg>
            Volver al blog
          </Link>

          {/* Categorías */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            {['UI/UX', 'Diseño', 'Prototipado'].map((cat) => (
              <span
                key={cat}
                className="font-code"
                style={{
                  fontSize: '0.65rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '999px',
                  background: 'rgba(244,114,182,0.12)',
                  color: '#f472b6',
                  border: '1px solid rgba(244,114,182,0.3)',
                }}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Título */}
          <h1
            className="font-heading font-bold text-text-main"
            style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.875rem)',
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
              maxWidth: '44rem',
            }}
          >
            Figma: Diseño colaborativo de{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #f472b6, #e879f9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              alta fidelidad
            </span>
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #f472b6, #e879f9)',
                  color: '#0B1120',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  fontFamily: '"Space Grotesk", sans-serif',
                }}
              >
                T
              </div>
              <span className="font-ui font-medium text-text-body text-sm">
                Equipo Terrabyte EC
              </span>
            </div>
            <span className="w-1 h-1 rounded-full bg-white/20 inline-block" />
            <span className="font-code text-text-muted text-xs">Abril 2026</span>
            <span className="w-1 h-1 rounded-full bg-white/20 inline-block" />
            <span className="font-code text-text-muted text-xs">5 min de lectura</span>
          </div>
        </div>
      </section>

      {/* ── CUERPO ──────────────────────────────────────────── */}
      <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem 5rem' }}>

        {/* Intro */}
        <section style={{ marginTop: '3rem' }}>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            El diseño de interfaces no es solo sobre estética — es sobre <strong className="text-text-main">comunicación, consistencia y colaboración</strong>.
            Cuando múltiples personas deben trabajar juntas en un mismo producto digital, necesitas una herramienta que
            no solo permita crear, sino que haga del proceso colaborativo algo natural y eficiente.
          </p>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            <strong className="text-text-main">Figma</strong> nació con esa misión: democratizar el diseño y hacerlo accesible desde cualquier
            navegador, sin importar el sistema operativo ni el dispositivo. Su arquitectura basada en <em className="text-[#f472b6]">WebGL</em> le
            permite ofrecer un rendimiento comparable al de las aplicaciones nativas, mientras mantiene toda la potencia
            colaborativa de la nube.
          </p>
        </section>

        {/* ¿Qué es? */}
        <section style={{ marginTop: '3rem' }}>
          <h2
            className="font-heading font-bold text-text-main"
            style={{
              fontSize: '1.625rem',
              lineHeight: 1.25,
              paddingBottom: '0.625rem',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              marginBottom: '1rem',
            }}
          >
            ¿Qué es Figma?
          </h2>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            Figma es un <strong className="text-text-main">editor de gráficos vectoriales y herramienta de prototipado</strong> que sirve para
            diseñar interfaces de usuario. Ofrece todos los recursos necesarios para cada fase del diseño de un proyecto,
            incluyendo la generación de código para el traspaso a desarrollo.
          </p>
          <blockquote
            style={{
              borderLeft: '3px solid #f472b6',
              margin: '2rem 0',
              padding: '1rem 1.375rem',
              background: 'rgba(244,114,182,0.05)',
              borderRadius: '0 12px 12px 0',
              color: '#CBD5E1',
              fontStyle: 'italic',
              fontSize: '1.0625rem',
              lineHeight: 1.75,
            }}
          >
            Figma es adoptada fácilmente por equipos de producto y grandes empresas tecnológicas para el diseño de
            aplicaciones móviles, web y diseños corporativos. Compartir prototipos mediante enlaces ha facilitado
            el trabajo remoto y distribuido.
          </blockquote>
        </section>

        {/* Características */}
        <section style={{ marginTop: '3rem' }}>
          <h2
            className="font-heading font-bold text-text-main"
            style={{
              fontSize: '1.625rem',
              lineHeight: 1.25,
              paddingBottom: '0.625rem',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              marginBottom: '1.5rem',
            }}
          >
            Características principales
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map(({ icon, title, body, accent }) => (
              <div
                key={title}
                className="group relative rounded-2xl p-5 flex flex-col gap-3 overflow-hidden
                           glass glass-glow transition-all duration-300 cursor-default"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${accent}14 0%, transparent 65%)` }}
                />
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 0 1px ${accent}40` }}
                />
                <div
                  className="relative z-10 w-11 h-11 rounded-xl flex items-center justify-center shrink-0
                             transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${accent}15`,
                    color: accent,
                    border: `1px solid ${accent}30`,
                  }}
                >
                  {icon}
                </div>
                <div className="relative z-10">
                  <h3 className="font-heading font-bold text-text-main text-base leading-tight mb-1.5">{title}</h3>
                  <p className="font-body text-text-body text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Usos principales */}
        <section style={{ marginTop: '3.5rem' }}>
          <h2
            className="font-heading font-bold text-text-main"
            style={{
              fontSize: '1.625rem',
              lineHeight: 1.25,
              paddingBottom: '0.625rem',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              marginBottom: '1.5rem',
            }}
          >
            Casos de uso frecuentes
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { name: 'Apps móviles', color: '#f472b6' },
              { name: 'Interfaces web', color: '#e879f9' },
              { name: 'Diseño corporativo', color: '#fb923c' },
              { name: 'Design Systems', color: '#34d399' },
              { name: 'Wireframes HiFi', color: '#818cf8' },
              { name: 'Handoff a Dev', color: '#2DD4BF' },
            ].map(({ name, color }) => (
              <div
                key={name}
                className="rounded-xl px-4 py-3 flex items-center gap-2.5 glass transition-all duration-300 hover:scale-[1.02]"
                style={{ cursor: 'default' }}
              >
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
                <span className="font-ui text-sm text-text-main font-medium">{name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Funcionalidades */}
        <section style={{ marginTop: '3.5rem' }}>
          <h2
            className="font-heading font-bold text-text-main"
            style={{
              fontSize: '1.625rem',
              lineHeight: 1.25,
              paddingBottom: '0.625rem',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              marginBottom: '1.5rem',
            }}
          >
            Funcionalidades destacadas
          </h2>

          <div className="flex flex-col gap-4">
            {CAPABILITIES.map(({ name, tag, tagColor, desc, icon }) => (
              <div
                key={name}
                className="group flex items-start gap-4 rounded-2xl p-5 glass glass-glow
                           transition-all duration-300 cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0
                             group-hover:scale-110 transition-transform duration-300"
                  style={{
                    backgroundColor: `${tagColor}15`,
                    color: tagColor,
                    border: `1px solid ${tagColor}30`,
                  }}
                >
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-heading font-bold text-text-main text-base">{name}</h3>
                    <span
                      className="font-code text-[0.6rem] uppercase tracking-widest px-2 py-0.5 rounded-full"
                      style={{
                        background: `${tagColor}18`,
                        color: tagColor,
                        border: `1px solid ${tagColor}35`,
                      }}
                    >
                      {tag}
                    </span>
                  </div>
                  <p className="font-body text-text-body text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tabla Ventajas vs Desventajas */}
        <section style={{ marginTop: '3.5rem' }}>
          <h2
            className="font-heading font-bold text-text-main"
            style={{
              fontSize: '1.625rem',
              lineHeight: 1.25,
              paddingBottom: '0.625rem',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              marginBottom: '1.5rem',
            }}
          >
            Ventajas vs Desventajas
          </h2>

          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(30,41,59,0.4)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div className="grid grid-cols-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="px-5 py-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                <span className="font-ui font-semibold text-sm text-emerald-400 uppercase tracking-wider">Ventajas</span>
              </div>
              <div className="px-5 py-3 flex items-center gap-2" style={{ borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="w-2 h-2 rounded-full bg-rose-400 inline-block" />
                <span className="font-ui font-semibold text-sm text-rose-400 uppercase tracking-wider">Desventajas</span>
              </div>
            </div>

            {COMPARISON.map(({ pro, con }, i) => (
              <div
                key={i}
                className="grid grid-cols-2 transition-colors duration-200 hover:bg-white/[0.03]"
                style={{ borderBottom: i < COMPARISON.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
              >
                <div className="px-5 py-3.5 flex items-start gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="font-body text-sm text-text-body leading-snug">{pro}</span>
                </div>
                <div className="px-5 py-3.5 flex items-start gap-2" style={{ borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fb7185" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span className="font-body text-sm text-text-body leading-snug">{con}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ¿Cuándo usar? */}
        <section style={{ marginTop: '3.5rem' }}>
          <h2
            className="font-heading font-bold text-text-main"
            style={{
              fontSize: '1.625rem',
              lineHeight: 1.25,
              paddingBottom: '0.625rem',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              marginBottom: '1rem',
            }}
          >
            ¿Cuándo usar Figma?
          </h2>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            Figma es la herramienta ideal cuando necesitas <strong className="text-text-main">diseños de alta fidelidad</strong>,
            especialmente en equipos distribuidos donde la colaboración en tiempo real es crítica. Es perfecta
            para diseñar sistemas completos, crear design systems y facilitar el proceso de handoff con desarrollo.
          </p>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            Si buscas modelado UML o diagramas de arquitectura, considera <strong className="text-text-main">Visual Paradigm</strong>.
            Para wireframes rápidos de baja fidelidad, <strong className="text-text-main">Balsamiq</strong> puede ser más eficiente.
            Pero cuando el objetivo es el diseño visual final y la colaboración de equipo, Figma no tiene rival.
          </p>
        </section>

        {/* Separador */}
        <div
          style={{
            margin: '3.5rem 0',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(244,114,182,0.3), transparent)',
          }}
        />

        {/* ── CTA ──────────────────────────────────────────── */}
        <div
          style={{
            borderRadius: '22px',
            border: '1px solid rgba(244,114,182,0.22)',
            background:
              'linear-gradient(135deg, rgba(244,114,182,0.07) 0%, rgba(15,23,42,0.8) 60%, rgba(244,114,182,0.04) 100%)',
            padding: '2.75rem 2.25rem',
            backdropFilter: 'blur(16px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-40%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(244,114,182,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: '14px',
              background: 'rgba(244,114,182,0.12)',
              border: '1px solid rgba(244,114,182,0.28)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
              <path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
            </svg>
          </div>

          <h2 className="font-heading font-bold text-text-main" style={{ fontSize: '1.375rem', marginBottom: '0.6rem' }}>
            ¿Listo para elevar el diseño de tu producto?
          </h2>
          <p
            className="font-body text-text-body"
            style={{ fontSize: '0.9375rem', lineHeight: 1.7, maxWidth: '24rem', margin: '0 auto 1.75rem' }}
          >
            En Terrabyte EC integramos Figma en nuestro flujo de diseño para entregar interfaces modernas y bien
            documentadas. Cuéntanos tu proyecto.
          </p>

          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 font-ui font-semibold"
            style={{
              padding: '0.75rem 1.625rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #f472b6, #e879f9)',
              color: '#0B1120',
              fontSize: '0.9375rem',
              boxShadow: '0 0 24px rgba(244,114,182,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 0 32px rgba(244,114,182,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 24px rgba(244,114,182,0.35)';
            }}
          >
            Iniciar Proyecto
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogFigma;
