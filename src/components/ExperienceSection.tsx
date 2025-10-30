import React from 'react';

export default function ExperienceSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Liberar
              <br />
              Experiencia
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nuestro objetivo es simplificar los procesos legales y administrativos para que usted pueda enfocarse en el crecimiento de su negocio.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Contamos con herramientas tecnológicas actualizadas y un equipo profesional comprometido con la excelencia en la prestación de servicios.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <img
              src="/niños_en_mano.png"
              alt="Experiencia"
              className="w-full max-w-sm mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
