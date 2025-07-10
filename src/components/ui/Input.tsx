import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  wrapperClassName?: string;
}

export function Input({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  wrapperClassName,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={cn('space-y-2', wrapperClassName)}>
      {/* Label */}
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-300"
        >
          {label}
        </label>
      )}

      {/* Input Container */}
      <div className="relative">
        {/* Left Icon */}
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {leftIcon}
          </div>
        )}

        {/* Input */}
        <input
          id={inputId}
          className={cn(
            'w-full bg-gray-900/50 border rounded-lg px-4 py-3 text-white placeholder-gray-400',
            'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent',
            error
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-700 hover:border-gray-600',
            leftIcon && 'pl-10',
            rightIcon && 'pr-10',
            className
          )}
          {...props}
        />

        {/* Right Icon */}
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>

      {/* Helper Text or Error */}
      {(error || helperText) && (
        <p
          className={cn(
            'text-sm',
            error ? 'text-red-400' : 'text-gray-500'
          )}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
} 