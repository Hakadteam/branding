import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Video, CheckCircle } from 'lucide-react';

interface SchedulingModalProps {
  isOpen: boolean;
  onClose: () => void;
  buttonType: 'consultation' | 'schedule';
}

const SchedulingModal: React.FC<SchedulingModalProps> = ({ isOpen, onClose, buttonType }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  // Calendly configuration
  const calendlyUrl = 'https://calendly.com/hakaddigitallab/consultation'; // Replace with actual Calendly URL
  
  useEffect(() => {
    if (isOpen && !calendlyLoaded) {
      // Load Calendly widget script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onerror = () => {
        console.error('Failed to load Calendly script');
        setIsLoading(false);
      };
      script.onload = () => {
        setCalendlyLoaded(true);
        setIsLoading(false);
        
        // Initialize Calendly widget
        if (window.Calendly) {
          try {
            window.Calendly.initInlineWidget({
              url: calendlyUrl,
              parentElement: document.getElementById('calendly-inline-widget'),
              prefill: {},
              utm: {
                utmCampaign: 'HAKAD Digital Lab Website',
                utmSource: buttonType === 'consultation' ? 'consultation-button' : 'schedule-button',
                utmMedium: 'website'
              }
            });
          } catch (error) {
            console.error('Error initializing Calendly widget:', error);
            setIsLoading(false);
          }
        } else {
          console.error('Calendly object not available');
          setIsLoading(false);
        }
      };
      document.head.appendChild(script);
    }
  }, [isOpen, calendlyLoaded, buttonType]);

  // Handle Calendly events
  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        if (e.data.event === 'calendly.event_scheduled') {
          // Show success message and close modal after scheduling
          setTimeout(() => {
            onClose();
          }, 2000);
        }
      }
    };

    window.addEventListener('message', handleCalendlyEvent);
    return () => window.removeEventListener('message', handleCalendlyEvent);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Book Your Free Consultation</h2>
            <p className="text-gray-600 mt-1">Choose a convenient time for your 30-minute strategy session</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {/* Features */}
        <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-green-50">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Video className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Google Meet</p>
                <p className="text-sm text-gray-600">Video call included</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <Clock className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">30 Minutes</p>
                <p className="text-sm text-gray-600">Strategy session</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Free</p>
                <p className="text-sm text-gray-600">No commitment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Calendly Widget Container */}
        <div className="relative" style={{ height: '600px' }}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Loading calendar...</p>
              </div>
            </div>
          )}
          {!isLoading && !calendlyLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <p className="text-gray-600 mb-4">Unable to load calendar widget</p>
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Open Calendar in New Tab
                </a>
              </div>
            </div>
          )}
          <div
            id="calendly-inline-widget"
            className="w-full h-full"
            style={{ minWidth: '320px' }}
          ></div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              <p>Questions? Email us at <a href="mailto:hakaddigitallab@gmail.com" className="text-blue-600 hover:underline">hakaddigitallab@gmail.com</a></p>
            </div>
            <div className="text-sm text-gray-500">
              Powered by Calendly
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Extend Window interface for Calendly
declare global {
  interface Window {
    Calendly: any;
  }
}

export default SchedulingModal;