import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Heart, Facebook, Instagram, Linkedin, Twitter, AlertCircle } from 'lucide-react';
import { newsletterService } from '../lib/supabase';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = React.useState('');
  const [isSubscribing, setIsSubscribing] = React.useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Section with id "${sectionId}" not found`);
    }
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent('Inquiry - HAKAD Digital Lab Services');
    const body = encodeURIComponent(`Hello HAKAD Digital Lab team,

I'm interested in learning more about your digital services.

Please get back to me at your earliest convenience.

Best regards`);
    
    try {
      window.location.href = `mailto:hakaddigitallab@gmail.com?subject=${subject}&body=${body}`;
    } catch (error) {
      console.error('Error opening email client:', error);
      // Fallback: copy email to clipboard
      navigator.clipboard?.writeText('hakaddigitallab@gmail.com').then(() => {
        alert('Email address copied to clipboard: hakaddigitallab@gmail.com');
      }).catch(() => {
        alert('Email: hakaddigitallab@gmail.com');
      });
    }
  };

  const handlePhoneClick = () => {
    try {
      window.location.href = 'tel:+2348161673433';
    } catch (error) {
      console.error('Error initiating phone call:', error);
      // Fallback: copy phone number to clipboard
      navigator.clipboard?.writeText('+234 816 167 3433').then(() => {
        alert('Phone number copied to clipboard: +234 816 167 3433');
      }).catch(() => {
        alert('Phone: +234 816 167 3433');
      });
    }
  };

  const handleLocationClick = () => {
    const location = encodeURIComponent('Lagos, Nigeria');
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${location}`;
    try {
      window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening maps:', error);
      alert('Location: Lagos, Nigeria');
    }
  };

  const handleNewsletterSubscribe = async () => {
    const email = newsletterEmail.trim();
    
    if (!email) {
      setErrorMessage('Please enter your email address');
      setSubscriptionStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address');
      setSubscriptionStatus('error');
      return;
    }

    setIsSubscribing(true);
    setSubscriptionStatus('idle');
    setErrorMessage('');

    try {
      await newsletterService.subscribe(email);
      setSubscriptionStatus('success');
      setNewsletterEmail('');
      setTimeout(() => setSubscriptionStatus('idle'), 5000);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Failed to subscribe. Please try again later.');
      }
      setSubscriptionStatus('error');
    } finally {
      setIsSubscribing(false);
    }
  };

  const handleSocialClick = (url: string, platform: string) => {
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error(`Error opening ${platform}:`, error);
      // Fallback: copy URL to clipboard
      navigator.clipboard?.writeText(url).then(() => {
        alert(`${platform} URL copied to clipboard: ${url}`);
      }).catch(() => {
        alert(`${platform}: ${url}`);
      });
    }
  };

  const footerLinks = {
    services: [
      { name: 'Sales Funnel Development', action: () => scrollToSection('services'), href: '/services/funnel' },
      { name: 'UI/UX Design', action: () => scrollToSection('services'), href: '/services/ui-ux' },
      { name: 'Website Design & Development', action: () => scrollToSection('services'), href: '/services' },
      { name: 'GMB Optimization', action: () => scrollToSection('services'), href: '/services/gmb' },
      { name: 'Social Media Management', action: () => scrollToSection('services'), href: '/services/social' },
      { name: 'Free Consultation', action: () => scrollToSection('contact'), href: '/contact' }
    ],
    company: [
      { name: 'About Adebayo', action: () => scrollToSection('about'), href: '/about' },
      { name: 'Our Projects', action: () => scrollToSection('projects'), href: '/projects' },
      { name: 'Client Testimonials', action: () => scrollToSection('testimonials'), href: '/testimonials' },
      { name: 'Contact Us', action: () => scrollToSection('contact'), href: '/contact' }
    ]
  };

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/company/hakaddigitallab', 
      icon: Linkedin,
      color: 'hover:bg-blue-600',
      bgColor: 'bg-blue-600'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/hakaddigitallab', 
      icon: Twitter,
      color: 'hover:bg-blue-400',
      bgColor: 'bg-blue-400'
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/hakaddigitallab', 
      icon: Instagram,
      color: 'hover:bg-pink-600',
      bgColor: 'bg-pink-600'
    },
    { 
      name: 'Facebook', 
      url: 'https://facebook.com/hakaddigitallab', 
      icon: Facebook,
      color: 'hover:bg-blue-700',
      bgColor: 'bg-blue-700'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo 
                size="lg" 
                className="mb-4 filter brightness-0 invert"
              />
              <h3 className="text-xl font-bold text-white mb-1">HAKAD Digital Lab</h3>
              <p className="text-gray-400 text-sm">Digital Excellence</p>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming businesses through innovative digital solutions. We specialize in sales funnels, 
              UI/UX design, GMB optimization, and social media management.
            </p>
            
            <div className="space-y-3">
              <div 
                className="flex items-center space-x-3 group hover:text-blue-400 transition-colors cursor-pointer"
                onClick={handleEmailClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleEmailClick()}
                aria-label="Send email to hakaddigitallab@gmail.com"
              >
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">hakaddigitallab@gmail.com</span>
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div 
                className="flex items-center space-x-3 group hover:text-green-400 transition-colors cursor-pointer"
                onClick={handlePhoneClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handlePhoneClick()}
                aria-label="Call +234 816 167 3433"
              >
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">+234 816 167 3433</span>
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div 
                className="flex items-center space-x-3 group hover:text-purple-400 transition-colors cursor-pointer"
                onClick={handleLocationClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleLocationClick()}
                aria-label="View location Lagos, Nigeria on Google Maps"
              >
                <MapPin className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">Lagos, Nigeria</span>
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 text-left w-full group block"
                    aria-label={`Navigate to ${link.name}`}
                  >
                    <span className="flex items-center justify-between">
                      {link.name}
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-400">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 text-left w-full group block"
                    aria-label={`Navigate to ${link.name}`}
                  >
                    <span className="flex items-center justify-between">
                      {link.name}
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-400">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for digital marketing tips and exclusive insights.
            </p>
            
            {/* Newsletter Status Messages */}
            {subscriptionStatus === 'success' && (
              <div className="mb-4 p-3 bg-green-600 rounded-lg flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-white" />
                <span className="text-white text-sm">Successfully subscribed!</span>
              </div>
            )}
            
            {subscriptionStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-600 rounded-lg flex items-center space-x-2">
                <AlertCircle className="h-4 w-4 text-white" />
                <span className="text-white text-sm">{errorMessage}</span>
              </div>
            )}
            
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={isSubscribing}
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Email address for newsletter subscription"
                onKeyDown={(e) => e.key === 'Enter' && !isSubscribing && handleNewsletterSubscribe()}
              />
              <button 
                onClick={handleNewsletterSubscribe}
                disabled={isSubscribing}
                className="bg-gradient-to-r from-blue-600 to-green-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                aria-label="Subscribe to newsletter"
              >
                {isSubscribing ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleSocialClick(social.url, social.name)}
                    className={`w-10 h-10 ${social.bgColor} rounded-lg flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 shadow-lg group`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <IconComponent className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 flex items-center space-x-2">
              <span>© {currentYear} HAKAD Digital Lab. Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>by Adebayo Hammed. All rights reserved.</span>
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <button 
                className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                aria-label="View Privacy Policy"
                onClick={() => alert('Privacy Policy - Coming Soon')}
              >
                Privacy Policy
              </button>
              <button 
                className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                aria-label="View Terms of Service"
                onClick={() => alert('Terms of Service - Coming Soon')}
              >
                Terms of Service
              </button>
              <button 
                className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                aria-label="View Cookie Policy"
                onClick={() => alert('Cookie Policy - Coming Soon')}
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;