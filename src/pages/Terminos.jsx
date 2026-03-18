import React from 'react';

function Terminos() {
  return (
    <section
      className="w-full"
      style={{ background: 'linear-gradient(180deg, #0B1120 0%, #070d1a 100%)', minHeight: 'calc(100dvh - 68px)' }}
    >
      <div className="max-w-4xl mx-auto px-6 py-14 lg:py-20">
        <div className="mb-10">
          <p className="font-ui font-medium text-xs text-primary uppercase tracking-widest mb-3">Legal</p>
          <h1 className="font-heading font-bold text-text-main text-3xl sm:text-4xl lg:text-5xl leading-tight">Términos de Uso</h1>
          <p className="font-body text-text-body text-sm mt-4">Última actualización: 15 de marzo de 2026</p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="font-heading font-bold text-text-main text-xl mb-2">1. Aceptación</h2>
            <p className="font-body text-text-body leading-relaxed">
              Al navegar en este sitio, aceptas estos términos y las leyes aplicables en materia digital.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-text-main text-xl mb-2">2. Uso permitido</h2>
            <p className="font-body text-text-body leading-relaxed">
              El contenido del sitio es informativo y comercial. No está permitido copiar, distribuir o reutilizar
              material sin autorización previa por escrito.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-text-main text-xl mb-2">3. Propiedad intelectual</h2>
            <p className="font-body text-text-body leading-relaxed">
              Marcas, diseño, código y contenidos pertenecen a Terrabyte EC o sus respectivos titulares.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-text-main text-xl mb-2">4. Limitación de responsabilidad</h2>
            <p className="font-body text-text-body leading-relaxed">
              No garantizamos disponibilidad permanente del sitio ni ausencia absoluta de errores, aunque trabajamos
              para ofrecer una experiencia estable y segura.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Terminos;
