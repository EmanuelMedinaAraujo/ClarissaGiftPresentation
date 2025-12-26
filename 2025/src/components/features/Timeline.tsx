import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Mountain, Star, Music, CheckCircle } from 'lucide-react';
import clsx from 'clsx';
import { timelineData } from '../../data/timeline';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface TimelineProps {
  onComplete: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  'Packing': <Briefcase size={20} />,
  'Ski': <Mountain size={20} />,
  'Dance': <Star size={20} />,
  'Music': <Music size={20} />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export const Timeline: React.FC<TimelineProps> = ({ onComplete }) => {
  return (
    <div className="w-full max-w-lg mx-auto pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-action-text mb-2">Der Masterplan</h2>
        <p className="text-action-text/70">Alles ist organisiert. Kein Stress.</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent"
      >
        {timelineData.map((event, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="relative flex items-start gap-4"
          >
            <div className={clsx(
              "absolute left-0 mt-1 flex items-center justify-center w-12 h-12 rounded-full border-4 bg-white z-10",
              event.highlight ? "border-action-accent text-action-accent" : "border-slate-200 text-slate-400"
            )}>
              {iconMap[event.icon]}
            </div>
            
            <div className="pl-16 w-full">
              <Card 
                theme="action" 
                className={clsx(
                  "p-4 transition-colors",
                  event.highlight ? "border-action-accent/30 bg-action-bg" : "border-transparent"
                )}
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className={clsx("font-bold text-lg", event.highlight ? "text-action-accent" : "text-slate-700")}>
                    {event.title}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded">
                    {event.day}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {event.description}
                </p>
              </Card>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="mt-12 flex justify-center sticky bottom-6 z-20"
      >
        <Button 
          onClick={onComplete} 
          size="lg" 
          theme="action" 
          className="shadow-2xl shadow-action-accent/40 font-bold scale-110"
          leftIcon={<CheckCircle size={20} />}
        >
          Plan genehmigen!
        </Button>
      </motion.div>
    </div>
  );
};
