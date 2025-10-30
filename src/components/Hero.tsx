import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-cover bg-center overflow-hidden" style={{
      backgroundImage: 'url(/reichstag-dome-1571046.jpg)',
      backgroundAttachment: 'fixed'
    }}>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Vos te ocupas de VOS.
            <br />
            Nosotros, del resto
          </h1>
          <p className="text-xl text-white/90 mb-8">Soluciones legales integrales para tu negocio</p>
          <button className="px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded transition-colors">
            Conoce Más
          </button>
        </div>
      </div>
    </section>
  );
}
