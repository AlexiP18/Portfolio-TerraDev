import React from 'react';
import { Link } from 'react-router-dom';

/* -------------------------------------------------------------
   DATOS
------------------------------------------------------------- */

const ACCENT = '#4F8CFF';
const ACCENT2 = '#22C55E';
const ACCENT3 = '#F59E0B';

const CAPABILITIES = [
  {
    title: 'Review en Pull Requests',
    tag: 'Git workflow',
    body: 'Analiza cambios en PRs con agentes especializados, prioriza hallazgos accionables y deja comentarios donde el equipo ya revisa codigo.',
    accent: ACCENT,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
        <line x1="6" y1="9" x2="6" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Review local en IDE',
    tag: 'Shift left',
    body: 'Permite revisar cambios sin commitear desde VS Code, JetBrains o Visual Studio Professional para detectar riesgos antes del pull request.',
    accent: ACCENT2,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 18v3" />
        <path d="m9 9-2 2 2 2" />
        <path d="m15 9 2 2-2 2" />
      </svg>
    ),
  },
  {
    title: 'Context Engine',
    tag: 'Codebase intelligence',
    body: 'Usa contexto de repositorios, historial de PRs, dependencias y reglas internas para reducir comentarios genericos y aumentar precision.',
    accent: ACCENT,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="m4.93 4.93 2.83 2.83" />
        <path d="m16.24 16.24 2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="m4.93 19.07 2.83-2.83" />
        <path d="m16.24 7.76 2.83-2.83" />
      </svg>
    ),
  },
  {
    title: 'Rule System',
    tag: 'Gobernanza',
    body: 'Captura estandares de la organizacion y los aplica durante revisiones para que el feedback refleje como realmente construye el equipo.',
    accent: ACCENT3,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    ),
  },
  {
    title: 'Generacion de tests',
    tag: 'Coverage assistant',
    body: 'Identifica logica sin cobertura y puede proponer tests a partir de los cambios del PR o de un componente concreto.',
    accent: ACCENT2,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2v6l-5 9a3 3 0 0 0 2.6 4.5h10.8A3 3 0 0 0 20 17L15 8V2" />
        <path d="M8 2h8" />
        <path d="M7 14h10" />
      </svg>
    ),
  },
  {
    title: 'Deploy seguro',
    tag: 'Enterprise ready',
    body: 'Puede integrarse con flujos Git y cuenta con opciones empresariales como despliegues administrados u on-premise segun las necesidades.',
    accent: ACCENT,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
        <path d="M12 12v9" />
        <path d="m16 16-4-4-4 4" />
      </svg>
    ),
  },
];

const WORKFLOWS = [
  {
    name: 'Antes del commit',
    steps: ['Developer cambia codigo', 'Qodo revisa cambios locales', 'Clasifica riesgos por tema', 'Propone arreglos aplicables', 'Developer ajusta antes de commitear'],
    result: 'El PR llega con menos ruido, menos errores obvios y mejor explicacion del cambio.',
    accent: ACCENT2,
  },
  {
    name: 'Pull request con revision agentica',
    steps: ['Se abre PR', 'Qodo toma contexto del repo', 'Agentes revisan bugs y reglas', 'Feedback aparece inline o en resumen', 'Autor corrige con foco'],
    result: 'La revision humana se concentra en decisiones de producto, arquitectura y tradeoffs reales.',
    accent: ACCENT,
  },
  {
    name: 'Reglas de equipo',
    steps: ['Equipo define estandares', 'Qodo los transforma en reglas', 'Cada PR se evalua con esas reglas', 'Se detectan violaciones recurrentes', 'El sistema aprende de patrones'],
    result: 'El criterio de calidad deja de vivir solo en la memoria de reviewers senior.',
    accent: ACCENT3,
  },
  {
    name: 'Tests desde cambios',
    steps: ['PR modifica una funcion critica', 'Qodo identifica logica no cubierta', 'Se invoca generacion de tests', 'El autor revisa y ajusta', 'CI valida la cobertura'],
    result: 'Los tests se agregan cerca del cambio, cuando el contexto todavia esta fresco.',
    accent: ACCENT2,
  },
];

