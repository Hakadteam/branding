import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechFlow Solutions',
      content: 'Working with Adebayo and HAKAD Digital Lab was a game-changer for our business. The sales funnel they created increased our conversion rate by 280% and generated over $500K in additional revenue within just 3 months. Their attention to detail and strategic approach is unmatched.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      results: '+280% Conversion Rate'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CEO',
      company: 'DataSync Pro',
      content: 'The UI/UX redesign of our dashboard was absolutely phenomenal. User satisfaction increased to 4.9/5 and our support tickets decreased by 50%. Adebayo truly understands how to create user-centered designs that drive business results.',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      results: '4.9/5 User Satisfaction'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Restaurant Owner',
      company: 'Bella Vista Restaurants',
      content: 'Our GMB optimization with HAKAD Digital Lab transformed our local presence. We saw a 220% increase in local visibility and our customer calls increased by 150%. The ROI has been incredible and our restaurants are busier than ever.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      results: '+220% Local Visibility'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Founder',
      company: 'FitLife Coaching',
      content: 'The social media strategy developed by Adebayo exceeded all our expectations. Our engagement rate increased by 350% and we gained 180% more followers. Most importantly, our lead generation increased by 200%. Highly recommend HAKAD Digital Lab!',
      avatar: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      results: '+350% Engagement Rate'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Business Development Manager',
      company: 'Consulting Plus',
      content: 'The B2B lead generation funnel created by HAKAD Digital Lab revolutionized our sales process. Lead quality improved by 190% and our conversion rate increased by 160%. Our sales cycle is now 40% shorter. Outstanding work!',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      results: '+190% Lead Quality'
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with HAKAD Digital Lab.
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
                className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg pointer-events-auto"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg pointer-events-auto"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
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
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's create your success story together. Get started with a free consultation and discover how we can transform your business.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;