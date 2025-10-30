import React from 'react';

const teamMembers = [
  {
    name: 'Marcelo Correa',
    title: 'Socio Fundador',
    credentials: 'Abogado especialista en Derecho Laboral',
    image: '/marcelo.png'
  },
  {
    name: 'Sandrigo López',
    title: 'Socio',
    credentials: 'Abogado especialista en Derecho Administrativo',
    image: '/sandrigo.png'
  },
  {
    name: 'Federico García',
    title: 'Asociado',
    credentials: 'Abogado especialista en Recursos Humanos',
    image: '/fede (2).png'
  }
];

export default function Team() {
  return (
    <section id="especialistas" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros especialistas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contamos con profesionales especializados en materia laboral, administrativa y recursos humanos con amplias trayectorias en el sector empresarial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-blue-900 shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                {member.name}
              </h3>
              <p className="text-blue-900 font-semibold text-center mb-2">
                {member.title}
              </p>
              <p className="text-gray-600 text-center text-sm">
                {member.credentials}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
