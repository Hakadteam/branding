import React, { useState, useRef, useEffect } from 'react';
import { TrendingUp, Palette, Search, Share2, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { useScheduling } from '../hooks/useScheduling';
import SchedulingModal from './SchedulingModal';
import SchedulingButton from './SchedulingButton';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { isModalOpen, buttonType, openScheduling, closeScheduling } = useScheduling();

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
      title: 'Funnel Development',
      description: 'High-converting funnels built to drive leads and sales.',
      color: 'blue',
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Intuitive and visually engaging user experiences.',
      color: 'green',
      gradient: 'from-green-600 to-green-700'
    },
    {
      icon: Search,
      title: 'GMB Optimization',
      description: 'Local visibility through Google Business setup & ranking.',
      color: 'purple',
      gradient: 'from-purple-600 to-purple-700'
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Consistent content and community management.',
      color: 'orange',
      gradient: 'from-orange-600 to-orange-700'
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
    <section ref={sectionRef} id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            <span>Our Core Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built to help your business grow with strategy, design, and digital execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
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
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>
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
              <SchedulingButton
                variant="outline"
                size="lg"
                type="consultation"
                onClick={() => openScheduling('consultation')}
                className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white border-white"
              >
                Book a Free Consultation
              </SchedulingButton>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/20 rounded-full animate-spin"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-white/20 rounded-full animate-ping"></div>
          </div>
        </div>
        
        {/* Scheduling Modal */}
        <SchedulingModal
          isOpen={isModalOpen}
          onClose={closeScheduling}
          buttonType={buttonType}
        />
      </div>
    </section>
  );
};

export default Services;