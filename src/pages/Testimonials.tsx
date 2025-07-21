import React from 'react';
import TestimonialsComponent from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { Star, Quote, Users, Award, TrendingUp, Heart } from 'lucide-react';

const Testimonials = () => {
  const stats = [
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '250%', label: 'Average Growth', icon: TrendingUp },
    { number: '5.0', label: 'Average Rating', icon: Award }
  ];

  const highlights = [
    {
      metric: '+320%',
      description: 'International Sales Growth',
      client: 'Lagos Fashion House'
    },
    {
      metric: '+340%',
      description: 'Local Visibility Increase',
      client: 'Abuja Real Estate Group'
    },
    {
      metric: '₦50M+',
      description: 'New Contracts Generated',
      client: 'Port Harcourt Oil Services'
    },
    {
      metric: '+420%',
      description: 'Online Sales Growth',
      client: 'Kano E-commerce Hub'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-green-50/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Quote className="h-4 w-4" />
              <span>Client Success Stories</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              What Our <span className="text-blue-600">Clients Say</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Real testimonials from real businesses that have achieved remarkable growth 
              with our digital marketing solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Client Success Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results that speak for themselves
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-blue-600 mb-2">{highlight.metric}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{highlight.description}</div>
                <div className="text-gray-600 text-sm">{highlight.client}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Component */}
      <TestimonialsComponent />

      {/* Trust Indicators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Clients Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The reasons behind our 98% client satisfaction rate
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Every project is backed by data and focused on delivering measurable business outcomes that matter to your bottom line.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Attention</h3>
              <p className="text-gray-600 leading-relaxed">
                We work closely with each client to understand their unique challenges and create customized solutions that fit their needs.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Long-term Partnership</h3>
              <p className="text-gray-600 leading-relaxed">
                We don't just complete projects - we build lasting relationships and continue supporting your growth journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's create your success story together. Get started with a free consultation and discover how we can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Your Free Consultation
            </Link>
            <Link
              to="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;