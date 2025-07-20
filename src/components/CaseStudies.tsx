import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, TrendingUp, Star, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const [isInView, setIsInView] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            
            // Stagger card animations
            const cards = entry.target.querySelectorAll('.case-study-card');
            cards.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 300);
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

  const caseStudies = [
    {
      id: 1,
      projectName: 'TechFlow Solutions',
      goal: 'Increase online lead generation for B2B software company',
      result: '+280% conversion rate, $500K additional revenue in 3 months',
      testimonial: 'Working with HAKAD Digital Lab was a game-changer. The sales funnel they created transformed our business completely.',
      clientName: 'Sarah Johnson',
      clientRole: 'Marketing Director',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Sales Funnel',
      metrics: [
        { label: 'Conversion Rate', value: '+280%' },
        { label: 'Revenue Generated', value: '$500K' },
        { label: 'Timeline', value: '3 months' }
      ]
    },
    {
      id: 2,
      projectName: 'Bella Vista Restaurants',
      goal: 'Improve local visibility and increase customer calls',
      result: '+220% local search visibility, +150% customer calls',
      testimonial: 'Our restaurants are busier than ever thanks to the GMB optimization. The ROI has been incredible.',
      clientName: 'Emily Rodriguez',
      clientRole: 'Restaurant Owner',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'GMB Optimization',
      metrics: [
        { label: 'Local Visibility', value: '+220%' },
        { label: 'Customer Calls', value: '+150%' },
        { label: 'Timeline', value: '2 months' }
      ]
    },
    {
      id: 3,
      projectName: 'FitLife Coaching',
      goal: 'Build social media presence and generate quality leads',
      result: '+350% engagement, +200% lead generation, 180% follower growth',
      testimonial: 'The social media strategy exceeded all expectations. Our engagement and leads have skyrocketed.',
      clientName: 'David Thompson',
      clientRole: 'Founder',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Social Media',
      metrics: [
        { label: 'Engagement Rate', value: '+350%' },
        { label: 'Lead Generation', value: '+200%' },
        { label: 'Timeline', value: '4 months' }
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Sales Funnel': 'bg-blue-100 text-blue-800',
      'GMB Optimization': 'bg-orange-100 text-orange-800',
      'Social Media': 'bg-pink-100 text-pink-800',
      'UI/UX Design': 'bg-purple-100 text-purple-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section ref={sectionRef} id="case-studies" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <TrendingUp className="h-4 w-4" />
            <span>Client Results</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Real Results for <span className="text-green-600">Real Businesses</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            See how we've helped businesses like yours achieve measurable growth and success.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {caseStudies.map((study, index) => {
            const isVisible = visibleCards.includes(index);
            return (
              <div
                key={study.id}
                className={`case-study-card group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden transform ${
                  isVisible ? 'translate-y-0 opacity-100 animate-scale-in' : 'translate-y-10 opacity-0'
                } hover:-translate-y-2`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.projectName}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(study.category)}`}>
                    {study.category}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {study.projectName}
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Goal</h4>
                    <p className="text-gray-700 leading-relaxed">{study.goal}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Result</h4>
                    <p className="text-green-600 font-semibold leading-relaxed">{study.result}</p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-blue-600">{metric.value}</div>
                        <div className="text-xs text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-600 italic mb-4 leading-relaxed">
                    "{study.testimonial}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{study.clientName}</div>
                      <div className="text-sm text-gray-600">{study.clientRole}</div>
                    </div>
                    
                    <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors flex items-center space-x-2 py-2 px-4 border border-blue-200 rounded-lg hover:bg-blue-50">
                      <span>See Full Project</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-10 lg:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Be Our Next Success Story?</h3>
              <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg lg:text-xl leading-relaxed">
                Let's discuss your goals and create a custom strategy that delivers measurable results for your business.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center space-x-3 mx-auto hover:scale-105 transform duration-300"
              >
                <span>Start Your Success Story</span>
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/20 rounded-full animate-spin"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-white/20 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;