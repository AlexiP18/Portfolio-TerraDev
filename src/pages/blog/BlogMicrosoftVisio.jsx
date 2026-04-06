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
    title: 'Amplia variedad de diagramas',
    body: 'Crea diagramas de flujo, redes informáticas, planos arquitectónicos, organigramas, mapas de procesos y mucho más desde una única plataforma.',
    accent: '#0078d4',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'Plantillas predefinidas',
    body: 'Miles de plantillas y formas listas para usar que aceleran la creación de diagramas profesionales sin necesidad de empezar desde cero.',
    accent: '#00b4d8',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 0-14.14 0" /><path d="M4.93 19.07a10 10 0 0 0 14.14 0" />
        <path d="M1 12a11 11 0 0 1 22 0" /><path d="M12 23a11 11 0 0 1 0-22" />
      </svg>
    ),
    title: 'Diagramas conectados a datos',
    body: 'Vincula tus diagramas a datos en tiempo real desde Excel, SQL Server, SharePoint y más, creando visualizaciones que se actualizan automáticamente.',
    accent: '#0078d4',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Colaboración en tiempo real',
    body: 'Visio Online permite edición simultánea entre varios usuarios directamente en el navegador, integrado con Microsoft Teams y SharePoint.',
    accent: '#00b4d8',
  },
];

