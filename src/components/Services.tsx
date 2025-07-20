import React, { useState, useRef, useEffect } from 'react';
import { TrendingUp, Palette, Search, Share2, Star } from 'lucide-react';
import SchedulingButton from './SchedulingButton';

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

  const services = [
    {
      icon: TrendingUp,
      title: 'Sales Funnel Development',
      description: 'High-converting funnels that turn visitors into customers. We build automated systems that capture leads and drive sales 24/7.',
      color: 'blue',
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, user-friendly designs that convert. We create websites and apps that your customers love to use and buy from.',
      color: 'green',
      gradient: 'from-green-600 to-green-700'
    },
    {
      icon: Search,
      title: 'Google Business Optimization',
      description: 'Get found by local customers searching for your services. We optimize your Google presence to drive more calls and visits.',
      color: 'purple',
      gradient: 'from-purple-600 to-purple-700'
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Build a strong online presence that attracts customers. We create content and manage your social media to grow your brand.',
      color: 'orange',
      gradient: 'from-orange-600 to-orange-700'
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Star className="h-4 w-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            How We Help You <span className="text-blue-600">Grow</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We provide complete digital solutions that increase your visibility, automate your processes, and improve customer experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                className={`service-card group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-100 hover:border-gray-200 transform ${
                  isVisible ? 'translate-y-0 opacity-100 animate-scale-in' : 'translate-y-10 opacity-0'
                } hover:-translate-y-2 p-8 lg:p-10`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className={`text-center transition-all duration-1000 delay-800 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-10 lg:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Grow Your Business?</h3>
              <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg lg:text-xl leading-relaxed">
                Let's discuss your goals and create a custom strategy that drives real results for your business.
              </p>
              <SchedulingButton 
                variant="secondary"
                size="large"
                className="mx-auto"
              >
                Book Free Consultation
              </SchedulingButton>
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