import React, { useState, useRef, useEffect } from 'react';
import { TrendingUp, Palette, Search, Share2, Star, ArrowRight } from 'lucide-react';
import SchedulingButton from './SchedulingButton';
import { useScheduling } from '../hooks/useScheduling';
import SchedulingModal from './SchedulingModal';

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

  const services = [
    {
      icon: TrendingUp,
      title: 'Sales Funnel Development',
      description: 'High-converting funnels that turn visitors into customers. We build automated systems that capture leads and drive sales 24/7.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'blue',
      gradient: 'from-blue-600 to-blue-700',
      features: ['Lead Capture Pages', 'Email Automation', 'Conversion Optimization']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, user-friendly designs that convert. We create websites and apps that your customers love to use and buy from.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'green',
      gradient: 'from-green-600 to-green-700',
      features: ['User Research', 'Wireframing', 'Prototype Testing']
    },
    {
      icon: Search,
      title: 'Google Business Optimization',
      description: 'Get found by local customers searching for your services. We optimize your Google presence to drive more calls and visits.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'purple',
      gradient: 'from-purple-600 to-purple-700',
      features: ['GMB Setup', 'Review Management', 'Local SEO']
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Build a strong online presence that attracts customers. We create content and manage your social media to grow your brand.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'orange',
      gradient: 'from-orange-600 to-orange-700',
      features: ['Content Creation', 'Community Management', 'Analytics Reporting']
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                } hover:-translate-y-2`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <div className={`absolute top-6 left-6 w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <div className="p-8 lg:p-10">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group-hover:bg-blue-50 group-hover:text-blue-600">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
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
                variant="outline"
                size="lg"
                type="consultation"
                onClick={() => openScheduling('consultation')}
                className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white border-white"
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

      {/* Scheduling Modal */}
      <SchedulingModal
        isOpen={isModalOpen}
        onClose={closeScheduling}
        buttonType={buttonType}
      />
    </section>
  );
};

export default Services;