import React from 'react';
import { Link } from 'react-router-dom';

/* -------------------------------------------------------------
   DATOS
------------------------------------------------------------- */

const ACCENT = '#875A7B';
const ACCENT2 = '#00A09D';
const ACCENT3 = '#F06EAA';

const MODULES = [
  {
    title: 'CRM y Ventas',
    tag: 'Lead to cash',
    body: 'Gestiona oportunidades, actividades, cotizaciones, pedidos, facturas y seguimiento comercial desde una sola ficha de cliente.',
    accent: ACCENT,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Inventario y Compras',
    tag: 'Stock en tiempo real',
    body: 'Conecta almacenes, rutas, reglas de reabastecimiento, proveedores, recepciones, entregas y trazabilidad por lotes o series.',
    accent: ACCENT2,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73L13 2.27a2 2 0 0 0-2 0L4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: 'Contabilidad',
    tag: 'Finanzas operativas',
    body: 'Centraliza facturas de clientes, facturas de proveedor, conciliacion bancaria, impuestos, reportes y pagos conectados a las operaciones.',
    accent: ACCENT3,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 7h8" />
        <path d="M8 11h8" />
        <path d="M8 15h4" />
      </svg>
    ),
  },
  {
    title: 'Manufactura',
    tag: 'MRP y piso de planta',
    body: 'Permite planificar ordenes de fabricacion, listas de materiales, centros de trabajo, dependencias, costos y control de shop floor.',
    accent: ACCENT2,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V8l7 5V8l7 5v8" />
        <path d="M5 8l2-5h3l2 5" />
      </svg>
    ),
  },
  {
    title: 'Website y eCommerce',
    tag: 'Canal digital',
    body: 'Construye sitio, tienda, blog, formularios, pagos, catalogos B2B/B2C y pedidos que aterrizan directamente en ventas e inventario.',
    accent: ACCENT,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Studio y Automatizacion',
    tag: 'Adaptacion',
    body: 'Agrega campos, vistas, aprobaciones, acciones automatizadas, webhooks y reglas sin convertir cada mejora pequena en un proyecto de codigo.',
    accent: ACCENT3,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
      </svg>
    ),
  },
];

const FLOWS = [
  {
    name: 'De oportunidad a factura',
    steps: ['Lead entra por formulario web', 'CRM asigna vendedor y proxima actividad', 'Ventas genera cotizacion', 'Cliente firma o paga online', 'Inventario reserva producto', 'Contabilidad emite factura'],
    result: 'Menos doble digitacion y una trazabilidad comercial completa desde el primer contacto.',
    accent: ACCENT,
  },
  {
    name: 'De compra a stock disponible',
    steps: ['Regla detecta stock bajo', 'Compras crea RFQ', 'Proveedor confirma', 'Almacen recibe', 'Inventario actualiza existencias', 'Factura de proveedor pasa a contabilidad'],
    result: 'El equipo compra por demanda real, no por intuicion aislada.',
    accent: ACCENT2,
  },
  {
    name: 'De pedido online a entrega',
    steps: ['Cliente compra en eCommerce', 'Pago queda registrado', 'Orden baja a ventas', 'Almacen prepara picking', 'Transportista recibe guia', 'Cliente consulta estado en portal'],
    result: 'La tienda deja de ser una vitrina separada y se vuelve parte del sistema operativo.',
    accent: ACCENT3,
  },
  {
    name: 'De fabricacion a costo real',
    steps: ['Ventas confirma demanda', 'MRP evalua componentes', 'Manufactura crea orden', 'Operario registra tiempos', 'Calidad valida salida', 'Costo se refleja en inventario'],
    result: 'La planta conversa con finanzas y ventas sin hojas de calculo paralelas.',
    accent: ACCENT2,
  },
];

const IMPLEMENTATION = [
  {
    phase: '1. Descubrimiento operativo',
    body: 'Mapear procesos reales: como se vende, compra, factura, entrega, produce y atiende reclamos. La clave no es instalar apps, sino decidir que flujo debe quedar gobernado por Odoo.',
  },
  {
    phase: '2. Modelo de datos minimo',
    body: 'Limpiar clientes, proveedores, productos, unidades de medida, impuestos, cuentas contables, almacenes y listas de precios antes de migrar. Datos desordenados producen automatizacion fragil.',
  },
  {
    phase: '3. Configuracion por procesos',
    body: 'Activar modulos por flujo: CRM + Ventas + Facturacion para comercial, Inventario + Compras para abastecimiento, MRP + Calidad para manufactura.',
  },
  {
    phase: '4. Personalizacion responsable',
    body: 'Usar Studio para campos, vistas y reglas simples; usar modulos custom cuando hay logica de negocio critica, integraciones profundas o reglas que deben versionarse con Git.',
  },
  {
    phase: '5. Pruebas con escenarios reales',
    body: 'Probar una venta completa, una devolucion, una compra parcial, una factura con impuestos, una transferencia interna y un caso de soporte antes de salir a produccion.',
  },
  {
    phase: '6. Adopcion y mejora continua',
    body: 'Capacitar por rol, medir friccion, revisar permisos, automatizar tareas repetitivas y mantener un backlog de mejoras pequenas en ciclos cortos.',
  },
];

