import React from 'react';
import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────────────────────────
   DATOS
───────────────────────────────────────────────────────────── */

const ACCENT = '#10b981';
const ACCENT2 = '#34d399';

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    title: 'Modelo como código (DSL)',
    body: 'Define toda tu arquitectura en texto usando el Structurizr DSL, generando automáticamente múltiples vistas desde un único modelo centralizado.',
    accent: ACCENT,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: 'Modelo C4 nativo',
    body: 'Soporte de primera clase para el Modelo C4: diagramas de Contexto, Contenedores, Componentes y Despliegue, creado por el mismo autor del estándar C4.',
    accent: ACCENT2,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Validación de reglas',
    body: 'Previene errores arquitectónicos comunes como mezclar niveles de abstracción, asegurando la coherencia y el rigor del modelo.',
    accent: ACCENT,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    title: 'Compatibilidad con IA',
    body: 'El formato textual es ideal para LLMs: la IA puede generar, consultar y resumir arquitecturas completas sin artefactos gráficos innecesarios.',
    accent: ACCENT2,
  },
];

const CAPABILITIES = [
  {
    name: 'Control de versiones (Git)',
    tag: 'Colaboración',
    tagColor: ACCENT,
    desc: 'Los archivos .dsl se almacenan junto al código en repositorios como Git. Los equipos colaboran mediante Pull Requests, revisando cambios de arquitectura como cualquier otro código.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M13 6h3a2 2 0 0 1 2 2v7" /><line x1="6" y1="9" x2="6" y2="21" />
      </svg>
    ),
  },
  {
    name: 'Integración CI/CD',
    tag: 'Automatización',
    tagColor: ACCENT2,
    desc: 'Integración con GitHub Actions y otras pipelines CI/CD. Los diagramas se autogeneran y publican automáticamente tras cada actualización del repositorio.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    name: 'ADRs y documentación',
    tag: 'Documentación',
    tagColor: ACCENT,
    desc: 'Incluye Registros de Decisiones Arquitectónicas (ADRs) y wikis en Markdown o AsciiDoc directamente junto al modelo de arquitectura.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

const EXPORTS = [
  { name: 'PlantUML', color: ACCENT },
  { name: 'Mermaid', color: ACCENT2 },
  { name: 'JSON', color: ACCENT },
  { name: 'C4 Context', color: ACCENT2 },
  { name: 'C4 Container', color: ACCENT },
  { name: 'C4 Component', color: ACCENT2 },
];

const IDE_INTEGRATIONS = [
  { name: 'VS Code', desc: 'Extensión oficial con resaltado de sintaxis y preview en vivo' },
  { name: 'IntelliJ IDEA', desc: 'Plugin con autocompletado e integración directa con el DSL' },
];

/* ─────────────────────────────────────────────────────────────
   COMPONENTE DE CÓDIGO DSL DE EJEMPLO
───────────────────────────────────────────────────────────── */

const CODE_EXAMPLE = `workspace "Mi Sistema" {
  model {
    user = person "Usuario"
    system = softwareSystem "Mi Aplicación" {
      api = container "API REST"
      db  = container "Base de Datos"
    }
    user -> api "Usa"
    api  -> db  "Lee/Escribe"
  }
  views {
    systemContext system "Contexto"
    container     system "Contenedores"
  }
}`;

/* ─────────────────────────────────────────────────────────────
   COMPONENTE PRINCIPAL
───────────────────────────────────────────────────────────── */

function BlogStructurizr() {
  return (
    <div className="flex flex-col w-full">

      {/* ── HERO ────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '6rem',
          paddingBottom: '3.5rem',
          background:
            'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(16,185,129,0.09) 0%, transparent 65%), #0B1120',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
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
            {['Arquitectura', 'Diagrams as Code', 'Modelo C4'].map((cat) => (
              <span
                key={cat}
                className="font-code"
                style={{
                  fontSize: '0.65rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '999px',
                  background: 'rgba(16,185,129,0.12)',
                  color: '#34d399',
                  border: '1px solid rgba(16,185,129,0.3)',
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
            Structurizr:{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #10b981, #34d399)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Arquitectura como código
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #10b981, #34d399)',
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
            <span className="font-code text-text-muted text-xs">6 min de lectura</span>
          </div>
        </div>
      </section>

      {/* ── CUERPO ──────────────────────────────────────────── */}
      <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem 5rem' }}>

        {/* Intro */}
        <section style={{ marginTop: '3rem' }}>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            En la ingeniería de software moderna, la <strong className="text-text-main">documentación arquitectónica</strong> sufre
            desde hace tiempo de un problema crítico: se vuelve obsoleta rápidamente. Las ilustraciones creadas
            a mano quedan desactualizadas antes de que se implementen los cambios reales en el sistema.
          </p>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            Para resolver esta brecha, surge un nuevo paradigma conocido como{' '}
            <strong style={{ color: '#34d399' }}>Diagrams as Code (DaC)</strong> — "Diagramas como Código".
            Y en este contexto, <strong className="text-text-main">Structurizr</strong> es la referencia
            indiscutible: una herramienta que transforma la forma en que los ingenieros conceptualizan,
            documentan y comunican el diseño de sistemas de software.
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
            ¿Qué es Structurizr?
          </h2>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            Structurizr es una herramienta con el paradigma de <strong className="text-text-main">"modelos como código"</strong>,
            construida específicamente para soportar y visualizar el <strong className="text-text-main">Modelo C4</strong> de
            arquitectura de software. Creada por <em style={{ color: '#34d399' }}>Simon Brown</em> — el mismo autor del
            Modelo C4 — garantiza la máxima compatibilidad y rigor con los estándares de esta metodología.
          </p>
          <blockquote
            style={{
              borderLeft: '3px solid #10b981',
              margin: '2rem 0',
              padding: '1rem 1.375rem',
              background: 'rgba(16,185,129,0.05)',
              borderRadius: '0 12px 12px 0',
              color: '#CBD5E1',
              fontStyle: 'italic',
              fontSize: '1.0625rem',
              lineHeight: 1.75,
            }}
          >
            En vez de dibujar, los arquitectos escriben código usando el Structurizr DSL para definir un modelo
            único, a partir del cual se generan automáticamente todas las vistas arquitectónicas.
          </blockquote>
        </section>

        {/* Bloque de código de ejemplo */}
        <section style={{ marginTop: '2rem' }}>
          <p className="font-body text-text-muted text-sm mb-3" style={{ fontStyle: 'italic' }}>
            Ejemplo de Structurizr DSL — define modelo + vistas en pocas líneas:
          </p>
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(15,23,42,0.8)',
              border: '1px solid rgba(16,185,129,0.2)',
              backdropFilter: 'blur(8px)',
            }}
          >
            {/* Barra de título */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(16,185,129,0.06)' }}
            >
              <span className="w-3 h-3 rounded-full bg-rose-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
              <span className="font-code text-xs text-text-muted ml-2">architecture.dsl</span>
            </div>
            <pre
              className="font-code text-sm overflow-x-auto"
              style={{
                margin: 0,
                padding: '1.25rem 1.5rem',
                color: '#e2e8f0',
                lineHeight: '1.7',
                background: 'transparent',
              }}
            >
              {CODE_EXAMPLE.split('\n').map((line, i) => {
                // Colorear palabras clave
                const colored = line
                  .replace(/(workspace|model|views|container|person|softwareSystem|systemContext)(?=\s)/g, '<span style="color:#34d399;font-weight:600">$1</span>')
                  .replace(/"([^"]+)"/g, '<span style="color:#fbbf24">"$1"</span>')
                  .replace(/(->)/g, '<span style="color:#60a5fa">$1</span>')
                  .replace(/(=)/g, '<span style="color:#a78bfa">$1</span>');
                return (
                  <div key={i} dangerouslySetInnerHTML={{ __html: colored }} />
                );
              })}
            </pre>
          </div>
        </section>

        {/* Características */}
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

        {/* Formatos de exportación */}
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
            Exportación y renderizado
          </h2>
          <p className="font-body text-text-body text-sm mb-4" style={{ lineHeight: '1.75' }}>
            El modelo no queda atrapado en la plataforma. Desde la CLI o el servidor, la arquitectura puede
            exportarse dinámicamente a múltiples formatos:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {EXPORTS.map(({ name, color }) => (
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

        {/* Funcionalidades avanzadas */}
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

        {/* IDEs */}
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
            Integración con IDEs
          </h2>
          <div className="flex flex-col gap-3">
            {IDE_INTEGRATIONS.map(({ name, desc }) => (
              <div
                key={name}
                className="flex items-start gap-3 rounded-xl px-5 py-4 glass transition-all duration-300"
              >
                <svg
                  width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="mt-0.5 shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div>
                  <span className="font-heading font-bold text-text-main text-sm">{name} — </span>
                  <span className="font-body text-text-body text-sm">{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Facilidad de uso */}
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
            Curva de aprendizaje — vale la pena
          </h2>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            Structurizr presenta una curva de aprendizaje mayor que las herramientas visuales, ya que
            en vez de arrastrar elementos hay que aprender la sintaxis del DSL. Sin embargo, su
            naturaleza textual es <strong className="text-text-main">mucho más rica y fácil de mantener a largo plazo</strong>.
          </p>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            Si un equipo necesita cambiar el nombre de un microservicio o base de datos, basta con
            modificar <strong style={{ color: '#34d399' }}>una sola línea de texto</strong> y Structurizr
            actualizará automáticamente <em>todos los diagramas</em> donde ese elemento aparezca —
            ahorrando innumerables horas de rediseño manual.
          </p>
        </section>

        {/* Conclusión */}
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
            ¿Para quién es Structurizr?
          </h2>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            Structurizr es la herramienta ideal para <strong className="text-text-main">equipos de desarrollo modernos</strong> que
            quieren integrar la documentación arquitectónica completamente en su flujo de trabajo de ingeniería.
            También es invaluable en contextos pedagógicos: propicia que estudiantes y profesionales piensen
            de manera estructurada, verificando la lógica de sus dependencias en vez de sus habilidades de diseño gráfico.
          </p>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            No es simplemente una herramienta para dibujar — es una <strong className="text-text-main">plataforma para estructurar y gobernar
            proyectos tecnológicos complejos</strong>, donde la arquitectura vive junto al código fuente, se revisa
            como código y evoluciona con el sistema.
          </p>
        </section>

        {/* Separador */}
        <div
          style={{
            margin: '3.5rem 0',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(16,185,129,0.35), transparent)',
          }}
        />

        {/* ── CTA ──────────────────────────────────────────── */}
        <div
          style={{
            borderRadius: '22px',
            border: '1px solid rgba(16,185,129,0.22)',
            background:
              'linear-gradient(135deg, rgba(16,185,129,0.07) 0%, rgba(15,23,42,0.8) 60%, rgba(52,211,153,0.04) 100%)',
            padding: '2.75rem 2.25rem',
            backdropFilter: 'blur(16px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute', top: '-40%', left: '50%',
              transform: 'translateX(-50%)', width: '200px', height: '200px',
              background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              width: 52, height: 52, borderRadius: '14px',
              background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.28)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
          </div>

          <h2 className="font-heading font-bold text-text-main" style={{ fontSize: '1.375rem', marginBottom: '0.6rem' }}>
            ¿Quieres arquitectura bien documentada?
          </h2>
          <p
            className="font-body text-text-body"
            style={{ fontSize: '0.9375rem', lineHeight: 1.7, maxWidth: '26rem', margin: '0 auto 1.75rem' }}
          >
            En Terrabyte EC aplicamos el Modelo C4 y herramientas como Structurizr para documentar
            arquitecturas que crecen junto al código. Conversemos sobre tu sistema.
          </p>

          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 font-ui font-semibold"
            style={{
              padding: '0.75rem 1.625rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #10b981, #34d399)',
              color: '#0B1120',
              fontSize: '0.9375rem',
              boxShadow: '0 0 24px rgba(16,185,129,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 0 32px rgba(16,185,129,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 24px rgba(16,185,129,0.35)';
            }}
          >
            Hablemos de arquitectura
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogStructurizr;
