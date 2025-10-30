import React from 'react';

export default function Company() {
  return (
    <section id="nosotros" className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          WH CORREA & ASOCIADOS
        </h2>
        <p className="text-gray-600 mb-8 font-medium">Profesionales dedicados al sector empresarial</p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nuestros especialistas en materia laboral y de recursos humanos trabajan diariamente en solucionar las necesidades legales de nuestros clientes en materia de derecho laboral, seguridad social y retenciones.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Especializados en asesoramiento integral, acompañamos a nuestras empresas clientes en todo lo referido a sus obligaciones laborales, previsionales y tributarias.
            </p>
          </div>

          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Especializados en Derecho Laboral y Derecho Administrativo, brindamos servicios de asesoramiento, represetación judicial y administrativas, así como confección de contratos y negociación colectiva.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Contamos con más de 20 años de trayectoria en la profesión, brindando servicio personalizado a empresas de todo tamaño y sector.
            </p>
          </div>
        </div>

        <button className="px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded transition-colors">
          LEER MAS
        </button>
      </div>
    </section>
  );
}
