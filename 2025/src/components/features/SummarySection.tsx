import React, { useState, useEffect } from 'react';
import { Square, CheckSquare, Play } from 'lucide-react';
import { packingList } from '../../data/packingList';
import { timelineData } from '../../data/timeline';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const CHECKLIST_STORAGE_KEY = 'clarissa_gift_checklist_state';

interface SummarySectionProps {
  onRestart?: () => void;
}

export const SummarySection: React.FC<SummarySectionProps> = ({ onRestart }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const stored = localStorage.getItem(CHECKLIST_STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      console.error("Failed to load checklist state", e);
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="flex flex-col gap-8 pb-12 w-full max-w-2xl mx-auto">
      
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-action-text">Zusammenfassung</h1>
        <p className="text-slate-500">Alles auf einen Blick für dich.</p>
      </div>

      {/* Packing List Section */}
      <section>
        <h2 className="text-xl font-bold text-action-accent mb-4 pl-2 border-l-4 border-action-accent">
          Packliste
        </h2>
        <Card className="p-0 overflow-hidden shadow-sm">
          {packingList.map((item) => (
            <div 
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`
                flex items-center gap-4 p-4 cursor-pointer transition-colors border-b last:border-0 border-slate-100
                ${checkedItems[item.id] ? 'bg-slate-50' : 'hover:bg-slate-50'}
              `}
            >
              <div className={`text-slate-400 ${checkedItems[item.id] ? 'text-action-accent' : ''}`}>
                {checkedItems[item.id] ? <CheckSquare size={24} /> : <Square size={24} />}
              </div>
              <div className="flex-1">
                <span className={`font-medium block ${checkedItems[item.id] ? 'line-through text-slate-400' : 'text-slate-700'}`}>
                  {item.label}
                </span>
                <span className="text-xs text-slate-400">{item.anecdote}</span>
              </div>
            </div>
          ))}
        </Card>
      </section>

      {/* Timeline Overview Section */}
      <section>
        <h2 className="text-xl font-bold text-action-secondary mb-4 pl-2 border-l-4 border-action-secondary">
          Zeitplan
        </h2>
        <div className="space-y-3">
          {timelineData.map((event, index) => (
            <Card key={index} className="p-4 flex gap-4 items-start shadow-sm text-left">
              <div className="bg-slate-100 text-slate-500 font-bold text-xs py-2 px-3 rounded uppercase tracking-wider w-32 text-center shrink-0">
                {event.day.split(',')[0]}
              </div>
              <div>
                <h3 className="font-bold text-slate-800">{event.title}</h3>
                <p className="text-sm text-slate-600 leading-snug">{event.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <div className="text-center mt-8 text-sm text-slate-400">
        <p>Kannst du dir als Lesezeichen speichern! ❤️</p>
      </div>

      {/* Optional Restart Button */}
      {onRestart && (
        <div className="flex justify-center mt-4">
           <Button 
             onClick={onRestart} 
             variant="outline" 
             size="sm"
             leftIcon={<Play size={16} />}
             className="text-slate-500 border-slate-300 hover:text-action-accent hover:border-action-accent"
           >
             Präsentation nochmal ansehen
           </Button>
        </div>
      )}
    </div>
  );
};