const DEPLOYMENT = [
  { title: 'Odoo Online', body: 'SaaS administrado por Odoo. Es ideal cuando se quiere velocidad, bajo mantenimiento y no se necesitan modulos custom instalados en el servidor.' },
  { title: 'Odoo.sh', body: 'Plataforma administrada con ramas, entornos de staging y despliegue para desarrollos propios. Encaja cuando hay personalizacion tecnica importante.' },
  { title: 'On-premise', body: 'Instalacion en servidor propio o nube propia. Da maximo control, pero tambien exige responsabilidad sobre seguridad, backups, actualizaciones y monitoreo.' },
  { title: 'Community vs Enterprise', body: 'Community es open source y gratuita; Enterprise agrega aplicaciones, servicios, infraestructura y capacidades profesionales segun el plan contratado.' },
];

const API_EXAMPLE = [
  'const BASE_URL = "https://miempresa.odoo.com/json/2";',
  'const API_KEY = process.env.ODOO_API_KEY;',
  '',
  'async function buscarClientes() {',
  '  const response = await fetch(`${BASE_URL}/res.partner/search_read`, {',
  '    method: "POST",',
  '    headers: {',
  '      "Content-Type": "application/json",',
  '      Authorization: `bearer ${API_KEY}`',
  '    },',
  '    body: JSON.stringify({',
  '      domain: [["is_company", "=", true]],',
  '      fields: ["name", "email", "phone"],',
  '      limit: 10',
  '    })',
  '  });',
  '',
  '  return response.json();',
  '}',
].join('\n');

const AUTOMATION_EXAMPLE = [
  'Disparador: oportunidad pasa a etapa "Propuesta enviada"',
  'Condicion: valor esperado mayor a 3000 USD',
  'Accion 1: crear actividad para seguimiento en 48 horas',
  'Accion 2: enviar correo con resumen al lider comercial',
  'Accion 3: si no hay respuesta en 7 dias, marcar como riesgo de enfriamiento',
].join('\n');

