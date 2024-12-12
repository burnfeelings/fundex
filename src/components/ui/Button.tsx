import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

export function Button({ 
  variant = 'primary', 
  children, 
  className,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'px-6 py-2 rounded-full transition-all',
        variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
        variant === 'secondary' && 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}