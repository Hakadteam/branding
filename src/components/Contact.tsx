import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles, Calendar, Video, ExternalLink } from 'lucide-react';
import MeetingScheduler from './MeetingScheduler';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [showMeetingScheduler, setShowMeetingScheduler] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleLocationClick = () => {
    // Open Google Maps with the location
    const location = encodeURIComponent('Lekki, Lagos, Nigeria');
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${location}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleEmailClick = () => {
    // Enhanced mailto functionality that works with all email clients
    const subject = encodeURIComponent('Inquiry - Hakad Digital Lab Services');
    const body = encodeURIComponent(`Hello Hakad Digital Lab team,

I'm interested in learning more about your digital services and would like to discuss my project requirements.

Please get back to me at your earliest convenience to schedule a consultation.

Best regards`);
    
    // Create mailto link that opens user's default email client
    const mailtoLink = `mailto:hakaddigitallab@gmail.com?subject=${subject}&body=${body}`;
    
    // Use window.location.href for better compatibility across all email clients
    window.location.href = mailtoLink;
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+2348161673433';
  };

  const handleScheduleCall = () => {
    setShowMeetingScheduler(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hakaddigitallab@gmail.com',
      subtitle: 'Opens your email client to compose message',
      color: 'blue',
      onClick: handleEmailClick
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+234 816 167 3433',
      subtitle: 'Mon-Fri 9AM-6PM WAT',
      color: 'green',
      onClick: handlePhoneClick
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Lekki, Lagos, Nigeria',
      subtitle: 'View location on Google Maps',
      color: 'purple',
      onClick: handleLocationClick
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-brand-blue-600 to-brand-blue-700',
      green: 'from-brand-green-600 to-brand-green-700',
      purple: 'from-purple-600 to-purple-700'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <>
      <section ref={sectionRef} id="contact" className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-r from-orange-100/30 to-red-100/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-brand-blue-100/30 to-brand-green-100/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-bounce-slow">
              <Sparkles className="h-4 w-4 animate-spin" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-in-left">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-right">
              Let's discuss how we can help transform your digital presence and drive your business forward.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 transition-all duration-1000 delay-300 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 animate-fade-in">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="animate-slide-up stagger-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition-all duration-300 hover:border-brand-blue-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="animate-slide-up stagger-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition-all duration-300 hover:border-brand-blue-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="animate-slide-up stagger-3">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition-all duration-300 hover:border-brand-blue-300"
                  >
                    <option value="">Select a service</option>
                    <option value="website-design">Website Design & Development</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="funnel">Funnel Development</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
                
                <div className="animate-slide-up stagger-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition-all duration-300 resize-none hover:border-brand-blue-300"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-gradient-to-r from-brand-blue-600 to-brand-green-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:from-brand-blue-700 hover:to-brand-green-600 hover:scale-105 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed animate-pulse-glow hover:animate-bounce"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="h-5 w-5 animate-spin" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 group-hover:animate-bounce" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className={`space-y-8 transition-all duration-1000 delay-500 ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We'd love to hear about your project. Choose your preferred way to reach us and we'll respond as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const colorClass = getColorClasses(info.color);
                  return (
                    <div 
                      key={index} 
                      className={`flex items-start space-x-4 group hover:scale-105 transition-all duration-300 cursor-pointer animate-slide-up bg-white rounded-xl p-4 shadow-sm hover:shadow-md border border-gray-100 hover:border-gray-200`} 
                      style={{ animationDelay: `${index * 200 + 600}ms` }}
                      onClick={info.onClick}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${colorClass} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-pulse-glow`}>
                        <Icon className="h-6 w-6 text-white group-hover:animate-bounce" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-brand-blue-600 transition-colors duration-300 flex items-center">
                          {info.title}
                          <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </h4>
                        <p className="text-gray-900 font-medium mb-1 group-hover:text-brand-green-600 transition-colors duration-300">
                          {info.details}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Enhanced CTA Section */}
              <div className="bg-gradient-to-r from-brand-blue-600 to-brand-green-500 rounded-2xl p-8 text-white relative overflow-hidden animate-gradient-x">
                {/* Animated background elements */}
                <div className="absolute top-4 right-4 w-6 h-6 border-2 border-white/20 rounded-full animate-spin"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/10 rounded-full animate-pulse"></div>
                
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-3 animate-slide-in-left">Ready to get started?</h4>
                  <p className="mb-4 opacity-90 animate-slide-in-right">
                    Schedule a consultation call to discuss your project requirements in detail.
                  </p>
                  <button 
                    onClick={handleScheduleCall}
                    className="bg-white text-brand-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 animate-bounce-slow hover:animate-pulse flex items-center space-x-2"
                  >
                    <Calendar className="h-5 w-5" />
                    <span>Schedule a Call</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Scheduler Modal */}
      <MeetingScheduler 
        isOpen={showMeetingScheduler}
        onClose={() => setShowMeetingScheduler(false)}
      />
    </>
  );
};

export default Contact;