const SOURCES = [
  { label: 'Sitio oficial de Odoo', href: 'https://www.odoo.com/' },
  { label: 'Documentacion Odoo 19', href: 'https://www.odoo.com/documentation/19.0/applications.html' },
  { label: 'CRM en Odoo', href: 'https://www.odoo.com/documentation/19.0/applications/sales/crm.html' },
  { label: 'Manufactura en Odoo', href: 'https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html' },
  { label: 'Automation Rules', href: 'https://www.odoo.com/documentation/19.0/applications/studio/automated_actions.html' },
  { label: 'External JSON-2 API', href: 'https://www.odoo.com/documentation/19.0/developer/reference/external_api.html' },
  { label: 'Tipos de hosting', href: 'https://www.odoo.com/page/hosting-types' },
  { label: 'Precios y planes', href: 'https://www.odoo.com/pricing' },
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

function CodeBlock({ title, code, accent = ACCENT2 }) {
  return (
    <div
      style={{
        margin: '1.35rem 0',
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
          padding: '1.2rem 1.35rem',
          color: '#d1d5db',
          fontSize: '0.82rem',
          lineHeight: 1.75,
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}

function BlogOdoo() {
  return (
    <div className="flex flex-col w-full">
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '6rem',
          paddingBottom: '3.5rem',
          background:
            'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(135,90,123,0.16) 0%, transparent 65%), #0B1120',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
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
            {['ERP', 'CRM', 'Inventario', 'Automatizacion'].map((cat) => (
              <span
                key={cat}
                className="font-code"
                style={{
                  fontSize: '0.65rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '999px',
                  background: 'rgba(135,90,123,0.16)',
                  color: '#f9a8d4',
                  border: '1px solid rgba(240,110,170,0.32)',
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
            Odoo:{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #F06EAA, #00A09D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              el ERP modular que convierte procesos sueltos en una operacion integrada
            </span>
          </h1>

          <p className="font-body text-text-body" style={{ lineHeight: '1.85', fontSize: '1.0625rem', maxWidth: '43rem' }}>
            Odoo es una suite de aplicaciones empresariales open source que cubre CRM, ventas, inventario,
            contabilidad, punto de venta, manufactura, eCommerce, proyectos, soporte y automatizacion. Su valor
            principal no esta en tener muchos modulos, sino en que esos modulos comparten los mismos clientes,
            productos, documentos, permisos y datos operativos.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #875A7B, #00A09D)',
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
            <span className="font-code text-text-muted text-xs">12 min de lectura</span>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <section style={{ marginTop: '3rem' }}>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            En muchas empresas pequenas y medianas el sistema real no es un ERP: es una mezcla de Excel,
            WhatsApp, correos, facturas manuales, inventario en la cabeza del bodeguero y reportes que llegan tarde.
            Odoo ataca esa fragmentacion con una idea sencilla: cada area puede empezar con una app, pero el dato
            vive en una plataforma comun.
          </p>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            Esa integracion cambia la conversacion. Un vendedor no solo ve una oportunidad; puede saber si hay stock.
            Finanzas no espera a que alguien transcriba una venta; recibe documentos nacidos del flujo comercial.
            Operaciones no planifica a ciegas; cruza demanda, inventario y compras. En terminos practicos, Odoo
            funciona como una columna vertebral para procesos comerciales, logisticos y administrativos.
          </p>
        </section>

        <section style={{ marginTop: '3.5rem' }}>
          <SectionTitle kicker="Mapa general" title="Que es Odoo y por que importa" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { value: 'Suite', label: 'Aplicaciones de negocio conectadas', color: ACCENT },
              { value: 'Open source', label: 'Community gratis y Enterprise comercial', color: ACCENT2 },
              { value: 'Modular', label: 'Se implementa por procesos, no todo de golpe', color: ACCENT3 },
            ].map(({ value, label, color }) => (
              <div key={value} className="glass rounded-2xl p-5" style={{ borderTop: '2px solid ' + color }}>
                <strong className="font-heading text-text-main text-xl block mb-1">{value}</strong>
                <span className="font-body text-text-body text-sm leading-relaxed">{label}</span>
              </div>
            ))}
          </div>
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem', marginTop: '1.5rem' }}>
            La documentacion oficial de Odoo 19 agrupa sus apps en areas como Finanzas, Ventas, Sitios Web,
            Supply Chain, Recursos Humanos, Marketing, Servicios, Productividad y Studio. Esa amplitud permite
            que una misma empresa conecte desde una oportunidad comercial hasta una orden de produccion o una
            factura, sin depender de integraciones fragiles entre herramientas aisladas.
          </p>
        </section>

        <section style={{ marginTop: '3.5rem' }}>
          <SectionTitle kicker="Apps clave" title="Los modulos que sostienen la operacion" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MODULES.map(({ title, tag, body, accent, icon }) => (
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
          <SectionTitle kicker="Flujos de uso" title="Ejemplos concretos de trabajo con Odoo" />
          <div className="flex flex-col gap-4">
            {FLOWS.map(({ name, steps, result, accent }) => (
              <div key={name} className="glass rounded-2xl p-5" style={{ borderLeft: '3px solid ' + accent }}>
                <h3 className="font-heading font-bold text-text-main text-lg mb-3">{name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-2 mb-4">
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
          <SectionTitle kicker="Implementacion" title="Como llevar Odoo a una empresa sin perderse" />
          <div className="flex flex-col gap-3">
            {IMPLEMENTATION.map(({ phase, body }) => (
              <div key={phase} className="flex items-start gap-4 rounded-2xl px-4 py-4 glass transition-all hover:bg-white/[0.04]">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: ACCENT2 + '15', color: ACCENT2, border: '1px solid ' + ACCENT2 + '35' }}>
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
          <SectionTitle kicker="Personalizacion" title="Studio, automatizaciones y codigo custom" />
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            Odoo Studio permite crear automatizaciones con disparadores, condiciones y acciones: actualizar registros,
            crear actividades, enviar correos, ejecutar codigo o disparar webhooks. Es una gran herramienta para reglas
            administrativas y mejoras de bajo riesgo. Cuando la regla define dinero, inventario, seguridad o integracion
            externa critica, conviene convertirla en modulo versionado y probado.
          </p>
          <CodeBlock title="automation-rule.txt" code={AUTOMATION_EXAMPLE} accent={ACCENT3} />
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            La frontera saludable es esta: Studio para adaptacion rapida; modulos custom para logica que debe sobrevivir
            upgrades, auditorias y trabajo en equipo. En proyectos serios, ambos conviven.
          </p>
        </section>

        <section style={{ marginTop: '3.5rem' }}>
          <SectionTitle kicker="Integraciones" title="Ejemplo de uso de la API JSON-2" />
          <p className="font-body text-text-body" style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}>
            En Odoo 19 aparece la API externa JSON-2 bajo el endpoint <code className="font-code text-primary">/json/2</code>.
            Segun la documentacion oficial, el acceso a datos por API externa esta disponible en planes Custom. El
            ejemplo siguiente consulta empresas desde el modelo <code className="font-code text-primary">res.partner</code>.
          </p>
          <CodeBlock title="odoo-json2-example.js" code={API_EXAMPLE} accent={ACCENT2} />
          <blockquote
            style={{
              borderLeft: '3px solid ' + ACCENT2,
              margin: '2rem 0',
              padding: '1rem 1.375rem',
              background: 'linear-gradient(90deg, rgba(0,160,157,0.08) 0%, transparent 100%)',
              borderRadius: '0 12px 12px 0',
              color: '#CBD5E1',
              fontStyle: 'italic',
              fontSize: '1.0625rem',
              lineHeight: 1.75,
            }}
          >
            La API no debe usarse como atajo para saltarse el diseño del proceso. Primero se define el flujo de negocio;
            luego se decide si la integracion debe leer, crear o sincronizar datos.
          </blockquote>
        </section>

        <section style={{ marginTop: '3.5rem' }}>
          <SectionTitle kicker="Hosting" title="Donde conviene ejecutar Odoo" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {DEPLOYMENT.map(({ title, body }, index) => {
              const color = [ACCENT, ACCENT2, ACCENT3, ACCENT2][index];
              return (
                <div key={title} className="rounded-2xl px-4 py-4 glass transition-all hover:bg-white/[0.04]" style={{ borderTop: '2px solid ' + color }}>
                  <h3 className="font-heading font-bold text-text-main text-base mb-1">{title}</h3>
                  <p className="font-body text-text-body text-sm leading-relaxed mb-0">{body}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section style={{ marginTop: '3.5rem' }}>
          <SectionTitle kicker="Criterio tecnico" title="Cuando Odoo es buena decision y cuando no" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass rounded-2xl p-5" style={{ borderTop: '2px solid ' + ACCENT2 }}>
              <h3 className="font-heading font-bold text-text-main text-lg mb-3">Encaja muy bien si</h3>
              <ul className="font-body text-text-body text-sm leading-relaxed flex flex-col gap-2 pl-5" style={{ listStyle: 'disc' }}>
                <li>La empresa necesita unir ventas, inventario, compras y facturacion.</li>
                <li>Los procesos son estables, pero hoy viven en herramientas separadas.</li>
                <li>Se quiere empezar por un modulo y crecer por etapas.</li>
                <li>Hay disposicion para limpiar datos y definir responsables de proceso.</li>
              </ul>
            </div>
            <div className="glass rounded-2xl p-5" style={{ borderTop: '2px solid ' + ACCENT3 }}>
              <h3 className="font-heading font-bold text-text-main text-lg mb-3">Hay que tener cuidado si</h3>
              <ul className="font-body text-text-body text-sm leading-relaxed flex flex-col gap-2 pl-5" style={{ listStyle: 'disc' }}>
                <li>Se pretende copiar exactamente un proceso antiguo lleno de excepciones.</li>
                <li>No hay dueno interno para decisiones contables, logisticas o comerciales.</li>
                <li>La migracion de datos se deja para el final.</li>
                <li>Se instalan demasiadas apps antes de validar el flujo principal.</li>
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

        <div style={{ margin: '3.5rem 0', height: '1px', background: 'linear-gradient(to right, transparent, rgba(240,110,170,0.65), transparent)' }} />

        <div
          style={{
            borderRadius: '22px',
            border: '1px solid rgba(240,110,170,0.32)',
            background: 'linear-gradient(135deg, rgba(135,90,123,0.16) 0%, rgba(15,23,42,0.84) 58%, rgba(0,160,157,0.12) 100%)',
            padding: '2.75rem 2.25rem',
            backdropFilter: 'blur(16px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ width: 52, height: 52, borderRadius: '14px', background: ACCENT + '20', border: '1px solid ' + ACCENT3 + '45', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ACCENT3} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <h2 className="font-heading font-bold text-text-main" style={{ fontSize: '1.375rem', marginBottom: '0.6rem' }}>
            Implementar Odoo es ordenar la empresa, no solo instalar software
          </h2>
          <p className="font-body text-text-body" style={{ fontSize: '0.9375rem', lineHeight: 1.7, maxWidth: '28rem', margin: '0 auto 1.75rem' }}>
            El mejor resultado aparece cuando tecnologia, procesos y datos avanzan juntos. Antes de automatizar,
            conviene decidir que operacion se quiere construir.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 font-ui font-semibold"
            style={{
              padding: '0.75rem 1.625rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #875A7B, #00A09D)',
              color: '#fff',
              fontSize: '0.9375rem',
              boxShadow: '0 0 24px rgba(0,160,157,0.38)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 0 32px rgba(240,110,170,0.42)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 24px rgba(0,160,157,0.38)';
            }}
          >
            Evaluar un ERP para mi empresa
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogOdoo;
