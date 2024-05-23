import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Feature from './components/Feature';
import HowItWorks from './components/HowItWorks';

import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <Hero />
      <Highlights />
      <Model />
      <Feature />
      <HowItWorks />
    </main>
  )
}

export default Sentry.withProfiler(App);
