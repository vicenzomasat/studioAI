import React from 'react';

export default function InvestSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Queremos invertir
              <br />
              en el futuro
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nos proponemos desarrollar relaciones comerciales de largo plazo con nuestros clientes, brindando soluciones innovadoras y adaptadas a sus necesidades específicas.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Trabajamos en conjunto con nuestros clientes para identificar oportunidades de crecimiento y minimizar riesgos legales que puedan afectar sus operaciones.
            </p>
          </div>

          <div>
            <img
              src="/Untitled-1 copy.png"
              alt="Futuro"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
