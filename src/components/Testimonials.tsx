import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="w-full py-16 md:py-24 bg-blue-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <p className="text-white text-lg leading-relaxed mb-6">
              "Excepcional atención y profesionalismo. Nuestra empresa ha crecido gracias a la asesoría integral que nos brinda el equipo de WH Correa & Asociados en materia laboral y tributaria."
            </p>
            <div>
              <p className="text-white font-semibold">JUAN GARCÍA</p>
              <p className="text-blue-200 text-sm">Gerente General - Empresa Textil</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-white text-lg leading-relaxed mb-6">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
            </p>
            <div>
              <p className="text-white font-semibold">MARÍA LÓPEZ</p>
              <p className="text-blue-200 text-sm">Directora de Recursos Humanos</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button className="p-2 rounded-full border-2 border-white hover:bg-white/10 transition-colors">
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button className="p-2 rounded-full border-2 border-white hover:bg-white/10 transition-colors">
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
