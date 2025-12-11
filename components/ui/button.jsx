'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const Button = React.forwardRef(
  (
    {
      children,
      className = '',
      variant = 'primary',
      size = 'md',
      as: Component = 'button',
      disabled = false,
      loading = false,
      icon: Icon,
      iconPosition = 'left',
      fullWidth = false,
      rounded = 'full',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-emerald-400 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      primary:
        'bg-gradient-to-r from-brand-emerald-500 to-brand-blue-500 text-white hover:shadow-lg hover:shadow-brand-emerald-500/20 hover:-translate-y-0.5',
      secondary:
        'bg-white/5 border border-brand-border text-brand-text hover:bg-white/10 hover:border-white/20',
      ghost:
        'text-brand-text hover:bg-white/5 hover:text-white',
      link: 'text-brand-emerald-400 hover:text-brand-emerald-300 hover:underline underline-offset-4',
      outline:
        'border border-brand-border/50 bg-transparent text-brand-text hover:bg-white/5 hover:border-brand-emerald-400/30',
    };

    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-10 px-6 text-base',
      lg: 'h-12 px-8 text-lg',
      xl: 'h-14 px-10 text-xl',
      icon: 'h-10 w-10',
    };

    const roundness = {
      none: 'rounded-none',
      sm: 'rounded',
      md: 'rounded-lg',
      lg: 'rounded-xl',
      xl: 'rounded-2xl',
      full: 'rounded-full',
    };

    const iconSizes = {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
      xl: 'h-7 w-7',
    };

    const iconOnly = !children && Icon;
    const iconClass = cn(
      iconSizes[size],
      iconPosition === 'left' ? 'mr-2' : 'ml-2',
      loading && 'opacity-0',
      iconOnly && 'm-0'
    );

    const buttonClass = cn(
      baseStyles,
      variants[variant],
      sizes[iconOnly ? 'icon' : size],
      roundness[rounded],
      fullWidth && 'w-full',
      className
    );

    const LoadingSpinner = () => (
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
    );

    return (
      <Component
        ref={ref}
        className={cn('relative overflow-hidden', buttonClass, {
          'opacity-70 cursor-not-allowed': disabled || loading,
          'cursor-pointer': !disabled && !loading,
        })}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <LoadingSpinner />}
        <span className={cn('flex items-center', { 'opacity-0': loading })}>
          {Icon && iconPosition === 'left' && <Icon className={iconClass} />}
          {children && (
            <span className={loading ? 'opacity-0' : 'opacity-100'}>
              {children}
            </span>
          )}
          {Icon && iconPosition === 'right' && <Icon className={iconClass} />}
        </span>
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;
