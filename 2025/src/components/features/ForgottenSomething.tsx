import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

interface ForgottenSomethingProps {
  onComplete: () => void;
}

export const ForgottenSomething: React.FC<ForgottenSomethingProps> = ({ onComplete }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-8 text-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-6xl mb-4 block">🫣</span>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-wellness-text leading-tight">
          Ups...
        </h1>
        <p className="text-xl md:text-2xl text-wellness-secondary mt-4 max-w-md mx-auto">
          Da hab ich wohl vergessen etwas zu erwähnen...
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <Button onClick={onComplete} variant="secondary">
          Was denn?
        </Button>
      </motion.div>
    </div>
  );
};