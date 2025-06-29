import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart, ExternalLink } from 'lucide-react';
import { newsletterService } from '../lib/supabase';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent('Inquiry - Hakad Digital Lab Services');
    const body = encodeURIComponent(`Hello Hakad Digital Lab team,

I'm interested in learning more about your digital services.

Please get back to me at your earliest convenience.

Best regards`);
    
    window.location.href = `mailto:hakaddigitallab@gmail.com?subject=${subject}&body=${body}`;
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+2348161673433';
  };

  const handleLocationClick = () => {
    const location = encodeURIComponent('Lekki, Lagos, Nigeria');
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${location}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleNewsletterSubscribe = async () => {
    const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
    const email = emailInput?.value?.trim();
    
    if (!email) {
      alert('Please enter your email address');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    try {
      await newsletterService.subscribe(email);
      alert('Successfully subscribed to our newsletter! Thank you for joining us.');
      emailInput.value = '';
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Failed to subscribe. Please try again later.');
      }
    }
  };

  const footerLinks = {
    services: [
      { name: 'Website Design & Development', action: () => scrollToSection('services') },
      { name: 'UI/UX Design', action: () => scrollToSection('services') },
      { name: 'Funnel Development', action: () => scrollToSection('services') },
      { name: 'Digital Strategy', action: () => scrollToSection('contact') },
      { name: 'Brand Identity', action: () => scrollToSection('contact') },
      { name: 'Maintenance & Support', action: () => scrollToSection('contact') }
    ],
    company: [
      { name: 'About Us', action: () => scrollToSection('about') },
      { name: 'Portfolio', action: () => scrollToSection('portfolio') },
      { name: 'Case Studies', action: () => scrollToSection('portfolio') },
      { name: 'Our Process', action: () => scrollToSection('about') },
      { name: 'Team', action: () => scrollToSection('about') },
      { name: 'Contact', action: () => scrollToSection('contact') }
    ],
    resources: [
      { 
        name: 'Design Process', 
        action: () => {
          scrollToSection('services');
          setTimeout(() => {
            console.log('Show design process details');
          }, 500);
        }
      },
      { 
        name: 'Project FAQ', 
        action: () => {
          const faqContent = `
FREQUENTLY ASKED QUESTIONS

🎨 DESIGN & DEVELOPMENT
Q: How long does a typical project take?
A: Website projects: 4-8 weeks, UI/UX Design: 3-6 weeks, Funnels: 2-4 weeks

Q: Do you provide ongoing support?
A: Yes! We offer 3 months free support, then affordable maintenance plans.

Q: Can you work with our existing brand?
A: Absolutely! We can enhance your current brand or create a new identity.

💰 PRICING & PROCESS
Q: How do you price your services?
A: We provide custom quotes based on project scope and requirements.

Q: What's included in the project cost?
A: Design, development, testing, launch, training, and 3 months support.

Q: Do you require payment upfront?
A: We work with 50% upfront, 50% on completion for most projects.

📞 COMMUNICATION
Q: How do we communicate during the project?
A: Regular video calls, email updates, and project management tools.

Q: Can we request changes during development?
A: Yes! We include reasonable revisions in all our packages.

Contact us for more specific questions about your project!
          `;
          
          alert(faqContent);
        }
      },
      { 
        name: 'Free Consultation', 
        action: () => scrollToSection('contact')
      },
      { 
        name: 'Portfolio Examples', 
        action: () => scrollToSection('portfolio')
      },
      { 
        name: 'Technology Stack', 
        action: () => {
          const techInfo = `
OUR TECHNOLOGY STACK

🎨 DESIGN TOOLS
• Figma - UI/UX Design & Prototyping
• Adobe Creative Suite - Graphics & Branding
• Sketch - Interface Design
• InVision - Interactive Prototypes

💻 FRONTEND DEVELOPMENT
• React & Next.js - Modern Web Applications
• TypeScript - Type-safe Development
• Tailwind CSS - Responsive Styling
• HTML5 & CSS3 - Web Standards

⚙️ BACKEND DEVELOPMENT
• Node.js - Server-side JavaScript
• Python - Data Processing & APIs
• MongoDB & PostgreSQL - Databases
• AWS & Vercel - Cloud Hosting

📊 MARKETING & ANALYTICS
• Google Analytics - Performance Tracking
• HubSpot & Mailchimp - CRM & Email
• ClickFunnels - Sales Funnels
• Facebook & Google Ads - Advertising

🔒 SECURITY & PERFORMANCE
• SSL Certificates - Secure Connections
• CDN - Fast Global Delivery
• SEO Optimization - Search Rankings
• Mobile-First Design - All Devices

Want to know more? Contact us for a detailed discussion!
          `;
          
          alert(techInfo);
        }
      },
      { 
        name: 'Contact Support', 
        action: () => scrollToSection('contact')
      }
    ]
  };

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://facebook.com/hakaddigitallab', 
      label: 'Facebook', 
      color: 'hover:bg-blue-600' 
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com/hakaddigitallab', 
      label: 'Twitter', 
      color: 'hover:bg-blue-400' 
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/hakaddigitallab', 
      label: 'Instagram', 
      color: 'hover:bg-pink-600' 
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/company/hakaddigitallab', 
      label: 'LinkedIn', 
      color: 'hover:bg-blue-700' 
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6 group cursor-pointer" onClick={() => scrollToSection('home')}>
              <Logo 
                className="group-hover:scale-110 transition-transform duration-300 filter brightness-110"
                size="md"
              />
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming businesses through innovative digital solutions. We create stunning websites, 
              intuitive designs, and high-converting funnels.
            </p>
            
            <div className="space-y-3">
              <div 
                className="flex items-center space-x-3 group hover:text-brand-blue-400 transition-colors duration-200 cursor-pointer"
                onClick={handleEmailClick}
              >
                <Mail className="h-4 w-4 text-brand-blue-400 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-gray-300">hakaddigitallab@gmail.com</span>
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
              <div 
                className="flex items-center space-x-3 group hover:text-brand-green-400 transition-colors duration-200 cursor-pointer"
                onClick={handlePhoneClick}
              >
                <Phone className="h-4 w-4 text-brand-green-400 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-gray-300">+234 816 167 3433</span>
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
              <div 
                className="flex items-center space-x-3 group hover:text-purple-400 transition-colors duration-200 cursor-pointer"
                onClick={handleLocationClick}
              >
                <MapPin className="h-4 w-4 text-purple-400 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-gray-300">Lekki, Lagos, Nigeria</span>
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand-blue-400">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={link.action}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-left w-full group"
                  >
                    <span className="flex items-center justify-between">
                      {link.name}
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand-green-400">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={link.action}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-left w-full group"
                  >
                    <span className="flex items-center justify-between">
                      {link.name}
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-400">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={link.action}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-left w-full group"
                  >
                    <span className="flex items-center justify-between">
                      {link.name}
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-brand-blue-400 to-brand-green-400 bg-clip-text text-transparent">
                Stay Updated
              </h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for the latest design trends, digital insights, and exclusive offers.
              </p>
            </div>
            
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
              />
              <button 
                onClick={handleNewsletterSubscribe}
                className="bg-gradient-to-r from-brand-blue-600 to-brand-green-500 px-6 py-3 rounded-xl font-semibold hover:from-brand-blue-700 hover:to-brand-green-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 flex items-center space-x-2">
              <span>© {currentYear} Hakad Digital Lab. Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>All rights reserved.</span>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center ${social.color} transition-all duration-300 group backdrop-blur-sm hover:scale-110 hover:shadow-lg`}
                  >
                    <Icon className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;