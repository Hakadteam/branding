import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'Website Design',
      'UI/UX Design',
      'Funnel Development',
      'Digital Strategy',
      'Brand Identity',
      'Maintenance & Support'
    ],
    company: [
      'About Us',
      'Portfolio',
      'Case Studies',
      'Blog',
      'Careers',
      'Contact'
    ],
    resources: [
      'Design Process',
      'FAQ',
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'Support Center'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-blue-400' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' }
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
            <div className="flex items-center space-x-3 mb-6 group">
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
              <div className="flex items-center space-x-3 group hover:text-brand-blue-400 transition-colors duration-200">
                <Mail className="h-4 w-4 text-brand-blue-400 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-gray-300">hakaddigitallab@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 group hover:text-brand-green-400 transition-colors duration-200">
                <Phone className="h-4 w-4 text-brand-green-400 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-gray-300">+234 816 167 3433</span>
              </div>
              <div className="flex items-center space-x-3 group hover:text-purple-400 transition-colors duration-200">
                <MapPin className="h-4 w-4 text-purple-400 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-gray-300">Lekki, Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand-blue-400">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                    {link}
                  </a>
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
                  <a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                    {link}
                  </a>
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
                  <a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                    {link}
                  </a>
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
                Subscribe to our newsletter for the latest design trends and digital insights.
              </p>
            </div>
            
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-brand-blue-600 to-brand-green-500 px-6 py-3 rounded-xl font-semibold hover:from-brand-blue-700 hover:to-brand-green-600 transition-all duration-300 hover:scale-105 shadow-lg">
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