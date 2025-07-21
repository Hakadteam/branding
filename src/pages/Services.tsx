import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Palette, Search, Share2, Star, ArrowRight, CheckCircle, Users, Target, Zap } from 'lucide-react';

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
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'blue',
      gradient: 'from-blue-600 to-blue-700',
      features: ['Lead Capture Pages', 'Email Automation', 'Conversion Optimization', 'A/B Testing', 'Analytics & Reporting'],
      link: '/services/funnel',
      results: 'Average 180% increase in conversions'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, user-friendly designs that convert. We create websites and apps that your customers love to use and buy from.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'green',
      gradient: 'from-green-600 to-green-700',
      features: ['User Research', 'Wireframing', 'Prototype Testing', 'Responsive Design', 'Brand Integration'],
      link: '/services/ui-ux',
      results: 'Average 250% improvement in user engagement'
    },
    {
      icon: Search,
      title: 'Google Business Optimization',
      description: 'Get found by local customers searching for your services. We optimize your Google presence to drive more calls and visits.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'purple',
      gradient: 'from-purple-600 to-purple-700',
      features: ['GMB Setup', 'Review Management', 'Local SEO', 'Google Ads', 'Performance Tracking'],
      link: '/services/gmb',
      results: 'Average 340% increase in local visibility'
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Build a strong online presence that attracts customers. We create content and manage your social media to grow your brand.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'orange',
      gradient: 'from-orange-600 to-orange-700',
      features: ['Content Creation', 'Community Management', 'Analytics Reporting', 'Paid Advertising', 'Influencer Outreach'],
      link: '/services/social',
      results: 'Average 400% growth in engagement'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business, competitors, and target audience to create a custom strategy.',
      icon: Target
    },
    {
      step: '02',
      title: 'Design & Development',
      description: 'Our team creates and implements solutions tailored to your specific needs and goals.',
      icon: Zap
    },
    {
      step: '03',
      title: 'Launch & Optimize',
      description: 'We launch your project and continuously optimize for better performance and results.',
      icon: TrendingUp
    },
    {
      step: '04',
      title: 'Monitor & Scale',
      description: 'We track performance and scale successful strategies to maximize your ROI.',
      icon: Users
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-green-50/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Star className="h-4 w-4" />
              <span>Our Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              How We Help You <span className="text-blue-600">Grow</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We provide complete digital solutions that increase your visibility, automate your processes, 
              and improve customer experience to drive real business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

                    {/* Results Badge */}
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                      {service.results}
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
                    <div className="space-y-2 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <Link
                      to={service.link}
                      className={`w-full bg-gradient-to-r ${service.gradient} text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 shadow-lg hover:shadow-xl`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers consistent results for our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-sm font-bold text-blue-600">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
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
              to="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;