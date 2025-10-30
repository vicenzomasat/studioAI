import React from 'react';
import { FileText, Users, BarChart3, Briefcase } from 'lucide-react';

const services = [
  {
    icon: FileText,
    name: 'ESTRUCTURACIÓN',
    description: 'Asesoramiento en estructuración empresarial'
  },
  {
    icon: Users,
    name: 'SERVICIOS',
    description: 'Servicios integrales de recursos humanos'
  },
  {
    icon: BarChart3,
    name: 'AUDITORÍA',
    description: 'Auditoría laboral y de cumplimiento'
  },
  {
    icon: Briefcase,
    name: 'REPRESENTACIÓN',
    description: 'Representación judicial y administrativa'
  }
];

export default function Services() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-8 flex justify-center">
            <svg className="w-24 h-24 text-blue-900" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10 L90 40 L90 110 L10 110 L10 40 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M50 40 L70 55 L70 110 L30 110 L30 55 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M50 70 L60 80 L60 110 L40 110 L40 80 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center mb-4 text-blue-900">
                  <Icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
