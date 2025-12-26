import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Waves } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { PhotoPlaceholder } from '../ui/PhotoPlaceholder';

interface HotelRevealProps {
  onComplete: () => void;
}

export const HotelReveal: React.FC<HotelRevealProps> = ({ onComplete }) => {
  return (
    <div className="flex flex-col items-center gap-8 text-center pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="text-3xl font-serif text-wellness-accent">Zeit für Entspannung</h2>
        <p className="text-wellness-text opacity-90 leading-relaxed max-w-md">
          Nach all den Vorbereitungen haben wir uns etwas Erholung verdient.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="p-4 bg-white/50 backdrop-blur-sm">
           <PhotoPlaceholder label="Unser Hotel in den Bergen" height="h-64" />
           <div className="mt-6 flex justify-around text-wellness-secondary">
              <div className="flex flex-col items-center gap-2">
                <Waves size={28} />
                <span className="text-sm font-medium uppercase tracking-wider">Pool</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl leading-none">♨️</span>
                <span className="text-sm font-medium uppercase tracking-wider">Sauna</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Dumbbell size={28} />
                <span className="text-sm font-medium uppercase tracking-wider">Gym</span>
              </div>
           </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
         {/* Simple transition button, text can be "One more thing..." implicitly or explicitly next page */}
         <Button onClick={onComplete} variant="primary" className="px-8 shadow-lg font-bold">
            Juhu!
         </Button>
      </motion.div>
    </div>
  );
};
