import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, List } from 'lucide-react';
import { Button } from '../ui/Button';

interface FinalApprovalProps {
  onComplete: () => void;
}

export const FinalApproval: React.FC<FinalApprovalProps> = ({ onComplete }) => {
  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center pb-12">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        <Heart size={120} className="text-action-accent fill-current" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-action-text mb-4">
          Juhu!
        </h1>
        <p className="text-xl md:text-2xl text-action-text/80">
          Ich freu mich riesig auf unser Wochenende! ❤️
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <Button 
          onClick={onComplete} 
          size="lg" 
          variant="outline"
          className="bg-white/50 backdrop-blur-sm"
          leftIcon={<List size={20} />}
        >
          Zusammenfassung anzeigen
        </Button>
        
        <p className="text-sm text-gray-500">
          Screenshot machen & Vorfreude genießen.
        </p>
      </motion.div>
    </div>
  );
};