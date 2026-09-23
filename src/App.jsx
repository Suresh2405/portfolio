import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { TechMarquee } from './components/TechMarquee';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { CloudSection } from './components/CloudSection';
import { CurrentFocus } from './components/CurrentFocus';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <About />
        <Education />
        <Skills />
        <TechMarquee />
        <Projects />
        <Certifications />
        <CloudSection />
        <CurrentFocus />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
