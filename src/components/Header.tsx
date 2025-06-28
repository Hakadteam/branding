import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/90 backdrop-blur-md shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <Logo 
                size="lg"
                className="transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-500/10 to-brand-green-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative font-medium transition-all duration-300 hover:scale-105 text-gray-700 hover:text-brand-blue-600 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-500 to-brand-green-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue-500 to-brand-green-500 group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-all duration-300 hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
              } text-gray-900`} />
              <X className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
              } text-gray-900`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 py-4 rounded-b-2xl">
            {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-brand-blue-600 hover:bg-gradient-to-r hover:from-brand-blue-50 hover:to-brand-green-50 transition-all duration-300 transform hover:translate-x-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;