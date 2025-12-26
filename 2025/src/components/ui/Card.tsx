import React from 'react';
import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import clsx from 'clsx';

interface CardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  theme?: 'wellness' | 'action';
}

export const Card: React.FC<CardProps> = ({ children, className, theme = 'wellness', ...props }) => {
  return (
    <motion.div
      className={clsx(
        "rounded-2xl shadow-sm overflow-hidden",
        theme === 'wellness' 
          ? "bg-white border border-stone-100" 
          : "bg-white border-2 border-action-secondary shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