const ADOPTION = [
  {
    phase: '1. Empezar con PRs reales',
    body: 'Instalar Qodo en el proveedor Git y probarlo en repositorios activos. El primer objetivo no es automatizar todo, sino medir si los hallazgos son accionables.',
  },
  {
    phase: '2. Ajustar ruido y severidad',
    body: 'Separar comentarios cosmeticos de riesgos de correctitud, seguridad, performance y mantenibilidad. Un review AI util debe priorizar, no llenar el PR de texto.',
  },
  {
    phase: '3. Llevar reglas del equipo al sistema',
    body: 'Convertir convenciones internas en reglas: patrones prohibidos, contratos de API, manejo de errores, criterios de test, observabilidad y seguridad.',
  },
  {
    phase: '4. Mover parte del review al IDE',
    body: 'Usar el plugin para revisar cambios sin commitear. Esto ayuda especialmente cuando el equipo usa copilotos o agentes que generan codigo rapido.',
  },
  {
    phase: '5. Conectar tests y CI',
    body: 'Pedir tests para componentes modificados, revisar que sean validos y dejar que CI actue como verificador final. Qodo propone; el equipo conserva criterio.',
  },
  {
    phase: '6. Medir impacto',
    body: 'Observar tiempo de review, cantidad de regresiones, comentarios repetidos, bugs encontrados antes de merge y satisfaccion del equipo con la senal recibida.',
  },
];

const COMMANDS = [
  {
    title: 'Solicitar revision manual en un PR',
    code: '/agentic_review',
    body: 'Qodo puede reaccionar a este comentario para ejecutar una revision bajo demanda sobre el pull request.',
    accent: ACCENT,
  },
  {
    title: 'Generar tests para un componente',
    code: '/test component_name',
    body: 'El flujo de tests puede proponer casos para un componente modificado, con soporte documentado para lenguajes populares como Python, JavaScript, TypeScript, Go, Java, C# y otros.',
    accent: ACCENT2,
  },
  {
    title: 'Revisar cambios sin commit',
    code: '/review-uncommitted',
    body: 'En el IDE, este workflow revisa modificaciones locales y agrupa hallazgos antes de pasar por Git.',
    accent: ACCENT3,
  },
];

const SOURCES = [
  { label: 'Qodo Documentation', href: 'https://docs.qodo.ai/' },
  { label: 'Qodo Code Review Experience', href: 'https://docs.qodo.ai/qodo-documentation/code-review' },
  { label: 'Generate a Code Review', href: 'https://docs.qodo.ai/qodo-documentation/code-review/get-started/use-qodo-in-prs/code-review' },
  { label: 'Qodo IDE Plugin Overview', href: 'https://docs.qodo.ai/qodo-gen' },
  { label: 'Review Uncommitted Changes', href: 'https://docs.qodo.ai/qodo-documentation/qodo-gen/code-review' },
  { label: 'Generate Tests', href: 'https://docs.qodo.ai/qodo-documentation/qodo-merge/pr-agent/tools/index/test' },
  { label: 'Qodo PR Agent', href: 'https://www.qodo.ai/pr-agent' },
  { label: 'Qodo IDE Plugin', href: 'https://www.qodo.ai/products/ide-plugin/' },
];

function SectionTitle({ kicker, title }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      {kicker && (
        <p className="font-code text-xs uppercase text-text-muted" style={{ marginBottom: '0.45rem' }}>
          {kicker}
        </p>
      )}
      <h2
        className="font-heading font-bold text-text-main"
        style={{
          fontSize: '1.625rem',
          lineHeight: 1.25,
          paddingBottom: '0.625rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function CodeBlock({ title, code, accent = ACCENT }) {
  return (
    <div
      style={{
        margin: '1.2rem 0',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.09)',
        background: '#0d1117',
        boxShadow: '0 16px 44px rgba(0,0,0,0.36)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.65rem 1rem',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          background: 'rgba(255,255,255,0.02)',
        }}
      >
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
        </div>
        <span className="font-code text-xs" style={{ color: accent }}>{title}</span>
      </div>
      <pre
        className="font-code"
        style={{
          margin: 0,
          overflowX: 'auto',
          padding: '1.1rem 1.25rem',
          color: '#d1d5db',
          fontSize: '0.86rem',
          lineHeight: 1.75,
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}

function BlogQodo() {
  return (
    <div className="flex flex-col w-full">
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '6rem',
          paddingBottom: '3.5rem',
          background:
            'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(79,140,255,0.14) 0%, transparent 65%), #0B1120',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.028]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)',
            backgroundSize: '42px 42px',
          }}
        />

        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-ui text-sm text-text-muted hover:text-primary transition-colors duration-200 mb-8 group"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:-translate-x-1">
              <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 5 5 12 12 19" />
            </svg>
            Volver al blog
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-5">
            {['AI Code Review', 'DevTools', 'Testing', 'Governance'].map((cat) => (
              <span
                key={cat}
                className="font-code"
                style={{
                  fontSize: '0.65rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '999px',
                  background: 'rgba(79,140,255,0.14)',
                  color: '#93c5fd',
                  border: '1px solid rgba(79,140,255,0.35)',
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
              maxWidth: '46rem',
            }}
          >
            Qodo:{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #4F8CFF, #22C55E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              la capa de revision que vuelve mas confiable el codigo generado por IA
            </span>
          </h1>

          <p className="font-body text-text-body" style={{ lineHeight: '1.85', fontSize: '1.0625rem', maxWidth: '43rem' }}>
            Qodo es una plataforma de AI code review orientada a equipos que necesitan detectar bugs,
            aplicar estandares internos, revisar cambios locales y mejorar pull requests sin convertir cada
            revision en una lluvia de comentarios genericos.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #4F8CFF, #22C55E)',
                  color: '#061208',
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
            <span className="font-code text-text-muted text-xs">10 min de lectura</span>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <section style={{ marginTop: '3rem' }}>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            El problema moderno no es solo escribir codigo mas rapido. Con copilotos, agentes y asistentes,
            la velocidad de produccion sube, pero tambien aumenta la cantidad de cambios que alguien debe entender,
            validar y mantener. Qodo entra justamente ahi: no intenta reemplazar el criterio del equipo, sino poner
            una capa de revision continua entre el codigo generado y el merge a produccion.
          </p>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            Su propuesta es revisar con contexto: no mirar una linea aislada, sino relacionar el diff con el repositorio,
            reglas internas, historial de pull requests, tests y requisitos. Esa diferencia importa porque una sugerencia
            util no solo dice que algo esta mal; explica por que afecta al sistema y como avanzar.
          </p>
        </section>

        <section style={{ marginTop: '3.5rem' }}>
          <SectionTitle kicker="Mapa general" title="Que es Qodo" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { value: 'Review', label: 'Feedback accionable en PRs e IDE', color: ACCENT },
              { value: 'Contexto', label: 'Analisis con repos, reglas e historial', color: ACCENT2 },
              { value: 'Gobernanza', label: 'Estandares consistentes por equipo', color: ACCENT3 },
            ].map(({ value, label, color }) => (
              <div key={value} className="glass rounded-2xl p-5" style={{ borderTop: '2px solid ' + color }}>
                <strong className="font-heading text-text-main text-xl block mb-1">{value}</strong>
                <span className="font-body text-text-body text-sm leading-relaxed">{label}</span>
              </div>
            ))}
          </div>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem', marginTop: '1.5rem' }}>
            La documentacion oficial presenta Qodo como una plataforma de AI code review con Code Review,
            Context Engine, Governance, Administration, opciones on-premise y herramientas para desarrolladores
            como plugin de IDE y CLI. En la practica, se ubica entre el asistente que genera codigo y el proceso
            de entrega que debe garantizar calidad.
          </p>
        </section>

        <section style={{ marginTop: '3.5rem' }}>
          <SectionTitle kicker="Capacidades" title="Lo que Qodo aporta al ciclo de desarrollo" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CAPABILITIES.map(({ title, tag, body, accent, icon }) => (
              <div key={title} className="group relative rounded-2xl p-5 flex flex-col gap-3 overflow-hidden glass glass-glow transition-all duration-300 cursor-default">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ background: 'radial-gradient(circle at 30% 30%, ' + accent + '18 0%, transparent 65%)' }} />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: accent + '15', color: accent, border: '1px solid ' + accent + '35' }}>
                    {icon}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-heading font-bold text-text-main text-base leading-tight">{title}</h3>
                      <span className="font-code text-[0.6rem] uppercase px-2 py-0.5 rounded-full" style={{ background: accent + '16', color: accent, border: '1px solid ' + accent + '30' }}>{tag}</span>
                    </div>
                    <p className="font-body text-text-body text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: '3.5rem' }}>
          <SectionTitle kicker="Flujos de uso" title="Ejemplos concretos para equipos de software" />
          <div className="flex flex-col gap-4">
            {WORKFLOWS.map(({ name, steps, result, accent }) => (
              <div key={name} className="glass rounded-2xl p-5" style={{ borderLeft: '3px solid ' + accent }}>
                <h3 className="font-heading font-bold text-text-main text-lg mb-3">{name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-4">
                  {steps.map((step, index) => (
                    <div key={step} className="rounded-xl px-3 py-3 bg-white/[0.03] border border-white/[0.07]">
                      <span className="font-code text-[0.65rem] block mb-1" style={{ color: accent }}>0{index + 1}</span>
                      <span className="font-body text-text-body text-xs leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
                <p className="font-body text-text-body text-sm leading-relaxed mb-0"><strong className="text-text-main">Resultado:</strong> {result}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: '3.5rem' }}>
          <SectionTitle kicker="Comandos" title="Ejemplos de uso documentados" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {COMMANDS.map(({ title, code, body, accent }) => (
              <div key={title} className="glass rounded-2xl p-5" style={{ borderTop: '2px solid ' + accent }}>
                <h3 className="font-heading font-bold text-text-main text-base mb-2">{title}</h3>
                <CodeBlock title="qodo-workflow" code={code} accent={accent} />
                <p className="font-body text-text-body text-sm leading-relaxed mb-0">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: '3.5rem' }}>
          <SectionTitle kicker="Adopcion" title="Como incorporar Qodo sin saturar al equipo" />
          <div className="flex flex-col gap-3">
            {ADOPTION.map(({ phase, body }) => (
              <div key={phase} className="flex items-start gap-4 rounded-2xl px-4 py-4 glass transition-all hover:bg-white/[0.04]">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: ACCENT + '15', color: ACCENT, border: '1px solid ' + ACCENT + '35' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-text-main text-base mb-1">{phase}</h3>
                  <p className="font-body text-text-body text-sm leading-relaxed mb-0">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: '3.5rem' }}>
          <SectionTitle kicker="Analisis" title="Donde brilla y donde hay que mantener criterio" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass rounded-2xl p-5" style={{ borderTop: '2px solid ' + ACCENT2 }}>
              <h3 className="font-heading font-bold text-text-main text-lg mb-3">Brilla cuando</h3>
              <ul className="font-body text-text-body text-sm leading-relaxed flex flex-col gap-2 pl-5" style={{ listStyle: 'disc' }}>
                <li>El equipo recibe mucho codigo generado por IA y necesita validarlo rapido.</li>
                <li>Los reviewers senior repiten los mismos comentarios en cada PR.</li>
                <li>Hay multiples repositorios y el impacto de un cambio no vive en un solo archivo.</li>
                <li>Se quiere revisar antes del commit, no solo cuando el PR ya esta abierto.</li>
              </ul>
            </div>
            <div className="glass rounded-2xl p-5" style={{ borderTop: '2px solid ' + ACCENT3 }}>
              <h3 className="font-heading font-bold text-text-main text-lg mb-3">Requiere cuidado cuando</h3>
              <ul className="font-body text-text-body text-sm leading-relaxed flex flex-col gap-2 pl-5" style={{ listStyle: 'disc' }}>
                <li>No existen estandares de equipo que Qodo pueda reforzar.</li>
                <li>Se acepta cualquier sugerencia AI sin leer el contexto tecnico.</li>
                <li>El equipo mide valor por cantidad de comentarios, no por problemas reales detectados.</li>
                <li>Los tests y CI no acompanan el flujo de revision.</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '3.5rem' }}>
          <SectionTitle kicker="Fuentes" title="Fuentes oficiales consultadas" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SOURCES.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl px-4 py-3 glass hover:bg-white/[0.04] transition-all no-underline"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <span className="font-ui font-semibold text-text-main text-sm block">{label}</span>
                <span className="font-code text-[0.68rem] text-text-muted break-all">{href.replace('https://', '')}</span>
              </a>
            ))}
          </div>
        </section>

        <div style={{ margin: '3.5rem 0', height: '1px', background: 'linear-gradient(to right, transparent, rgba(79,140,255,0.7), transparent)' }} />

        <div
          style={{
            borderRadius: '22px',
            border: '1px solid rgba(79,140,255,0.32)',
            background: 'linear-gradient(135deg, rgba(79,140,255,0.14) 0%, rgba(15,23,42,0.84) 58%, rgba(34,197,94,0.12) 100%)',
            padding: '2.75rem 2.25rem',
            backdropFilter: 'blur(16px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ width: 52, height: 52, borderRadius: '14px', background: ACCENT + '18', border: '1px solid ' + ACCENT + '45', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ACCENT2} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
            </svg>
          </div>
          <h2 className="font-heading font-bold text-text-main" style={{ fontSize: '1.375rem', marginBottom: '0.6rem' }}>
            La IA acelera el codigo; Qodo ayuda a sostener el criterio
          </h2>
          <p className="font-body text-text-body" style={{ fontSize: '0.9375rem', lineHeight: 1.7, maxWidth: '28rem', margin: '0 auto 1.75rem' }}>
            La meta no es tener mas comentarios en los PRs. La meta es detectar antes lo que podria romper producto,
            seguridad, mantenibilidad o confianza del equipo.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 font-ui font-semibold"
            style={{
              padding: '0.75rem 1.625rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #4F8CFF, #22C55E)',
              color: '#061208',
              fontSize: '0.9375rem',
              boxShadow: '0 0 24px rgba(79,140,255,0.38)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 0 32px rgba(34,197,94,0.42)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 24px rgba(79,140,255,0.38)';
            }}
          >
            Mejorar mi flujo de revision
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogQodo;
