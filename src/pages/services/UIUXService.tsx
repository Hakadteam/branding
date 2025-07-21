import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Palette, CheckCircle, Star, Users, Smartphone, Monitor, Tablet, Eye, Heart, Zap } from 'lucide-react';

const UIUXService = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: Users,
      title: 'User Research',
      description: 'In-depth analysis of your target audience to understand their needs, behaviors, and pain points.'
    },
    {
      icon: Eye,
      title: 'Wireframing & Prototyping',
      description: 'Interactive prototypes that allow you to test and refine the user experience before development.'
    },
    {
      icon: Palette,
      title: 'Visual Design',
      description: 'Beautiful, modern designs that reflect your brand and create emotional connections with users.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Designs that work perfectly across all devices - desktop, tablet, and mobile.'
    },
    {
      icon: Heart,
      title: 'User Experience Optimization',
      description: 'Continuous improvement of user flows to maximize engagement and conversions.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Fast-loading designs optimized for performance and search engine rankings.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Research',
      description: 'We research your users, competitors, and industry to understand the design requirements.',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Wireframing & Architecture',
      description: 'Create the structural blueprint of your application with user flow optimization.',
      duration: '1-2 weeks'
    },
    {
      step: '03',
      title: 'Visual Design',
      description: 'Design beautiful, modern interfaces that align with your brand and user expectations.',
      duration: '2-3 weeks'
    },
    {
      step: '04',
      title: 'Prototyping & Testing',
      description: 'Build interactive prototypes and conduct user testing to validate the design.',
      duration: '1-2 weeks'
    },
    {
      step: '05',
      title: 'Development Handoff',
      description: 'Provide detailed specifications and assets for seamless development implementation.',
      duration: '1 week'
    }
  ];

  const caseStudies = [
    {
      client: 'Accra Tech Solutions',
      industry: 'Fintech',
      challenge: 'Complex fintech app with poor user experience and high churn rate',
      solution: 'Complete UI/UX redesign with simplified workflows and intuitive navigation',
      results: [
        '+280% increase in user retention',
        '+450% growth in app downloads',
        '65% reduction in support tickets',
        '4.6/5 user satisfaction rating'
      ],
      image: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      client: 'Lagos E-commerce Platform',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor mobile experience',
      solution: 'Mobile-first redesign with streamlined checkout and improved product discovery',
      results: [
        '+180% increase in mobile conversions',
        '+95% improvement in checkout completion',
        '+220% growth in mobile traffic',
        '40% reduction in cart abandonment'
      ],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const designPrinciples = [
    {
      title: 'User-Centered Design',
      description: 'Every design decision is based on user needs and behaviors, not assumptions.',
      icon: Users
    },
    {
      title: 'Simplicity & Clarity',
      description: 'Clean, intuitive interfaces that make complex tasks feel simple and effortless.',
      icon: Eye
    },
    {
      title: 'Consistency',
      description: 'Consistent design patterns and interactions throughout the entire user journey.',
      icon: Zap
    },
    {
      title: 'Accessibility',
      description: 'Inclusive designs that work for users of all abilities and technical skill levels.',
      icon: Heart
    }
  ];

  const pricing = [
    {
      name: 'UI/UX Audit',
      price: '₦300,000',
      description: 'Comprehensive analysis of your current design with actionable recommendations',
      features: [
        'Heuristic evaluation',
        'User journey analysis',
        'Competitor benchmarking',
        'Detailed report with recommendations',
        '2-hour consultation call'
      ],
      popular: false
    },
    {
      name: 'Complete Redesign',
      price: '₦1,500,000',
      description: 'Full UI/UX redesign for web or mobile applications',
      features: [
        'User research & personas',
        'Wireframing & prototyping',
        'Visual design system',
        'Responsive design',
        'Developer handoff',
        '3 months support'
      ],
      popular: true
    },
    {
      name: 'Design System',
      price: '₦2,500,000',
      description: 'Comprehensive design system for large-scale applications',
      features: [
        'Complete design system',
        'Component library',
        'Brand guidelines',
        'Documentation',
        'Team training',
        '6 months support'
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Palette className="h-4 w-4" />
                <span>UI/UX Design</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Design That <span className="text-yellow-400">Converts</span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Create beautiful, user-friendly designs that your customers love to use and buy from. 
                Our UI/UX designs have increased user engagement by up to 280% for our clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition-colors shadow-lg"
                >
                  Start Your Design
                </Link>
                <button
                  onClick={() => setActiveTab('case-studies')}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="UI/UX Design"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-purple-600">+280%</div>
                <div className="text-gray-600 text-sm">User Engagement Increase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'features', label: 'Features' },
              { id: 'process', label: 'Process' },
              { id: 'case-studies', label: 'Case Studies' },
              { id: 'pricing', label: 'Pricing' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap py-2 px-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="py-20">
        {/* Overview */}
        {activeTab === 'overview' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Great Design Matters
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  In today's digital world, users make judgments about your business within seconds of visiting 
                  your website or app. Great UI/UX design doesn't just look good - it drives business results 
                  by creating experiences that users love and trust.
                </p>
                <div className="space-y-4">
                  {[
                    'Increase user engagement and retention',
                    'Improve conversion rates and sales',
                    'Reduce support costs and complaints',
                    'Build trust and brand credibility',
                    'Create competitive advantage'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="UI/UX Design Process"
                  className="rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Design Principles */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Design Principles</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {designPrinciples.map((principle, index) => {
                  const Icon = principle.icon;
                  return (
                    <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">{principle.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-purple-50 rounded-2xl">
                <div className="text-4xl font-bold text-purple-600 mb-2">280%</div>
                <div className="text-gray-600">Average Engagement Increase</div>
              </div>
              <div className="text-center p-8 bg-pink-50 rounded-2xl">
                <div className="text-4xl font-bold text-pink-600 mb-2">95%</div>
                <div className="text-gray-600">Client Satisfaction Rate</div>
              </div>
              <div className="text-center p-8 bg-blue-50 rounded-2xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">4.8/5</div>
                <div className="text-gray-600">Average User Rating</div>
              </div>
            </div>
          </section>
        )}

        {/* Features */}
        {activeTab === 'features' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Design Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From research to final implementation, we cover every aspect of UI/UX design
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Device Showcase */}
            <div className="mt-20 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Responsive Across All Devices</h3>
              <div className="flex justify-center items-end space-x-8">
                <div className="text-center">
                  <Monitor className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                  <div className="text-lg font-semibold text-gray-900">Desktop</div>
                  <div className="text-gray-600">Full Experience</div>
                </div>
                <div className="text-center">
                  <Tablet className="h-14 w-14 text-purple-600 mx-auto mb-4" />
                  <div className="text-lg font-semibold text-gray-900">Tablet</div>
                  <div className="text-gray-600">Optimized Layout</div>
                </div>
                <div className="text-center">
                  <Smartphone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-lg font-semibold text-gray-900">Mobile</div>
                  <div className="text-gray-600">Touch-Friendly</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Process */}
        {activeTab === 'process' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Design Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures exceptional user experiences and business results
              </p>
            </div>

            <div className="space-y-12">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Case Studies */}
        {activeTab === 'case-studies' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Design Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our UI/UX designs have transformed businesses and improved user experiences
              </p>
            </div>

            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <img
                      src={study.image}
                      alt={study.client}
                      className="rounded-2xl shadow-lg"
                      loading="lazy"
                    />
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      <span>{study.industry}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{study.client}</h3>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 mb-4">{study.challenge}</p>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 mb-4">{study.solution}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Results:</h4>
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                          <span className="text-green-600 font-semibold">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Pricing */}
        {activeTab === 'pricing' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Design Investment Options</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect design package for your project needs and budget
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative p-8 rounded-2xl ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white' 
                    : 'bg-white border-2 border-gray-200'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-yellow-400 text-purple-900 px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h3>
                    <div className={`text-4xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-purple-600'}`}>
                      {plan.price}
                    </div>
                    <p className={plan.popular ? 'text-purple-100' : 'text-gray-600'}>
                      {plan.description}
                    </p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className={`h-5 w-5 ${plan.popular ? 'text-yellow-400' : 'text-green-600'}`} />
                        <span className={plan.popular ? 'text-white' : 'text-gray-700'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-center transition-colors block ${
                      plan.popular
                        ? 'bg-white text-purple-600 hover:bg-gray-100'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your User Experience?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Let's create beautiful, user-friendly designs that your customers will love and that drive real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Your Design Project
            </Link>
            <Link
              to="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Design Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UIUXService;