import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Share2, CheckCircle, Star, Instagram, Facebook, Twitter, Linkedin, TrendingUp, Users, Heart, MessageCircle } from 'lucide-react';

const SocialService = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: MessageCircle,
      title: 'Content Creation',
      description: 'Engaging, brand-aligned content that resonates with your audience and drives engagement.'
    },
    {
      icon: Users,
      title: 'Community Management',
      description: 'Active community engagement, responding to comments, and building relationships with followers.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Strategies',
      description: 'Proven strategies to grow your follower base with genuine, engaged audience members.'
    },
    {
      icon: Heart,
      title: 'Engagement Optimization',
      description: 'Maximize likes, comments, shares, and overall engagement across all platforms.'
    },
    {
      icon: Star,
      title: 'Brand Building',
      description: 'Consistent brand messaging and visual identity across all social media platforms.'
    },
    {
      icon: Share2,
      title: 'Multi-Platform Management',
      description: 'Comprehensive management across Instagram, Facebook, Twitter, LinkedIn, and more.'
    }
  ];

  const platforms = [
    {
      name: 'Instagram',
      icon: Instagram,
      color: 'from-pink-500 to-purple-600',
      description: 'Visual storytelling and brand building',
      features: ['Stories & Reels', 'IGTV Content', 'Shopping Integration', 'Influencer Partnerships']
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'from-blue-600 to-blue-700',
      description: 'Community building and customer engagement',
      features: ['Page Management', 'Facebook Ads', 'Event Promotion', 'Group Management']
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'from-blue-400 to-blue-500',
      description: 'Real-time engagement and thought leadership',
      features: ['Tweet Scheduling', 'Hashtag Strategy', 'Twitter Spaces', 'Trend Monitoring']
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'from-blue-700 to-blue-800',
      description: 'Professional networking and B2B growth',
      features: ['Company Pages', 'LinkedIn Articles', 'Professional Networking', 'Lead Generation']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Strategy Development',
      description: 'We analyze your brand, audience, and competitors to create a comprehensive social media strategy.',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Content Planning',
      description: 'Create a content calendar with engaging posts, stories, and campaigns tailored to each platform.',
      duration: '1 week'
    },
    {
      step: '03',
      title: 'Content Creation',
      description: 'Design and produce high-quality visual content, copy, and multimedia assets.',
      duration: 'Ongoing'
    },
    {
      step: '04',
      title: 'Publishing & Engagement',
      description: 'Schedule posts, engage with followers, and manage your online community actively.',
      duration: 'Daily'
    },
    {
      step: '05',
      title: 'Analytics & Optimization',
      description: 'Track performance, analyze results, and continuously optimize for better engagement.',
      duration: 'Monthly'
    }
  ];

  const caseStudies = [
    {
      client: 'Lagos Fitness Brand',
      industry: 'Health & Fitness',
      challenge: 'Stagnant follower growth and low engagement rates across social platforms',
      solution: 'Comprehensive social media strategy with transformation stories and workout content',
      results: [
        'Followers grew from 5K to 45K',
        '+400% increase in engagement rate',
        '35% of total sales from social media',
        '8.3% average engagement rate'
      ],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      client: 'Kano E-commerce Hub',
      industry: 'E-commerce',
      challenge: 'Difficulty converting social media followers into customers',
      solution: 'Social commerce strategy with shoppable posts and influencer partnerships',
      results: [
        '+320% increase in social media sales',
        '100K+ new customers from social',
        '+280% growth in brand mentions',
        '45% increase in customer lifetime value'
      ],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const contentTypes = [
    {
      type: 'Educational Posts',
      description: 'Informative content that provides value to your audience',
      engagement: 'High'
    },
    {
      type: 'Behind-the-Scenes',
      description: 'Authentic glimpses into your business and team',
      engagement: 'Very High'
    },
    {
      type: 'User-Generated Content',
      description: 'Customer testimonials and user-created content',
      engagement: 'High'
    },
    {
      type: 'Product Showcases',
      description: 'Professional product photography and videos',
      engagement: 'Medium'
    },
    {
      type: 'Interactive Content',
      description: 'Polls, quizzes, and Q&A sessions',
      engagement: 'Very High'
    },
    {
      type: 'Trending Content',
      description: 'Timely content that leverages current trends',
      engagement: 'High'
    }
  ];

  const pricing = [
    {
      name: 'Starter Package',
      price: '₦200,000/month',
      description: 'Perfect for small businesses starting their social media journey',
      features: [
        '2 platforms management',
        '12 posts per month',
        'Basic graphics design',
        'Community management',
        'Monthly reporting',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Growth Package',
      price: '₦400,000/month',
      description: 'Comprehensive social media management for growing businesses',
      features: [
        '4 platforms management',
        '20 posts per month',
        'Professional content creation',
        'Stories & Reels',
        'Influencer outreach',
        'Advanced analytics',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise Package',
      price: '₦800,000/month',
      description: 'Full-scale social media management for large businesses',
      features: [
        'All platforms management',
        'Daily posting',
        'Video content creation',
        'Paid advertising management',
        'Crisis management',
        'Dedicated account manager',
        '24/7 support'
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Share2 className="h-4 w-4" />
                <span>Social Media Management</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Build Your <span className="text-yellow-400">Social Empire</span>
              </h1>
              <p className="text-xl text-pink-100 mb-8 leading-relaxed">
                Create a strong online presence that attracts customers and builds brand loyalty. 
                Our social media strategies have grown engagement by up to 400% for our clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition-colors shadow-lg"
                >
                  Grow My Social Media
                </Link>
                <button
                  onClick={() => setActiveTab('case-studies')}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  View Success Stories
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Social Media Management"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-pink-600">+400%</div>
                <div className="text-gray-600 text-sm">Engagement Growth</div>
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
              { id: 'platforms', label: 'Platforms' },
              { id: 'process', label: 'Process' },
              { id: 'case-studies', label: 'Case Studies' },
              { id: 'pricing', label: 'Pricing' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap py-2 px-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-pink-600 border-b-2 border-pink-600'
                    : 'text-gray-600 hover:text-pink-600'
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
                  Why Social Media Management Matters
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Social media is where your customers spend their time. A strong social media presence 
                  builds brand awareness, drives website traffic, generates leads, and creates a community 
                  around your business.
                </p>
                <div className="space-y-4">
                  {[
                    'Build brand awareness and recognition',
                    'Engage directly with your customers',
                    'Drive traffic to your website',
                    'Generate leads and sales',
                    'Build a loyal community'
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
                  src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Social Media Strategy"
                  className="rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Content Types */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Content We Create</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contentTypes.map((content, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900">{content.type}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        content.engagement === 'Very High' ? 'bg-green-100 text-green-800' :
                        content.engagement === 'High' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {content.engagement} Engagement
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{content.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Platforms */}
        {activeTab === 'platforms' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Platforms We Manage</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive management across all major social media platforms
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {platforms.map((platform, index) => {
                const Icon = platform.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className={`bg-gradient-to-r ${platform.color} p-6 text-white`}>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                          <Icon className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{platform.name}</h3>
                          <p className="text-white/80">{platform.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">What We Do:</h4>
                      <ul className="space-y-2">
                        {platform.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Social Media Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A strategic approach to building your social media presence and engaging your audience
              </p>
            </div>

            <div className="space-y-12">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl flex items-center justify-center">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Social Media Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our social media strategies have transformed businesses and built thriving communities
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
                    <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Social Media Management Packages</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect package to grow your social media presence and engagement
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative p-8 rounded-2xl ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-pink-600 to-purple-600 text-white' 
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
                    <div className={`text-4xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-pink-600'}`}>
                      {plan.price}
                    </div>
                    <p className={plan.popular ? 'text-pink-100' : 'text-gray-600'}>
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
                        ? 'bg-white text-pink-600 hover:bg-gray-100'
                        : 'bg-pink-600 text-white hover:bg-pink-700'
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
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Social Empire?</h2>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Let's create a social media presence that builds your brand, engages your audience, and drives real business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Growing Today
            </Link>
            <Link
              to="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-pink-600 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialService;