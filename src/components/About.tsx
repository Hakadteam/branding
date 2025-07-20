import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Target, Lightbulb, CheckCircle, Star } from 'lucide-react';

const About = () => {
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

  const achievements = [
    { number: '5+', label: 'Years Experience' },
    { number: '150+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Happy Clients' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every project is focused on delivering measurable business outcomes and ROI.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of digital trends to provide cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely to understand your goals.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Quality and attention to detail in every aspect of our work.'
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Founder Bio */}
          <div className={`transition-all duration-1000 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4" />
              <span>About Our Founder</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Your Growth Partner
            </h2>
            
            <div className="relative mb-8">
              <img
                src="/6026178131397823641.jpg"
                alt="Adebayo Hammed - Founder of HAKAD Digital Lab"
                className="w-32 h-32 rounded-2xl object-cover mb-6 shadow-lg border-4 border-white"
                loading="lazy"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
            </div>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              <strong>Adebayo Hammed</strong>, Founder and Lead Digital Strategist at HAKAD Digital Lab, brings over 5 years 
              of proven experience in digital marketing and business growth. His passion for helping businesses 
              succeed online has driven the success of 150+ projects across Nigeria and beyond.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              With deep expertise in sales funnel optimization, UI/UX design, Google Business management, and social 
              media strategy, Adebayo has helped businesses increase their online visibility and revenue by 
              an average of <strong>250%</strong> within 6 months.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                  <div className="text-gray-600 text-sm">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Values */}
          <div className={`transition-all duration-1000 delay-300 ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Core Values</h3>
            
            <div className="space-y-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-2">Ready to Grow Your Business?</h4>
              <p className="mb-4 opacity-90">
                Let's discuss how we can help you achieve your business goals and drive real growth online.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;