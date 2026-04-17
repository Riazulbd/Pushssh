/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Results from './components/Results';
import Integration from './components/Integration';
import BentoGrid from './components/BentoGrid';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Solution />
        <Results />
        <Integration />
        <BentoGrid />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
