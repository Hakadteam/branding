import React from 'react';
import { Calendar, ArrowRight, Clock, Video } from 'lucide-react';

interface SchedulingButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
  type: 'consultation' | 'schedule';
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
}

const SchedulingButton: React.FC<SchedulingButtonProps> = ({
  variant = 'primary',
  size = 'md',
  type = 'consultation',
  onClick,
  className = '',
  children
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 hover:shadow-xl',
    secondary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:shadow-xl',
    outline: 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white hover:shadow-xl'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm space-x-2',
    md: 'px-6 py-3 text-base space-x-2',
    lg: 'px-8 py-4 text-lg space-x-3'
  };

  const buttonText = children || (type === 'consultation' ? 'Get Your Free Consultation' : 'Schedule Now');
  const icon = type === 'consultation' ? Calendar : Clock;
  const Icon = icon;

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      aria-label={`${buttonText} - Opens scheduling modal`}
    >
      <Icon className={`${size === 'lg' ? 'h-6 w-6' : size === 'md' ? 'h-5 w-5' : 'h-4 w-4'}`} />
      <span>{buttonText}</span>
      <ArrowRight className={`${size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'} group-hover:translate-x-1 transition-transform`} />
    </button>
  );
};

export default SchedulingButton;