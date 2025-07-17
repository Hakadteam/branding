import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Star, Zap, TrendingUp } from 'lucide-react';

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

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-green-50/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-600/5 rounded-lg blur-lg animate-bounce-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-green-600/10 rounded-full blur-lg animate-ping"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce-slow">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span>Professional Digital Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block mb-2">Transform Your</span>
              <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 bg-clip-text text-transparent">
                Digital Presence
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              HAKAD Digital Lab specializes in creating high-converting sales funnels, stunning UI/UX designs, 
              GMB optimization, and strategic social media management that drives real business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={scrollToServices}
                className="group text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>View Our Services</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {[
                { number: '150+', label: 'Projects Completed', icon: TrendingUp },
                { number: '98%', label: 'Client Satisfaction', icon: Star },
                { number: '24/7', label: 'Support Available', icon: Zap }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="flex items-center justify-center mb-2">
                      <Icon className="h-5 w-5 text-blue-600 mr-2 group-hover:scale-110 transition-transform" />
                      <div className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {stat.number}
                      </div>
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
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
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">HAKAD Digital Lab</h3>
                        <p className="text-gray-600 text-sm">Digital Excellence</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="h-3 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full"></div>
                      <div className="h-3 bg-gradient-to-r from-green-200 to-green-300 rounded-full w-4/5"></div>
                      <div className="h-3 bg-gradient-to-r from-blue-200 to-green-200 rounded-full w-3/5"></div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4">
                      <span className="text-2xl font-bold text-green-600">+250%</span>
                      <span className="text-gray-600 text-sm">Growth Rate</span>
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