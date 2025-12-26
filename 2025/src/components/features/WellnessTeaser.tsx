import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Waves, Snowflake, Wine, Check } from 'lucide-react';
import clsx from 'clsx';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { PhotoPlaceholder } from '../ui/PhotoPlaceholder';
import { packingList } from '../../data/packingList';

interface WellnessTeaserProps {
  onComplete: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  'Dumbbell': <Dumbbell size={20} />,
  'Waves': <Waves size={20} />,
  'Snowflake': <Snowflake size={20} />,
  'Wine': <Wine size={20} />,
};

export const WellnessTeaser: React.FC<WellnessTeaserProps> = ({ onComplete }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  
  const allChecked = packingList.every(item => checkedItems[item.id]);

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* Hotel Teaser Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="text-3xl font-serif text-wellness-accent">Zeit für Entspannung</h2>
        <p className="text-wellness-text opacity-90 leading-relaxed">
          Da dir die Therme Erding so gut gefallen hat (und du Sauna liebst), dachte ich mir: <br/>
          <span className="font-semibold italic">Wir brauchen mehr davon!</span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Card className="p-4 bg-white/50 backdrop-blur-sm">
           <PhotoPlaceholder label="Wellness Hotel in den Bergen" height="h-56" />
           <div className="mt-4 flex justify-around text-wellness-secondary">
              <div className="flex flex-col items-center gap-1">
                <Waves size={24} />
                <span className="text-xs uppercase tracking-wider">Pool</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl leading-none">♨️</span>
                <span className="text-xs uppercase tracking-wider">Sauna</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Dumbbell size={24} />
                <span className="text-xs uppercase tracking-wider">Gym</span>
              </div>
           </div>
        </Card>
      </motion.div>

      {/* Packing List Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="space-y-4"
      >
        <h3 className="text-xl font-serif text-center text-wellness-accent">
          Deine Packliste
        </h3>
        <p className="text-center text-sm text-gray-500 -mt-2 mb-4">
          Bitte einmal abhaken, damit wir nichts vergessen!
        </p>
        
        <div className="grid gap-3">
          {packingList.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className={clsx(
                  "w-full p-4 rounded-xl flex items-center justify-between transition-all duration-300 border-2",
                  checkedItems[item.id]
                    ? "bg-wellness-accent/10 border-wellness-accent text-wellness-accent shadow-sm"
                    : "bg-white border-transparent hover:border-wellness-secondary/30 shadow-sm"
                )}
              >
                <div className="flex items-center gap-3">
                  <span className={clsx(
                    "p-2 rounded-full transition-colors",
                    checkedItems[item.id] ? "bg-wellness-accent text-white" : "bg-gray-100 text-gray-400"
                  )}>
                    {iconMap[item.icon]}
                  </span>
                  <span className={clsx(
                    "font-medium transition-all",
                     checkedItems[item.id] && "line-through opacity-70"
                  )}>
                    {item.label}
                  </span>
                </div>
                <div className={clsx(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                  checkedItems[item.id] 
                    ? "bg-wellness-accent border-wellness-accent" 
                    : "border-gray-300"
                )}>
                  {checkedItems[item.id] && <Check size={14} className="text-white" />}
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Reveal Trigger */}
      <div className="h-16 flex items-center justify-center">
        <AnimatePresence>
          {allChecked && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <Button onClick={onComplete} variant="secondary" className="px-8 shadow-lg font-bold">
                 Fertig gepackt!
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
