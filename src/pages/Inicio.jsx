import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';

/* ─────────────────────────────────────────────────────────────
   SECCIÓN 1 — HERO
───────────────────────────────────────────────────────────── */
function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[280px]">
      {/* Anillo exterior giratorio */}
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-primary/20 animate-[spin_18s_linear_infinite]" />
      {/* Anillo interior */}
      <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-primary/10 animate-[spin_10s_linear_infinite_reverse]" />

      {/* Halo glow */}
      <div className="absolute w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-primary/5 blur-2xl" />

      {/* Card central glassmorphism */}
      <div className="relative glass rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-3 w-52 sm:w-64 text-center">
        {/* Logo SVG isométrico placeholder */}
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="56" height="56" rx="14" fill="#2DD4BF" fillOpacity="0.12"/>
          <rect x="1.5" y="1.5" width="53" height="53" rx="12.5" stroke="#2DD4BF" strokeOpacity="0.4" strokeWidth="1.5"/>
          {/* T isométrica */}
          <path d="M14 18h28M28 18v20" stroke="#2DD4BF" strokeWidth="3.5" strokeLinecap="round"/>
          <circle cx="38" cy="38" r="3.5" fill="#2DD4BF"/>
          {/* Tres puntos circuito */}
          <circle cx="14" cy="38" r="2" fill="#2DD4BF" fillOpacity="0.5"/>
          <circle cx="21" cy="38" r="2" fill="#2DD4BF" fillOpacity="0.3"/>
          <line x1="16" y1="38" x2="19" y2="38" stroke="#2DD4BF" strokeOpacity="0.4" strokeWidth="1"/>
          <line x1="23" y1="38" x2="34.5" y2="38" stroke="#2DD4BF" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="2 2"/>
        </svg>

        <div>
          <p className="font-heading font-bold text-text-main text-base leading-tight">Terrabyte EC</p>
          <p className="font-code text-[0.7rem] text-primary mt-0.5">v1.0.0 · Ambato</p>
        </div>

        {/* Badges */}
        <div className="flex flex-col gap-1.5 w-full mt-1">
          {['React 19', 'Next.js 15', 'AWS · Docker'].map((tag) => (
            <div
              key={tag}
              className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg bg-primary/8 border border-primary/20"
            >
              <span className="font-code text-[0.65rem] text-primary">{tag}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse ml-2 shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Puntos satélite */}
      {[
        { label: 'CI/CD',    pos: 'top-4 right-6' },
        { label: 'Flutter',  pos: 'bottom-8 left-4' },
        { label: 'UI/UX',    pos: 'top-12 left-2' },
      ].map(({ label, pos }) => (
        <div
          key={label}
          className={`absolute ${pos} font-code text-[0.6rem] text-primary/60 border border-primary/20 bg-bg-secondary/80 backdrop-blur px-2 py-1 rounded-md`}
        >
          {label}
        </div>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        height: 'calc(100dvh - 68px)',
        background: 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(45,212,191,0.07) 0%, transparent 70%), #0B1120',
      }}
    >
      {/* Grid de fondo sutil */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(248,250,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(248,250,252,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ── Texto ─────────────────────────────────────── */}
          <div className="flex flex-col items-start gap-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-ui font-medium text-xs text-primary uppercase tracking-widest">
                Ambato, Ecuador · Disponible
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-heading font-bold text-text-main text-3xl sm:text-4xl lg:text-[3rem] leading-[1.1] tracking-tight">
              Ingeniería de Software{' '}
              <span
                className="relative inline-block"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #2DD4BF, #67e8f9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                desde el Centro
              </span>{' '}
              de los Andes.
            </h1>

            {/* Subtítulo */}
            <p className="font-body text-text-body text-base sm:text-lg leading-relaxed max-w-xl">
              Desarrollo rápido, escalable y continuo (CI/CD).{' '}
              <span className="text-text-main">Transformamos ideas en código eficiente.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Button as={Link} to="/contacto" variant="primary" size="lg">
                Cotizar Ahora
              </Button>
              <Button as={Link} to="/proyectos" variant="outline" size="lg">
                Ver Portafolio
              </Button>
            </div>

            {/* Métricas rápidas */}
            <div className="flex flex-wrap gap-6 pt-3 border-t border-white/[0.08] w-full">
              {[
                { value: '+50',    label: 'Proyectos' },
                { value: '∞',      label: 'Escalabilidad' },
                { value: '24/7',   label: 'CI/CD activo' },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="font-heading font-bold text-2xl text-text-main">{value}</span>
                  <span className="font-body text-xs text-text-muted mt-0.5">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Visual ────────────────────────────────────── */}
          <div className="hidden sm:flex items-center justify-center">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECCIÓN 2 — SERVICIOS (BENTO GRID)
───────────────────────────────────────────────────────────── */

const SERVICIOS = [
  {
    id: 'web',
    size: 'lg',   // ocupa 2 cols en desktop
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Desarrollo Web',
    desc: 'Aplicaciones modernas, rápidas y accesibles. Desde landing pages hasta plataformas SaaS complejas con arquitectura escalable.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    accent: '#2DD4BF',
  },
  {
    id: 'mobile',
    size: 'md',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: 'Apps Móviles',
    desc: 'Experiencias nativas multiplataforma con un solo código base.',
    tags: ['Flutter', 'Dart'],
    accent: '#818cf8',
  },
  {
    id: 'cloud',
    size: 'md',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>
        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
      </svg>
    ),
    title: 'Cloud & DevOps',
    desc: 'Infraestructura como código, pipelines CI/CD y despliegues automatizados.',
    tags: ['AWS', 'Docker', 'GitHub Actions'],
    accent: '#f472b6',
  },
  {
    id: 'uiux',
    size: 'lg',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/>
        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/>
        <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/>
      </svg>
    ),
    title: 'UI/UX Design',
    desc: 'Interfaces que enamoran al usuario y convierten.',
    tags: ['Figma', 'Design Systems'],
    accent: '#fb923c',
  },
];

function ServiceCard({ icon, title, desc, tags, accent, size }) {
  const colSpan =
    size === 'lg' ? 'md:col-span-2' :
    size === 'md' ? 'md:col-span-1' : 'md:col-span-1';

  return (
    <div
      className={[
        colSpan,
        'group relative rounded-2xl p-6 flex flex-col gap-4 overflow-hidden',
        'glass glass-glow',
        'transition-all duration-300 cursor-default',
      ].join(' ')}
    >
      {/* Glow de fondo en hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${accent}14 0%, transparent 65%)`,
        }}
      />

      {/* Borde accent en hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${accent}40` }}
      />

      {/* Ícono */}
      <div
        className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundColor: `${accent}18`,
          color: accent,
          border: `1px solid ${accent}30`,
        }}
      >
        {icon}
      </div>

      {/* Texto */}
      <div className="relative z-10 flex flex-col gap-2">
        <h3 className="font-heading font-bold text-text-main text-xl leading-tight">
          {title}
        </h3>
        <p className="font-body text-text-body text-sm leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Tags */}
      <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-code text-[0.7rem] px-2.5 py-1 rounded-md"
            style={{
              backgroundColor: `${accent}12`,
              color: accent,
              border: `1px solid ${accent}25`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function Servicios() {
  return (
    <section
      className="w-full flex flex-col justify-center"
      style={{ minHeight: '100dvh' }}
    >
      <div className="max-w-6xl mx-auto px-6 w-full py-10 lg:py-14">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-8 gap-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/8">
          <span className="font-ui font-medium text-xs text-primary uppercase tracking-widest">
            Stack Tecnológico
          </span>
        </div>
        <h2 className="font-heading font-bold text-text-main text-2xl sm:text-3xl lg:text-4xl leading-tight">
          Nuestro Stack{' '}
          <span
            style={{
              backgroundImage: 'linear-gradient(135deg, #2DD4BF, #67e8f9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Tecnológico
          </span>
        </h2>
        <p className="font-body text-text-body text-base max-w-xl">
          Elegimos las herramientas correctas para cada problema — no seguimos tendencias, seguimos resultados.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {SERVICIOS.map((s) => (
          <ServiceCard key={s.id} {...s} />
        ))}
      </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECCIÓN 3 — METODOLOGÍA (PIPELINE)
───────────────────────────────────────────────────────────── */

const PIPELINE = [
  {
    step: '01',
    code: 'plan',
    label: 'Plan',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    desc: 'Levantamos requerimientos, priorizamos con metodología ágil y construimos el roadmap.',
  },
  {
    step: '02',
    code: 'code',
    label: 'Code',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    desc: 'Sprints iterativos con revisiones continuas. Código limpio, bien documentado y bajo control de versiones.',
  },
  {
    step: '03',
    code: 'build',
    label: 'Build',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    desc: 'Tests automáticos, builds reproducibles y artefactos listos para producción en cada commit.',
  },
  {
    step: '04',
    code: 'deploy',
    label: 'Deploy',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>
        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
      </svg>
    ),
    desc: 'Despliegue continuo a producción. Monitoring en tiempo real y rollback instantáneo si es necesario.',
  },
];

function Metodologia() {
  return (
    <section
      className="relative overflow-hidden flex flex-col justify-center"
      style={{
        minHeight: '100dvh',
        background: 'linear-gradient(180deg, #0B1120 0%, #0F172A 50%, #0B1120 100%)',
      }}
    >
      {/* Línea de circuito decorativa */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #2DD4BF 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/8">
            <span className="font-ui font-medium text-xs text-primary uppercase tracking-widest">
              Proceso · CI/CD Pipeline
            </span>
          </div>
          <h2 className="font-heading font-bold text-text-main text-2xl sm:text-3xl lg:text-4xl leading-tight max-w-2xl">
            No solo codificamos.{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #2DD4BF, #67e8f9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Construimos Sistemas.
            </span>
          </h2>
          <p className="font-body text-text-body text-base max-w-xl">
            Un proceso probado, predecible y orientado a resultados. Cada fase tiene métricas claras y entregables definidos.
          </p>
        </div>

        {/* Pipeline — desktop: horizontal, mobile: vertical */}
        <div className="relative">

          {/* Línea conectora desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {PIPELINE.map(({ step, code, label, icon, desc }, idx) => (
              <div key={code} className="group relative flex flex-col gap-3">

                {/* Conector vertical mobile / tablet */}
                {idx < PIPELINE.length - 1 && (
                  <div className="lg:hidden absolute left-6 top-[56px] bottom-[-16px] w-px bg-gradient-to-b from-primary/40 to-transparent" />
                )}

                {/* Nodo superior */}
                <div className="flex lg:flex-col lg:items-center items-start gap-4">
                  {/* Círculo */}
                  <div className="relative shrink-0">
                    {/* Anillo exterior en hover */}
                    <div className="absolute inset-0 rounded-full border border-primary/30 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                    <div className="relative w-12 h-12 rounded-full glass flex items-center justify-center text-primary border border-primary/30 group-hover:bg-primary/15 group-hover:border-primary/60 group-hover:shadow-glow-teal transition-all duration-300">
                      {icon}
                    </div>

                    {/* Badge número */}
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <span className="font-code text-[0.55rem] font-bold text-bg-main leading-none">{idx + 1}</span>
                    </div>
                  </div>

                  {/* Nombre en JetBrains Mono */}
                  <div className="lg:text-center">
                    <div className="flex items-center gap-2 lg:justify-center">
                      <span className="font-code text-primary/50 text-[0.7rem]">{step}</span>
                      <span className="font-code font-bold text-primary text-base tracking-wide">
                        {code}
                      </span>
                    </div>
                    <p className="font-ui font-semibold text-text-main text-sm mt-0.5">{label}</p>
                  </div>
                </div>

                {/* Descripción */}
                <p className="font-body text-text-muted text-sm leading-relaxed lg:text-center pl-[72px] lg:pl-0">
                  {desc}
                </p>

                {/* Flecha separadora desktop */}
                {idx < PIPELINE.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2 top-[34px] z-10 text-primary/40">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA final de sección */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button as={Link} to="/contacto" variant="primary" size="lg">
            Empecemos tu Proyecto
          </Button>
          <Button as={Link} to="/equipo" variant="ghost" size="lg">
            Conocer el Equipo →
          </Button>
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECCIÓN 4 — NOSOTROS (ADN AMBATEÑO)
───────────────────────────────────────────────────────────── */

const EQUIPO = [
  { nombre: 'Alex Guachi',         rol: 'Tech Lead · Backend',    initials: 'AG', color: '#2DD4BF', photo: '/team/alex_guachi.jpg'         },
  { nombre: 'Heidi Villavicencio', rol: 'Product Engineer',       initials: 'HV', color: '#818cf8', photo: '/team/heidi_villavicencio.jpg'  },
  { nombre: 'Michelle Tunja',      rol: 'Lead UX / Frontend',     initials: 'MT', color: '#f472b6', photo: '/team/michelle_tunja.jpg'       },
  { nombre: 'Daniel Calapiña',     rol: 'Platform Engineer',      initials: 'DC', color: '#fb923c', photo: '/team/daniel_calapiña.jpg'      },
  { nombre: 'Dennis Chimborazo',   rol: 'Backend Specialist',     initials: 'DX', color: '#34d399', photo: '/team/dennis_chimborazo.jpg'    },
  { nombre: 'Alexis Poaquiza',     rol: 'DevOps & Reliability',   initials: 'AP', color: '#a78bfa', photo: '/team/alexis_poaquiza.jpg'      },
];

const VALORES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    titulo: 'Excelencia Técnica',
    texto: 'Estándares globales de ingeniería aplicados con rigor y detalle.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    titulo: 'Equipo Local',
    texto: 'Talento ambateño formado y distribuido. Comunicación sin barreras horarias.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    titulo: 'Escala Global',
    texto: 'Infraestructura cloud lista para crecer desde MVP hasta millones de usuarios.',
  },
];

function Nosotros() {
  return (
    <section
      className="w-full flex items-center"
      style={{ minHeight: '100dvh' }}
    >
    <div className="w-full max-w-6xl mx-auto px-6 py-10 lg:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* ── Columna izquierda: texto ───────────────────── */}
        <div className="flex flex-col gap-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/8 w-fit">
            <span className="font-ui font-medium text-xs text-primary uppercase tracking-widest">
              Quiénes somos
            </span>
          </div>

          <h2 className="font-heading font-bold text-text-main text-2xl sm:text-3xl lg:text-4xl leading-tight">
            Código con{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #2DD4BF, #67e8f9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Carácter.
            </span>
          </h2>

          <p className="font-body text-text-body text-base leading-relaxed">
            Desde Ambato para el mundo. Combinamos la{' '}
            <span className="text-text-main font-medium">tenacidad del Tungurahua</span>{' '}
            con estándares globales de ingeniería.
          </p>

          <p className="font-body text-text-body text-base leading-relaxed">
            No somos una fábrica de código. Somos un equipo pequeño, enfocado y comprometido con cada proyecto que tomamos. Cada línea que escribimos tiene propósito.
          </p>

          {/* Valores */}
          <div className="flex flex-col gap-3 mt-1">
            {VALORES.map(({ icon, titulo, texto }) => (
              <div
                key={titulo}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-primary/20 hover:bg-primary/[0.04] transition-all duration-300 group"
              >
                <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  {icon}
                </div>
                <div>
                  <p className="font-ui font-semibold text-text-main text-sm mb-0.5">{titulo}</p>
                  <p className="font-body text-text-muted text-sm leading-relaxed">{texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Columna derecha: equipo ────────────────────── */}
        <div className="flex flex-col gap-5">
          {/* Card glassmorphism contenedor */}
          <div className="glass rounded-3xl p-6 flex flex-col gap-6">
            {/* Stat banner */}
            <div className="grid grid-cols-3 gap-4 pb-6 border-b border-white/[0.08]">
              {[
                { v: '5+',   l: 'Años activos' },
                { v: '+50',  l: 'Proyectos' },
                { v: '100%', l: 'Remoto-ready' },
              ].map(({ v, l }) => (
                <div key={l} className="flex flex-col items-center text-center">
                  <span className="font-heading font-bold text-text-main text-2xl sm:text-3xl">{v}</span>
                  <span className="font-body text-text-muted text-xs mt-1">{l}</span>
                </div>
              ))}
            </div>

            {/* Grid de avatares */}
            <div>
              <p className="font-ui font-semibold text-text-muted text-xs uppercase tracking-widest mb-4">
                El Equipo
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {EQUIPO.map(({ nombre, rol, initials, color, photo }) => (
                  <div
                    key={nombre}
                    className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-primary/25 hover:bg-primary/[0.04] transition-all duration-300 group cursor-default"
                  >
                    {/* Avatar circular */}
                    <div
                      className="w-14 h-14 rounded-full shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg overflow-hidden"
                      style={{ boxShadow: `0 0 20px ${color}30` }}
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
                        className="w-full h-full hidden items-center justify-center font-heading font-bold text-base text-bg-main"
                        style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}
                      >
                        {initials}
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="font-ui font-semibold text-text-main text-sm leading-tight">{nombre}</p>
                      <p className="font-body text-text-muted text-xs mt-0.5 leading-tight">{rol}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECCIÓN 5 — CONTACTO (SPLIT SCREEN)
───────────────────────────────────────────────────────────── */

function ContactoSection() {
  const [form, setForm] = React.useState({ nombre: '', email: '', proyecto: '', mensaje: '' });
  const [status, setStatus] = React.useState('idle'); // idle | sending | sent

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulación de envío — reemplazar con fetch real
    setTimeout(() => setStatus('sent'), 1800);
  };

  /* Clase base para inputs con borde inferior */
  const inputBase =
    'w-full bg-transparent border-0 border-b border-white/15 pb-2.5 pt-1 ' +
    'font-body text-text-main text-base placeholder:text-text-muted ' +
    'focus:outline-none focus:border-primary transition-colors duration-300 ' +
    'hover:border-white/30';

  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{
        minHeight: '100dvh',
        background: 'linear-gradient(180deg, #0B1120 0%, #070d1a 100%)',
      }}
    >
      {/* Halo teal fondo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">

          {/* ── Mitad izquierda: info ──────────────────────── */}
          <div className="flex flex-col justify-center gap-5 py-10 lg:pr-16 border-b lg:border-b-0 lg:border-r border-white/[0.07]">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/8 w-fit">
                <span className="font-ui font-medium text-xs text-primary uppercase tracking-widest">
                  Hablemos
                </span>
              </div>

              <h2 className="font-heading font-bold text-text-main text-2xl sm:text-3xl lg:text-[2.2rem] leading-tight">
                ¿Listo para{' '}
                <span
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #2DD4BF, #67e8f9)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  construir algo
                </span>{' '}
                increíble?
              </h2>

              <p className="font-body text-text-body text-base leading-relaxed max-w-sm">
                Cuéntanos tu idea. Respondemos en menos de 24 horas con una propuesta inicial sin compromiso.
              </p>
            </div>

            {/* Datos de contacto */}
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  label: 'Email',
                  value: 'hola@terrabyte.ec',
                  href: 'mailto:hola@terrabyte.ec',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  ),
                  label: 'Ubicación',
                  value: 'Ambato, Tungurahua · Ecuador 🇪🇨',
                  href: 'https://maps.google.com/?q=Ambato+Ecuador',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  ),
                  label: 'Respuesta',
                  value: 'Menos de 24 horas hábiles',
                  href: null,
                },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    {icon}
                  </div>
                  <div>
                    <p className="font-ui text-xs text-text-muted uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="font-body text-text-main text-sm hover:text-primary transition-colors duration-200 no-underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-body text-text-main text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Disponibilidad */}
            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/8 border border-primary/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
              <span className="font-ui font-medium text-sm text-primary">
                Disponibles para nuevos proyectos — Q2 2026
              </span>
            </div>
          </div>

          {/* ── Mitad derecha: formulario ──────────────────── */}
          <div className="flex flex-col justify-center py-10 lg:pl-16">
            {status === 'sent' ? (
              /* Estado: enviado */
              <div className="flex flex-col items-center justify-center gap-6 text-center h-full min-h-[360px]">
                <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-text-main text-2xl mb-2">¡Mensaje enviado!</h3>
                  <p className="font-body text-text-body text-base">
                    Gracias por escribirnos. Te responderemos en menos de 24 horas.
                  </p>
                </div>
                <button
                  onClick={() => { setStatus('idle'); setForm({ nombre: '', email: '', proyecto: '', mensaje: '' }); }}
                  className="font-ui font-semibold text-sm text-primary border border-primary/30 px-5 py-2.5 rounded-full hover:bg-primary/10 transition-all duration-300"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              /* Formulario */
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading font-bold text-text-main text-2xl">
                    Cuéntanos tu proyecto
                  </h3>
                  <p className="font-body text-text-muted text-sm">
                    Sin spam. Solo respuestas reales de personas reales.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Nombre */}
                  <div className="flex flex-col gap-1">
                    <label className="font-ui font-medium text-xs text-text-muted uppercase tracking-wider">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      className={inputBase}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1">
                    <label className="font-ui font-medium text-xs text-text-muted uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@empresa.com"
                      required
                      className={inputBase}
                    />
                  </div>

                  {/* Tipo de proyecto */}
                  <div className="flex flex-col gap-1">
                    <label className="font-ui font-medium text-xs text-text-muted uppercase tracking-wider">
                      Tipo de proyecto
                    </label>
                    <select
                      name="proyecto"
                      value={form.proyecto}
                      onChange={handleChange}
                      required
                      className={inputBase + ' cursor-pointer appearance-none'}
                      style={{ backgroundImage: 'none' }}
                    >
                      <option value="" disabled className="bg-bg-secondary text-text-muted">
                        Selecciona una opción
                      </option>
                      {['Desarrollo Web', 'App Móvil', 'Cloud / DevOps', 'UI/UX Design', 'Consultoría', 'Otro'].map((op) => (
                        <option key={op} value={op} className="bg-bg-secondary text-text-main">
                          {op}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div className="flex flex-col gap-1">
                    <label className="font-ui font-medium text-xs text-text-muted uppercase tracking-wider">
                      Describe tu idea
                    </label>
                    <textarea
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      placeholder="¿Qué quieres construir? ¿Cuál es tu deadline?"
                      rows={4}
                      required
                      className={inputBase + ' resize-none leading-relaxed'}
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={[
                    'w-full py-3.5 rounded-full font-ui font-semibold text-base text-bg-main',
                    'bg-primary hover:bg-primary-dark',
                    'shadow-glow-teal hover:shadow-glow-teal-lg',
                    'hover:-translate-y-0.5 active:translate-y-0',
                    'transition-all duration-300',
                    'disabled:opacity-60 disabled:pointer-events-none',
                    'flex items-center justify-center gap-2',
                  ].join(' ')}
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                      </svg>
                      Enviando…
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </>
                  )}
                </button>

                <p className="font-body text-text-muted text-xs text-center">
                  Al enviar aceptas nuestra{' '}
                  <a href="/privacidad" className="text-primary hover:underline">Política de Privacidad</a>.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   PÁGINA DE INICIO
───────────────────────────────────────────────────────────── */
function Inicio() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Servicios />
      <Metodologia />
      <Nosotros />
      <ContactoSection />
    </div>
  );
}

export default Inicio;

