import React from 'react';

export default function WhySection() {
  return (
    <section className="w-full">
      <div className="grid md:grid-cols-2">
        <div className="bg-blue-900 py-16 md:py-24 px-6 flex flex-col justify-center">
          <div className="max-w-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Porque elegimos?
              <br />
              Te lo decimos acá!
            </h2>
            <ul className="space-y-4 text-white mb-8">
              <li className="flex items-start gap-3">
                <span className="text-blue-300 font-bold mt-1">✓</span>
                <span>Más de 20 años de experiencia en el sector</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-300 font-bold mt-1">✓</span>
                <span>Equipo profesional especializado</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-300 font-bold mt-1">✓</span>
                <span>Atención personalizada a cada cliente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-300 font-bold mt-1">✓</span>
                <span>Soluciones innovadoras y efectivas</span>
              </li>
            </ul>
            <button className="px-8 py-3 bg-white text-blue-900 font-semibold hover:bg-gray-100 transition-colors rounded">
              Contactanos
            </button>
          </div>
        </div>

        <div className="relative h-96 md:h-auto">
          <img
            src="/edificio copy copy.png"
            alt="Oficina"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
