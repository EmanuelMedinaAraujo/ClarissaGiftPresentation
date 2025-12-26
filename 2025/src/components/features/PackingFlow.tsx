import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Waves, Snowflake, Wine, ArrowRight, Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { packingList } from '../../data/packingList';

interface PackingFlowProps {
  onComplete: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  'Dumbbell': <Dumbbell size={24} />,
  'Waves': <Waves size={24} />,
  'Snowflake': <Snowflake size={24} />,
  'Wine': <Wine size={24} />,
};

export const PackingFlow: React.FC<PackingFlowProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  const currentItem = packingList[step];
  const isLastItem = step === packingList.length - 1;

  const handleNext = () => {
    if (isLastItem) {
      onComplete();
    } else {
      setStep(prev => prev + 1);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto pb-12 min-h-[400px] flex flex-col justify-center">
      <h2 className="text-2xl font-serif text-wellness-accent text-center mb-8">
        Was müssen wir mitnehmen?
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-6"
        >
          {/* Anecdote Card */}
          <Card className="p-6 bg-white shadow-md border-wellness-secondary/20">
            <p className="text-lg text-center font-medium text-wellness-text leading-relaxed italic">
              "{currentItem.anecdote}"
            </p>
          </Card>

          {/* Item Display */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="h-32 flex flex-col items-center justify-center gap-2"
          >
            <div className="p-4 bg-wellness-accent/10 rounded-full text-wellness-accent mb-2">
              {iconMap[currentItem.icon]}
            </div>
            <h3 className="text-xl font-bold text-wellness-accent">
              {currentItem.label}
            </h3>
          </motion.div>

          {/* Action Button */}
          <div className="flex justify-center h-16">
             <Button onClick={handleNext} rightIcon={isLastItem ? <ArrowRight /> : <Check />}>
               {isLastItem ? "Wohin geht's?" : "Weiter"}
             </Button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {packingList.map((_, index) => (
              <div 
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === step ? "w-8 bg-wellness-accent" : 
                  index < step ? "w-2 bg-wellness-accent/40" : "w-2 bg-gray-200"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};