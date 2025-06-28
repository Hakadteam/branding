import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Lightbulb, Target, Sparkles } from 'lucide-react';

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ years: 0, projects: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            
            // Animate stats numbers
            const animateNumber = (target: number, key: 'years' | 'projects') => {
              let current = 0;
              const increment = target / 50;
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(current) }));
              }, 30);
            };

            setTimeout(() => animateNumber(3, 'years'), 500);
            setTimeout(() => animateNumber(100, 'projects'), 700);
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

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of digital trends to deliver cutting-edge solutions.',
      color: 'yellow'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with clients to understand and exceed their goals.',
      color: 'blue'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Quality is at the heart of everything we create and deliver.',
      color: 'green'
    },
    {
      icon: Target,
      title: 'Results',
      description: 'We focus on measurable outcomes that drive business growth.',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      yellow: 'from-yellow-500 to-orange-500',
      blue: 'from-brand-blue-600 to-brand-blue-700',
      green: 'from-brand-green-600 to-brand-green-700',
      purple: 'from-purple-600 to-purple-700'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-brand-blue-100/30 to-brand-green-100/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-purple-100/30 to-pink-100/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce-slow">
              <Sparkles className="h-4 w-4 animate-spin" />
              <span>About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              Crafting Digital Excellence Since Day One
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in">
              At Hakad Digital Lab, we're passionate about transforming businesses through innovative digital solutions. 
              Our team combines creativity with technical expertise to deliver exceptional results.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed animate-fade-in stagger-2">
              We believe that great design isn't just about looking good – it's about creating meaningful experiences 
              that connect brands with their audiences and drive real business outcomes.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gradient-to-r from-brand-blue-50 to-purple-50 rounded-xl hover:scale-105 transition-all duration-300 animate-scale-in stagger-3">
                <div className="text-3xl font-bold text-gray-900 mb-2 animate-pulse-glow">
                  {animatedStats.years}+
                </div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-brand-green-50 rounded-xl hover:scale-105 transition-all duration-300 animate-scale-in stagger-4">
                <div className="text-3xl font-bold text-gray-900 mb-2 animate-pulse-glow">
                  {animatedStats.projects}+
                </div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-500 ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            {values.map((value, index) => {
              const Icon = value.icon;
              const colorClass = getColorClasses(value.color);
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-500 group hover:-translate-y-2 hover:rotate-1 animate-scale-in`}
                  style={{ animationDelay: `${index * 200 + 800}ms` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${colorClass} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-pulse-glow`}>
                    <Icon className="h-6 w-6 text-white group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-blue-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>
                  
                  {/* Animated decorative elements */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-brand-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;