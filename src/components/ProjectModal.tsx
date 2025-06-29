import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight, Star, TrendingUp, CheckCircle, Clock, DollarSign, Users, Calendar, Target, Heart, Zap, Smartphone, Search, Shield, Mail, CreditCard, MousePointer } from 'lucide-react';
import { PortfolioProject } from '../data/portfolioData';

interface ProjectModalProps {
  project: PortfolioProject;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'process' | 'results'>('overview');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ComponentType<any> } = {
      TrendingUp, CheckCircle, Star, Clock, DollarSign, Users, Calendar, Target, Heart, Zap, Smartphone, Search, Shield, Mail, CreditCard, MousePointer
    };
    return icons[iconName] || TrendingUp;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'ui-ux': 'from-brand-green-600 to-brand-green-700',
      'funnel': 'from-purple-600 to-purple-700',
      'website': 'from-brand-blue-600 to-brand-blue-700'
    };
    return colors[category as keyof typeof colors] || 'from-gray-600 to-gray-700';
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      'ui-ux': 'UI/UX Design',
      'funnel': 'Funnel Development',
      'website': 'Website Development'
    };
    return labels[category as keyof typeof labels] || category;
  };

  const getTechCategoryColor = (category: string) => {
    const colors = {
      frontend: 'bg-blue-100 text-blue-800',
      backend: 'bg-green-100 text-green-800',
      design: 'bg-purple-100 text-purple-800',
      analytics: 'bg-orange-100 text-orange-800',
      cms: 'bg-indigo-100 text-indigo-800',
      marketing: 'bg-pink-100 text-pink-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="relative">
            <div className={`bg-gradient-to-r ${getCategoryColor(project.category)} p-8 text-white`}>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                    {getCategoryLabel(project.category)}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
                  <p className="text-lg opacity-90 mb-4">{project.client} • {project.duration}</p>
                </div>
              </div>
              
              <p className="text-lg opacity-90 max-w-3xl">{project.brief}</p>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="relative h-64 md:h-80 bg-gray-100">
            <img
              src={project.gallery[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            
            {project.gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-800" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronRight className="h-6 w-6 text-gray-800" />
                </button>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {project.gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex space-x-8 px-8">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'process', label: 'Process' },
                { id: 'results', label: 'Results' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-brand-blue-500 text-brand-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Project Description */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Project Overview</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Objectives</h4>
                      <ul className="space-y-2">
                        {project.objectives.map((objective, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="h-5 w-5 text-brand-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${getTechCategoryColor(tech.category)}`}
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Metrics</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.metrics.map((metric, index) => {
                      const Icon = getIcon(metric.icon || 'TrendingUp');
                      return (
                        <div key={index} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors">
                          <div className="w-10 h-10 bg-brand-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <Icon className="h-5 w-5 text-brand-blue-600" />
                          </div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                          <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                          {metric.change && (
                            <div className="text-xs text-brand-green-600 font-medium">{metric.change}</div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Client Testimonial */}
                <div className="bg-gradient-to-r from-brand-blue-50 to-brand-green-50 rounded-2xl p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={project.testimonial.avatar}
                      alt={project.testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <blockquote className="text-gray-700 italic mb-4">
                        "{project.testimonial.content}"
                      </blockquote>
                      <div>
                        <div className="font-semibold text-gray-900">{project.testimonial.name}</div>
                        <div className="text-sm text-gray-600">
                          {project.testimonial.role} at {project.testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div className="space-y-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Project Process</h3>
                
                <div className="space-y-8">
                  {project.stages.map((stage, index) => (
                    <div key={index} className="relative">
                      {index < project.stages.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200"></div>
                      )}
                      
                      <div className="flex items-start space-x-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-brand-blue-600 to-brand-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                          {index + 1}
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{stage.title}</h4>
                          <p className="text-gray-600 mb-4">{stage.description}</p>
                          
                          {stage.metrics && (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                              {stage.metrics.map((metric, metricIndex) => (
                                <div key={metricIndex} className="bg-white border border-gray-200 rounded-lg p-3 text-center">
                                  <div className="text-lg font-bold text-brand-blue-600">{metric.value}</div>
                                  <div className="text-sm text-gray-600">{metric.label}</div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'results' && (
              <div className="space-y-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Project Results</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-brand-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-brand-green-600" />
                          </div>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Performance Metrics</h4>
                    <div className="space-y-4">
                      {project.metrics.map((metric, index) => {
                        const Icon = getIcon(metric.icon || 'TrendingUp');
                        return (
                          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-brand-blue-100 rounded-lg flex items-center justify-center">
                                <Icon className="h-4 w-4 text-brand-blue-600" />
                              </div>
                              <span className="font-medium text-gray-900">{metric.label}</span>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-gray-900">{metric.value}</div>
                              {metric.change && (
                                <div className="text-sm text-brand-green-600">{metric.change}</div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-brand-blue-600 to-brand-green-500 rounded-2xl p-8 text-white text-center">
                  <h4 className="text-xl font-bold mb-4">Interested in Similar Results?</h4>
                  <p className="mb-6 opacity-90">
                    Let's discuss how we can help transform your business with a similar approach.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-white text-brand-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>View Live Project</span>
                      </a>
                    )}
                    <button
                      onClick={onClose}
                      className="inline-flex items-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-brand-blue-600 transition-colors"
                    >
                      <span>Start Your Project</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;