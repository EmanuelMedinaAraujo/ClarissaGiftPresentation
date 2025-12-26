import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, MapPin, Snowflake } from 'lucide-react';
import { Button } from '../ui/Button';

interface SkiRevealProps {
  onComplete: () => void;
}

export const SkiReveal: React.FC<SkiRevealProps> = ({ onComplete }) => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center py-2 md:py-4 px-4 md:px-8">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
        <motion.div 
           animate={{ y: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }}
           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-4 left-4 text-action-secondary opacity-10"
        >
           <Snowflake size={40} />
        </motion.div>
        <motion.div 
           animate={{ y: [0, -30, 0], opacity: [0.1, 0.2, 0.1] }}
           transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
           className="absolute bottom-10 right-4 text-action-secondary opacity-10"
        >
           <Snowflake size={60} />
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center gap-3 md:gap-5 text-center">
        
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="bg-action-accent text-white p-3 md:p-4 rounded-full shadow-2xl shrink-0"
        >
          <Mountain size={40} strokeWidth={2.5} />
        </motion.div>

        {/* Main Text */}
        <div className="space-y-1 md:space-y-3 w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-4xl font-bold text-action-text leading-tight break-words"
          >
            Wir gehen übrigens auch noch...
          </motion.h1>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
            className="bg-action-secondary/10 py-2 md:py-4 px-6 md:px-10 rounded-2xl md:rounded-3xl transform -rotate-1 inline-block max-w-full"
          >
            <span className="block text-3xl sm:text-4xl md:text-6xl font-black text-action-accent uppercase tracking-wider break-words leading-none">
              SKIFAHREN!
            </span>
          </motion.div>
        </div>

        {/* Location Tag */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 1.2 }}
           className="flex items-center gap-2 text-base md:text-lg font-medium text-slate-600 bg-white/60 px-5 py-2 rounded-full shadow-sm border border-slate-100"
        >
           <MapPin className="text-action-accent shrink-0" size={18} />
           <span>Garmisch-Partenkirchen</span>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="mt-1 md:mt-2"
        >
           <Button 
            onClick={onComplete} 
            size="lg" 
            theme="action"
            className="text-lg px-10 py-2 md:py-3 font-bold shadow-lg shadow-action-accent/20 hover:scale-105 transition-transform"
            rightIcon={<span className="text-xl">😎</span>}
           >
             Wie cool!
           </Button>
        </motion.div>
      </div>
    </div>
  );
};