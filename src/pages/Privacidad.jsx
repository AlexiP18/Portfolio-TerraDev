import React from 'react';

function Privacidad() {
  return (
    <section
      className="w-full"
      style={{ background: 'linear-gradient(180deg, #0B1120 0%, #070d1a 100%)', minHeight: 'calc(100dvh - 68px)' }}
    >
      <div className="max-w-4xl mx-auto px-6 py-14 lg:py-20">
        <div className="mb-10">
          <p className="font-ui font-medium text-xs text-primary uppercase tracking-widest mb-3">Legal</p>
          <h1 className="font-heading font-bold text-text-main text-3xl sm:text-4xl lg:text-5xl leading-tight">Política de Privacidad</h1>
          <p className="font-body text-text-body text-sm mt-4">Última actualización: 15 de marzo de 2026</p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="font-heading font-bold text-text-main text-xl mb-2">1. Datos que recopilamos</h2>
            <p className="font-body text-text-body leading-relaxed">
              Recopilamos la información que nos envías mediante formularios de contacto, como nombre, correo
              electrónico, tipo de proyecto y mensaje.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-text-main text-xl mb-2">2. Uso de la información</h2>
            <p className="font-body text-text-body leading-relaxed">
              Utilizamos estos datos para responder solicitudes, preparar propuestas comerciales y brindar soporte
              relacionado con nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-text-main text-xl mb-2">3. Conservación y seguridad</h2>
            <p className="font-body text-text-body leading-relaxed">
              Conservamos la información el tiempo necesario para atender la solicitud y aplicamos medidas razonables
              de seguridad para protegerla frente a acceso no autorizado.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-text-main text-xl mb-2">4. Derechos del titular</h2>
            <p className="font-body text-text-body leading-relaxed">
              Puedes solicitar acceso, corrección o eliminación de tus datos escribiendo a hola@terrabyte.ec.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Privacidad;
