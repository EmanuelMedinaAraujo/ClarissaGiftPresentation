import { useState } from 'react';
import { Layout } from './components/Layout';
import { AnimatePresence } from 'framer-motion';
import { IntroSection } from './components/features/IntroSection';
import { TripTeaser } from './components/features/TripTeaser';
import { PackingFlow } from './components/features/PackingFlow';
import { HotelReveal } from './components/features/HotelReveal';
import { OneMoreThing } from './components/features/OneMoreThing';
import { ForgottenSomething } from './components/features/ForgottenSomething';
import { SkiReveal } from './components/features/SkiReveal';
import { PlanIntro } from './components/features/PlanIntro';
import { Timeline } from './components/features/Timeline';
import { FinalApproval } from './components/features/FinalApproval';

// Define the phases of the application
export type AppPhase = 
  | 'intro' 
  | 'trip_teaser'
  | 'packing'
  | 'hotel'
  | 'one_more'
  | 'forgotten'
  | 'reveal'
  | 'plan_intro' 
  | 'timeline' 
  | 'success';

function App() {
  const [currentPhase, setCurrentPhase] = useState<AppPhase>('intro');

  // Helper to determine the current visual theme based on the phase
  const currentTheme = (['one_more', 'forgotten', 'reveal', 'plan_intro', 'timeline', 'success'] as AppPhase[]).includes(currentPhase) 
    ? 'action' 
    : 'wellness';

  const renderPhase = () => {
    switch (currentPhase) {
      case 'intro':
        return <IntroSection onComplete={() => setCurrentPhase('trip_teaser')} />;
      case 'trip_teaser':
        return <TripTeaser onComplete={() => setCurrentPhase('packing')} />;
      case 'packing':
        return <PackingFlow onComplete={() => setCurrentPhase('hotel')} />;
      case 'hotel':
        return <HotelReveal onComplete={() => setCurrentPhase('one_more')} />;
      case 'one_more':
        return <OneMoreThing onComplete={() => setCurrentPhase('forgotten')} />;
      case 'forgotten':
        return <ForgottenSomething onComplete={() => setCurrentPhase('reveal')} />;
      case 'reveal':
        return <SkiReveal onComplete={() => setCurrentPhase('plan_intro')} />;
      case 'plan_intro':
        return <PlanIntro onComplete={() => setCurrentPhase('timeline')} />;
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
