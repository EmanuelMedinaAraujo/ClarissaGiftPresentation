import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Button } from '../ui/Button';
import { PhotoPlaceholder } from '../ui/PhotoPlaceholder';

interface TripTeaserProps {
  onComplete: () => void;
}

export const TripTeaser: React.FC<TripTeaserProps> = ({ onComplete }) => {
  return (
    <div className="flex flex-col items-center gap-8 text-center pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-serif text-wellness-accent mb-2">
          Wir machen einen kleinen Trip!
        </h2>
        <p className="text-wellness-text opacity-80">
          Nur wir zwei.
        </p>
      </motion.div>

      <div className="flex items-center justify-center gap-4 w-full max-w-lg">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-1"
        >
          <PhotoPlaceholder label="Clarissa" height="h-40" />
        </motion.div>

        <motion.div
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           transition={{ delay: 0.8, type: "spring" }}
        >
          <Plus className="text-wellness-accent" size={32} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex-1"
        >
          <PhotoPlaceholder label="Emanuel" height="h-40" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <Button onClick={onComplete} size="lg">
          Mehr Details
        </Button>
      </motion.div>
    </div>
  );
};
