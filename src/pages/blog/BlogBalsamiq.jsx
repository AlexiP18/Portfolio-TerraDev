import React from 'react';
import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────────────────────────
   DATOS
───────────────────────────────────────────────────────────── */

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
      </svg>
    ),
    title: 'Drag & Drop intuitivo',
    body: 'Arrastra y suelta componentes preconstruidos al lienzo — botones, menús, formularios — sin necesidad de conocimientos técnicos.',
    accent: '#2DD4BF',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
      </svg>
    ),
    title: 'Estilo "dibujado a mano"',
    body: 'El diseño tipo boceto evita distracciones estéticas y centra al equipo en lo que importa: estructura, navegación y funcionalidad.',
    accent: '#818cf8',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Biblioteca de componentes',
    body: 'Tabs, barras de navegación, modales, tablas y más — elementos reutilizables listos para componer interfaces complejas en minutos.',
    accent: '#fb923c',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Colaboración en equipo',
    body: 'Edición simultánea en tiempo real con control de versiones, comentarios y revisión colaborativa en Balsamiq Cloud.',
    accent: '#f472b6',
  },
];

const VERSIONS = [
  {
    name: 'Cloud',
    tag: 'Recomendada',
    tagColor: '#2DD4BF',
    desc: 'Versión SaaS con edición colaborativa y control de versiones en tiempo real. Ideal para equipos distribuidos.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" />
        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
      </svg>
    ),
  },
  {
    name: 'Desktop',
    tag: 'Sunset 2026',
    tagColor: '#fb923c',
    desc: 'macOS y Windows. Funciona offline y guarda archivos locales. Se eliminará gradualmente a partir de 2026.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    name: 'Atlassian',
    tag: 'Plugin',
    tagColor: '#818cf8',
    desc: 'Integración nativa con Confluence y Jira. Incrusta wireframes directamente en documentación o tickets.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

const COMPARISON = [
  { pro: 'Fácil de usar, ideal para principiantes', con: 'No permite diseños de alta fidelidad' },
  { pro: 'Interfaz intuitiva drag-and-drop', con: 'Limitado en funcionalidades avanzadas' },
  { pro: 'Prototipos rápidos en minutos', con: 'No genera código automáticamente' },
  { pro: 'Mejora la comunicación equipo-cliente', con: 'Estilo "boceto" no es del agrado de todos' },
  { pro: 'Amplia biblioteca de componentes UI', con: 'Puede quedarse corto en proyectos complejos' },
];

/* ─────────────────────────────────────────────────────────────
   COMPONENTE PRINCIPAL
───────────────────────────────────────────────────────────── */

function BlogBalsamiq() {
  return (
    <div className="flex flex-col w-full">

      {/* ── HERO ────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '6rem',
          paddingBottom: '3.5rem',
          background:
            'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(129,140,248,0.09) 0%, transparent 65%), #0B1120',
        }}
      >
        {/* Dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)',
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
            {['UI/UX', 'Herramientas', 'Diseño'].map((cat) => (
              <span
                key={cat}
                className="font-code"
                style={{
                  fontSize: '0.65rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '999px',
                  background: 'rgba(129,140,248,0.12)',
                  color: '#818cf8',
                  border: '1px solid rgba(129,140,248,0.3)',
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
            Balsamiq: Wireframing rápido para{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #818cf8, #c084fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              aterrizar ideas
            </span>
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #818cf8, #c084fc)',
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
            Cuando un proyecto comienza, lo primero que necesitamos es <strong className="text-text-main">visualizar la estructura de la interfaz</strong> antes
            de escribir una sola línea de código. A este proceso se le denomina <em className="text-primary">Wireframing</em>: la creación de
            esqueletos visuales que representan la disposición de los elementos en pantalla.
          </p>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            Mientras que a veces se usa lápiz y papel (tachando, borrando, rehaciendo), herramientas como
            <strong className="text-text-main"> Balsamiq</strong> permiten traducir ideas a mockups funcionales en cuestión de minutos,
            facilitando la comunicación y aprobación de requisitos antes de que comience el desarrollo.
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
            ¿Qué es Balsamiq?
          </h2>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            Balsamiq es una herramienta de <strong className="text-text-main">wireframing rápido</strong> que permite visualizar ideas y conceptos
            mediante una sencilla interfaz de arrastrar y soltar. Su objetivo principal es permitir a
            desarrolladores, diseñadores y clientes validar requisitos antes de que comience el desarrollo,
            eliminando malentendidos y reduciendo ciclos de iteración.
          </p>
          <blockquote
            style={{
              borderLeft: '3px solid #818cf8',
              margin: '2rem 0',
              padding: '1rem 1.375rem',
              background: 'rgba(129,140,248,0.05)',
              borderRadius: '0 12px 12px 0',
              color: '#CBD5E1',
              fontStyle: 'italic',
              fontSize: '1.0625rem',
              lineHeight: 1.75,
            }}
          >
            Una de sus señas de identidad es el estilo de diseño "dibujado a mano", que intencionalmente baja la fidelidad
            visual para que todos se enfoquen en la estructura y el flujo de usuario, no en colores ni tipografías finales.
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

        {/* Versiones */}
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
            Versiones disponibles
          </h2>

          <div className="flex flex-col gap-4">
            {VERSIONS.map(({ name, tag, tagColor, desc, icon }) => (
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
            ¿Cuándo usar Balsamiq?
          </h2>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            Balsamiq brilla en las <strong className="text-text-main">fases tempranas</strong> de un proyecto: cuando necesitas
            comunicar una idea rápidamente a un cliente, alinear al equipo de desarrollo
            sobre el flujo de usuario, o iterar sobre la estructura de una pantalla
            sin invertir horas en diseño visual.
          </p>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            Si buscas diseños de alta fidelidad o prototipos interactivos complejos,
            herramientas como <strong className="text-text-main">Figma</strong> o <strong className="text-text-main">Adobe XD</strong> serán más adecuadas. Pero como primer
            paso en el proceso de diseño, Balsamiq es difícil de superar.
          </p>
        </section>

        {/* Separador */}
        <div
          style={{
            margin: '3.5rem 0',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(129,140,248,0.3), transparent)',
          }}
        />

        {/* ── CTA ──────────────────────────────────────────── */}
        <div
          style={{
            borderRadius: '22px',
            border: '1px solid rgba(129,140,248,0.22)',
            background:
              'linear-gradient(135deg, rgba(129,140,248,0.07) 0%, rgba(15,23,42,0.8) 60%, rgba(129,140,248,0.04) 100%)',
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
              background: 'radial-gradient(circle, rgba(129,140,248,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: '14px',
              background: 'rgba(129,140,248,0.12)',
              border: '1px solid rgba(129,140,248,0.28)',
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
            ¿Te sirvió este artículo?
          </h2>
          <p
            className="font-body text-text-body"
            style={{ fontSize: '0.9375rem', lineHeight: 1.7, maxWidth: '22rem', margin: '0 auto 1.75rem' }}
          >
            Si necesitas apoyo profesional para diseñar y prototipar tus interfaces, conversemos.
            En Terrabyte EC convertimos ideas en productos reales.
          </p>

          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 font-ui font-semibold"
            style={{
              padding: '0.75rem 1.625rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #818cf8, #c084fc)',
              color: '#0B1120',
              fontSize: '0.9375rem',
              boxShadow: '0 0 24px rgba(129,140,248,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 0 32px rgba(129,140,248,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 24px rgba(129,140,248,0.35)';
            }}
          >
            Trabajemos juntos
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogBalsamiq;
