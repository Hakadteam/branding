import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-12 w-auto',
    lg: 'h-16 w-auto'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="Hakad Digital Lab"
        className={`${sizeClasses[size]} transition-all duration-300 hover:scale-105 filter drop-shadow-sm`}
        onError={(e) => {
          // Fallback if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = 'flex';
        }}
      />
      <div className="hidden items-center text-xl font-bold">
        <span className="text-brand-blue-600">HAKAD</span>
        <span className="text-brand-green-500 ml-1">DIGITAL LAB</span>
      </div>
    </div>
  );
};

export default Logo;