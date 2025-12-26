import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  theme?: 'wellness' | 'action';
}

export const Layout: React.FC<LayoutProps> = ({ children, className, theme = 'wellness' }) => {
  return (
    <div
      className={clsx(
        "min-h-screen w-full flex flex-col items-center justify-center p-4 transition-colors duration-700 font-sans",
        theme === 'action' ? "theme-action bg-action-bg text-action-text" : "bg-wellness-bg text-wellness-text"
      )}
    >
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className={clsx("w-full max-w-md mx-auto relative", className)}
      >
        {children}
      </motion.main>
    </div>
  );
};
