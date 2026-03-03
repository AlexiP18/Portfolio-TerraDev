import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';

/* ─────────────────────────────────────────────────────────────
   PLACEHOLDER DATA
───────────────────────────────────────────────────────────── */
const PROYECTOS = [
  {
    id: 1,
    titulo: 'Sistema Financiero Andino',
    categoria: 'Sistemas',
    descripcion:
      'Plataforma de gestión de créditos y cobranza para cooperativas de ahorro. Módulos de reportería, alertas automáticas y auditoría de operaciones.',
    tags: ['#Java', '#Spring', '#PostgreSQL', '#Docker'],
    accent: '#2DD4BF',
    gradientFrom: '#0F2027',
    gradientTo: '#1a3a4a',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor"
        strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="14" width="36" height="26" rx="3"/>
        <path d="M6 20h36"/>
        <path d="M16 14v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/>
        <path d="M18 30h4M26 30h4M18 36h4M26 36h4"/>
      </svg>
    ),
  },
  {
    id: 2,
    titulo: 'E-commerce Florícola',
    categoria: 'Web',
    descripcion:
      'Tienda online B2B para exportadora de flores. Catálogo dinámico por temporada, carrito multi-divisa, integración con Stripe y panel de administración.',
    tags: ['#React', '#Next.js', '#Stripe', '#AWS'],
    accent: '#f472b6',
    gradientFrom: '#1a0f1f',
    gradientTo: '#2d1042',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor"
        strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 12h4l5.5 18h17l4.5-12H14"/>
        <circle cx="20" cy="36" r="2.5"/>
        <circle cx="34" cy="36" r="2.5"/>
        <path d="M24 6c0 0-4 4-4 8s4 6 4 6s4-2 4-6s-4-8-4-8z"/>
      </svg>
    ),
  },
  {
    id: 3,
    titulo: 'App de Delivery Local',
    categoria: 'Móvil',
    descripcion:
      'Aplicación móvil de entrega a domicilio para restaurantes locales. Seguimiento en tiempo real, notificaciones push y panel para repartidores.',
    tags: ['#React Native', '#Node.js', '#Firebase', '#Maps API'],
    accent: '#fb923c',
    gradientFrom: '#1a110a',
    gradientTo: '#2d1f0e',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor"
        strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="14" y="4" width="20" height="34" rx="3"/>
        <path d="M20 36h8"/>
        <circle cx="34" cy="28" r="8"/>
        <path d="M34 24v5l3 2"/>
      </svg>
    ),
  },
  {
    id: 4,
    titulo: 'Portal de Gestión Educativa',
    categoria: 'Web',
    descripcion:
      'Sistema integral para institutos educativos: matrícula online, calificaciones, comunicación docente-padre y generación de reportes PDF automáticos.',
    tags: ['#Vue.js', '#Laravel', '#MySQL', '#Tailwind'],
    accent: '#818cf8',
    gradientFrom: '#0f0f1a',
    gradientTo: '#1a1a3a',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor"
        strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6L6 16l18 10 18-10L24 6z"/>
        <path d="M6 26l18 10 18-10"/>
        <path d="M6 36l18 10 18-10"/>
      </svg>
    ),
  },
  {
    id: 5,
    titulo: 'Dashboard de Telemetría IoT',
    categoria: 'Sistemas',
    descripcion:
      'Plataforma de monitoreo en tiempo real para sensores industriales. Gráficas en vivo, alertas configurables y exportación de datos históricos.',
    tags: ['#Python', '#FastAPI', '#InfluxDB', '#Grafana'],
    accent: '#34d399',
    gradientFrom: '#091a12',
    gradientTo: '#0f2d1e',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor"
        strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="8 32 16 22 24 28 32 18 40 24"/>
        <rect x="6" y="8" width="36" height="32" rx="3"/>
        <path d="M6 40h36"/>
      </svg>
    ),
  },
  {
    id: 6,
    titulo: 'App de Turnos Médicos',
    categoria: 'Móvil',
    descripcion:
      'Aplicación para agendamiento de citas médicas con recordatorios SMS, historial del paciente y sincronización de agenda para el equipo de salud.',
    tags: ['#Flutter', '#Django', '#PostgreSQL', '#Twilio'],
    accent: '#67e8f9',
    gradientFrom: '#091418',
    gradientTo: '#0f2026',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor"
        strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="6" width="28" height="36" rx="3"/>
        <path d="M18 6v4M30 6v4"/>
        <path d="M10 18h28"/>
        <path d="M18 26h12M24 22v8"/>
      </svg>
    ),
  },
];

