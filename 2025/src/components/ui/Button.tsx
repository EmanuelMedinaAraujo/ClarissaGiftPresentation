import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  theme?: 'wellness' | 'action';
}

// Combine Framer Motion props with our custom props
type MotionButtonProps = ButtonProps & MotionProps;

export const Button = React.forwardRef<HTMLButtonElement, MotionButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading,
      leftIcon,
      rightIcon,
      children,
      theme = 'wellness',
      disabled,
      ...props
    },
    ref
  ) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: theme === 'wellness' 
        ? "bg-wellness-accent text-white hover:bg-opacity-90 focus:ring-wellness-accent"
        : "bg-action-accent text-white hover:bg-red-600 focus:ring-action-accent shadow-lg",
      secondary: theme === 'wellness'
        ? "bg-wellness-secondary text-white hover:bg-opacity-90"
        : "bg-action-secondary text-white hover:bg-blue-600",
      outline: "border-2 bg-transparent hover:bg-gray-50",
      ghost: "bg-transparent hover:bg-gray-100",
    };
    
    // Dynamic outline colors based on theme
    const outlineColors = theme === 'wellness'
        ? "border-wellness-accent text-wellness-accent"
        : "border-action-accent text-action-accent";

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-5 py-2.5 text-base",
      lg: "px-8 py-3.5 text-lg",
    };

    const variantStyles = variant === 'outline' ? `${variants.outline} ${outlineColors}` : variants[variant];

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={clsx(baseStyles, variantStyles, sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <span className="mr-2 animate-spin">⏳</span> 
        )}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
