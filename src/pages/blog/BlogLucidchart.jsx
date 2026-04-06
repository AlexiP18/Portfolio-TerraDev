import React from 'react';
import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────────────────────────
   DATOS COMPONENTES
───────────────────────────────────────────────────────────── */

const ACCENT = '#f97316'; // Naranja Lucidchart
const ACCENT2 = '#f59e0b'; // Ámbar

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'Modelado UML Exhaustivo',
    body: 'Define la anatomía de clases, interacciones temporales, visibilidad y herencia de forma visual y accesible, acercando el diseño a la implementación.',
    accent: ACCENT,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
      </svg>
    ),
    title: 'Bases de Datos (ERD)',
    body: 'Soporte para pata de gallo, importación automática de esquemas de motores como PostgreSQL/MySQL, y exportación a scripts DDL directos.',
    accent: ACCENT2,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
    title: 'Diagramas como Código',
    body: 'Generación de diagramas automáticamente integrando el potente motor de Mermaid.js a partir de sintaxis textual legible.',
    accent: ACCENT,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" /><circle cx="8" cy="10" r="1" /><circle cx="12" cy="10" r="1" /><circle cx="16" cy="10" r="1" />
      </svg>
    ),
    title: 'Inteligencia Artificial',
    body: 'Lucid AI automatiza la construcción de entramados visuales y resume conjuntos de objetos grandes del lienzo en segundos.',
    accent: ACCENT2,
  },
];

