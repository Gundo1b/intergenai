import React from 'react';

interface ColorChangingTextProps {
  text: string;
  className?: string;
}

export const ColorChangingText: React.FC<ColorChangingTextProps> = ({ text, className }) => {
  return (
    <span className={`text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end ${className}`}>
      {text}
    </span>
  );
};
