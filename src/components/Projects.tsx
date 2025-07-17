import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Star, TrendingUp, Users, Zap } from 'lucide-react';

const Projects = () => {
  const [isInView, setIsInView] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            
            const projects = entry.target.querySelectorAll('.project-card');
            projects.forEach((_, index) => {
              setTimeout(() => {
                setVisibleProjects(prev => [...prev, index]);
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
      title: 'E-Commerce Sales Funnel',
      category: 'Sales Funnel',
      client: 'Fashion Retailer',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete sales funnel redesign that increased conversion rates by 280% and generated $500K+ in additional revenue.',
      metrics: [
        { label: 'Conversion Rate', value: '+280%', icon: TrendingUp },
        { label: 'Revenue Growth', value: '$500K+', icon: Zap },
        { label: 'Customer Retention', value: '+65%', icon: Users }
      ],
      tags: ['Funnel Design', 'Email Marketing', 'Conversion Optimization']
    },
    {
      id: 2,
      title: 'SaaS Dashboard Redesign',
      category: 'UI/UX Design',
      client: 'Tech Startup',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern dashboard redesign focusing on user experience and data visualization for a growing SaaS platform.',
      metrics: [
        { label: 'User Satisfaction', value: '4.9/5', icon: Star },
        { label: 'Task Completion', value: '+75%', icon: TrendingUp },
        { label: 'Support Tickets', value: '-50%', icon: Users }
      ],
      tags: ['UI Design', 'UX Research', 'Prototyping']
    },
    {
      id: 3,
      title: 'Local Business GMB Success',
      category: 'GMB Optimization',
      client: 'Restaurant Chain',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive GMB optimization strategy that dramatically improved local search visibility and foot traffic.',
      metrics: [
        { label: 'Local Visibility', value: '+220%', icon: TrendingUp },
        { label: 'Customer Calls', value: '+150%', icon: Users },
        { label: 'Review Rating', value: '4.8/5', icon: Star }
      ],
      tags: ['Local SEO', 'Review Management', 'GMB Optimization']
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      category: 'Social Media',
      client: 'Fitness Brand',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Strategic social media campaign that built brand awareness and drove significant engagement growth.',
      metrics: [
        { label: 'Engagement Rate', value: '+350%', icon: TrendingUp },
        { label: 'Follower Growth', value: '+180%', icon: Users },
        { label: 'Lead Generation', value: '+200%', icon: Zap }
      ],
      tags: ['Content Strategy', 'Community Management', 'Paid Ads']
    },
    {
      id: 5,
      title: 'B2B Lead Generation',
      category: 'Sales Funnel',
      client: 'Consulting Firm',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Multi-channel lead generation funnel that transformed B2B client acquisition and sales process.',
      metrics: [
        { label: 'Lead Quality', value: '+190%', icon: Star },
        { label: 'Conversion Rate', value: '+160%', icon: TrendingUp },
        { label: 'Sales Cycle', value: '-40%', icon: Zap }
      ],
      tags: ['Lead Generation', 'B2B Marketing', 'CRM Integration']
    },
    {
      id: 6,
      title: 'Mobile App UI Redesign',
      category: 'UI/UX Design',
      client: 'FinTech Startup',
      image: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete mobile app redesign focusing on user onboarding and financial dashboard optimization.',
      metrics: [
        { label: 'App Store Rating', value: '4.8/5', icon: Star },
        { label: 'User Retention', value: '+85%', icon: Users },
        { label: 'Session Duration', value: '+120%', icon: TrendingUp }
      ],
      tags: ['Mobile Design', 'User Onboarding', 'Financial UX']
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Sales Funnel': 'bg-blue-100 text-blue-800',
      'UI/UX Design': 'bg-green-100 text-green-800',
      'GMB Optimization': 'bg-purple-100 text-purple-800',
      'Social Media': 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            <span>Recent Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories That Speak Volumes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful digital projects that have transformed businesses and delivered exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isVisible = visibleProjects.includes(index);
            return (
              <div
                key={project.id}
                className={`project-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden hover:-translate-y-2 cursor-pointer ${
                  isVisible ? 'animate-scale-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </div>
                  
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="h-5 w-5 text-gray-700" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500 font-medium">{project.client}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {project.metrics.map((metric, metricIndex) => {
                      const Icon = metric.icon;
                      return (
                        <div key={metricIndex} className="text-center p-2 bg-gray-50 rounded-lg">
                          <Icon className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                          <div className="text-sm font-bold text-gray-900">{metric.value}</div>
                          <div className="text-xs text-gray-600">{metric.label}</div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{project.tags.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  <button className="w-full text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors flex items-center justify-center space-x-2 py-2">
                    <span>View Case Study</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Start Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;