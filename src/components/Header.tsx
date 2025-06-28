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
        ? 'bg-white/98 backdrop-blur-md shadow-xl border-b border-gray-100' 
        : 'bg-white/10 backdrop-blur-sm border-b border-white/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <Logo 
                size="lg"
                className="transition-all duration-300 group-hover:scale-110"
              />
              {/* Enhanced glow effect for better visibility */}
              <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl ${
                isScrolled 
                  ? 'bg-gradient-to-r from-brand-blue-500/20 to-brand-green-500/20' 
                  : 'bg-gradient-to-r from-white/30 to-white/20'
              }`}></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-brand-blue-600' 
                    : 'text-white hover:text-brand-blue-300 drop-shadow-sm'
                } group`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item}</span>
                <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-brand-blue-500 to-brand-green-500' 
                    : 'bg-gradient-to-r from-white to-white'
                }`}></div>
                <div className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-brand-blue-500 to-brand-green-500' 
                    : 'bg-gradient-to-r from-white to-white'
                }`}></div>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'hover:bg-gray-100' 
                : 'hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
              } ${isScrolled ? 'text-gray-900' : 'text-white drop-shadow-sm'}`} />
              <X className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
              } ${isScrolled ? 'text-gray-900' : 'text-white drop-shadow-sm'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/98 backdrop-blur-md border-t border-gray-200 py-4 rounded-b-2xl shadow-lg">
            {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-brand-blue-600 hover:bg-gradient-to-r hover:from-brand-blue-50 hover:to-brand-green-50 transition-all duration-300 transform hover:translate-x-2 font-medium"
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