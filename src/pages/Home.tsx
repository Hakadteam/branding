import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import CaseStudies from '../components/CaseStudies';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <CaseStudies />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;