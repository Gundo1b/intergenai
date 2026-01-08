import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'full' }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Wordmark */}
      
      
      {/* Mark */}
      <img src="/logo.png" alt="Integen Logo" className="h-10" />
    </div>
  );
};
