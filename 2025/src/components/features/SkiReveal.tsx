import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Mountain, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { PhotoPlaceholder } from '../ui/PhotoPlaceholder';

interface SkiRevealProps {
  onComplete: () => void;
}

export const SkiReveal: React.FC<SkiRevealProps> = ({ onComplete }) => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
    };
    sequence();
  }, [controls]);

  return (
    <div className="flex flex-col items-center gap-8 pb-12 overflow-hidden">
      {/* "One more thing" Transition Effect - handled by parent layout mostly, 
          but we add some initial punch here */}
      
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.5, duration: 1 }}
        className="text-center"
      >
        <div className="inline-block p-4 rounded-full bg-action-accent text-white mb-6 shadow-xl animate-bounce">
          <Mountain size={48} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-action-accent uppercase tracking-tighter leading-tight transform -rotate-2">
          Wir gehen
          <br />
          <span className="text-action-secondary">Skifahren!</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex items-center gap-2 text-xl font-bold text-action-text bg-white/80 px-4 py-2 rounded-lg shadow-sm"
      >
        <MapPin className="text-action-accent" />
        <span>Garmisch-Partenkirchen</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="w-full max-w-sm rotate-1 hover:rotate-0 transition-transform duration-500"
      >
        <PhotoPlaceholder 
          label="Wir zwei auf der Piste! ⛷️" 
          height="h-64" 
          className="border-action-secondary bg-action-bg"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="text-center max-w-xs text-action-text/80 font-medium"
      >
        <p>
          Freitag & Samstag machen wir die Pisten unsicher.
          <br />
          Das Hotel Dorint ist natürlich direkt dabei!
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        className="w-full max-w-xs"
      >
        <Button 
          onClick={onComplete} 
          size="lg" 
          theme="action" 
          className="w-full font-bold text-lg shadow-action-accent/30 shadow-xl"
          rightIcon="📅"
        >
          Zum Zeitplan
        </Button>
      </motion.div>
    </div>
  );
};
