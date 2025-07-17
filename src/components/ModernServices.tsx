import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Palette, Search, Share2, ArrowRight, Sparkles } from 'lucide-react';

const ModernServices = () => {
  const [isInView, setIsInView] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            
            // Stagger card animations
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: TrendingUp,
      title: 'Funnel Development',
      description: 'High-converting sales funnels designed to maximize your ROI and turn prospects into loyal customers.',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that combines beautiful aesthetics with intuitive functionality for exceptional experiences.',
      color: 'green',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Search,
      title: 'GMB Setup & Optimization',
      description: 'Google My Business optimization to improve local search visibility and drive more customers to your business.',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Strategic social media management that builds brand awareness, engages your audience, and drives growth.',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        border: 'border-blue-200',
        hover: 'hover:bg-blue-100'
      },
      green: {
        bg: 'bg-green-50',
        text: 'text-green-600',
        border: 'border-green-200',
        hover: 'hover:bg-green-100'
      },
      purple: {
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        border: 'border-purple-200',
        hover: 'hover:bg-purple-100'
      },
      orange: {
        bg: 'bg-orange-50',
        text: 'text-orange-600',
        border: 'border-orange-200',
        hover: 'hover:bg-orange-100'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-100/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-100/20 rounded-full blur-2xl animate-rotate-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce-slow">
            <Sparkles className="h-4 w-4 animate-spin" />
            <span>Our Core Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            We Build Funnels, Designs &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Growth Systems
            </span>{' '}
            That Convert
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From sales funnels to UI/UX design, GMB optimization, and social media management — 
            we help businesses thrive online with proven strategies that deliver real results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                className={`service-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-100 hover:border-gray-200 transform ${
                  isVisible ? 'translate-y-0 opacity-100 animate-scale-in' : 'translate-y-10 opacity-0'
                } hover:-translate-y-2 hover:rotate-1`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="p-8 text-center">
                  {/* Icon with Gradient Background */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-800 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-green-600"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create a customized digital strategy that drives real results for your business.
              </p>
              
              <button 
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-blue-600 to-green-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 mx-auto animate-pulse-glow"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-sm text-gray-500 mt-4">
                No commitment required • 30-minute strategy session • Get expert advice
              </p>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-6 right-6 w-4 h-4 border-2 border-blue-300 rounded-full animate-spin"></div>
            <div className="absolute bottom-6 left-6 w-3 h-3 border-2 border-green-300 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernServices;