import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';

/* ─────────────────────────────────────────────────────────────
   DATOS
───────────────────────────────────────────────────────────── */
const EQUIPO = [
  {
    nombre: 'Alex Guachi',
    cargo: 'Tech Lead · Backend',
    iniciales: 'AG',
    accent: '#2DD4BF',
    bg: 'linear-gradient(135deg, #0d2d29, #1a4a44)',
    photo: '/team/alex_guachi.jpg',
  },
  {
    nombre: 'Heidi Villavicencio',
    cargo: 'Product Engineer · Frontend',
    iniciales: 'HV',
    accent: '#818cf8',
    bg: 'linear-gradient(135deg, #0f0f2e, #1a1a4a)',
    photo: '/team/heidi_villavicencio.jpg',
  },
  {
    nombre: 'Michelle Tunja',
    cargo: 'Lead UX / Frontend',
    iniciales: 'MT',
    accent: '#f472b6',
    bg: 'linear-gradient(135deg, #1a0f1f, #2d1042)',
    photo: '/team/michelle_tunja.jpg',
  },
  {
    nombre: 'Daniel Calapiña',
    cargo: 'Platform Engineer',
    iniciales: 'DC',
    accent: '#fb923c',
    bg: 'linear-gradient(135deg, #1a110a, #2d1f0e)',
    photo: '/team/daniel_calapiña.jpg',
  },
  {
    nombre: 'Dennis Chimborazo',
    cargo: 'Backend Specialist',
    iniciales: 'DX',
    accent: '#34d399',
    bg: 'linear-gradient(135deg, #0a1e15, #0f2d1e)',
    photo: '/team/dennis_chimborazo.jpg',
  },
  {
    nombre: 'Alexis Poaquiza',
    cargo: 'DevOps & Reliability',
    iniciales: 'AP',
    accent: '#67e8f9',
    bg: 'linear-gradient(135deg, #091418, #0f2026)',
    photo: '/team/alexis_poaquiza.jpg',
  },
];

