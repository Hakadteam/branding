import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Sparkles, ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import { portfolioProjects, PortfolioProject } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const Portfolio = () => {
  const [isInView, setIsInView] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
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

  const categories = [
    { id: 'all', label: 'All Projects', count: portfolioProjects.length },
    { id: 'ui-ux', label: 'UI/UX Design', count: portfolioProjects.filter(p => p.category === 'ui-ux').length },
    { id: 'funnel', label: 'Funnel Development', count: portfolioProjects.filter(p => p.category === 'funnel').length },
    { id: 'website', label: 'Website Development', count: portfolioProjects.filter(p => p.category === 'website').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      'ui-ux': 'bg-brand-green-100 text-brand-green-800',
      'funnel': 'bg-purple-100 text-purple-800',
      'website': 'bg-brand-blue-100 text-brand-blue-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      'ui-ux': 'UI/UX Design',
      'funnel': 'Funnel Development',
      'website': 'Website Development'
    };
    return labels[category as keyof typeof labels] || category;
  };

  return (
    <>
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

          {/* Category Filter */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-brand-blue-600 to-brand-green-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.label}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const isVisible = visibleProjects.includes(index);
              return (
                <div
                  key={project.id}
                  className={`project-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden hover:-translate-y-2 hover:rotate-1 cursor-pointer ${
                    isVisible ? 'animate-scale-in opacity-100' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Project Category Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)} backdrop-blur-sm`}>
                      {getCategoryLabel(project.category)}
                    </div>
                    
                    {/* Animated overlay elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-brand-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 right-4 w-2 h-2 bg-brand-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Play className="h-6 w-6 text-brand-blue-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 relative">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500 font-medium">{project.client}</span>
                      <span className="text-sm text-gray-400">{project.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Key Metrics Preview */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {project.metrics.slice(0, 2).map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center p-2 bg-gray-50 rounded-lg group-hover:bg-brand-blue-50 transition-colors duration-300">
                          <div className="text-lg font-bold text-brand-blue-600">{metric.value}</div>
                          <div className="text-xs text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-brand-blue-100 hover:text-brand-blue-600 transition-all duration-300 hover:scale-105"
                        >
                          {tech.name}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <button className="text-brand-blue-600 font-semibold text-sm hover:underline transition-all duration-300 hover:scale-105">
                        View Case Study
                      </button>
                      <div className="flex space-x-2">
                        <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-brand-blue-100 transition-colors hover:scale-110 group/btn">
                          <ExternalLink className="h-4 w-4 text-gray-600 group-hover/btn:text-brand-blue-600" />
                        </button>
                      </div>
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

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Portfolio;