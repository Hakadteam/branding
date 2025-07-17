import React, { useState, useRef, useEffect } from 'react';
import { TrendingUp, Palette, Search, Share2, ArrowRight, CheckCircle, Star } from 'lucide-react';

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
      title: 'Sales Funnel Development',
      description: 'High-converting sales funnels designed to maximize your ROI and turn prospects into loyal customers.',
      features: ['Landing Page Design', 'Email Automation', 'Conversion Optimization', 'A/B Testing'],
      color: 'blue',
      results: '+250% Average Conversion Rate'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that combines beautiful aesthetics with intuitive functionality for exceptional user experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'green',
      results: '98% User Satisfaction Rate'
    },
    {
      icon: Search,
      title: 'GMB Optimization',
      description: 'Google My Business optimization to improve local search visibility and drive more customers to your business.',
      features: ['Profile Optimization', 'Review Management', 'Local SEO', 'Performance Tracking'],
      color: 'purple',
      results: '+180% Local Visibility'
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Strategic social media management that builds brand awareness, engages your audience, and drives business growth.',
      features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics & Reporting'],
      color: 'orange',
      results: '+300% Engagement Growth'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        border: 'border-blue-200',
        gradient: 'from-blue-600 to-blue-700',
        hover: 'hover:bg-blue-100'
      },
      green: {
        bg: 'bg-green-50',
        text: 'text-green-600',
        border: 'border-green-200',
        gradient: 'from-green-600 to-green-700',
        hover: 'hover:bg-green-100'
      },
      purple: {
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        border: 'border-purple-200',
        gradient: 'from-purple-600 to-purple-700',
        hover: 'hover:bg-purple-100'
      },
      orange: {
        bg: 'bg-orange-50',
        text: 'text-orange-600',
        border: 'border-orange-200',
        gradient: 'from-orange-600 to-orange-700',
        hover: 'hover:bg-orange-100'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Digital Solutions That Drive Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating comprehensive digital strategies that transform businesses and accelerate growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                className={`service-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-100 hover:border-gray-200 transform ${
                  isVisible ? 'translate-y-0 opacity-100 animate-scale-in' : 'translate-y-10 opacity-0'
                } hover:-translate-y-2`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="p-8">
                  <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${colorClasses.text}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className={`h-5 w-5 ${colorClasses.text}`} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className={`${colorClasses.bg} rounded-lg p-4 mb-6`}>
                    <div className="text-sm text-gray-600 mb-1">Average Results:</div>
                    <div className={`text-lg font-bold ${colorClasses.text}`}>{service.results}</div>
                  </div>
                  
                  <button 
                    onClick={scrollToContact}
                    className={`group/btn w-full bg-gradient-to-r ${colorClasses.gradient} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className={`text-center transition-all duration-1000 delay-800 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
                Let's discuss your project and create a customized digital strategy that drives real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={scrollToContact}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Start Your Project
                </button>
                <button 
                  onClick={() => {
                    const element = document.getElementById('projects');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Our Work
                </button>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/20 rounded-full animate-spin"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-white/20 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;