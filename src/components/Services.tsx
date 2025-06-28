import React, { useState, useRef, useEffect } from 'react';
import { Monitor, Palette, TrendingUp, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 300);
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

  const services = [
    {
      icon: Monitor,
      title: 'Website Design & Development',
      description: 'Custom, responsive websites built with modern technologies. From concept to launch, we create digital experiences that engage and convert.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'CMS Integration'],
      color: 'blue'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that combines beautiful aesthetics with intuitive functionality. We craft interfaces that users love to interact with.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'green'
    },
    {
      icon: TrendingUp,
      title: 'Funnel Development',
      description: 'High-converting sales funnels designed to maximize your ROI. We optimize every step of the customer journey for better results.',
      features: ['Conversion Optimization', 'A/B Testing', 'Analytics Setup', 'Lead Generation'],
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-brand-blue-50',
        text: 'text-brand-blue-600',
        border: 'border-brand-blue-200',
        gradient: 'from-brand-blue-600 to-brand-blue-700'
      },
      green: {
        bg: 'bg-brand-green-50',
        text: 'text-brand-green-600',
        border: 'border-brand-green-200',
        gradient: 'from-brand-green-600 to-brand-green-700'
      },
      purple: {
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        border: 'border-purple-200',
        gradient: 'from-purple-600 to-purple-700'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-gradient-to-br from-gray-50 to-brand-blue-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand-green-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-blue-100 to-brand-green-100 text-brand-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-bounce-slow">
            <Sparkles className="h-4 w-4 animate-spin" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-in-left">
            What We Do Best
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-right">
            We specialize in creating digital solutions that drive growth and success for businesses of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                className={`service-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-100 hover:border-gray-200 transform ${
                  isVisible ? 'translate-y-0 opacity-100 animate-scale-in' : 'translate-y-10 opacity-0'
                } hover:-translate-y-4 hover:rotate-1`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="p-8 relative overflow-hidden">
                  {/* Animated Background Gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-blue-50 to-brand-green-50 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 group-hover:rotate-180 transition-all duration-1000"></div>
                  
                  {/* Floating Particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-brand-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-brand-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" style={{ animationDelay: '0.5s' }}></div>
                  
                  <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative z-10 animate-pulse-glow`}>
                    <Icon className={`h-8 w-8 ${colorClasses.text} group-hover:animate-bounce`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10 group-hover:text-brand-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed relative z-10 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8 relative z-10">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 group/item">
                        <CheckCircle className={`h-5 w-5 ${colorClasses.text} group-hover/item:scale-110 group-hover/item:animate-spin transition-all duration-300`} />
                        <span className="text-gray-700 group-hover/item:text-gray-900 group-hover/item:font-medium transition-all duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`group/btn flex items-center space-x-2 ${colorClasses.text} font-semibold hover:underline relative z-10 transition-all duration-300 hover:scale-105 hover:animate-pulse`}>
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-2 group-hover/btn:animate-bounce transition-all duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-brand-blue-600 to-brand-green-500 rounded-2xl p-8 text-white relative overflow-hidden animate-gradient-x">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-600/90 to-brand-green-500/90"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white/20 rounded-full animate-spin"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-white/20 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/10 rounded-full animate-pulse"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 animate-slide-in-left">Ready to Transform Your Business?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto animate-slide-in-right">
                Let's discuss your project and create something amazing together. Our team is ready to bring your vision to life.
              </p>
              <button className="bg-white text-brand-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg animate-bounce-slow hover:animate-pulse">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;