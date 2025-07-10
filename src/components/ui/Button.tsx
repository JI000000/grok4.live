import React from 'react';
import { cn } from '@/lib/utils';
import type { ButtonVariant, ButtonSize } from '@/types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

const buttonVariants = {
  primary: 'bg-gradient-to-r from-brand-500 to-purple-500 text-white hover:from-brand-600 hover:to-purple-600 hover:shadow-glow border-transparent',
  secondary: 'bg-gray-800/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-600',
  ghost: 'bg-transparent text-gray-300 border-transparent hover:text-white hover:bg-gray-800/50',
  outline: 'bg-transparent text-brand-500 border-brand-500/50 hover:bg-brand-500/10 hover:border-brand-500',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'left',
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 border',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-black',
        buttonVariants[variant],
        buttonSizes[size],
        loading && 'cursor-not-allowed',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      
      {icon && iconPosition === 'left' && !loading && (
        <span className="mr-2">{icon}</span>
      )}
      
      {children}
      
      {icon && iconPosition === 'right' && !loading && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
} 