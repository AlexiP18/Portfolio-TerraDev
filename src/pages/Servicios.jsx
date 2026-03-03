import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';
import {
  SiReact, SiNextdotjs, SiFlutter, SiTailwindcss,
  SiNodedotjs, SiPython, SiAmazonwebservices, SiDocker,
  SiPostgresql, SiMongodb, SiRedis, SiGithubactions,
} from 'react-icons/si';
import {
  LuRocket, LuBuilding2, LuShoppingCart,
  LuSettings2, LuChartBar, LuShieldCheck,
} from 'react-icons/lu';

/* ─────────────────────────────────────────────────────────────
   DATOS
───────────────────────────────────────────────────────────── */
const CATEGORIAS = [
  {
    id: 'frontend',
    tag: 'Capa de Presentación',
    title: 'Frontend & Mobile',
    desc: 'Interfaces rápidas, reactivas y accesibles. Desde landing pages hasta apps móviles multiplataforma con un solo código base.',
    accent: '#2DD4BF',
    size: 'md',
    techs: [
      { Icon: SiReact,       name: 'React',    color: '#61DAFB', since: 'v19' },
      { Icon: SiNextdotjs,   name: 'Next.js',  color: '#ffffff', since: 'v15' },
      { Icon: SiFlutter,     name: 'Flutter',  color: '#54C5F8', since: 'v3'  },
      { Icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4', since: 'v3'  },
    ],
    bullets: [
      'SSR / SSG con Next.js App Router',
      'Design Systems escalables',
      'Performance 100/100 en Lighthouse',
      'Apps iOS + Android con un codebase',
    ],
  },
  {
    id: 'backend',
    tag: 'Capa de Lógica',
    title: 'Backend & Cloud',
    desc: 'Arquitectura robusta y escalable. APIs de alto rendimiento, microservicios y pipelines CI/CD automáticos.',
    accent: '#818cf8',
    size: 'md',
    techs: [
      { Icon: SiNodedotjs,        name: 'Node.js',  color: '#5FA04E', since: 'v22' },
      { Icon: SiPython,           name: 'Python',   color: '#3776AB', since: 'v3.13' },
      { Icon: SiAmazonwebservices,name: 'AWS',      color: '#FF9900', since: null   },
      { Icon: SiDocker,           name: 'Docker',   color: '#2496ED', since: null   },
    ],
    bullets: [
      'APIs REST y GraphQL documentadas',
      'Microservicios con mensajería',
      'IaC con Terraform / CDK',
      'Kubernetes & serverless edge',
    ],
  },
  {
    id: 'data',
    tag: 'Capa de Datos',
    title: 'Database & Analytics',
    desc: 'Datos bien modelados desde el diseño. SQL, NoSQL y caché distribuido, con dashboards en tiempo real.',
    accent: '#f472b6',
    size: 'md',
    techs: [
      { Icon: SiPostgresql,    name: 'PostgreSQL', color: '#4169E1', since: 'v17' },
      { Icon: SiMongodb,       name: 'MongoDB',    color: '#47A248', since: 'v8'  },
      { Icon: SiRedis,         name: 'Redis',      color: '#FF4438', since: 'v7'  },
      { Icon: SiGithubactions, name: 'CI/CD',      color: '#2088FF', since: null  },
    ],
    bullets: [
      'Modelado relacional y documental',
      'Redis caché + colas de trabajo',
      'Data pipelines y ETL',
      'Dashboards en tiempo real',
    ],
  },
];

const TIPOS_PROYECTO = [
  {
    Icon: LuRocket,
    iconColor: '#2DD4BF',
    title: 'MVPs para Startups',
    desc: 'De idea a producto funcional en 4–8 semanas. Stack ligero, CI/CD desde el día 1 y listo para escalar.',
    tags: ['Rápido', 'Iterativo', 'Lean'],
    accent: '#2DD4BF',
  },
  {
    Icon: LuBuilding2,
    iconColor: '#818cf8',
    title: 'Sistemas Enterprise',
    desc: 'Arquitecturas robustas para grandes volúmenes de datos, integraciones complejas y equipos distribuidos.',
    tags: ['Alta disponibilidad', 'Seguridad', 'Compliance'],
    accent: '#818cf8',
  },
  {
    Icon: LuShoppingCart,
    iconColor: '#f472b6',
    title: 'E-commerce',
    desc: 'Tiendas de alto rendimiento, pasarelas de pago, inventarios en tiempo real y experiencias de compra fluidas.',
    tags: ['Conversión', 'UX', 'Pagos'],
    accent: '#f472b6',
  },
  {
    Icon: LuSettings2,
    iconColor: '#fb923c',
    title: 'Automatización',
    desc: 'Bots, scrapers, pipelines de datos y workflows que eliminan procesos manuales repetitivos.',
    tags: ['Eficiencia', 'Integración', 'Bots'],
    accent: '#fb923c',
  },
  {
    Icon: LuChartBar,
    iconColor: '#34d399',
    title: 'Analytics & BI',
    desc: 'Dashboards interactivos, KPIs en tiempo real y reportes automatizados para tomar decisiones con datos.',
    tags: ['Datos', 'Tiempo real', 'KPIs'],
    accent: '#34d399',
  },
  {
    Icon: LuShieldCheck,
    iconColor: '#fbbf24',
    title: 'Seguridad & DevSecOps',
    desc: 'Auditorías de código, hardening de infraestructura y pipelines con escaneo de vulnerabilidades integrado.',
    tags: ['Pentesting', 'SAST', 'DAST'],
    accent: '#fbbf24',
  },
];

/* ─────────────────────────────────────────────────────────────
   COMPONENTE: TARJETA DE CATEGORÍA
───────────────────────────────────────────────────────────── */
function CatCard({ tag, title, desc, accent, techs, bullets, size }) {
  const [hovered, setHovered] = useState(false);
  const colSpan = size === 'lg' ? 'md:col-span-2' : 'md:col-span-1';

  return (
    <div
      className={[
        colSpan,
        'group relative rounded-2xl p-7 flex flex-col gap-6 overflow-hidden cursor-default',
        'transition-all duration-300',
        'border',
        hovered ? 'border-opacity-100' : '',
      ].join(' ')}
      style={{
        background: 'rgba(30, 41, 59, 0.55)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: `1px solid ${hovered ? accent + '55' : 'rgba(255,255,255,0.08)'}`,
        boxShadow: hovered
          ? `0 0 40px ${accent}18, 0 8px 32px rgba(0,0,0,0.4)`
          : '0 4px 24px rgba(0,0,0,0.3)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow radial en hover */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 25% 25%, ${accent}12 0%, transparent 60%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Línea superior accent */}
      <div
        className="absolute top-0 left-8 right-8 h-px rounded-b-full transition-all duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}${hovered ? 'bb' : '44'}, transparent)`,
        }}
      />

      {/* Tag + Título */}
      <div className="relative z-10">
        <span
          className="font-ui font-medium text-xs uppercase tracking-widest px-3 py-1 rounded-full border"
          style={{
            color: accent,
            borderColor: accent + '40',
            backgroundColor: accent + '12',
          }}
        >
          {tag}
        </span>

        <h2 className="font-heading font-bold text-text-main text-2xl sm:text-3xl mt-4 leading-tight">
          {title}
        </h2>
        <p className="font-body text-text-body text-base mt-2 leading-relaxed max-w-lg">
          {desc}
        </p>
      </div>

      {/* Iconos de tecnologías */}
      <div className="relative z-10 flex flex-wrap gap-3">
        {techs.map(({ Icon, name, color, since }) => (
          <div
            key={name}
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl transition-all duration-200"
            style={{
              background: hovered ? accent + '14' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${hovered ? accent + '30' : 'rgba(255,255,255,0.07)'}`,
            }}
          >
            <Icon size={22} color={color} />
            <div className="flex flex-col leading-none">
              <span className="font-ui font-semibold text-text-main text-sm">{name}</span>
              {since && (
                <span className="font-code text-[0.6rem] text-text-muted mt-0.5">{since}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bullets */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
        {bullets.map((b) => (
          <div key={b} className="flex items-start gap-2">
            <span
              className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: accent }}
            />
            <span className="font-body text-text-muted text-sm leading-snug">{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   COMPONENTE: TARJETA DE TIPO DE PROYECTO
───────────────────────────────────────────────────────────── */
function TipoCard({ Icon, iconColor, title, desc, tags, accent }) {
  return (
    <div
      className="group relative flex flex-col gap-4 p-5 rounded-2xl transition-all duration-300 cursor-default"
      style={{
        background: 'rgba(30, 41, 59, 0.45)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = `1px solid ${accent}45`;
        e.currentTarget.style.boxShadow = `0 0 28px ${accent}15, 0 4px 20px rgba(0,0,0,0.3)`;
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = '1px solid rgba(255,255,255,0.07)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Icono */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: accent + '18', border: `1px solid ${accent}30` }}
      >
        <Icon size={22} color={iconColor} />
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="font-heading font-bold text-text-main text-lg leading-tight">{title}</h3>
        <p className="font-body text-text-body text-sm leading-relaxed">{desc}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {tags.map((t) => (
          <span
            key={t}
            className="font-code text-[0.65rem] px-2.5 py-1 rounded-md"
            style={{
              color: accent,
              background: accent + '12',
              border: `1px solid ${accent}25`,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   PÁGINA SERVICIOS
───────────────────────────────────────────────────────────── */
function Servicios() {
  return (
    <div className="flex flex-col w-full">

      {/* ── Hero de sección ──────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-24 pb-16"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(45,212,191,0.08) 0%, transparent 65%), #0B1120',
        }}
      >
        {/* Grid decorativo */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(248,250,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(248,250,252,1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-ui font-medium text-xs text-primary uppercase tracking-widest">
              Capacidades · Stack 2026
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-heading font-bold text-text-main text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-tight">
            Arsenal{' '}
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
          </h1>

          {/* Subtítulo */}
          <p className="font-body text-text-body text-lg sm:text-xl leading-relaxed max-w-2xl">
            Dominamos el stack moderno para construir soluciones escalables.{' '}
            <span className="text-text-main">Sin excusas, sin hype — solo código que resuelve problemas reales.</span>
          </p>

          {/* Stats rápidos */}
          <div className="flex flex-wrap justify-center gap-8 pt-4 border-t border-white/[0.08] w-full max-w-lg mt-2">
            {[
              { v: '12+',  l: 'Tecnologías dominadas' },
              { v: '3',    l: 'Capas del stack' },
              { v: '100%', l: 'Código propio' },
            ].map(({ v, l }) => (
              <div key={l} className="flex flex-col items-center">
                <span className="font-heading font-bold text-2xl text-text-main">{v}</span>
                <span className="font-body text-xs text-text-muted mt-0.5">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bento Grid Categorías ────────────────────────── */}
      <section className="w-full max-w-6xl mx-auto px-6 py-16 lg:py-20">
        <div className="flex flex-col items-start gap-2 mb-10">
          <h2 className="font-heading font-bold text-text-main text-2xl sm:text-3xl">
            Por capa de arquitectura
          </h2>
          <p className="font-body text-text-body text-base">
            Cada tecnología tiene su lugar. Aquí está el nuestro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CATEGORIAS.map((cat) => (
            <CatCard key={cat.id} {...cat} />
          ))}
        </div>
      </section>

      {/* ── Proceso rápido (3 pasos) ─────────────────────── */}
      <section
        className="w-full py-14"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(45,212,191,0.04) 50%, transparent 100%)' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { n: '01', t: 'Elegimos el stack correcto', d: 'No hay una bala de plata. Analizamos tu caso antes de proponer tecnologías.' },
              { n: '02', t: 'Construimos con estándares', d: 'Código revisado, testeado y documentado. Linting, cobertura y CI desde el commit 1.' },
              { n: '03', t: 'Entregamos + transferimos', d: 'Handoff completo: código, infra, docs y training a tu equipo.' },
            ].map(({ n, t, d }) => (
              <div key={n} className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] transition-all duration-300 hover:bg-white/[0.04] hover:border-primary/20">
                <span className="font-code text-primary/40 text-3xl font-bold leading-none shrink-0">{n}</span>
                <div>
                  <p className="font-ui font-semibold text-text-main text-base">{t}</p>
                  <p className="font-body text-text-muted text-sm leading-relaxed mt-1">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tipos de Proyectos ───────────────────────────── */}
      <section className="w-full max-w-6xl mx-auto px-6 py-16 lg:py-20">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/8">
            <span className="font-ui font-medium text-xs text-primary uppercase tracking-widest">
              Proyectos
            </span>
          </div>
          <h2 className="font-heading font-bold text-text-main text-3xl sm:text-4xl leading-tight">
            Tipos de proyectos que{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #2DD4BF, #67e8f9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              resolvemos
            </span>
          </h2>
          <p className="font-body text-text-body text-base max-w-xl">
            No somos generalistas — somos selectivos. Estos son los contextos donde mejor trabajamos.
          </p>
        </div>

        {/* Grid tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TIPOS_PROYECTO.map((tp) => (
            <TipoCard key={tp.title} {...tp} />
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
            ¿Tu stack o el nuestro?
          </h2>
          <p className="font-body text-text-body text-lg max-w-xl">
            Si tienes un proyecto en mente, cuéntanos. Si tienes un equipo y necesitas apoyo, también.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button as={Link} to="/contacto" variant="primary" size="lg">
              Cotizar Proyecto
            </Button>
            <Button as={Link} to="/proyectos" variant="outline" size="lg">
              Ver Portafolio
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Servicios;

