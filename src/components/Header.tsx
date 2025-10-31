import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur shadow-md' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/whcorrea501 logo.png" alt="WH Correa Logo" className="h-10" />
        </div>

        <div className="hidden md:flex gap-8">
          <button onClick={() => scrollToSection('nosotros')} className="text-gray-700 hover:text-blue-900 text-sm font-medium">NOSOTROS</button>
          <button onClick={() => scrollToSection('socios')} className="text-gray-700 hover:text-blue-900 text-sm font-medium">NUESTROS SOCIOS</button>
          <button onClick={() => scrollToSection('especialistas')} className="text-gray-700 hover:text-blue-900 text-sm font-medium">ESPECIALISTAS</button>
          <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-blue-900 text-sm font-medium">CONTACTO</button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-900"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 space-y-3">
            <button onClick={() => scrollToSection('nosotros')} className="block w-full text-left text-gray-700 py-2">NOSOTROS</button>
            <button onClick={() => scrollToSection('socios')} className="block w-full text-left text-gray-700 py-2">NUESTROS SOCIOS</button>
            <button onClick={() => scrollToSection('especialistas')} className="block w-full text-left text-gray-700 py-2">ESPECIALISTAS</button>
            <button onClick={() => scrollToSection('contacto')} className="block w-full text-left text-gray-700 py-2">CONTACTO</button>
          </div>
        </div>
      )}
    </header>
  );
}
