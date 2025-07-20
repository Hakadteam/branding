import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Eye, ArrowRight, Star, X, Calendar, Users, TrendingUp, Code, Palette, Search, Share2 } from 'lucide-react';
import { useScheduling } from '../hooks/useScheduling';
import SchedulingModal from './SchedulingModal';
import SchedulingButton from './SchedulingButton';

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  client: string;
  results: string;
  technologies: string[];
  duration: string;
  fullDescription: string;
  challenges: string;
  solution: string;
  outcome: string;
  additionalImages: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const Portfolio = () => {
  const [isInView, setIsInView] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { isModalOpen: isSchedulingModalOpen, buttonType, openScheduling, closeScheduling } = useScheduling();

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

  const projects: Project[] = [
    {
      id: 1,
      name: 'E-Commerce Growth Platform',
      description: 'Complete sales funnel redesign for a fashion e-commerce brand, resulting in 320% increase in conversions and international expansion.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Sales Funnel',
      client: 'Fashion E-Commerce',
      results: '+320% Conversions',
      technologies: ['React', 'Node.js', 'Stripe', 'Google Analytics', 'Mailchimp'],
      duration: '4 months',
      fullDescription: 'A comprehensive e-commerce transformation project that revolutionized how this fashion brand connects with customers globally.',
      challenges: 'The client had a beautiful product line but struggled with online conversions. Their existing website had a 1.2% conversion rate and limited international reach.',
      solution: 'We implemented a complete sales funnel redesign with personalized product recommendations, abandoned cart recovery, and multi-currency support. Added social proof elements and streamlined the checkout process.',
      outcome: 'Conversion rate increased from 1.2% to 5.1%, international sales grew by 320%, and customer lifetime value improved by 180%. The brand now operates in 12 countries.',
      additionalImages: [
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      liveUrl: 'https://example-fashion.com',
      githubUrl: 'https://github.com/hakaddigitallab/fashion-funnel'
    },
    {
      id: 2,
      name: 'Local Business Visibility Boost',
      description: 'Google My Business optimization and local SEO strategy that increased local search visibility by 340% for a real estate company.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'GMB Optimization',
      client: 'Real Estate Agency',
      results: '+340% Local Visibility',
      technologies: ['Google My Business', 'Local SEO', 'Google Analytics', 'Schema Markup'],
      duration: '3 months',
      fullDescription: 'Strategic local search optimization that transformed a regional real estate agency into the dominant local market leader.',
      challenges: 'The agency was invisible in local searches, ranking on page 3 for key terms like "real estate [city name]" and receiving minimal online inquiries.',
      solution: 'Optimized Google My Business profile with professional photos, regular posts, and review management. Implemented local SEO strategy with location-based content and citations.',
      outcome: 'Now ranking #1 for 15+ local real estate terms, 340% increase in local search visibility, 250% more property inquiries, and 60% increase in closed deals.',
      additionalImages: [
        'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      liveUrl: 'https://example-realestate.com'
    },
    {
      id: 3,
      name: 'SaaS Dashboard Redesign',
      description: 'Complete UI/UX overhaul for a fintech application, improving user retention by 280% and reducing support tickets by 65%.',
      image: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'UI/UX Design',
      client: 'Fintech Startup',
      results: '+280% User Retention',
      technologies: ['Figma', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      duration: '5 months',
      fullDescription: 'A complete user experience transformation that turned a complex fintech platform into an intuitive, user-friendly application.',
      challenges: 'Users found the original interface confusing and overwhelming. High churn rate (78% in first month) and numerous support tickets about navigation issues.',
      solution: 'Conducted user research, created new information architecture, designed intuitive workflows, and implemented a clean, modern interface with guided onboarding.',
      outcome: 'User retention improved from 22% to 62% in first month, support tickets reduced by 65%, and user satisfaction scores increased from 2.1 to 4.6/5.',
      additionalImages: [
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      liveUrl: 'https://example-fintech.com'
    },
    {
      id: 4,
      name: 'Social Media Growth Campaign',
      description: 'Comprehensive social media strategy that grew a fitness brand from 5K to 45K followers and increased engagement by 400%.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Social Media',
      client: 'Fitness Brand',
      results: '+400% Engagement',
      technologies: ['Instagram', 'Facebook', 'TikTok', 'Canva', 'Hootsuite', 'Analytics'],
      duration: '6 months',
      fullDescription: 'A data-driven social media transformation that built a thriving fitness community and drove significant business growth.',
      challenges: 'Stagnant follower growth (5K followers for 2 years), low engagement rates (1.2%), and minimal conversion from social media to sales.',
      solution: 'Developed content strategy focused on transformation stories, workout tutorials, and community building. Implemented consistent posting schedule and engagement tactics.',
      outcome: 'Followers grew from 5K to 45K, engagement rate increased to 8.3%, and social media now drives 35% of total sales revenue.',
      additionalImages: [
        'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      liveUrl: 'https://instagram.com/example-fitness'
    },
    {
      id: 5,
      name: 'B2B Lead Generation System',
      description: 'Automated lead generation funnel for oil services company that generated ₦50M+ in new contracts within 6 months.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'B2B Strategy',
      client: 'Oil Services Company',
      results: '₦50M+ New Contracts',
      technologies: ['LinkedIn Sales Navigator', 'HubSpot', 'Email Automation', 'Landing Pages'],
      duration: '6 months',
      fullDescription: 'Strategic B2B digital transformation that modernized traditional oil services marketing and opened new market opportunities.',
      challenges: 'Company relied entirely on traditional networking and referrals. No digital presence and missing opportunities in expanding African markets.',
      solution: 'Built comprehensive B2B funnel with LinkedIn outreach, content marketing, and automated follow-up sequences. Created industry-specific landing pages.',
      outcome: 'Generated ₦50M+ in new contracts, expanded to 5 new African countries, and established the company as a thought leader in the industry.',
      additionalImages: [
        'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      liveUrl: 'https://example-oilservices.com'
    },
    {
      id: 6,
      name: 'Multi-Platform E-Commerce Hub',
      description: 'Pan-African e-commerce platform development that increased online sales by 420% and expanded to 12 countries.',
      image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'E-Commerce Platform',
      client: 'African E-Commerce Hub',
      results: '+420% Online Sales',
      technologies: ['Shopify Plus', 'Multi-Currency', 'Payment Gateways', 'Logistics APIs'],
      duration: '8 months',
      fullDescription: 'Comprehensive e-commerce ecosystem that connected African businesses with global markets through innovative technology solutions.',
      challenges: 'Fragmented payment systems across African countries, complex logistics, and varying regulatory requirements made expansion difficult.',
      solution: 'Built unified platform with multiple payment gateways, automated currency conversion, and integrated logistics partners across 12 African countries.',
      outcome: 'Online sales increased by 420%, successfully operating in 12 countries, and became the leading e-commerce platform for African businesses.',
      additionalImages: [
        'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      liveUrl: 'https://example-ecommerce.com'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Sales Funnel': 'bg-blue-100 text-blue-800',
      'GMB Optimization': 'bg-orange-100 text-orange-800',
      'UI/UX Design': 'bg-purple-100 text-purple-800',
      'Social Media': 'bg-pink-100 text-pink-800',
      'B2B Strategy': 'bg-green-100 text-green-800',
      'E-Commerce Platform': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      'Sales Funnel': TrendingUp,
      'GMB Optimization': Search,
      'UI/UX Design': Palette,
      'Social Media': Share2,
      'B2B Strategy': Users,
      'E-Commerce Platform': Code
    };
    return icons[category as keyof typeof icons] || Code;
  };

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
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
            Portfolio & Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful digital projects that have helped businesses grow and achieve measurable results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => {
            const isVisible = visibleCards.includes(index);
            const CategoryIcon = getCategoryIcon(project.category);
            return (
              <div
                key={project.id}
                className={`portfolio-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden transform cursor-pointer ${
                  isVisible ? 'translate-y-0 opacity-100 animate-scale-in' : 'translate-y-10 opacity-0'
                } hover:-translate-y-2`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => openProjectModal(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)} flex items-center space-x-1`}>
                    <CategoryIcon className="h-3 w-3" />
                    <span>{project.category}</span>
                  </div>
                  
                  {/* View Project Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-white/90 backdrop-blur-sm text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                      <Eye className="h-5 w-5" />
                      <span>View Details</span>
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
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{project.duration}</span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
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
              <div className="flex justify-center">
                <SchedulingButton
                  variant="outline"
                  size="lg"
                  type="consultation"
                  onClick={() => openScheduling('consultation')}
                  className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white border-white"
                >
                  Book a Free Consultation
                </SchedulingButton>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/20 rounded-full animate-spin"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-white/20 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedProject.name}</h2>
                <p className="text-gray-600">{selectedProject.client}</p>
              </div>
              <button
                onClick={closeProjectModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Overview */}
              <div className="mb-8">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                  loading="lazy"
                />
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{selectedProject.results}</div>
                    <div className="text-sm text-gray-600">Results Achieved</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-green-600 mb-1">{selectedProject.duration}</div>
                    <div className="text-sm text-gray-600">Project Duration</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600 mb-1">{selectedProject.technologies.length}</div>
                    <div className="text-sm text-gray-600">Technologies Used</div>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Project Details */}
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Challenge</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedProject.challenges}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Solution</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedProject.solution}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Outcome</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedProject.outcome}</p>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Additional Images */}
              {selectedProject.additionalImages.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Project Gallery</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedProject.additionalImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${selectedProject.name} - Image ${index + 1}`}
                        className="w-full h-48 object-cover rounded-xl"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>View Live Project</span>
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-900 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Code className="h-5 w-5" />
                    <span>View Code</span>
                  </a>
                )}
                <button
                  onClick={() => {
                    closeProjectModal();
                    openScheduling('consultation');
                  }}
                  className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Discuss Similar Project</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
        
      {/* Scheduling Modal */}
      <SchedulingModal
        isOpen={isSchedulingModalOpen}
        onClose={closeScheduling}
        buttonType={buttonType}
      />
    </section>
  );
};

export default Portfolio;