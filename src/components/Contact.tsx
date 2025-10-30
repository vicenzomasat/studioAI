import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="w-full py-16 md:py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Contacto
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-3 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-3 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
              />
              <textarea
                name="message"
                placeholder="Mensaje"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-3 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded focus:outline-none focus:border-blue-500 resize-none"
              ></textarea>
              <button
                type="submit"
                className="px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded transition-colors"
              >
                ENVIAR
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center gap-8">
            <div className="flex gap-4">
              <Mail className="text-blue-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <p className="text-gray-400">info@whcorrea.com.ar</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-blue-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-1">Teléfono</h3>
                <p className="text-gray-400">+54 11 4123-4567</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-1">Dirección</h3>
                <p className="text-gray-400">Av. Corrientes 1234, CABA, Argentina</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-between items-center flex-col md:flex-row gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 WH CORREA & ASOCIADOS. Todos los derechos reservados.
            </p>
            <div className="w-12 h-12">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" className="text-blue-400"/>
                <path d="M50 20L60 40L80 40L65 55L72 75L50 60L28 75L35 55L20 40L40 40Z" fill="currentColor" className="text-blue-400"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
