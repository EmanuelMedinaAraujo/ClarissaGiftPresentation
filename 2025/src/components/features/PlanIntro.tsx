import React from 'react';
import { motion } from 'framer-motion';
import { Brain, CalendarClock } from 'lucide-react';
import { Button } from '../ui/Button';

interface PlanIntroProps {
  onComplete: () => void;
}

export const PlanIntro: React.FC<PlanIntroProps> = ({ onComplete }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8 text-center p-6 max-w-2xl mx-auto">
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        className="p-4 bg-action-secondary/10 rounded-full text-action-secondary"
      >
        <CalendarClock size={64} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="space-y-6"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-action-text">
          Ein volles Programm?
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
          Ich weiß, das Wochenende ist schon gut gefüllt (LMU Ball, Konzert, ...). 
          Du fragst dich sicher: <span className="italic text-action-accent">"Wie soll das alles klappen?"</span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="bg-white p-6 rounded-2xl shadow-xl border-l-4 border-action-accent"
      >
        <div className="flex justify-center mb-4 text-action-accent">
           <Brain size={40} />
        </div>
        <p className="text-xl font-medium text-slate-800">
          Aber keine Sorge! <br/>
          Dein wunderbarer und überaus intelligenter Freund hat natürlich an alles gedacht. 🤓✨
        </p>
        <p className="mt-2 text-slate-500">
          Hier ist der Beweis, dass alles passt:
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
      >
        <Button onClick={onComplete} size="lg" theme="action" rightIcon="📜">
          Zeig mir den Masterplan
        </Button>
      </motion.div>
    </div>
  );
};
