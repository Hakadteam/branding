import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useScheduling } from '../hooks/useScheduling';
import SchedulingModal from './SchedulingModal';
import SchedulingButton from './SchedulingButton';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { isModalOpen, buttonType, openScheduling, closeScheduling } = useScheduling();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
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

  const testimonials = [
    {
      id: 1,
      name: 'Chioma Okafor',
      role: 'CEO',
      company: 'Lagos Fashion House',
      content: 'HAKAD Digital Lab transformed our online presence completely. As a Nigerian fashion brand, we struggled with international visibility. Adebayo created a sales funnel that increased our international orders by 320% and our Instagram following grew from 5K to 45K in 4 months. The GMB optimization brought us local customers we never reached before.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      results: '+320% International Sales'
    },
    {
      id: 2,
      name: 'Kwame Asante',
      role: 'Founder',
      company: 'Accra Tech Solutions',
      content: 'Working with HAKAD Digital Lab from Ghana was seamless. The UI/UX redesign of our fintech app increased user retention by 280% and reduced customer complaints by 65%. Adebayo understood our African market needs and created designs that resonated with our users. Our app downloads increased by 450% after the redesign.',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      results: '+280% User Retention'
    },
    {
      id: 3,
      name: 'Amara Okonkwo',
      role: 'Managing Director',
      company: 'Abuja Real Estate Group',
      content: 'The Google Business optimization and social media strategy HAKAD Digital Lab implemented for our real estate company was exceptional. Our local search visibility increased by 340%, property inquiries grew by 250%, and we closed 60% more deals. Adebayo truly understands the Nigerian market and what drives results here.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      results: '+340% Local Visibility'
    },
    {
      id: 4,
      name: 'Sarah Mitchell',
      role: 'Marketing Director',
      company: 'Cape Town Digital Agency',
      content: 'As a fellow agency in South Africa, we partnered with HAKAD Digital Lab for our own rebranding. The results were outstanding - our client acquisition increased by 290%, our website conversions improved by 180%, and our social media engagement grew by 400%. Adebayo delivers world-class work that competes globally.',
      avatar: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      results: '+290% Client Acquisition'
    },
    {
      id: 5,
      name: 'Olumide Adebayo',
      role: 'CEO',
      company: 'Port Harcourt Oil Services',
      content: 'HAKAD Digital Lab helped us transition from traditional marketing to digital. The sales funnel and LinkedIn strategy they created generated over ₦50M in new contracts within 6 months. Our B2B lead quality improved by 380%, and we now have clients across West Africa. Exceptional ROI and professional service.',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      results: '₦50M+ New Contracts'
    },
    {
      id: 6,
      name: 'Fatima Al-Hassan',
      role: 'Founder',
      company: 'Kano E-commerce Hub',
      content: 'Working with HAKAD Digital Lab was transformative for our e-commerce platform. They created a complete digital strategy that increased our online sales by 420% and expanded our reach to 12 African countries. The social media campaigns brought us over 100K new customers. Truly exceptional work that understands the African market.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      results: '+420% Online Sales'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4 fill-current" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Clients Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results. Happy clients.
          </p>
        </div>

        <div className={`relative transition-all duration-1000 delay-300 ${isInView ? 'animate-scale-in' : 'opacity-0'}`}>
          {/* Main Testimonial Display */}
          <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="absolute top-6 left-6 text-blue-200">
              <Quote className="h-12 w-12" />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Avatar and Info */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full object-cover mx-auto md:mx-0 mb-4 shadow-lg"
                  />
                  <h4 className="text-lg font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  <p className="text-blue-600 font-medium">{testimonials[currentIndex].company}</p>
                  
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start space-x-1 mt-2">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1">
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  
                  <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    <Star className="h-4 w-4 fill-current" />
                    <span>Result: {testimonials[currentIndex].results}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <button
                onClick={prevTestimonial}
                className="bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-lg transition-all pointer-events-auto"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-lg transition-all pointer-events-auto"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Let's create your success story together. Get started with a free consultation and discover how we can transform your business.
              </p>
              <SchedulingButton
                variant="outline"
                size="lg"
                type="consultation"
                onClick={() => openScheduling('consultation')}
                className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white border-white"
              >
                Get Your Free Consultation
              </SchedulingButton>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <div className="hidden md:flex justify-center space-x-4 mt-8">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setCurrentIndex(index)}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-100 border-2 border-blue-300'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="text-sm font-medium text-gray-900">{testimonial.name}</div>
                  <div className="text-xs text-gray-600">{testimonial.company}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Be Our Next Success Story?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's create your success story together. Get started with a free consultation and discover how we can grow your business.
            </p>
            <SchedulingButton 
              variant="secondary"
              size="large"
              className="mx-auto"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Started Today
            </SchedulingButton>
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

export default Testimonials;