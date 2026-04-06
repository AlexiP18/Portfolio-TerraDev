import React from 'react';
import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────────────────────────
   DATOS
───────────────────────────────────────────────────────────── */

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" /><path d="M5 20V8l7-5 7 5v12" /><rect x="9" y="12" width="6" height="8" />
      </svg>
    ),
    title: 'UML 2.6 completo',
    body: 'Soporte nativo para la última versión de UML, permitiendo crear diagramas de clases, casos de uso, secuencia y más con total conformidad al estándar.',
    accent: '#6366f1',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: 'Diagramas múltiples',
    body: 'Además de UML, soporta BPMN, diagramas de flujo de datos, diagramas organizacionales y más — todo en una sola herramienta.',
    accent: '#2DD4BF',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    title: 'Ingeniería inversa',
    body: 'Convierte código existente en diagramas UML automáticamente, facilitando la documentación y comprensión de sistemas heredados.',
    accent: '#fb923c',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
      </svg>
    ),
    title: 'Interfaz drag & drop',
    body: 'Diseño intuitivo que permite arrastrar y soltar elementos para crear diagramas profesionales sin curva de aprendizaje excesiva.',
    accent: '#f472b6',
  },
];

const CAPABILITIES = [
  {
    name: 'Ciclo de vida completo',
    tag: 'Core',
    tagColor: '#6366f1',
    desc: 'Acompaña todas las fases del desarrollo: planificación, análisis, diseño, implementación y documentación del sistema.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    name: 'Recursos de aprendizaje',
    tag: 'Educación',
    tagColor: '#2DD4BF',
    desc: 'Incluye tutoriales, guías y documentación detallada que facilitan la adopción, tanto para principiantes como para usuarios avanzados.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    name: 'Community Edition',
    tag: 'Gratis',
    tagColor: '#34d399',
    desc: 'Versión gratuita disponible para uso no comercial. Ideal para estudiantes, académicos y proyectos personales.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

const COMPARISON = [
  { pro: 'Herramienta completa para todo el ciclo de desarrollo', con: 'Puede ser compleja para usuarios nuevos' },
  { pro: 'Soporta la última versión de UML (2.6)', con: 'Requiere tiempo para dominar todas sus funciones' },
  { pro: 'Permite crear múltiples tipos de diagramas', con: 'Puede consumir bastantes recursos del sistema' },
  { pro: 'Compatible con BPMN, flujo de datos y más', con: 'Algunas versiones completas son de pago' },
  { pro: 'Incluye ingeniería inversa (código → diagramas)', con: 'No está enfocada en prototipos rápidos' },
  { pro: 'Tiene versión gratuita (Community Edition)', con: 'Limitaciones en la versión gratuita' },
];

/* ─────────────────────────────────────────────────────────────
   COMPONENTE PRINCIPAL
───────────────────────────────────────────────────────────── */

function BlogVisualParadigm() {
  return (
    <div className="flex flex-col w-full">

      {/* ── HERO ────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '6rem',
          paddingBottom: '3.5rem',
          background:
            'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(99,102,241,0.09) 0%, transparent 65%), #0B1120',
        }}
      >
        {/* Dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
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
            {['UML', 'Herramientas', 'Ingeniería de Software'].map((cat) => (
              <span
                key={cat}
                className="font-code"
                style={{
                  fontSize: '0.65rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '999px',
                  background: 'rgba(99,102,241,0.12)',
                  color: '#818cf8',
                  border: '1px solid rgba(99,102,241,0.3)',
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
            Visual Paradigm: Modelado UML para{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #6366f1, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              todo el ciclo de vida
            </span>
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
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
            <span className="font-code text-text-muted text-xs">
              Abril 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20 inline-block" />
            <span className="font-code text-text-muted text-xs">
              5 min de lectura
            </span>
          </div>
        </div>
      </section>

      {/* ── CUERPO ──────────────────────────────────────────── */}
      <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem 5rem' }}>

        {/* Intro */}
        <section style={{ marginTop: '3rem' }}>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            En la ingeniería de software, la capacidad de <strong className="text-text-main">modelar, documentar y comunicar la arquitectura</strong> de
            un sistema es fundamental. Ya sea que estés levantando requisitos, diseñando la estructura de clases o documentando procesos
            de negocio, necesitas una herramienta que se adapte a cada etapa del proyecto.
          </p>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            <strong className="text-text-main">Visual Paradigm</strong> es una de las soluciones más completas en este ámbito: una plataforma
            de modelado UML que cubre desde la creación de diagramas hasta la ingeniería inversa de código, todo dentro de una interfaz
            intuitiva y profesional.
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
            ¿Qué es Visual Paradigm?
          </h2>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            Visual Paradigm es una <strong className="text-text-main">potente herramienta de modelado UML</strong> que ofrece una amplia gama
            de funciones para respaldar todo el ciclo de vida del desarrollo de software. Compatible con la
            última versión de UML (2.6), brinda a los usuarios acceso a las capacidades de modelado más
            actualizadas del estándar.
          </p>
          <blockquote
            style={{
              borderLeft: '3px solid #6366f1',
              margin: '2rem 0',
              padding: '1rem 1.375rem',
              background: 'rgba(99,102,241,0.05)',
              borderRadius: '0 12px 12px 0',
              color: '#CBD5E1',
              fontStyle: 'italic',
              fontSize: '1.0625rem',
              lineHeight: 1.75,
            }}
          >
            Visual Paradigm es una solución integral de modelado UML que combina potencia, facilidad de uso
            y versatilidad para el desarrollo y diseño de sistemas de software.
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
                {/* Glow hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${accent}14 0%, transparent 65%)` }}
                />
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 0 1px ${accent}40` }}
                />

                {/* Ícono */}
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

                {/* Texto */}
                <div className="relative z-10">
                  <h3 className="font-heading font-bold text-text-main text-base leading-tight mb-1.5">{title}</h3>
                  <p className="font-body text-text-body text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tipos de diagrama */}
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
            Tipos de diagramas soportados
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { name: 'Clases', color: '#6366f1' },
              { name: 'Casos de uso', color: '#818cf8' },
              { name: 'Secuencia', color: '#a78bfa' },
              { name: 'BPMN', color: '#2DD4BF' },
              { name: 'Flujo de datos', color: '#34d399' },
              { name: 'Organizacionales', color: '#fb923c' },
            ].map(({ name, color }) => (
              <div
                key={name}
                className="rounded-xl px-4 py-3 flex items-center gap-2.5 glass transition-all duration-300 hover:scale-[1.02]"
                style={{ cursor: 'default' }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: color }}
                />
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
            Funcionalidades importantes
          </h2>

          <div className="flex flex-col gap-4">
            {CAPABILITIES.map(({ name, tag, tagColor, desc, icon }) => (
              <div
                key={name}
                className="group flex items-start gap-4 rounded-2xl p-5 glass glass-glow
                           transition-all duration-300 cursor-default"
              >
                {/* Ícono */}
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
            {/* Header */}
            <div
              className="grid grid-cols-2"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="px-5 py-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                <span className="font-ui font-semibold text-sm text-emerald-400 uppercase tracking-wider">Ventajas</span>
              </div>
              <div className="px-5 py-3 flex items-center gap-2" style={{ borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="w-2 h-2 rounded-full bg-rose-400 inline-block" />
                <span className="font-ui font-semibold text-sm text-rose-400 uppercase tracking-wider">Desventajas</span>
              </div>
            </div>

            {/* Rows */}
            {COMPARISON.map(({ pro, con }, i) => (
              <div
                key={i}
                className="grid grid-cols-2 transition-colors duration-200 hover:bg-white/[0.03]"
                style={{
                  borderBottom: i < COMPARISON.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                }}
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
            ¿Cuándo usar Visual Paradigm?
          </h2>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            Visual Paradigm brilla cuando necesitas <strong className="text-text-main">documentar sistemas complejos</strong>,
            modelar arquitecturas de software con estándares UML o realizar ingeniería inversa sobre código existente.
            Es la herramienta ideal para equipos de desarrollo que valoran la planificación y el análisis previo.
          </p>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            Si tu necesidad es más ligera — como crear wireframes rápidos o prototipos interactivos —,
            herramientas como <strong className="text-text-main">Balsamiq</strong> o <strong className="text-text-main">Figma</strong> pueden
            ser más adecuadas. Pero cuando la escala del proyecto demanda rigor en modelado y trazabilidad,
            Visual Paradigm es difícil de igualar.
          </p>
        </section>

        {/* Separador */}
        <div
          style={{
            margin: '3.5rem 0',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(99,102,241,0.3), transparent)',
          }}
        />

        {/* ── CTA ──────────────────────────────────────────── */}
        <div
          style={{
            borderRadius: '22px',
            border: '1px solid rgba(99,102,241,0.22)',
            background:
              'linear-gradient(135deg, rgba(99,102,241,0.07) 0%, rgba(15,23,42,0.8) 60%, rgba(99,102,241,0.04) 100%)',
            padding: '2.75rem 2.25rem',
            backdropFilter: 'blur(16px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-40%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: '14px',
              background: 'rgba(99,102,241,0.12)',
              border: '1px solid rgba(99,102,241,0.28)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>

          <h2 className="font-heading font-bold text-text-main" style={{ fontSize: '1.375rem', marginBottom: '0.6rem' }}>
            ¿Necesitas modelar tu arquitectura?
          </h2>
          <p
            className="font-body text-text-body"
            style={{ fontSize: '0.9375rem', lineHeight: 1.7, maxWidth: '24rem', margin: '0 auto 1.75rem' }}
          >
            En Terrabyte EC utilizamos herramientas como Visual Paradigm para diseñar sistemas robustos y bien documentados.
            ¿Tienes un proyecto en mente?
          </p>

          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 font-ui font-semibold"
            style={{
              padding: '0.75rem 1.625rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
              color: '#0B1120',
              fontSize: '0.9375rem',
              boxShadow: '0 0 24px rgba(99,102,241,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 0 32px rgba(99,102,241,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 24px rgba(99,102,241,0.35)';
            }}
          >
            Conversemos
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogVisualParadigm;
