import { useState, useCallback } from 'react';

export interface SchedulingConfig {
  calendlyUrl: string;
  meetingDuration: number;
  timezone: string;
  bufferTime: number;
}

export const useScheduling = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonType, setButtonType] = useState<'consultation' | 'schedule'>('consultation');

  const openScheduling = useCallback((type: 'consultation' | 'schedule' = 'consultation') => {
    setButtonType(type);
    setIsModalOpen(true);
    
    // Track scheduling button clicks
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'scheduling_opened', {
        event_category: 'engagement',
        event_label: type,
        value: 1
      });
    }
  }, []);

  const closeScheduling = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleSchedulingSuccess = useCallback((eventData: any) => {
    // Track successful bookings
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'consultation_booked', {
        event_category: 'conversion',
        event_label: buttonType,
        value: 1
      });
    }

    // You can add additional success handling here
    console.log('Consultation booked successfully:', eventData);
  }, [buttonType]);

  return {
    isModalOpen,
    buttonType,
    openScheduling,
    closeScheduling,
    handleSchedulingSuccess
  };
};

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}