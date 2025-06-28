import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const animatedTexts = [
    "Transform Your Digital Presence",
    "Create Stunning Websites",
    "Build High-Converting Funnels",
    "Design Beautiful Interfaces"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Text rotation animation
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Enhanced Animated Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40 animate-pulse"></div>
      
      {/* Enhanced Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-brand-blue-600/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-green-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-600/20 rounded-lg blur-lg animate-bounce-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-brand-blue-400/20 rounded-full blur-lg animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-yellow-400/30 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-gradient-to-r from-brand-blue-500/10 to-brand-green-500/10 rounded-full blur-2xl animate-rotate-slow"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-brand-blue-600/20 to-brand-green-500/20 backdrop-blur-sm border border-brand-blue-400/30 rounded-full px-6 py-3 animate-pulse-glow">
              <Sparkles className="h-5 w-5 text-yellow-400 animate-spin" />
              <span className="text-blue-200 text-sm font-medium">Premium Digital Solutions</span>
              <Star className="h-4 w-4 text-yellow-400 fill-current animate-pulse" />
              <Zap className="h-4 w-4 text-yellow-300 animate-bounce" />
            </div>
          </div>
          
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1200 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="block mb-2 animate-slide-in-left">Welcome to</span>
            <span className="block bg-gradient-to-r from-brand-blue-400 via-brand-green-400 to-brand-blue-500 bg-clip-text text-transparent animate-gradient-x">
              {animatedTexts[currentText]}
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1400 delay-400 animate-slide-in-right ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We create stunning websites, intuitive UI/UX designs, and high-converting funnels 
            that drive results for your business.
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1600 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-brand-blue-600 to-brand-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:from-brand-blue-700 hover:to-brand-green-600 hover:scale-105 hover:shadow-2xl flex items-center space-x-2 shadow-xl relative overflow-hidden animate-pulse-glow"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x"></div>
            <span className="relative z-10">Start Your Project</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10 animate-bounce" />
          </button>
          
          <button 
            onClick={scrollToPortfolio}
            className="text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105 hover:shadow-xl backdrop-blur-sm animate-scale-in"
          >
            View Our Work
          </button>
        </div>

        {/* Enhanced Stats with Staggered Animation */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transition-all duration-1800 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { number: '100+', label: 'Projects Completed', color: 'from-brand-blue-400 to-brand-blue-600', delay: 'stagger-1' },
            { number: '50+', label: 'Happy Clients', color: 'from-brand-green-400 to-brand-green-600', delay: 'stagger-2' },
            { number: '3+', label: 'Years Experience', color: 'from-purple-400 to-purple-600', delay: 'stagger-3' },
            { number: '24/7', label: 'Support Available', color: 'from-orange-400 to-orange-600', delay: 'stagger-4' }
          ].map((stat, index) => (
            <div key={index} className={`text-center group animate-scale-in ${stat.delay}`}>
              <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 animate-bounce-slow`}>
                {stat.number}
              </div>
              <div className="text-blue-200 text-sm group-hover:text-white transition-colors duration-300 animate-fade-in">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;