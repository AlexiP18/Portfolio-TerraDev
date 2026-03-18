import React from 'react';

function Cookies() {
  return (
    <section
      className="w-full"
      style={{ background: 'linear-gradient(180deg, #0B1120 0%, #070d1a 100%)', minHeight: 'calc(100dvh - 68px)' }}
    >
      <div className="max-w-4xl mx-auto px-6 py-14 lg:py-20">
        <div className="mb-10">
          <p className="font-ui font-medium text-xs text-primary uppercase tracking-widest mb-3">Legal</p>
          <h1 className="font-heading font-bold text-text-main text-3xl sm:text-4xl lg:text-5xl leading-tight">Política de Cookies</h1>
          <p className="font-body text-text-body text-sm mt-4">Última actualización: 15 de marzo de 2026</p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="font-heading font-bold text-text-main text-xl mb-2">1. Qué son las cookies</h2>
            <p className="font-body text-text-body leading-relaxed">
              Son pequeños archivos que se almacenan en tu navegador para recordar preferencias y mejorar la
              experiencia de navegación.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-text-main text-xl mb-2">2. Qué cookies usamos</h2>
            <p className="font-body text-text-body leading-relaxed">
              Podemos usar cookies técnicas (funcionamiento básico), de analítica (medición de uso) y de
              personalización (preferencias).
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-text-main text-xl mb-2">3. Gestión de cookies</h2>
            <p className="font-body text-text-body leading-relaxed">
              Puedes configurar o bloquear cookies desde tu navegador. Ten en cuenta que algunas funciones del sitio
              podrían verse limitadas.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-text-main text-xl mb-2">4. Contacto</h2>
            <p className="font-body text-text-body leading-relaxed">
              Para dudas sobre esta política puedes escribirnos a hola@terrabyte.ec.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Cookies;
