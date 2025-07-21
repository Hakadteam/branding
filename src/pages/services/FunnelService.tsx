import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, CheckCircle, ArrowRight, Star, Users, Target, Zap, BarChart3, Mail, CreditCard } from 'lucide-react';

const FunnelService = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: Target,
      title: 'Lead Capture Pages',
      description: 'High-converting landing pages designed to capture qualified leads and maximize conversions.'
    },
    {
      icon: Mail,
      title: 'Email Automation',
      description: 'Automated email sequences that nurture leads and guide them through your sales process.'
    },
    {
      icon: BarChart3,
      title: 'Conversion Optimization',
      description: 'Continuous testing and optimization to improve conversion rates and ROI.'
    },
    {
      icon: CreditCard,
      title: 'Payment Integration',
      description: 'Seamless payment processing with multiple payment options for your customers.'
    },
    {
      icon: Users,
      title: 'Customer Segmentation',
      description: 'Advanced segmentation to deliver personalized experiences to different customer groups.'
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Automated workflows that save time and increase efficiency in your marketing efforts.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Strategy & Planning',
      description: 'We analyze your business, target audience, and goals to create a comprehensive funnel strategy.',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Design & Development',
      description: 'Our team creates high-converting landing pages, forms, and automated email sequences.',
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Integration & Testing',
      description: 'We integrate all components, set up tracking, and thoroughly test the entire funnel.',
      duration: '1 week'
    },
    {
      step: '04',
      title: 'Launch & Optimize',
      description: 'We launch your funnel and continuously optimize based on performance data.',
      duration: 'Ongoing'
    }
  ];

  const caseStudies = [
    {
      client: 'Lagos Fashion House',
      industry: 'E-commerce',
      challenge: 'Low online conversion rates and poor lead quality',
      solution: 'Complete sales funnel redesign with automated email sequences',
      results: [
        '+320% increase in conversions',
        '+180% improvement in lead quality',
        '₦25M additional revenue in 4 months'
      ],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      client: 'Port Harcourt Oil Services',
      industry: 'B2B Services',
      challenge: 'Difficulty generating qualified B2B leads online',
      solution: 'LinkedIn-integrated lead generation funnel with CRM automation',
      results: [
        '₦50M+ in new contracts',
        '+380% improvement in lead quality',
        'Expansion to 5 new African countries'
      ],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const pricing = [
    {
      name: 'Starter Funnel',
      price: '₦500,000',
      description: 'Perfect for small businesses getting started with sales funnels',
      features: [
        '3-page funnel (landing, thank you, sales)',
        'Basic email automation (5 emails)',
        'Lead magnet creation',
        'Analytics setup',
        '30 days support'
      ],
      popular: false
    },
    {
      name: 'Professional Funnel',
      price: '₦1,200,000',
      description: 'Comprehensive funnel solution for growing businesses',
      features: [
        '7-page funnel with multiple touchpoints',
        'Advanced email automation (15+ emails)',
        'A/B testing setup',
        'CRM integration',
        'Payment gateway integration',
        '90 days support'
      ],
      popular: true
    },
    {
      name: 'Enterprise Funnel',
      price: 'Custom',
      description: 'Full-scale funnel ecosystem for large businesses',
      features: [
        'Multi-funnel system',
        'Advanced automation workflows',
        'Custom integrations',
        'Dedicated account manager',
        'Ongoing optimization',
        '1 year support'
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="h-4 w-4" />
                <span>Sales Funnel Development</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Turn Visitors Into <span className="text-yellow-400">Customers</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Build high-converting sales funnels that capture leads, nurture prospects, and drive sales 24/7. 
                Our proven funnel strategies have generated millions in revenue for our clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition-colors shadow-lg"
                >
                  Get Started Today
                </Link>
                <button
                  onClick={() => setActiveTab('case-studies')}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sales Funnel Development"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-blue-600">+180%</div>
                <div className="text-gray-600 text-sm">Average Conversion Increase</div>
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
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
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
                  Why Sales Funnels Are Essential
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  A well-designed sales funnel is the backbone of any successful online business. It guides your 
                  prospects through a carefully crafted journey from awareness to purchase, maximizing conversions 
                  and customer lifetime value.
                </p>
                <div className="space-y-4">
                  {[
                    'Capture and qualify leads automatically',
                    'Nurture prospects with targeted messaging',
                    'Increase conversion rates by up to 300%',
                    'Reduce customer acquisition costs',
                    'Scale your business with automation'
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
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Sales Funnel Strategy"
                  className="rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-blue-50 rounded-2xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">180%</div>
                <div className="text-gray-600">Average Conversion Increase</div>
              </div>
              <div className="text-center p-8 bg-green-50 rounded-2xl">
                <div className="text-4xl font-bold text-green-600 mb-2">65%</div>
                <div className="text-gray-600">Reduction in Cost Per Lead</div>
              </div>
              <div className="text-center p-8 bg-purple-50 rounded-2xl">
                <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Automated Lead Generation</div>
              </div>
            </div>
          </section>
        )}

        {/* Features */}
        {activeTab === 'features' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Funnel Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to create high-converting sales funnels that drive results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Process */}
        {activeTab === 'process' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Proven Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach that ensures your funnel delivers maximum results
              </p>
            </div>

            <div className="space-y-12">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from real businesses that transformed their growth with our sales funnels
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
                    <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Investment Options</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect funnel package for your business needs and budget
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative p-8 rounded-2xl ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-blue-600 to-green-600 text-white' 
                    : 'bg-white border-2 border-gray-200'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h3>
                    <div className={`text-4xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-blue-600'}`}>
                      {plan.price}
                    </div>
                    <p className={plan.popular ? 'text-blue-100' : 'text-gray-600'}>
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
                        ? 'bg-white text-blue-600 hover:bg-gray-100'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Sales Funnel?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's create a high-converting sales funnel that transforms your business and drives consistent growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Your Project
            </Link>
            <Link
              to="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View More Examples
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FunnelService;