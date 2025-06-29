export interface ProjectMetric {
  label: string;
  value: string;
  change?: string;
  icon?: string;
}

export interface ProjectTestimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface ProjectTechnology {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'analytics' | 'cms' | 'marketing';
  icon?: string;
}

export interface ProjectStage {
  title: string;
  description: string;
  image?: string;
  metrics?: ProjectMetric[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'ui-ux' | 'funnel' | 'website';
  client: string;
  duration: string;
  brief: string;
  objectives: string[];
  description: string;
  image: string;
  gallery: string[];
  technologies: ProjectTechnology[];
  metrics: ProjectMetric[];
  testimonial: ProjectTestimonial;
  stages: ProjectStage[];
  results: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'fintech-dashboard',
    title: 'FinTech Dashboard Redesign',
    category: 'ui-ux',
    client: 'TechFlow Solutions',
    duration: '8 weeks',
    brief: 'Redesign the existing financial dashboard to improve user experience and increase user engagement by 40%.',
    objectives: [
      'Improve information hierarchy and data visualization',
      'Reduce cognitive load for complex financial data',
      'Increase user task completion rate',
      'Create a scalable design system'
    ],
    description: 'Complete UX/UI redesign of a financial technology dashboard focusing on data visualization, user flows, and accessibility.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: [
      { name: 'Figma', category: 'design' },
      { name: 'Adobe XD', category: 'design' },
      { name: 'Principle', category: 'design' },
      { name: 'Hotjar', category: 'analytics' }
    ],
    metrics: [
      { label: 'User Engagement', value: '+45%', change: '+12%', icon: 'TrendingUp' },
      { label: 'Task Completion', value: '89%', change: '+23%', icon: 'CheckCircle' },
      { label: 'User Satisfaction', value: '4.8/5', change: '+1.2', icon: 'Star' },
      { label: 'Time on Task', value: '-35%', change: '-2.3min', icon: 'Clock' }
    ],
    testimonial: {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechFlow Solutions',
      content: 'The redesign exceeded our expectations. User engagement increased by 45% and our support tickets decreased significantly. The team\'s attention to detail and user-centered approach was exceptional.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    stages: [
      {
        title: 'User Research & Analysis',
        description: 'Conducted user interviews, analyzed existing data, and identified pain points in the current dashboard.',
        metrics: [
          { label: 'Users Interviewed', value: '24' },
          { label: 'Pain Points Identified', value: '18' }
        ]
      },
      {
        title: 'Information Architecture',
        description: 'Restructured content hierarchy and created user flow diagrams for optimal navigation.',
        metrics: [
          { label: 'User Flows Created', value: '12' },
          { label: 'Navigation Depth Reduced', value: '40%' }
        ]
      },
      {
        title: 'Design System Creation',
        description: 'Built a comprehensive design system with reusable components and style guidelines.',
        metrics: [
          { label: 'Components Created', value: '45' },
          { label: 'Design Tokens', value: '120+' }
        ]
      },
      {
        title: 'Prototyping & Testing',
        description: 'Created interactive prototypes and conducted usability testing with real users.',
        metrics: [
          { label: 'Prototypes Created', value: '8' },
          { label: 'Usability Tests', value: '15' }
        ]
      }
    ],
    results: [
      'Increased user engagement by 45%',
      'Reduced support tickets by 60%',
      'Improved task completion rate to 89%',
      'Decreased average time on task by 35%',
      'Achieved 4.8/5 user satisfaction score'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 'saas-conversion-funnel',
    title: 'SaaS Lead Generation Funnel',
    category: 'funnel',
    client: 'CloudSync Pro',
    duration: '6 weeks',
    brief: 'Create a high-converting lead generation funnel to increase trial signups and reduce customer acquisition cost.',
    objectives: [
      'Increase trial signup conversion rate by 60%',
      'Reduce cost per acquisition by 40%',
      'Improve lead quality scoring',
      'Implement automated nurture sequences'
    ],
    description: 'Multi-stage conversion funnel with landing pages, email sequences, and automated workflows designed to convert visitors into paying customers.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: [
      { name: 'ClickFunnels', category: 'marketing' },
      { name: 'Mailchimp', category: 'marketing' },
      { name: 'Google Analytics', category: 'analytics' },
      { name: 'Hotjar', category: 'analytics' },
      { name: 'Zapier', category: 'backend' }
    ],
    metrics: [
      { label: 'Conversion Rate', value: '18.5%', change: '+12.3%', icon: 'TrendingUp' },
      { label: 'Cost per Lead', value: '$24', change: '-45%', icon: 'DollarSign' },
      { label: 'Email Open Rate', value: '34%', change: '+18%', icon: 'Mail' },
      { label: 'Trial to Paid', value: '28%', change: '+15%', icon: 'CreditCard' }
    ],
    testimonial: {
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'CloudSync Pro',
      content: 'Our lead generation improved dramatically. The funnel not only increased our conversion rates but also improved lead quality. ROI increased by 180% within the first quarter.',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    stages: [
      {
        title: 'Audience Research & Segmentation',
        description: 'Analyzed target audience behavior and created detailed buyer personas for precise targeting.',
        metrics: [
          { label: 'Buyer Personas', value: '4' },
          { label: 'Market Segments', value: '6' }
        ]
      },
      {
        title: 'Landing Page Optimization',
        description: 'Created high-converting landing pages with compelling copy and strategic CTAs.',
        metrics: [
          { label: 'Landing Pages', value: '8' },
          { label: 'A/B Tests Run', value: '24' }
        ]
      },
      {
        title: 'Email Automation Setup',
        description: 'Designed automated email sequences for lead nurturing and customer onboarding.',
        metrics: [
          { label: 'Email Sequences', value: '12' },
          { label: 'Automation Rules', value: '35' }
        ]
      },
      {
        title: 'Analytics & Optimization',
        description: 'Implemented tracking systems and continuously optimized based on performance data.',
        metrics: [
          { label: 'Conversion Events', value: '18' },
          { label: 'Optimization Cycles', value: '6' }
        ]
      }
    ],
    results: [
      'Increased trial signups by 65%',
      'Reduced cost per acquisition by 45%',
      'Improved email engagement by 40%',
      'Achieved 28% trial-to-paid conversion',
      'Generated 180% ROI in first quarter'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform Development',
    category: 'website',
    client: 'Artisan Marketplace',
    duration: '12 weeks',
    brief: 'Build a modern e-commerce platform for artisan products with advanced filtering, payment integration, and vendor management.',
    objectives: [
      'Create scalable multi-vendor marketplace',
      'Implement advanced search and filtering',
      'Integrate multiple payment gateways',
      'Optimize for mobile commerce'
    ],
    description: 'Full-stack e-commerce platform with custom CMS, vendor dashboard, advanced product filtering, and seamless checkout experience.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'MongoDB', category: 'backend' },
      { name: 'Stripe', category: 'backend' },
      { name: 'AWS', category: 'backend' },
      { name: 'Tailwind CSS', category: 'frontend' }
    ],
    metrics: [
      { label: 'Page Load Speed', value: '1.2s', change: '-60%', icon: 'Zap' },
      { label: 'Mobile Conversion', value: '12.8%', change: '+85%', icon: 'Smartphone' },
      { label: 'SEO Score', value: '95/100', change: '+35pts', icon: 'Search' },
      { label: 'Uptime', value: '99.9%', change: '+2.1%', icon: 'Shield' }
    ],
    testimonial: {
      name: 'Emma Rodriguez',
      role: 'Founder & CEO',
      company: 'Artisan Marketplace',
      content: 'The platform exceeded all our expectations. Sales increased by 300% in the first month, and our vendors love the intuitive dashboard. The technical execution was flawless.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    stages: [
      {
        title: 'Architecture & Planning',
        description: 'Designed scalable system architecture and created detailed technical specifications.',
        metrics: [
          { label: 'API Endpoints', value: '45' },
          { label: 'Database Tables', value: '28' }
        ]
      },
      {
        title: 'Frontend Development',
        description: 'Built responsive user interface with modern React components and smooth animations.',
        metrics: [
          { label: 'Components Built', value: '120+' },
          { label: 'Pages Created', value: '35' }
        ]
      },
      {
        title: 'Backend Integration',
        description: 'Developed robust API, payment processing, and vendor management systems.',
        metrics: [
          { label: 'Payment Gateways', value: '3' },
          { label: 'Third-party APIs', value: '8' }
        ]
      },
      {
        title: 'Testing & Optimization',
        description: 'Comprehensive testing, performance optimization, and security implementation.',
        metrics: [
          { label: 'Test Cases', value: '200+' },
          { label: 'Performance Score', value: '95/100' }
        ]
      }
    ],
    results: [
      'Achieved 1.2s average page load time',
      'Increased mobile conversions by 85%',
      'Processed $500K+ in first quarter',
      'Onboarded 150+ vendors successfully',
      'Maintained 99.9% uptime'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 'healthcare-app',
    title: 'Healthcare Mobile App Design',
    category: 'ui-ux',
    client: 'MedConnect',
    duration: '10 weeks',
    brief: 'Design a patient-centered mobile app for appointment booking, medical records, and telemedicine consultations.',
    objectives: [
      'Improve patient engagement and satisfaction',
      'Streamline appointment booking process',
      'Ensure HIPAA compliance in design',
      'Create accessible interface for all age groups'
    ],
    description: 'Comprehensive mobile app design focusing on accessibility, user experience, and healthcare compliance requirements.',
    image: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: [
      { name: 'Figma', category: 'design' },
      { name: 'Sketch', category: 'design' },
      { name: 'InVision', category: 'design' },
      { name: 'Maze', category: 'analytics' }
    ],
    metrics: [
      { label: 'User Satisfaction', value: '4.9/5', change: '+1.4', icon: 'Heart' },
      { label: 'Appointment Bookings', value: '+120%', change: '+45%', icon: 'Calendar' },
      { label: 'App Store Rating', value: '4.8/5', change: '+0.9', icon: 'Star' },
      { label: 'User Retention', value: '78%', change: '+32%', icon: 'Users' }
    ],
    testimonial: {
      name: 'Dr. James Wilson',
      role: 'Chief Medical Officer',
      company: 'MedConnect',
      content: 'The app design is intuitive and accessible for patients of all ages. We\'ve seen a significant increase in patient engagement and satisfaction scores since launch.',
      avatar: 'https://images.pexels.com/photos/612608/pexels-photo-612608.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    stages: [
      {
        title: 'User Research & Personas',
        description: 'Conducted extensive research with patients and healthcare providers to understand needs.',
        metrics: [
          { label: 'Patient Interviews', value: '32' },
          { label: 'Healthcare Providers', value: '12' }
        ]
      },
      {
        title: 'Wireframing & User Flows',
        description: 'Created detailed wireframes and mapped user journeys for all key features.',
        metrics: [
          { label: 'User Flows', value: '18' },
          { label: 'Wireframes', value: '65' }
        ]
      },
      {
        title: 'Visual Design & Prototyping',
        description: 'Developed high-fidelity designs and interactive prototypes for testing.',
        metrics: [
          { label: 'Screen Designs', value: '85' },
          { label: 'Interactive Prototypes', value: '6' }
        ]
      },
      {
        title: 'Usability Testing & Iteration',
        description: 'Conducted multiple rounds of testing with real users and refined the design.',
        metrics: [
          { label: 'Usability Tests', value: '24' },
          { label: 'Design Iterations', value: '8' }
        ]
      }
    ],
    results: [
      'Achieved 4.9/5 user satisfaction rating',
      'Increased appointment bookings by 120%',
      'Improved user retention to 78%',
      'Reduced support calls by 55%',
      'Met all HIPAA compliance requirements'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 'real-estate-funnel',
    title: 'Real Estate Lead Funnel',
    category: 'funnel',
    client: 'Premier Properties',
    duration: '4 weeks',
    brief: 'Create a lead generation funnel for luxury real estate listings with automated follow-up sequences.',
    objectives: [
      'Generate high-quality leads for luxury properties',
      'Automate lead nurturing process',
      'Increase property viewing appointments',
      'Improve lead-to-sale conversion rate'
    ],
    description: 'Sophisticated lead generation funnel with property showcase pages, lead magnets, and automated CRM integration.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: [
      { name: 'Leadpages', category: 'marketing' },
      { name: 'HubSpot', category: 'marketing' },
      { name: 'Calendly', category: 'marketing' },
      { name: 'Facebook Ads', category: 'marketing' }
    ],
    metrics: [
      { label: 'Lead Quality Score', value: '8.5/10', change: '+2.3', icon: 'Target' },
      { label: 'Viewing Appointments', value: '+180%', change: '+65%', icon: 'Calendar' },
      { label: 'Cost per Lead', value: '$45', change: '-55%', icon: 'DollarSign' },
      { label: 'Lead to Sale', value: '15%', change: '+8%', icon: 'TrendingUp' }
    ],
    testimonial: {
      name: 'Robert Martinez',
      role: 'Sales Director',
      company: 'Premier Properties',
      content: 'The funnel transformed our lead generation. We\'re now getting higher quality leads at a fraction of the cost, and our sales team is closing more deals than ever.',
      avatar: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    stages: [
      {
        title: 'Market Analysis & Strategy',
        description: 'Analyzed luxury real estate market and developed targeted lead generation strategy.',
        metrics: [
          { label: 'Market Segments', value: '5' },
          { label: 'Competitor Analysis', value: '12' }
        ]
      },
      {
        title: 'Landing Page Creation',
        description: 'Built high-converting landing pages for different property types and price ranges.',
        metrics: [
          { label: 'Landing Pages', value: '6' },
          { label: 'Property Showcases', value: '15' }
        ]
      },
      {
        title: 'Automation Setup',
        description: 'Implemented CRM integration and automated follow-up sequences.',
        metrics: [
          { label: 'Email Sequences', value: '8' },
          { label: 'Automation Workflows', value: '12' }
        ]
      },
      {
        title: 'Campaign Launch & Optimization',
        description: 'Launched advertising campaigns and continuously optimized for better performance.',
        metrics: [
          { label: 'Ad Campaigns', value: '4' },
          { label: 'Optimization Tests', value: '18' }
        ]
      }
    ],
    results: [
      'Generated 300+ qualified leads monthly',
      'Increased viewing appointments by 180%',
      'Reduced cost per lead by 55%',
      'Improved lead-to-sale conversion to 15%',
      'Achieved 8.5/10 lead quality score'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 'corporate-website',
    title: 'Corporate Website Redesign',
    category: 'website',
    client: 'InnovateTech Solutions',
    duration: '8 weeks',
    brief: 'Complete redesign and development of corporate website with focus on lead generation and brand positioning.',
    objectives: [
      'Modernize brand presence and visual identity',
      'Improve search engine rankings',
      'Increase contact form submissions',
      'Enhance mobile user experience'
    ],
    description: 'Modern corporate website with custom CMS, advanced SEO optimization, and integrated lead generation features.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: [
      { name: 'WordPress', category: 'cms' },
      { name: 'PHP', category: 'backend' },
      { name: 'MySQL', category: 'backend' },
      { name: 'SCSS', category: 'frontend' },
      { name: 'Google Analytics', category: 'analytics' }
    ],
    metrics: [
      { label: 'Organic Traffic', value: '+250%', change: '+125%', icon: 'TrendingUp' },
      { label: 'Page Speed', value: '92/100', change: '+45pts', icon: 'Zap' },
      { label: 'Lead Generation', value: '+180%', change: '+95%', icon: 'Users' },
      { label: 'Bounce Rate', value: '25%', change: '-40%', icon: 'MousePointer' }
    ],
    testimonial: {
      name: 'Lisa Thompson',
      role: 'Marketing Manager',
      company: 'InnovateTech Solutions',
      content: 'Our new website has transformed our online presence. We\'re ranking higher in search results and generating significantly more qualified leads. The design perfectly represents our brand.',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    stages: [
      {
        title: 'Brand & Content Strategy',
        description: 'Developed comprehensive brand strategy and content architecture for the new website.',
        metrics: [
          { label: 'Brand Guidelines', value: '1' },
          { label: 'Content Pages', value: '25' }
        ]
      },
      {
        title: 'Design & Development',
        description: 'Created modern design and developed custom WordPress theme with advanced features.',
        metrics: [
          { label: 'Custom Templates', value: '15' },
          { label: 'Custom Plugins', value: '3' }
        ]
      },
      {
        title: 'SEO Optimization',
        description: 'Implemented comprehensive SEO strategy including technical optimization and content optimization.',
        metrics: [
          { label: 'Keywords Targeted', value: '45' },
          { label: 'SEO Score', value: '95/100' }
        ]
      },
      {
        title: 'Testing & Launch',
        description: 'Conducted thorough testing across devices and browsers before successful launch.',
        metrics: [
          { label: 'Test Scenarios', value: '50+' },
          { label: 'Performance Score', value: '92/100' }
        ]
      }
    ],
    results: [
      'Increased organic traffic by 250%',
      'Improved page speed score to 92/100',
      'Generated 180% more leads',
      'Reduced bounce rate to 25%',
      'Achieved top 3 rankings for target keywords'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  }
];

export const getProjectsByCategory = (category: string) => {
  return portfolioProjects.filter(project => project.category === category);
};

export const getProjectById = (id: string) => {
  return portfolioProjects.find(project => project.id === id);
};