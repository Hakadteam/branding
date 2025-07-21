import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, CheckCircle, Star, MapPin, Phone, Clock, Camera, MessageSquare, BarChart3, Users } from 'lucide-react';

const GMBService = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: MapPin,
      title: 'Complete GMB Setup',
      description: 'Professional setup and optimization of your Google My Business profile with all essential information.'
    },
    {
      icon: Camera,
      title: 'Professional Photos',
      description: 'High-quality business photos that showcase your location, products, and services effectively.'
    },
    {
      icon: MessageSquare,
      title: 'Review Management',
      description: 'Proactive review monitoring, response management, and strategies to increase positive reviews.'
    },
    {
      icon: BarChart3,
      title: 'Local SEO Optimization',
      description: 'Advanced local SEO techniques to improve your visibility in local search results.'
    },
    {
      icon: Users,
      title: 'Customer Insights',
      description: 'Detailed analytics and insights about your customers and their search behaviors.'
    },
    {
      icon: Phone,
      title: 'Call Tracking',
      description: 'Track and analyze phone calls generated from your Google My Business listing.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Business Analysis',
      description: 'We analyze your business, competitors, and local market to develop an optimization strategy.',
      duration: '1 week'
    },
    {
      step: '02',
      title: 'Profile Setup & Optimization',
      description: 'Complete setup and optimization of your GMB profile with all relevant business information.',
      duration: '1 week'
    },
    {
      step: '03',
      title: 'Content & Photos',
      description: 'Add high-quality photos, posts, and content to make your listing stand out.',
      duration: '1 week'
    },
    {
      step: '04',
      title: 'Review Strategy',
      description: 'Implement review generation and management strategies to build trust and credibility.',
      duration: '2 weeks'
    },
    {
      step: '05',
      title: 'Monitor & Optimize',
      description: 'Ongoing monitoring, reporting, and optimization to maintain and improve performance.',
      duration: 'Ongoing'
    }
  ];

  const caseStudies = [
    {
      client: 'Abuja Real Estate Group',
      industry: 'Real Estate',
      challenge: 'Invisible in local searches with minimal online inquiries',
      solution: 'Complete GMB optimization with professional photos and review management',
      results: [
        '+340% increase in local search visibility',
        '+250% more property inquiries',
        '60% increase in closed deals',
        'Ranking #1 for 15+ local real estate terms'
      ],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      client: 'Lagos Restaurant Chain',
      industry: 'Food & Beverage',
      challenge: 'Multiple locations with inconsistent online presence',
      solution: 'Multi-location GMB management with unified branding and local optimization',
      results: [
        '+280% increase in foot traffic',
        '+190% growth in online orders',
        '4.8/5 average rating across all locations',
        '+150% increase in weekend reservations'
      ],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const gmBenefits = [
    {
      title: 'Increased Visibility',
      description: 'Appear in local search results and Google Maps when customers search for your services.',
      stat: '+340%',
      statLabel: 'Average visibility increase'
    },
    {
      title: 'More Phone Calls',
      description: 'Make it easy for customers to contact you directly from search results.',
      stat: '+250%',
      statLabel: 'Increase in phone inquiries'
    },
    {
      title: 'Higher Foot Traffic',
      description: 'Drive more customers to your physical location with accurate directions and hours.',
      stat: '+180%',
      statLabel: 'Growth in store visits'
    },
    {
      title: 'Better Reviews',
      description: 'Build trust and credibility with positive customer reviews and professional responses.',
      stat: '4.8/5',
      statLabel: 'Average client rating'
    }
  ];

  const pricing = [
    {
      name: 'GMB Setup',
      price: '₦200,000',
      description: 'One-time setup and optimization of your Google My Business profile',
      features: [
        'Complete profile setup',
        'Business information optimization',
        'Photo upload (up to 20 photos)',
        'Initial posts creation',
        'Basic review setup',
        '30 days support'
      ],
      popular: false
    },
    {
      name: 'GMB Management',
      price: '₦150,000/month',
      description: 'Ongoing management and optimization of your GMB profile',
      features: [
        'Monthly profile updates',
        'Weekly posts creation',
        'Review monitoring & responses',
        'Photo management',
        'Performance reporting',
        'Customer Q&A management'
      ],
      popular: true
    },
    {
      name: 'Multi-Location',
      price: 'Custom',
      description: 'Comprehensive GMB management for businesses with multiple locations',
      features: [
        'All locations setup',
        'Centralized management',
        'Location-specific optimization',
        'Bulk photo uploads',
        'Advanced reporting',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Search className="h-4 w-4" />
                <span>Google My Business Optimization</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Get Found by <span className="text-yellow-400">Local Customers</span>
              </h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Optimize your Google My Business profile to dominate local search results and drive more 
                customers to your business. Our GMB optimization has increased local visibility by up to 340%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-yellow-400 text-orange-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition-colors shadow-lg"
                >
                  Optimize My Business
                </Link>
                <button
                  onClick={() => setActiveTab('case-studies')}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-colors"
                >
                  View Success Stories
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Google My Business Optimization"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-orange-600">+340%</div>
                <div className="text-gray-600 text-sm">Local Visibility Increase</div>
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
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-600 hover:text-orange-600'
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
                  Why Google My Business Matters
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Google My Business is your digital storefront on the world's largest search engine. 
                  When optimized correctly, it can be your most powerful tool for attracting local customers 
                  and growing your business.
                </p>
                <div className="space-y-4">
                  {[
                    'Appear in local search results and Google Maps',
                    'Display business hours, contact info, and directions',
                    'Showcase photos and customer reviews',
                    'Enable direct customer communication',
                    'Track customer actions and insights'
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
                  src="https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Local Business Search"
                  className="rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {gmBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{benefit.stat}</div>
                  <div className="text-sm text-gray-500 mb-4">{benefit.statLabel}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-orange-50 rounded-2xl">
                <div className="text-4xl font-bold text-orange-600 mb-2">340%</div>
                <div className="text-gray-600">Average Visibility Increase</div>
              </div>
              <div className="text-center p-8 bg-red-50 rounded-2xl">
                <div className="text-4xl font-bold text-red-600 mb-2">250%</div>
                <div className="text-gray-600">More Customer Inquiries</div>
              </div>
              <div className="text-center p-8 bg-yellow-50 rounded-2xl">
                <div className="text-4xl font-bold text-yellow-600 mb-2">4.8/5</div>
                <div className="text-gray-600">Average Client Rating</div>
              </div>
            </div>
          </section>
        )}

        {/* Features */}
        {activeTab === 'features' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete GMB Optimization</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to dominate local search results and attract more customers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            {/* GMB Features Showcase */}
            <div className="mt-20 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">What We Optimize</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Location & Hours</h4>
                  <p className="text-gray-600 text-sm">Accurate address, hours, and contact information</p>
                </div>
                <div className="text-center">
                  <Camera className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Photos & Videos</h4>
                  <p className="text-gray-600 text-sm">High-quality visuals that showcase your business</p>
                </div>
                <div className="text-center">
                  <Star className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Reviews & Ratings</h4>
                  <p className="text-gray-600 text-sm">Review management and response strategies</p>
                </div>
                <div className="text-center">
                  <MessageSquare className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Posts & Updates</h4>
                  <p className="text-gray-600 text-sm">Regular posts to keep your listing active</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Process */}
        {activeTab === 'process' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our GMB Optimization Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to maximize your local search visibility and customer engagement
              </p>
            </div>

            <div className="space-y-12">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Local Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our GMB optimization has helped local businesses dominate their markets
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
                    <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">GMB Optimization Packages</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect package to boost your local search visibility
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative p-8 rounded-2xl ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-orange-600 to-red-600 text-white' 
                    : 'bg-white border-2 border-gray-200'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-yellow-400 text-orange-900 px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h3>
                    <div className={`text-4xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-orange-600'}`}>
                      {plan.price}
                    </div>
                    <p className={plan.popular ? 'text-orange-100' : 'text-gray-600'}>
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
                        ? 'bg-white text-orange-600 hover:bg-gray-100'
                        : 'bg-orange-600 text-white hover:bg-orange-700'
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Dominate Local Search?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Let's optimize your Google My Business profile and help you attract more local customers than ever before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Optimize My Business
            </Link>
            <Link
              to="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GMBService;