import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Eye, ArrowRight, Star } from 'lucide-react';

const Portfolio = () => {
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
            const cards = entry.target.querySelectorAll('.portfolio-card');
            cards.forEach((_, index) => {
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

  const projects = [
    {
      id: 1,
      name: 'BrandRevamp Pro',
      description: 'Complete website redesign for a service business, focusing on modern aesthetics and improved user experience.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Website Design',
      client: 'Service Business',
      results: '+150% Conversions'
    },
    {
      id: 2,
      name: 'ClickBoost Funnels',
      description: 'High-converting lead generation funnel built for a digital agency, resulting in 3x more qualified leads.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Sales Funnel',
      client: 'Digital Agency',
      results: '3x More Leads'
    },
    {
      id: 3,
      name: 'StyleSync UI Kit',
      description: 'Comprehensive UI design system for a SaaS product, improving user onboarding and engagement.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'UI/UX Design',
      client: 'SaaS Product',
      results: '+85% User Retention'
    },
    {
      id: 4,
      name: 'LocalBoost GMB',
      description: 'Google My Business optimization for a restaurant chain, dramatically improving local search visibility.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'GMB Optimization',
      client: 'Restaurant Chain',
      results: '+200% Local Visibility'
    },
    {
      id: 5,
      name: 'SocialGrow Campaign',
      description: 'Strategic social media management for a fitness brand, building community and driving engagement.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Social Media',
      client: 'Fitness Brand',
      results: '+300% Engagement'
    },
    {
      id: 6,
      name: 'TechFlow Dashboard',
      description: 'Modern dashboard redesign for a B2B software platform, enhancing data visualization and workflow.',
      image: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'UI/UX Design',
      client: 'B2B Software',
      results: '+120% User Satisfaction'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Website Design': 'bg-blue-100 text-blue-800',
      'Sales Funnel': 'bg-green-100 text-green-800',
      'UI/UX Design': 'bg-purple-100 text-purple-800',
      'GMB Optimization': 'bg-orange-100 text-orange-800',
      'Social Media': 'bg-pink-100 text-pink-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            <span>Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Case Studies & Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful digital projects that have helped businesses grow and achieve their goals.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => {
            const isVisible = visibleCards.includes(index);
            return (
              <div
                key={project.id}
                className={`portfolio-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden transform ${
                  isVisible ? 'translate-y-0 opacity-100 animate-scale-in' : 'translate-y-10 opacity-0'
                } hover:-translate-y-2`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </div>
                  
                  {/* View Project Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-white/90 backdrop-blur-sm text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                      <Eye className="h-5 w-5" />
                      <span>View Project</span>
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500 font-medium">{project.client}</span>
                    <span className="text-sm text-green-600 font-semibold">{project.results}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <button className="w-full text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors flex items-center justify-center space-x-2 py-2 border border-blue-200 rounded-lg hover:bg-blue-50">
                    <span>See Details</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
                Let's discuss your vision and create something amazing together. Book a free consultation to get started.
              </p>
              <button 
                onClick={scrollToContact}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center space-x-2 mx-auto"
              >
                <span>Book a Free Consultation</span>
                <ExternalLink className="h-5 w-5" />
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

export default Portfolio;