const CAPABILITIES = [
  {
    name: 'Ecosistema Microsoft 365',
    tag: 'Integración',
    tagColor: '#0078d4',
    desc: 'Integración nativa con Word, Excel, PowerPoint, Power BI y Teams. Comparte y embebe diagramas directamente en tus documentos de Office.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: 'Diagramas empresariales',
    tag: 'Profesional',
    tagColor: '#0078d4',
    desc: 'Ideal para diseñar estructuras organizacionales, planos de red, flujos de negocio (BPMN) y diagramas técnicos con estándares de industria.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    name: 'Plantillas técnicas especializadas',
    tag: 'Productividad',
    tagColor: '#00b4d8',
    desc: 'Colección extensa de plantillas para TI, redes, ingeniería, arquitectura, procesos industriales y gestión de proyectos.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
];

const DIAGRAM_TYPES = [
  { name: 'Diagramas de flujo', color: '#0078d4' },
  { name: 'Redes informáticas', color: '#00b4d8' },
  { name: 'Planos arquitectónicos', color: '#0891b2' },
  { name: 'Organigramas', color: '#0cf' },
  { name: 'Modelado BPMN', color: '#0078d4' },
  { name: 'Infraestructura TI', color: '#00b4d8' },
];

const COMPARISON = [
  { pro: 'Amplia variedad de herramientas de diagramación', con: 'Es de pago (licencia requerida)' },
  { pro: 'Gran cantidad de plantillas predefinidas', con: 'Puede ser complejo para principiantes' },
  { pro: 'Integración nativa con Microsoft Office', con: 'Requiere instalación en versión de escritorio' },
  { pro: 'Compatible con Microsoft 365 (Excel, Power BI, Teams)', con: 'Puede consumir bastantes recursos del sistema' },
  { pro: 'Permite crear diagramas profesionales y complejos', con: 'Interfaz puede resultar pesada' },
  { pro: 'Colaboración en tiempo real con Visio Online', con: 'Dependencia del ecosistema Microsoft' },
  { pro: 'Integración con Microsoft Teams', con: 'Menos flexible que herramientas web modernas' },
];

/* ─────────────────────────────────────────────────────────────
   COMPONENTE PRINCIPAL
───────────────────────────────────────────────────────────── */

function BlogMicrosoftVisio() {
  return (
    <div className="flex flex-col w-full">

      {/* ── HERO ────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '6rem',
          paddingBottom: '3.5rem',
          background:
            'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(0,120,212,0.1) 0%, transparent 65%), #0B1120',
        }}
      >
        {/* Dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #0078d4 1px, transparent 1px)',
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
            {['Diagramación', 'Microsoft 365', 'Procesos'].map((cat) => (
              <span
                key={cat}
                className="font-code"
                style={{
                  fontSize: '0.65rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '999px',
                  background: 'rgba(0,120,212,0.12)',
                  color: '#38bdf8',
                  border: '1px solid rgba(0,120,212,0.35)',
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
            Microsoft Visio: Diagramación{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #0078d4, #00b4d8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              profesional y empresarial
            </span>
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #0078d4, #00b4d8)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  fontFamily: '"Space Grotesk", sans-serif',
                }}
              >
                T
              </div>
              <span className="font-ui font-medium text-text-body text-sm">Equipo Terrabyte EC</span>
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
            En las organizaciones modernas, <strong className="text-text-main">comunicar procesos complejos de forma visual</strong> es una
            habilidad indispensable. Ya sea que necesites mapear el flujo de datos de una red, documentar
            procesos de negocio o diseñar la arquitectura de un sistema, la herramienta adecuada puede marcar
            la diferencia entre entender y confundir.
          </p>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            <strong className="text-text-main">Microsoft Visio</strong> es el estándar de la industria para la creación de diagramas
            profesionales. Como parte del ecosistema <em style={{ color: '#38bdf8' }}>Microsoft 365</em>, se integra
            nativamente con las herramientas que ya usas — Excel, Teams, SharePoint, Power BI — haciendo que
            los diagramas no solo sean bonitos, sino también funcionales y conectados a datos reales.
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
            ¿Qué es Microsoft Visio?
          </h2>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            Microsoft Visio es un <strong className="text-text-main">software especializado en la creación de diagramas y visualización de datos</strong>.
            Es parte del ecosistema Microsoft 365 y se utiliza en industrias como la ingeniería, el diseño de procesos y la gestión
            de proyectos. Con plantillas predefinidas y miles de formas personalizadas, facilita la creación de diagramas
            complejos de forma sencilla e intuitiva.
          </p>
          <blockquote
            style={{
              borderLeft: '3px solid #0078d4',
              margin: '2rem 0',
              padding: '1rem 1.375rem',
              background: 'rgba(0,120,212,0.05)',
              borderRadius: '0 12px 12px 0',
              color: '#CBD5E1',
              fontStyle: 'italic',
              fontSize: '1.0625rem',
              lineHeight: 1.75,
            }}
          >
            Microsoft Visio es perfecto para diseñar procesos comerciales, redes informáticas y planos
            arquitectónicos. Si has llegado buscando cómo crear un diagrama de flujo, querrás saber
            que es mucho más fácil de lo que pensabas.
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
            Tipos de diagramas disponibles
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {DIAGRAM_TYPES.map(({ name, color }) => (
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
            ¿Cuándo usar Microsoft Visio?
          </h2>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            Visio es la opción ideal en entornos <strong className="text-text-main">empresariales con ecosistema Microsoft</strong>,
            especialmente cuando necesitas documentar procesos técnicos complejos, redes informáticas o
            flujos de negocio con estándares de la industria. Su integración con Excel y Power BI lo
            hace único para diagramas dinámicos conectados a datos.
          </p>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            Si necesitas <strong className="text-text-main">modelado UML específico</strong>, considera <strong className="text-text-main">Visual Paradigm</strong>.
            Para diseño de interfaces y prototipos, <strong className="text-text-main">Figma</strong> es más eficaz.
            Y para wireframes rápidos, <strong className="text-text-main">Balsamiq</strong> es imbatible. Pero
            cuando el contexto es empresarial y el ecosistema es Microsoft, Visio no tiene competencia.
          </p>
        </section>

        {/* Separador */}
        <div
          style={{
            margin: '3.5rem 0',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(0,120,212,0.4), transparent)',
          }}
        />

        {/* ── CTA ──────────────────────────────────────────── */}
        <div
          style={{
            borderRadius: '22px',
            border: '1px solid rgba(0,120,212,0.25)',
            background:
              'linear-gradient(135deg, rgba(0,120,212,0.08) 0%, rgba(15,23,42,0.8) 60%, rgba(0,180,216,0.05) 100%)',
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
              background: 'radial-gradient(circle, rgba(0,120,212,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: '14px',
              background: 'rgba(0,120,212,0.12)',
              border: '1px solid rgba(0,120,212,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
            </svg>
          </div>

          <h2 className="font-heading font-bold text-text-main" style={{ fontSize: '1.375rem', marginBottom: '0.6rem' }}>
            ¿Necesitas documentar tus procesos?
          </h2>
          <p
            className="font-body text-text-body"
            style={{ fontSize: '0.9375rem', lineHeight: 1.7, maxWidth: '24rem', margin: '0 auto 1.75rem' }}
          >
            En Terrabyte EC trabajamos con herramientas como Microsoft Visio para modelar arquitecturas
            y procesos empresariales con claridad y precisión.
          </p>

          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 font-ui font-semibold"
            style={{
              padding: '0.75rem 1.625rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #0078d4, #00b4d8)',
              color: '#fff',
              fontSize: '0.9375rem',
              boxShadow: '0 0 24px rgba(0,120,212,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 0 32px rgba(0,120,212,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 24px rgba(0,120,212,0.35)';
            }}
          >
            Hablar con el equipo
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogMicrosoftVisio;
