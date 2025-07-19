import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Star, MessageCircle, Calendar, ExternalLink, AlertCircle } from 'lucide-react';
import { contactService } from '../lib/supabase';
import { useScheduling } from '../hooks/useScheduling';
import SchedulingModal from './SchedulingModal';
import SchedulingButton from './SchedulingButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { isModalOpen, buttonType, openScheduling, closeScheduling } = useScheduling();

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
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('Please fill in all required fields');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      await contactService.create({
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        service: 'general-inquiry',
        message: formData.message.trim()
      });

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent('Inquiry - HAKAD Digital Lab Services');
    const body = encodeURIComponent(`Hello HAKAD Digital Lab team,

I'm interested in learning more about your digital services and would like to discuss my project requirements.

Please get back to me at your earliest convenience to schedule a consultation.

Best regards`);
    
    window.location.href = `mailto:hakaddigitallab@gmail.com?subject=${subject}&body=${body}`;
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+2348161673433';
  };

  const handleLocationClick = () => {
    const location = encodeURIComponent('Lagos, Nigeria');
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${location}`;
    window.open(googleMapsUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hakaddigitallab@gmail.com',
      subtitle: 'Get a response within 24 hours',
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
      details: 'Lagos, Nigeria',
      subtitle: 'Available for in-person meetings',
      color: 'purple',
      onClick: handleLocationClick
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/hakaddigitallab', color: 'bg-blue-600' },
    { name: 'Twitter', url: 'https://twitter.com/hakaddigitallab', color: 'bg-blue-400' },
    { name: 'Instagram', url: 'https://instagram.com/hakaddigitallab', color: 'bg-pink-600' },
    { name: 'Facebook', url: 'https://facebook.com/hakaddigitallab', color: 'bg-blue-700' }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="h-4 w-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reach out to discuss your project or book a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-300 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-green-800 font-medium">Message sent successfully!</p>
                    <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="text-red-800 font-medium">Error sending message</p>
                    <p className="text-red-600 text-sm">{submitError}</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50"
                    placeholder="Tell us about your project or how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Ready to take your business to the next level? Get in touch with us directly through any of these channels.
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-4">
              <div 
                className="flex items-center space-x-4 group hover:scale-105 transition-all duration-300 cursor-pointer bg-white rounded-xl p-4 shadow-sm hover:shadow-md" 
                onClick={handleEmailClick}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors flex items-center">
                    Email Us
                    <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-gray-900 font-medium">hakaddigitallab@gmail.com</p>
                  <p className="text-gray-600 text-sm">Get a response within 24 hours</p>
                </div>
              </div>

              <div 
                className="flex items-center space-x-4 group hover:scale-105 transition-all duration-300 cursor-pointer bg-white rounded-xl p-4 shadow-sm hover:shadow-md" 
                onClick={handlePhoneClick}
              >
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors flex items-center">
                    Call Us
                    <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-gray-900 font-medium">+234 816 167 3433</p>
                  <p className="text-gray-600 text-sm">Mon-Fri 9AM-6PM WAT</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h4>
              <div className="space-y-3">
                <a
                  href="https://instagram.com/hakaddigitallab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-700 hover:text-pink-600 transition-colors group"
                >
                  <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm font-bold">IG</span>
                  </div>
                  <span className="font-medium">@hakaddigitallab</span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                
                <a
                  href="https://facebook.com/hakaddigitallab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors group"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm font-bold">FB</span>
                  </div>
                  <span className="font-medium">hakaddigitallab</span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Location</h4>
              <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 font-medium">Lagos, Nigeria</p>
                  <p className="text-gray-500 text-sm">Available for in-person meetings</p>
                </div>
              </div>
            </div>

            {/* Free Consultation CTA */}
            <div className="bg-green-600 rounded-xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="h-6 w-6" />
                <h4 className="text-xl font-bold">Free Consultation</h4>
              </div>
              <p className="mb-4 opacity-90">
                Book a free 30-minute consultation to discuss your project and get expert advice on your digital strategy.
              </p>
              <SchedulingButton
                variant="outline"
                size="md"
                type="schedule"
                onClick={() => openScheduling('schedule')}
                className="bg-white text-green-600 hover:bg-green-600 hover:text-white border-white"
              >
                Schedule Now
              </SchedulingButton>
            </div>
          </div>
        </div>
        
        {/* Scheduling Modal */}
        <SchedulingModal
          isOpen={isModalOpen}
          onClose={closeScheduling}
          buttonType={buttonType}
        />
      </div>
    </section>
  );
};

export default Contact;