const FILTROS = ['Todos', 'Web', 'Móvil', 'Sistemas'];

/* ─────────────────────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────────────────────── */
function ProjectCard({ proyecto }) {
  const [imgHovered, setImgHovered] = useState(false);
  const { titulo, descripcion, tags, accent, gradientFrom, gradientTo, icon } = proyecto;

  return (
    <article
      className="flex flex-col rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02]
                 hover:border-white/[0.15] transition-all duration-300 group"
      style={{ backdropFilter: 'blur(8px)' }}
    >
      {/* ── Imagen / Placeholder visual ─────────────────── */}
      <div
        className="relative aspect-video w-full overflow-hidden cursor-pointer"
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
      >
        {/* Fondo gradiente decorativo como placeholder */}
        <div
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
          }}
        />

        {/* Patrón de puntos sobre el fondo */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Icono centrado */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-300"
          style={{
            color: accent,
            opacity: imgHovered ? 0.3 : 0.55,
            transform: imgHovered ? 'scale(0.9)' : 'scale(1)',
          }}
        >
          {icon}
        </div>

        {/* Overlay on hover */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-300"
          style={{
            background: imgHovered ? 'rgba(7,13,26,0.72)' : 'rgba(7,13,26,0)',
            backdropFilter: imgHovered ? 'blur(4px)' : 'blur(0px)',
          }}
        >
          <button
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-ui font-semibold text-sm
                       transition-all duration-300"
            style={{
              background: accent,
              color: '#0B1120',
              opacity: imgHovered ? 1 : 0,
              transform: imgHovered ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.95)',
              boxShadow: `0 0 20px ${accent}60`,
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Ver Caso de Estudio
          </button>
        </div>

        {/* Badge de categoría */}
        <div className="absolute top-3 left-3">
          <span
            className="font-ui font-semibold text-[0.65rem] uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{
              background: `${accent}20`,
              color: accent,
              border: `1px solid ${accent}35`,
            }}
          >
            {proyecto.categoria}
          </span>
        </div>
      </div>

      {/* ── Contenido inferior ──────────────────────────── */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="font-heading font-bold text-text-main text-xl leading-tight group-hover:text-white transition-colors duration-200">
          {titulo}
        </h3>
        <p className="font-body text-text-body text-sm leading-relaxed flex-1">
          {descripcion}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-code text-[0.68rem] px-2.5 py-1 rounded-lg border transition-all duration-200"
              style={{
                color: accent,
                borderColor: `${accent}30`,
                background: `${accent}0a`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────
   PÁGINA PORTAFOLIO
───────────────────────────────────────────────────────────── */
function Portafolio() {
  const [filtroActivo, setFiltroActivo] = useState('Todos');

  const proyectosFiltrados =
    filtroActivo === 'Todos'
      ? PROYECTOS
      : PROYECTOS.filter((p) => p.categoria === filtroActivo);

  return (
    <div className="flex flex-col w-full">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-24 pb-16"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% -5%, rgba(45,212,191,0.08) 0%, transparent 65%), #0B1120',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #2DD4BF 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-ui font-medium text-xs text-primary uppercase tracking-widest">
              Portafolio · Casos de Estudio
            </span>
          </div>

          <h1 className="font-heading font-bold text-text-main text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-tight">
            Proyectos que{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #2DD4BF, #67e8f9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              resuelven problemas reales.
            </span>
          </h1>

          <p className="font-body text-text-body text-lg sm:text-xl leading-relaxed max-w-2xl">
            De la idea al deploy. Aquí está el trabajo que nos enorgullece — cada uno con
            stack definido, proceso claro y resultado medible.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-4 border-t border-white/[0.08] w-full max-w-md">
            {[
              { v: `${PROYECTOS.length}+`, l: 'Proyectos' },
              { v: '3',                    l: 'Industrias' },
              { v: '100%',                 l: 'Entregados' },
            ].map(({ v, l }) => (
              <div key={l} className="flex flex-col items-center">
                <span className="font-heading font-bold text-2xl text-text-main">{v}</span>
                <span className="font-body text-xs text-text-muted mt-0.5">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filtros + Grid ───────────────────────────────── */}
      <section className="w-full max-w-6xl mx-auto px-6 py-14 lg:py-20">

        {/* Filtros tipo píldora */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          {FILTROS.map((filtro) => {
            const activo = filtro === filtroActivo;
            return (
              <button
                key={filtro}
                onClick={() => setFiltroActivo(filtro)}
                className="relative px-5 py-2 rounded-full font-ui font-semibold text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                style={
                  activo
                    ? {
                        background: '#2DD4BF',
                        color: '#0B1120',
                        boxShadow: '0 0 16px rgba(45,212,191,0.35)',
                      }
                    : {
                        background: 'transparent',
                        color: '#94A3B8',
                        border: '1px solid rgba(255,255,255,0.13)',
                      }
                }
              >
                {filtro}
                {/* Contador de proyectos */}
                <span
                  className="ml-2 font-code text-[0.65rem] leading-none px-1.5 py-0.5 rounded-full"
                  style={
                    activo
                      ? { background: 'rgba(0,0,0,0.2)', color: '#0B1120' }
                      : { background: 'rgba(255,255,255,0.07)', color: '#64748B' }
                  }
                >
                  {filtro === 'Todos'
                    ? PROYECTOS.length
                    : PROYECTOS.filter((p) => p.categoria === filtro).length}
                </span>
              </button>
            );
          })}

          {/* Línea separadora */}
          <div className="hidden sm:block flex-1 h-px bg-white/[0.07]" />

          {/* Resultado del filtro */}
          <span className="font-code text-xs text-text-muted ml-auto sm:ml-0">
            {proyectosFiltrados.length}{' '}
            {proyectosFiltrados.length === 1 ? 'proyecto' : 'proyectos'}
          </span>
        </div>

        {/* Grid de proyectos */}
        {proyectosFiltrados.length > 0 ? (
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 440px), 1fr))',
            }}
          >
            {proyectosFiltrados.map((proyecto) => (
              <ProjectCard key={proyecto.id} proyecto={proyecto} />
            ))}
          </div>
        ) : (
          /* Estado vacío */
          <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
            <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#64748B"
                strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
            <p className="font-ui font-semibold text-text-muted">
              No hay proyectos en esta categoría todavía.
            </p>
            <button
              onClick={() => setFiltroActivo('Todos')}
              className="font-ui text-sm text-primary hover:underline"
            >
              Ver todos los proyectos →
            </button>
          </div>
        )}
      </section>

      {/* ── CTA Final ────────────────────────────────────── */}
      <section
        className="w-full py-20"
        style={{
          background: 'linear-gradient(180deg, #0B1120 0%, #070d1a 100%)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center gap-6">
          <h2 className="font-heading font-bold text-text-main text-3xl sm:text-4xl leading-tight">
            ¿Tu proyecto podría{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #2DD4BF, #67e8f9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              estar aquí?
            </span>
          </h2>
          <p className="font-body text-text-body text-lg max-w-xl">
            Cada proyecto de este portafolio empezó con una llamada de 30 minutos.
            El tuyo puede ser el próximo.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button as={Link} to="/contacto" variant="primary" size="lg">
              Hablemos de tu proyecto
            </Button>
            <Button as={Link} to="/servicios" variant="outline" size="lg">
              Ver qué construimos
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Portafolio;
