import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Snowflake } from 'lucide-react';
import { Button } from '../ui/Button';
import { PhotoPlaceholder } from '../ui/PhotoPlaceholder';

interface IntroSectionProps {
  onComplete: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onComplete }) => {
  return (
    <div className="flex flex-col items-center gap-8 text-center pb-12">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute -top-6 -left-6 text-wellness-secondary opacity-50">
          <Snowflake size={32} />
        </div>
        <div className="absolute -bottom-6 -right-6 text-wellness-secondary opacity-50">
          <Snowflake size={32} />
        </div>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-wellness-accent mb-2">
          Alles Gute,
          <br />
          Clarissa!
        </h1>
        <div className="flex justify-center mt-2 text-wellness-accent">
          <Heart size={32} fill="currentColor" className="animate-pulse" />
        </div>
      </motion.div>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl text-wellness-text max-w-md mx-auto leading-relaxed"
      >
        Zum Jubiläum & Weihnachten habe ich mir etwas ganz Besonderes für uns überlegt...
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="w-full max-w-sm"
      >
        <PhotoPlaceholder label="Unser schönstes Foto ❤️" className="h-64 shadow-lg rotate-2" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <Button 
            onClick={onComplete} 
            size="lg" 
            className="mt-4 shadow-wellness-accent/20 shadow-xl"
            rightIcon={<span className="text-lg">✨</span>}
        >
          Geschenk auspacken
        </Button>
      </motion.div>
    </div>
  );
};
