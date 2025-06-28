import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const Portfolio = () => {
  const [isInView, setIsInView] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            
            // Stagger project animations
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
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Modern e-commerce solution with advanced features and seamless user experience.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'Stripe', 'MongoDB']
    },
    {
      title: 'SaaS Dashboard',
      category: 'UI/UX Design',
      description: 'Clean and intuitive dashboard design for a project management SaaS platform.',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Figma', 'Design System', 'Prototyping', 'User Research']
    },
    {
      title: 'Lead Generation Funnel',
      category: 'Funnel Development',
      description: 'High-converting sales funnel that increased conversion rates by 150%.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Landing Pages', 'A/B Testing', 'Analytics', 'Optimization']
    },
    {
      title: 'Corporate Website',
      category: 'Web Development',
      description: 'Professional corporate website with CMS integration and SEO optimization.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['WordPress', 'SEO', 'Responsive', 'CMS']
    },
    {
      title: 'Mobile App Design',
      category: 'UI/UX Design',
      description: 'User-friendly mobile app interface design with focus on accessibility.',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Mobile UI', 'Accessibility', 'User Testing', 'Prototyping']
    },
    {
      title: 'Marketing Automation',
      category: 'Funnel Development',
      description: 'Automated marketing funnel with email sequences and lead scoring.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Email Marketing', 'Automation', 'CRM', 'Lead Scoring']
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Web Development': 'bg-brand-blue-100 text-brand-blue-800',
      'UI/UX Design': 'bg-brand-green-100 text-brand-green-800',
      'Funnel Development': 'bg-purple-100 text-purple-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-brand-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-brand-green-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-200/20 rounded-full blur-2xl animate-rotate-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-brand-green-100 text-brand-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-bounce-slow">
            <Sparkles className="h-4 w-4 animate-spin" />
            <span>Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-in-left">
            Projects We're Proud Of
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-right">
            Explore our portfolio of successful digital projects that have helped businesses grow and thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isVisible = visibleProjects.includes(index);
            return (
              <div
                key={index}
                className={`project-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden hover:-translate-y-2 hover:rotate-1 ${
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
                  
                  {/* Animated overlay elements */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-brand-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-brand-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex space-x-2">
                      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors hover:scale-110 animate-bounce">
                        <ExternalLink className="h-4 w-4 text-gray-600" />
                      </button>
                      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors hover:scale-110 animate-bounce" style={{ animationDelay: '0.1s' }}>
                        <Github className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 relative">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${getCategoryColor(project.category)} animate-pulse-glow`}>
                    {project.category}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-brand-blue-100 hover:text-brand-blue-600 transition-all duration-300 hover:scale-105 animate-fade-in"
                        style={{ animationDelay: `${tagIndex * 100}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Decorative animated element */}
                  <div className="absolute bottom-2 right-2 w-1 h-1 bg-brand-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <button className="bg-gradient-to-r from-brand-blue-600 to-brand-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:from-brand-blue-700 hover:to-brand-green-600 hover:scale-105 shadow-lg animate-pulse-glow hover:animate-bounce">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;