import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Company from './components/Company';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import ExperienceSection from './components/ExperienceSection';
import InvestSection from './components/InvestSection';
import WhySection from './components/WhySection';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <Company />
      <Team />
      <Testimonials />
      <ExperienceSection />
      <InvestSection />
      <WhySection />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
