
import React, { useEffect, useState } from 'react';
import Assistant from './components/Assistant';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Principles from './components/Principles';
import Process from './components/Process';
import ProjectDetail from './components/ProjectDetail';
import Skills from './components/Skills';
import Socials from './components/Socials';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Work from './components/Work';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId);

  useEffect(() => {
    if (selectedProjectId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProjectId]);

  return (
    <div className="min-h-screen relative flex flex-col bg-dark">
      <Header />
      
      <main className={`transition-all duration-700 ${selectedProjectId ? 'blur-3xl scale-95 opacity-50' : 'opacity-100 scale-100'}`}>
        <Hero />
        <Stats />
        <CaseStudies onProjectSelect={setSelectedProjectId} />
        <Work onProjectSelect={setSelectedProjectId} />
        <Principles />
        <Skills />
        <Process />
        <Testimonials />
        <FAQ />
        <Socials />
        <Contact />
      </main>

      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={() => setSelectedProjectId(null)} 
        />
      )}

      <Footer />
      <Assistant />
    </div>
  );
};

export default App;
