import { useState } from 'react';
import { Layout } from './components/Layout';
import { AnimatePresence } from 'framer-motion';
import { IntroSection } from './components/features/IntroSection';
import { WellnessTeaser } from './components/features/WellnessTeaser';
import { SkiReveal } from './components/features/SkiReveal';
import { Timeline } from './components/features/Timeline';
import { FinalApproval } from './components/features/FinalApproval';

// Define the phases of the application
export type AppPhase = 'intro' | 'wellness' | 'reveal' | 'timeline' | 'success';

function App() {
  const [currentPhase, setCurrentPhase] = useState<AppPhase>('intro');

  // Helper to determine the current visual theme based on the phase
  const currentTheme = (['reveal', 'timeline', 'success'] as AppPhase[]).includes(currentPhase) 
    ? 'action' 
    : 'wellness';

  const renderPhase = () => {
    switch (currentPhase) {
      case 'intro':
        return <IntroSection onComplete={() => setCurrentPhase('wellness')} />;
      case 'wellness':
        return <WellnessTeaser onComplete={() => setCurrentPhase('reveal')} />;
      case 'reveal':
        return <SkiReveal onComplete={() => setCurrentPhase('timeline')} />;
      case 'timeline':
        return <Timeline onComplete={() => setCurrentPhase('success')} />;
      case 'success':
        return <FinalApproval />;
      default:
        return null;
    }
  };

  return (
    <Layout theme={currentTheme}>
      <AnimatePresence mode="wait">
        {renderPhase()}
      </AnimatePresence>
    </Layout>
  );
}

export default App;