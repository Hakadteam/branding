import React, { useEffect, useState } from 'react';
import { ArrowRight, MessageCircle, Star, Zap, TrendingUp, Users } from 'lucide-react';
import SchedulingButton from './SchedulingButton';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I\'m interested in growing my business online. Can we discuss how HAKAD Digital Lab can help?');
    window.open(`https://wa.me/2348161673433?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-green-50/20 overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-600/5 rounded-lg blur-lg animate-bounce-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-green-600/10 rounded-full blur-lg animate-ping"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-bounce-slow">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span>Trusted by 150+ Growing Businesses</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="block mb-3">Grow Your</span>
              <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 bg-clip-text text-transparent">
                Business Online
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed font-medium">
              We help brands grow online using <strong>visibility</strong>, <strong>automation</strong>, and <strong>customer experience</strong> systems that drive real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <SchedulingButton 
                variant="primary"
                size="large"
                className="flex-1 sm:flex-none"
              >
                Get Started Today
              </SchedulingButton>
              
              <button 
                onClick={handleWhatsAppClick}
                className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3 shadow-lg min-h-[56px]"
              >
                <MessageCircle className="h-6 w-6" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8">
              {[
                { number: '150+', label: 'Projects Delivered', icon: TrendingUp },
                { number: '98%', label: 'Client Satisfaction', icon: Star },
                { number: '50+', label: 'Happy Clients', icon: Users }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-blue-600 mr-2 group-hover:scale-110 transition-transform" />
                      <div className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {stat.number}
                      </div>
                    </div>
                    <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Main Visual Container */}
              <div className="relative bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                        <Zap className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">HAKAD Digital Lab</h3>
                        <p className="text-gray-600">Growth Partner</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="h-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full"></div>
                      <div className="h-4 bg-gradient-to-r from-green-200 to-green-300 rounded-full w-4/5"></div>
                      <div className="h-4 bg-gradient-to-r from-blue-200 to-green-200 rounded-full w-3/5"></div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4">
                      <span className="text-3xl font-bold text-green-600">+250%</span>
                      <span className="text-gray-600 font-medium">Average Growth</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Star className="h-8 w-8 text-white fill-current" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;