const VALORES = [
  {
    titulo: 'Resiliencia',
    desc: 'Como los Andes, diseñamos sistemas que resisten. Ante bugs, cambios de requisitos o picos de tráfico, nuestro código no se quiebra.',
    accent: '#2DD4BF',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    titulo: 'Velocidad',
    desc: 'Time-to-market no es una métrica secundaria, es una ventaja competitiva. Iteramos rápido, entregamos en semanas, no en meses.',
    accent: '#fb923c',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    titulo: 'Calidad',
    desc: 'Sin atajos. Tests automatizados, revisiones de código y documentación son parte del proceso, no opcionales al final del sprint.',
    accent: '#818cf8',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────────────────────
   PÁGINA NOSOTROS
───────────────────────────────────────────────────────────── */
function Nosotros() {
  return (
    <div className="flex flex-col w-full">

      {/* ── Hero ──────────────────────────────────────────── */}
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
              Nosotros · Terrabyte EC
            </span>
          </div>
          <h1 className="font-heading font-bold text-text-main text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-tight">
            Ingeniería desde el{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #2DD4BF, #67e8f9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              centro del mundo.
            </span>
          </h1>
          <p className="font-body text-text-body text-lg sm:text-xl leading-relaxed max-w-2xl">
            Un equipo de ingenieros en Ambato, Ecuador, que construye software de
            calidad internacional para empresas que quieren crecer con tecnología real.
          </p>
        </div>
      </section>

      {/* ── Historia: dos columnas ─────────────────────── */}
      <section className="w-full max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Columna izquierda — Título + badge */}
          <div className="flex flex-col gap-5 lg:sticky lg:top-28">
            <span className="font-code text-primary/60 text-xs uppercase tracking-widest">
              origin_story.md
            </span>
            <h2 className="font-heading font-bold text-text-main text-3xl sm:text-4xl leading-tight">
              Desde el centro de los Andes
            </h2>
            <div className="w-12 h-0.5 rounded-full bg-primary/50" />

            {/* Dato rápido */}
            <div
              className="flex flex-col gap-1.5 p-5 rounded-2xl border border-primary/15 bg-primary/[0.04]"
              style={{ backdropFilter: 'blur(8px)' }}
            >
              <p className="font-ui font-semibold text-xs text-primary uppercase tracking-widest">
                Ambato, Ecuador — 2°40′S 78°37′O
              </p>
              <p className="font-body text-text-body text-sm leading-relaxed">
                A 2.577 metros sobre el nivel del mar. Donde los Andes se cruzan con el Ecuador
                geográfico y la resiliencia no es un valor corporativo: es el terreno.
              </p>
            </div>
          </div>

          {/* Columna derecha — Texto narrativo */}
          <div className="flex flex-col gap-6 font-body text-text-body text-base leading-relaxed">
            <p>
              Ambato no es Silicon Valley. No tenemos unicornios en la siguiente esquina
              ni fondos de venture capital a la vuelta. Lo que tenemos es algo más escaso:
              la cultura de construir bien porque no hay margen para hacerlo dos veces.
            </p>
            <p>
              Terrabyte EC nació de esa mentalidad. Un grupo de ingenieros que crecieron
              viendo cómo la economía local dependía de tecnología importada, cara y
              difícil de mantener. Decidimos que el software de calidad no debía ser
              privilegio de las grandes ciudades.
            </p>
            <p>
              Hoy trabajamos con empresas de toda la región —y fuera de ella— aplicando
              los mismos procesos, estándares y herramientas que usan los equipos de
              ingeniería más exigentes del mundo. Desde aquí. Desde los Andes.
            </p>
            <p>
              Nuestro nombre es un guiño: <em className="text-text-main not-italic font-medium">terra</em> por
              la tierra que nos da raíces, <em className="text-text-main not-italic font-medium">byte</em> por
              el lenguaje en el que pensamos. Ingeniería con pies en la tierra y cabeza en
              la nube —literalmente.
            </p>

            {/* Mini-línea de tiempo */}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/[0.08]">
              {[
                { year: '2021', hito: 'Primer proyecto — automatización de inventario para pyme textil.' },
                { year: '2022', hito: 'Primer cliente internacional. Stack cloud-native.' },
                { year: '2023', hito: 'Equipo crece a 6 ingenieros. Metodología propia consolidada.' },
                { year: '2025', hito: 'The Pipeline: proceso documentado y replicable en cada engagement.' },
              ].map(({ year, hito }) => (
                <div key={year} className="flex gap-4 items-start">
                  <span className="font-code text-xs text-primary/70 shrink-0 w-10 mt-0.5">{year}</span>
                  <p className="font-body text-sm text-text-body leading-relaxed">{hito}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Equipo ────────────────────────────────────────── */}
      <section
        className="w-full py-16 lg:py-20"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(45,212,191,0.03) 50%, transparent 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          {/* Encabezado */}
          <div className="flex flex-col items-center text-center gap-3 mb-12">
            <span className="font-code text-primary/60 text-xs uppercase tracking-widest">
              team.json
            </span>
            <h2 className="font-heading font-bold text-text-main text-2xl sm:text-3xl">
              Las personas detrás del código
            </h2>
            <p className="font-body text-text-body text-base max-w-lg">
              Ingenieros full-stack, especialistas en cloud y diseñadores de producto que trabajan como un equipo integrado.
            </p>
          </div>

          {/* Grid de avatares */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {EQUIPO.map(({ nombre, cargo, iniciales, accent, bg, photo }) => (
              <div
                key={nombre}
                className="flex flex-col items-center gap-3 group cursor-default"
              >
                {/* Avatar circular */}
                <div
                  className="relative w-20 h-20 rounded-full overflow-hidden
                             transition-all duration-300 group-hover:scale-105"
                  style={{
                    border: `2px solid ${accent}35`,
                    boxShadow: `0 0 0 0 ${accent}00`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 20px ${accent}40, 0 0 40px ${accent}15`;
                    e.currentTarget.style.borderColor = `${accent}70`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 0 0 ${accent}00`;
                    e.currentTarget.style.borderColor = `${accent}35`;
                  }}
                >
                  <img
                    src={photo}
                    alt={nombre}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div
                    className="w-full h-full hidden items-center justify-center"
                    style={{ background: bg }}
                  >
                    <span className="font-heading font-bold text-xl leading-none" style={{ color: accent }}>
                      {iniciales}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col items-center text-center gap-1">
                  <p className="font-ui font-bold text-text-main text-sm leading-tight">{nombre}</p>
                  <p
                    className="font-code text-[0.62rem] leading-tight text-center"
                    style={{ color: accent + 'cc' }}
                  >
                    {cargo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Valores ───────────────────────────────────────── */}
      <section className="w-full max-w-5xl mx-auto px-6 py-16 lg:py-20">
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <span className="font-code text-primary/60 text-xs uppercase tracking-widest">
            values.config
          </span>
          <h2 className="font-heading font-bold text-text-main text-2xl sm:text-3xl">
            Lo que no negociamos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {VALORES.map(({ titulo, desc, accent, icon }) => (
            <div
              key={titulo}
              className="flex flex-col items-center text-center gap-4 p-7 rounded-2xl border
                         border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15]
                         transition-all duration-300 group"
              style={{ backdropFilter: 'blur(8px)' }}
            >
              {/* Icono grande */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300
                           group-hover:scale-110"
                style={{
                  background: `${accent}12`,
                  border: `1px solid ${accent}30`,
                  color: accent,
                }}
              >
                {icon}
              </div>

              <h3
                className="font-heading font-bold text-2xl transition-colors duration-200"
                style={{ color: accent }}
              >
                {titulo}
              </h3>
              <p className="font-body text-text-body text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section
        className="w-full py-20"
        style={{
          background: 'linear-gradient(180deg, #0B1120 0%, #070d1a 100%)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center gap-6">
          <h2 className="font-heading font-bold text-text-main text-3xl sm:text-4xl leading-tight">
            ¿Construimos algo{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #2DD4BF, #67e8f9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              juntos?
            </span>
          </h2>
          <p className="font-body text-text-body text-lg max-w-xl">
            Somos un equipo pequeño y lo seguiremos siendo. Eso significa que cada
            proyecto recibe atención real, no delegación en cadena.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button as={Link} to="/contacto" variant="primary" size="lg">
              Escribirnos
            </Button>
            <Button as={Link} to="/portafolio" variant="outline" size="lg">
              Ver nuestro trabajo
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Nosotros;
