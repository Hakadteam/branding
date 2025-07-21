import React from 'react';
import ContactComponent from '../components/Contact';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Star, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hakaddigitallab@gmail.com',
      subtitle: 'Get a response within 24 hours',
      color: 'blue'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+234 816 167 3433',
      subtitle: 'Mon-Fri 9AM-6PM WAT',
      color: 'green'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Lagos, Nigeria',
      subtitle: 'Available for in-person meetings',
      color: 'purple'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM WAT' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM WAT' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-green-50/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <MessageCircle className="h-4 w-4" />
              <span>Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Let's Work <span className="text-blue-600">Together</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to grow your business? Reach out to discuss your project or book a free consultation. 
              We're here to help you achieve your digital marketing goals.
            </p>
          </div>

          {/* Quick Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 bg-${method.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-lg font-semibold text-gray-800 mb-2">{method.details}</p>
                  <p className="text-gray-600">{method.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Business Hours</h2>
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Emergency Support</h3>
                </div>
                <p className="text-gray-600">
                  For urgent matters outside business hours, send us an email and we'll respond as soon as possible.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Free Consultation Available</h3>
              <p className="text-blue-100 mb-6">
                Book a free 30-minute consultation to discuss your project and get expert advice on your digital strategy.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span>No commitment required</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span>Expert advice included</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span>Custom strategy recommendations</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Component */}
      <ContactComponent />

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How long does a typical project take?</h3>
                <p className="text-gray-600">
                  Project timelines vary depending on scope and complexity. Most projects range from 4-12 weeks. 
                  We'll provide a detailed timeline during our initial consultation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you work with businesses outside Nigeria?</h3>
                <p className="text-gray-600">
                  Yes! We work with clients across Africa and internationally. We have experience with various 
                  markets and can adapt our strategies to different regions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What's included in the free consultation?</h3>
                <p className="text-gray-600">
                  Our free consultation includes a business analysis, strategy recommendations, 
                  project scope discussion, and a custom proposal tailored to your needs.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What are your payment terms?</h3>
                <p className="text-gray-600">
                  We typically work with 50% upfront and 50% upon completion for smaller projects. 
                  Larger projects can be broken into milestone-based payments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you provide ongoing support?</h3>
                <p className="text-gray-600">
                  Yes! We offer various support packages including maintenance, updates, 
                  performance monitoring, and ongoing optimization services.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Can you help with existing websites?</h3>
                <p className="text-gray-600">
                  Absolutely! We can audit, optimize, and improve existing websites and digital assets. 
                  We'll assess your current setup and recommend the best path forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;