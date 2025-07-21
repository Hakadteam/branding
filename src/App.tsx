import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import FunnelService from './pages/services/FunnelService';
import UIUXService from './pages/services/UIUXService';
import GMBService from './pages/services/GMBService';
import SocialService from './pages/services/SocialService';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/funnel" element={<FunnelService />} />
            <Route path="/services/ui-ux" element={<UIUXService />} />
            <Route path="/services/gmb" element={<GMBService />} />
            <Route path="/services/social" element={<SocialService />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;