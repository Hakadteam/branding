import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Target, Lightbulb, CheckCircle, Star, TrendingUp, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    { number: '5+', label: 'Years Experience', icon: Calendar },
    { number: '150+', label: 'Projects Delivered', icon: TrendingUp },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '50+', label: 'Happy Clients', icon: Users }
  ];

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every project is focused on delivering measurable business outcomes and ROI that matter to your bottom line.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of digital trends to provide cutting-edge solutions that give you a competitive advantage.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with you to understand your unique goals and challenges.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Quality and attention to detail in every aspect of our work, from strategy to execution.'
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'HAKAD Digital Lab was established with a vision to help African businesses thrive online.'
    },
    {
      year: '2020',
      title: 'First Major Success',
      description: 'Helped our first client achieve 300% growth in online sales within 6 months.'
    },
    {
      year: '2021',
      title: 'Team Expansion',
      description: 'Grew our team of specialists and expanded services to include UI/UX design and GMB optimization.'
    },
    {
      year: '2022',
      title: 'Regional Growth',
      description: 'Extended our reach across West Africa, serving clients in Nigeria, Ghana, and beyond.'
    },
    {
      year: '2023',
      title: '100+ Projects',
      description: 'Celebrated completing over 100 successful projects with measurable business impact.'
    },
    {
      year: '2024',
      title: 'Innovation Leader',
      description: 'Recognized as a leading digital marketing agency in the African market.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-green-50/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4" />
              <span>About HAKAD Digital Lab</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Trusted <span className="text-blue-600">Growth Partner</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're a results-driven digital marketing agency specializing in helping African businesses 
              grow their online presence and achieve measurable success.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Founder Bio */}
            <div className={`transition-all duration-1000 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Adebayo Hammed
              </h2>
              
              <div className="relative mb-8">
                <img
                  src="/6026178131397823641.jpg"
                  alt="Adebayo Hammed - Founder of HAKAD Digital Lab"
                  className="w-40 h-40 rounded-2xl object-cover mb-6 shadow-lg border-4 border-white"
                  loading="lazy"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <strong>Adebayo Hammed</strong>, Founder and Lead Digital Strategist at HAKAD Digital Lab, 
                brings over 5 years of proven experience in digital marketing and business growth. His passion 
                for helping businesses succeed online has driven the success of 150+ projects across Nigeria and beyond.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                With deep expertise in sales funnel optimization, UI/UX design, Google Business management, and social 
                media strategy, Adebayo has helped businesses increase their online visibility and revenue by 
                an average of <strong>250%</strong> within 6 months.
              </p>

              <div className="flex items-center space-x-4 mb-8">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-gray-600">Based in Lagos, Nigeria</span>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </Link>
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
                      className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
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
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a leading digital marketing agency in Africa
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-green-600"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-green-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your goals and create a custom strategy that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;