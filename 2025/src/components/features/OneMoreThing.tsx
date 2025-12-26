import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface OneMoreThingProps {
  onComplete: () => void;
}

export const OneMoreThing: React.FC<OneMoreThingProps> = ({ onComplete }) => {
  
  useEffect(() => {
    // Auto advance after a few seconds? Or require click? 
    // "Page with one more thing or something similar"
    // Let's make it interactive for suspense.
  }, []);

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-[50vh] cursor-pointer"
      onClick={onComplete}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-serif font-bold text-wellness-accent text-center"
      >
        Eine Sache noch...
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-8 text-wellness-secondary animate-pulse"
      >
        (Tippen)
      </motion.p>
    </div>
  );
};
