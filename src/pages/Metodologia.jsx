import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';
import {
  LuCircleX, LuCircleCheck,
  LuKanban, LuGitBranch, LuRefreshCw, LuActivity, LuMessageSquare, LuCloud,
} from 'react-icons/lu';
import {
  SiJira, SiNotion, SiLinear,
  SiGit, SiGithub, SiGithubactions,
  SiDocker, SiAmazonwebservices,
  SiDatadog, SiGrafana, SiSentry,
  SiSlack, SiLoom, SiFigma,
  SiVercel, SiRailway,
} from 'react-icons/si';

/* ─────────────────────────────────────────────────────────────
   DATOS DEL PIPELINE
───────────────────────────────────────────────────────────── */
const PASOS = [
  {
    num: '01',
    phase: 'discovery',
    title: 'Discovery',
    subtitle: 'Entendemos antes de construir',
    desc: 'Entendemos tu negocio antes de escribir una línea. Sesiones de trabajo para mapear objetivos, usuarios, restricciones técnicas y métricas de éxito.',
    accent: '#2DD4BF',
    duracion: '3–5 días',
    entregables: ['Product brief documentado', 'User stories priorizadas', 'Tech stack propuesto', 'Estimación inicial'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    ),
  },
  {
    num: '02',
    phase: 'architecture',
    title: 'Architecture',
    subtitle: 'Sprint 0 — Los cimientos',
    desc: 'Diseñamos los cimientos seguros. Diagramas de sistema, decisiones técnicas documentadas (ADRs), setup del repositorio y pipeline CI/CD inicial.',
    accent: '#818cf8',
    duracion: '1 semana',
    entregables: ['Diagramas de arquitectura', 'ADRs documentados', 'Repo + CI/CD listo', 'Entorno de staging'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    num: '03',
    phase: 'development',
    title: 'Agile Development',
    subtitle: 'Iteraciones reales, no promesas',
    desc: 'Sprints de 2 semanas con entregables reales. Reviews con el cliente al final de cada sprint, demo funcional y backlog ajustado según feedback.',
    accent: '#34d399',
    duracion: '2 sem / sprint',
    entregables: ['Features funcionales', 'Demo cada sprint', 'Backlog actualizado', 'Velocidad medida'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        <line x1="12" y1="2" x2="12" y2="22"/>
      </svg>
    ),
  },
  {
    num: '04',
    phase: 'cicd',
    title: 'CI/CD & QA',
    subtitle: 'Calidad sin fricción',
    desc: 'Pruebas automatizadas y despliegue continuo. Unit tests, integración, E2E y análisis estático en cada commit. Nada llega a producción sin pasar el pipeline.',
    accent: '#fb923c',
    duracion: 'Continuo',
    entregables: ['Test suite automatizado', 'Coverage > 80%', 'Linting + SAST', 'Deploy automático a staging'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    num: '05',
    phase: 'deploy',
    title: 'Deploy & Scale',
    subtitle: 'Producción con confianza',
    desc: 'Lanzamiento a producción y monitoreo. Feature flags para rollouts graduales, observabilidad en tiempo real y runbooks para el equipo que toma el relevo.',
    accent: '#f472b6',
    duracion: 'Ongoing',
    entregables: ['Deploy a producción', 'Monitoreo + alertas', 'Runbooks + docs', 'Handoff al cliente'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>
        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────────────────────
   HOOK: Intersection Observer para activar cada paso al scroll
───────────────────────────────────────────────────────────── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.25, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ─────────────────────────────────────────────────────────────
   COMPONENTE: PASO DEL TIMELINE
───────────────────────────────────────────────────────────── */
function TimelineStep({ paso, index, isLast }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  const active = inView || hovered;
  const { num, title, subtitle, desc, accent, duracion, entregables, icon } = paso;

  return (
    <div
      ref={ref}
      className="relative flex gap-6 sm:gap-10"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Columna izquierda: conector ─────────────────── */}
      <div className="flex flex-col items-center shrink-0 w-14 sm:w-16">
        {/* Nodo circular */}
        <div
          className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-all duration-500"
          style={{
            background: active ? `${accent}20` : 'rgba(30, 41, 59, 0.7)',
            border: `2px solid ${active ? accent : 'rgba(255,255,255,0.12)'}`,
            boxShadow: active ? `0 0 24px ${accent}45, 0 0 8px ${accent}30` : 'none',
          }}
        >
          {/* Número JetBrains Mono */}
          <span
            className="font-code font-bold text-xs leading-none absolute top-1.5 right-2 transition-all duration-500"
            style={{ color: active ? accent : 'rgba(255,255,255,0.3)' }}
          >
            {num}
          </span>
          {/* Icono */}
          <span
            className="transition-all duration-500 mt-1"
            style={{ color: active ? accent : 'rgba(255,255,255,0.35)' }}
          >
            {icon}
          </span>
        </div>

        {/* Línea vertical conectora */}
        {!isLast && (
          <div className="relative w-0.5 flex-1 mt-1 overflow-hidden rounded-full" style={{ background: 'rgba(255,255,255,0.07)', minHeight: '60px' }}>
            <div
              className="absolute top-0 left-0 w-full transition-all duration-700 ease-out rounded-full"
              style={{
                height: active ? '100%' : '0%',
                background: `linear-gradient(180deg, ${accent}, ${accent}30)`,
                transitionDelay: active ? '200ms' : '0ms',
              }}
            />
          </div>
        )}
      </div>

      {/* ── Columna derecha: contenido ───────────────────── */}
      <div
        className="flex-1 pb-14 transition-all duration-500"
        style={{ opacity: inView ? 1 : 0.4, transform: inView ? 'translateX(0)' : 'translateX(12px)' }}
      >
        {/* Header del paso */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span
            className="font-code font-bold text-[0.7rem] uppercase tracking-[0.2em] px-3 py-1 rounded-full border transition-all duration-500"
            style={{
              color: accent,
              borderColor: active ? `${accent}50` : `${accent}25`,
              background: active ? `${accent}15` : `${accent}08`,
            }}
          >
            {num} · {paso.phase}
          </span>
          <span className="font-ui font-medium text-xs text-text-muted uppercase tracking-widest">
            {duracion}
          </span>
        </div>

        <h3 className="font-heading font-bold text-text-main text-2xl sm:text-3xl leading-tight mb-1">
          {title}
        </h3>
        <p
          className="font-ui font-semibold text-base mb-3 transition-colors duration-300"
          style={{ color: active ? accent : '#64748B' }}
        >
          {subtitle}
        </p>
        <p className="font-body text-text-body text-base leading-relaxed max-w-xl mb-5">
          {desc}
        </p>

        {/* Card de entregables */}
        <div
          className="rounded-2xl p-5 transition-all duration-500"
          style={{
            background: active ? `${accent}0a` : 'rgba(30,41,59,0.35)',
            border: `1px solid ${active ? `${accent}30` : 'rgba(255,255,255,0.07)'}`,
            backdropFilter: 'blur(8px)',
          }}
        >
          <p className="font-ui font-semibold text-xs text-text-muted uppercase tracking-widest mb-3">
            Entregables
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {entregables.map((e) => (
              <div key={e} className="flex items-center gap-2.5">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300"
                  style={{ background: active ? accent : 'rgba(255,255,255,0.2)' }}
                />
                <span className="font-body text-sm text-text-body">{e}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   COMPONENTE: HERRAMIENTAS DE APOYO
───────────────────────────────────────────────────────────── */
const TOOLS = [
  { cat: 'Planning',     Icon: LuKanban,        items: [
    { name: 'Jira',             SIcon: SiJira,             color: '#0052CC' },
    { name: 'Notion',           SIcon: SiNotion,           color: '#ffffff' },
    { name: 'Linear',           SIcon: SiLinear,           color: '#5E6AD2' },
  ]},
  { cat: 'Version Ctrl', Icon: LuGitBranch,     items: [
    { name: 'Git',              SIcon: SiGit,              color: '#F05032' },
    { name: 'GitHub',           SIcon: SiGithub,           color: '#ffffff' },
    { name: 'Gitflow',          SIcon: SiGit,              color: '#F05032' },
  ]},
  { cat: 'CI/CD',        Icon: LuRefreshCw,     items: [
    { name: 'GitHub Actions',   SIcon: SiGithubactions,    color: '#2088FF' },
    { name: 'Docker',           SIcon: SiDocker,           color: '#2496ED' },
    { name: 'AWS CodePipeline', SIcon: SiAmazonwebservices,color: '#FF9900' },
  ]},
  { cat: 'Monitoring',   Icon: LuActivity,      items: [
    { name: 'Datadog',          SIcon: SiDatadog,          color: '#632CA6' },
    { name: 'Grafana',          SIcon: SiGrafana,          color: '#F46800' },
    { name: 'Sentry',           SIcon: SiSentry,           color: '#362D59' },
  ]},
  { cat: 'Comunic.',     Icon: LuMessageSquare, items: [
    { name: 'Slack',            SIcon: SiSlack,            color: '#4A154B' },
    { name: 'Loom',             SIcon: SiLoom,             color: '#625DF5' },
    { name: 'Figma',            SIcon: SiFigma,            color: '#F24E1E' },
  ]},
  { cat: 'Cloud',        Icon: LuCloud,         items: [
    { name: 'AWS',              SIcon: SiAmazonwebservices,color: '#FF9900' },
    { name: 'Vercel',           SIcon: SiVercel,           color: '#ffffff' },
    { name: 'Railway',          SIcon: SiRailway,          color: '#0B0D0E' },
  ]},
];

/* ─────────────────────────────────────────────────────────────
   PÁGINA METODOLOGÍA
───────────────────────────────────────────────────────────── */
function Metodologia() {
  return (
    <div className="flex flex-col w-full">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-24 pb-16"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% -5%, rgba(45,212,191,0.09) 0%, transparent 65%), #0B1120',
        }}
      >
        {/* Puntos decorativos */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #2DD4BF 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-ui font-medium text-xs text-primary uppercase tracking-widest">
              The Pipeline · Proceso de Trabajo
            </span>
          </div>

          <h1 className="font-heading font-bold text-text-main text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-tight">
            Ingeniería,{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #2DD4BF, #67e8f9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              no solo código.
            </span>
          </h1>

          <p className="font-body text-text-body text-lg sm:text-xl leading-relaxed max-w-2xl">
            Un proceso predecible y transparente donde tú siempre sabes qué se está construyendo,
            por qué, y cuándo va a estar listo.
          </p>

          {/* Stats del proceso */}
          <div className="flex flex-wrap justify-center gap-8 pt-4 border-t border-white/[0.08] w-full max-w-lg">
            {[
              { v: '5',      l: 'Fases definidas' },
              { v: '2 sem',  l: 'Sprint estándar' },
              { v: '100%',   l: 'Transparencia' },
            ].map(({ v, l }) => (
              <div key={l} className="flex flex-col items-center">
                <span className="font-heading font-bold text-2xl text-text-main">{v}</span>
                <span className="font-body text-xs text-text-muted mt-0.5">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────── */}
      <section className="w-full max-w-4xl mx-auto px-6 py-16 lg:py-24">
        {/* Título de sección */}
        <div className="flex items-center gap-4 mb-14">
          <div className="flex flex-col gap-1">
            <span className="font-code text-primary/60 text-xs uppercase tracking-widest">
              pipeline.run()
            </span>
            <h2 className="font-heading font-bold text-text-main text-2xl sm:text-3xl">
              Cinco fases, cero sorpresas
            </h2>
          </div>
          {/* Línea decorativa */}
          <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent hidden sm:block" />
        </div>

        {/* Lista de pasos */}
        <div>
          {PASOS.map((paso, idx) => (
            <TimelineStep
              key={paso.phase}
              paso={paso}
              index={idx}
              isLast={idx === PASOS.length - 1}
            />
          ))}
        </div>
      </section>

      {/* ── Comparativa: Con nosotros vs Sin nosotros ────── */}
      <section
        className="w-full py-16"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(45,212,191,0.04) 50%, transparent 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-3 mb-10">
            <h2 className="font-heading font-bold text-text-main text-2xl sm:text-3xl">
              La diferencia que marca el proceso
            </h2>
            <p className="font-body text-text-body text-base max-w-lg">
              Sin un proceso definido, los proyectos acumulan deuda técnica y mueren en "casi listo".
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Sin proceso */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl border border-red-500/15 bg-red-500/5">
              <h3 className="flex items-center gap-2.5 font-ui font-bold text-red-400 text-base">
                <LuCircleX size={20} className="shrink-0" />
                Sin proceso definido
              </h3>
              {[
                'Estimaciones que nunca se cumplen',
                'Bugs descubiertos en producción',
                'Código sin documentar ni testear',
                'El cliente no sabe en qué se está gastando',
                'Deuda técnica que se acumula sprint a sprint',
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <span className="text-red-400/60 shrink-0 mt-0.5 text-sm">—</span>
                  <p className="font-body text-text-muted text-sm leading-relaxed">{t}</p>
                </div>
              ))}
            </div>

            {/* Con proceso */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl border border-primary/20 bg-primary/5">
              <h3 className="flex items-center gap-2.5 font-ui font-bold text-primary text-base">
                <LuCircleCheck size={20} className="shrink-0" />
                Con The Pipeline
              </h3>
              {[
                'Sprints con entregables concretos y medibles',
                'QA automatizado antes de cada merge',
                'Documentación viva desde el Sprint 0',
                'Reviews quincenales con demos reales',
                'Deuda técnica controlada con métricas',
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"
                  />
                  <p className="font-body text-text-body text-sm leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Herramientas del proceso ─────────────────────── */}
      <section className="w-full max-w-5xl mx-auto px-6 py-16 lg:py-20">
        <div className="flex flex-col items-center text-center gap-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/8">
            <span className="font-ui font-medium text-xs text-primary uppercase tracking-widest">
              Toolset
            </span>
          </div>
          <h2 className="font-heading font-bold text-text-main text-2xl sm:text-3xl">
            Las herramientas del oficio
          </h2>
          <p className="font-body text-text-body text-base max-w-lg">
            Sin dogmatismos. Usamos lo que mejor sirve al proyecto, no lo que está de moda.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {TOOLS.map(({ cat, Icon, items }) => (
            <div
              key={cat}
              className="flex flex-col gap-3 p-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-primary/20 hover:bg-primary/[0.03] transition-all duration-300"
            >
              <div className="flex flex-row items-center gap-1.5 border-b border-white/[0.06] pb-2.5 mb-0.5">
                <span className="flex items-center shrink-0 text-primary"><Icon size={13} /></span>
                <span className="font-ui font-semibold text-[0.65rem] text-primary uppercase tracking-wider leading-[1]">{cat}</span>
              </div>
              <ul className="flex flex-col gap-2">
                {items.map(({ name, SIcon, color }) => (
                  <li key={name} className="flex items-center gap-2">
                    <SIcon size={11} color={color} className="shrink-0 opacity-80" />
                    <span className="font-code text-[0.68rem] text-text-muted leading-none">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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
            ¿Listo para empezar el{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #2DD4BF, #67e8f9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Sprint 0?
            </span>
          </h2>
          <p className="font-body text-text-body text-lg max-w-xl">
            El primer paso es una llamada de 30 minutos. Sin compromiso, sin presión.
            Solo escuchamos tu proyecto.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button as={Link} to="/contacto" variant="primary" size="lg">
              Agendar Discovery Call
            </Button>
            <Button as={Link} to="/servicios" variant="outline" size="lg">
              Ver nuestro Stack
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Metodologia;