const COLLABORATION = [
  {
    name: 'Sincrónica en Tiempo Real',
    tag: 'Velocidad',
    tagColor: ACCENT,
    desc: 'Visualiza cursores dinámicos y usa la función "Follow" para ser la guía innegable en la exposición interactiva frente a compañeros.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    name: 'Auditoría e Historial',
    tag: 'Control',
    tagColor: ACCENT2,
    desc: 'Control de versiones visual. Etiqueta etapas clave (ej. "Arquitectura V1") y bifurca diseños iterativos asegurando la integridad principal.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    name: 'Eliminación de Sesgos',
    tag: 'Decisiones',
    tagColor: ACCENT,
    desc: 'Actividades visuales como encuestas anónimas en el lienzo, que previenen la jerarquía y pensamiento de rebaño limitando sesgos.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

const INTEGRATIONS = [
  { name: 'Ecosistema Atlassian', details: 'Vinculación directa a Jira (User Stories > Diagramas) y Confluence.', color: ACCENT },
  { name: 'Google Workspace', details: 'Edición fluida sin salir de Docs, Sheets o Slides, apoyado por Drive.', color: ACCENT2 },
  { name: 'Salesforce API', details: 'Importación estructurada y visual de esquemas relacionales vivos.', color: ACCENT },
  { name: 'Captura de Video', details: 'Soporte nativo para Loom y Zight, incrustando el modelo asíncrono.', color: ACCENT2 },
];

/* ─────────────────────────────────────────────────────────────
   COMPONENTE PRINCIPAL
───────────────────────────────────────────────────────────── */

function BlogLucidchart() {
  return (
    <div className="flex flex-col w-full">

      {/* ── HERO ────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '6rem',
          paddingBottom: '3.5rem',
          background:
            'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(249,115,22,0.1) 0%, transparent 65%), #0B1120',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem' }}>

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

          <div className="flex flex-wrap items-center gap-2 mb-5">
            {['Visualización', 'Cloud SaaS', 'UML & C4'].map((cat) => (
              <span
                key={cat}
                className="font-code"
                style={{
                  fontSize: '0.65rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '999px',
                  background: 'rgba(249,115,22,0.12)',
                  color: '#fb923c',
                  border: '1px solid rgba(249,115,22,0.3)',
                }}
              >
                {cat}
              </span>
            ))}
          </div>

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
            Lucidchart:{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #f97316, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Gestión visual para el SDLC
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #f97316, #f59e0b)',
                  color: '#0B1120',
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
            <span className="font-code text-text-muted text-xs">7 min de lectura</span>
          </div>
        </div>
      </section>

      {/* ── CUERPO ──────────────────────────────────────────── */}
      <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem 5rem' }}>

        <section style={{ marginTop: '3rem' }}>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            La ingeniería de software contemporánea se enfrenta diariamente al gran desafío de gestionar
            la <strong className="text-text-main">complejidad sistémica global</strong>. La documentación basada
            exclusivamente en repositorios de texto resulta fragmentada e insuficiente para capturar la esencia
            multidimensional de arquitectura distribuida.
          </p>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            Aquí es donde entra al campo <strong className="text-text-main" style={{ color: ACCENT2 }}>Lucidchart</strong>, una brillante solución
            basada en la nube que ha redefinido el estándar industrial respecto a la colaboración sistemática.
            Es la forma más sensata para que equipos de diferentes disciplinas logren comprender colectivamente un
            producto antes de implementar una sola línea de código, garantizando rigurosidad y trazabilidad.
          </p>
        </section>

        {/* Facilidad de Uso */}
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
            Agnosticidad y Simplicidad
          </h2>
          <div className="flex flex-col gap-3">
            {[
              { t: 'Interactividad Intuitiva', d: 'Con drag-and-drop agiliza bocetos elaborados sin la limitación de motores vectoriales rígidos.'},
              { t: 'Modelo SaaS Flexible', d: 'Adiós instalaciones complejas, el navegador se vuelve el santuario del arquitecto de datos.'},
              { t: 'Agnosticidad Universal', d: 'Sistemas operativos unificados en la web (Mac, Windows, Linux) operando sin divergencias.'},
            ].map(({ t, d }) => (
              <div key={t} className="flex items-start gap-3 rounded-xl px-4 py-3 glass transition-all hover:bg-white/[0.04]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <div>
                  <strong className="font-heading text-text-main text-sm block mb-0.5">{t}</strong>
                  <span className="font-body text-text-body text-sm">{d}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Características Core */}
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
            Precisión y Modelado
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
                  style={{ backgroundColor: `${accent}15`, color: accent, border: `1px solid ${accent}30` }}
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

        {/* Colaboración */}
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
            Revolución Colaborativa
          </h2>

          <div className="flex flex-col gap-4">
            {COLLABORATION.map(({ name, tag, tagColor, desc, icon }) => (
              <div
                key={name}
                className="group flex items-start gap-4 rounded-2xl p-5 glass glass-glow
                           transition-all duration-300 cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0
                             group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${tagColor}15`, color: tagColor, border: `1px solid ${tagColor}30` }}
                >
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-heading font-bold text-text-main text-base">{name}</h3>
                    <span
                      className="font-code text-[0.6rem] uppercase tracking-widest px-2 py-0.5 rounded-full"
                      style={{ background: `${tagColor}18`, color: tagColor, border: `1px solid ${tagColor}35` }}
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

        {/* Integraciones y Flujo */}
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
            Integración total de la información
          </h2>
          <p className="font-body text-text-body text-sm mb-4" style={{ lineHeight: '1.75' }}>
            Lucidchart brilla por no ser un silo aislado; se compenetra majestuosamente con
            las herramientas clave del ecosistema de las startups y las corporaciones (SDLC integrativo).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {INTEGRATIONS.map(({ name, details, color }) => (
              <div
                key={name}
                className="rounded-xl px-4 py-4 flex flex-col justify-center gap-1.5 glass transition-all hover:bg-white/[0.04]"
                style={{ borderTop: `2px solid ${color}` }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
                  <span className="font-ui text-sm text-text-main font-bold">{name}</span>
                </div>
                <span className="font-body text-xs text-text-body leading-relaxed">{details}</span>
              </div>
            ))}
          </div>
        </section>

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
            El centro neurálgico del control ágil
          </h2>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            Estudios organizacionales demuestran un incalculable retorno estratégico —
            en algunos modelos hasta del <strong style={{ color: ACCENT }}>410%</strong> en plazos relativos de tres años —
            refiriéndose al ahorro tangencial de fricción operativa y un 30% de reducción en el tiempo de planillas ágiles.
          </p>
          <blockquote
            style={{
              borderLeft: `3px solid ${ACCENT}`,
              margin: '2rem 0', padding: '1rem 1.375rem',
              background: `linear-gradient(90deg, ${ACCENT}0a 0%, transparent 100%)`,
              borderRadius: '0 12px 12px 0',
              color: '#CBD5E1', fontStyle: 'italic', fontSize: '1.0625rem', lineHeight: 1.75,
            }}
          >
            Lucidchart trasciende profundamente. Garantiza dictaminar un gobierno ágil en software, previendo colisiones
            e inyectando solidez mitigando tempranamente la deuda técnica estructural.
          </blockquote>
        </section>

        <div
          style={{
            margin: '3.5rem 0', height: '1px',
            background: `linear-gradient(to right, transparent, ${ACCENT}80, transparent)`,
          }}
        />

        {/* ── CTA ──────────────────────────────────────────── */}
        <div
          style={{
            borderRadius: '22px', border: `1px solid ${ACCENT}40`,
            background: `linear-gradient(135deg, ${ACCENT}15 0%, rgba(15,23,42,0.8) 60%, ${ACCENT2}0a 100%)`,
            padding: '2.75rem 2.25rem', backdropFilter: 'blur(16px)',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute', top: '-40%', left: '50%', transform: 'translateX(-50%)',
              width: '200px', height: '200px',
              background: `radial-gradient(circle, ${ACCENT}20 0%, transparent 70%)`, pointerEvents: 'none',
            }}
          />
          <div
            style={{
              width: 52, height: 52, borderRadius: '14px',
              background: `${ACCENT}15`, border: `1px solid ${ACCENT}40`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>

          <h2 className="font-heading font-bold text-text-main" style={{ fontSize: '1.375rem', marginBottom: '0.6rem' }}>
            Transforma el caos en trazabilidad
          </h2>
          <p
            className="font-body text-text-body"
            style={{ fontSize: '0.9375rem', lineHeight: 1.7, maxWidth: '26rem', margin: '0 auto 1.75rem' }}
          >
            En Terrabyte EC empleamos arquitecturas robustas que minimizan riesgos. Inicia tu
            proyecto respaldado con el mejor ciclo de vida técnico.
          </p>

          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 font-ui font-semibold"
            style={{
              padding: '0.75rem 1.625rem', borderRadius: '12px',
              background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})`, color: '#fff',
              fontSize: '0.9375rem', boxShadow: `0 0 24px ${ACCENT}60`,
              transition: 'transform 0.2s, box-shadow 0.2s', textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = `0 0 32px ${ACCENT}80`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = `0 0 24px ${ACCENT}60`;
            }}
          >
            Explorar Opciones DDL
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogLucidchart;
