import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import AIResumeChat from './components/AIResumeChat';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Update active section
      const sections = ['home', 'experience', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }

      // Update scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/40">
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 z-[60] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <Navbar activeSection={activeSection} />
      
      <main className="relative z-10">
        <section id="home" className="scroll-mt-16">
          <Hero />
        </section>
        
        <div className="max-w-6xl mx-auto px-6 space-y-48 pb-32">
          <section id="experience" className="scroll-mt-24">
            <Experience />
          </section>

          <section id="skills" className="scroll-mt-24">
            <Skills />
          </section>

          <section id="education" className="scroll-mt-24">
            <Education />
          </section>

          <section id="contact" className="scroll-mt-24">
            <Contact />
          </section>
        </div>

        {/* AI Resume Chat Integration */}
        <AIResumeChat />
      </main>

      <footer className="py-20 border-t border-slate-900 bg-slate-950/50 text-center">
        <div className="mb-4 flex justify-center gap-6">
           <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors">Twitter</a>
           <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors">GitHub</a>
           <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors">LinkedIn</a>
        </div>
        <p className="text-slate-500 text-sm">
          Designed & Engineered with ❤️ by Rupam Lokhande
        </p>
        <p className="text-slate-600 text-[10px] mt-2 tracking-widest uppercase">
          Next.js • Spring Boot • React
        </p>
      </footer>
    </div>
  );
};

export default App;