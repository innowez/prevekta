import React from 'react';
import { cn } from '@/lib/utils'; // Optional: for className merging utility

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'fill' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}


const NormalButton: React.FC<ButtonProps> = ({
  variant = 'fill',
  size = 'md',
  children,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium font-[Duplet] rounded-full whitespace-nowrap transition-colors focus:outline-none disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed';
  
  const variants = {
    fill: 'bg-primary text-white hover:bg-primary border border-primary active:bg-white',
    outline: 'border border-primary text-primary bg-transparent active:bg-white'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const buttonClasses = cn
    ? cn(baseStyles, variants[variant], sizes[size], className)
    : `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`;

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default NormalButton;

// Usage examples:
// <Button variant="fill">Fill Button</Button>
// <Button variant="outline">Outline Button</Button>
// <Button variant="fill" size="lg" onClick={() => console.log('clicked')}>
//   Large Fill Button
// </Button>