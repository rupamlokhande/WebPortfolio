
import React from 'react';
import { EXPERIENCES } from '../constants';
import Reveal from './Reveal';

const Experience: React.FC = () => {
  return (
    <div>
      <Reveal width="100%">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-slate-800 to-transparent"></div>
        </div>
      </Reveal>

      <div className="space-y-24">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Vertical Line Decorator */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 group-hover:bg-indigo-500/50 transition-colors hidden md:block"></div>
            
            <div className="md:pl-12">
              <Reveal width="100%">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-indigo-400 font-mono text-sm tracking-wider uppercase">Current Role</span>
                      <div className="h-px w-8 bg-indigo-500/30"></div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-100 group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-xl text-indigo-300/80 font-medium mt-1">
                      {exp.company} <span className="text-slate-600 mx-2">•</span> {exp.location}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 text-slate-500 font-mono text-sm border border-slate-800 px-4 py-1.5 rounded-full bg-slate-900/50">
                    {exp.period}
                  </div>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
                {exp.highlights.map((highlight, hIdx) => (
                  <Reveal key={hIdx} width="100%" delay={hIdx * 0.1}>
                    <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-900/40 border border-transparent hover:border-slate-800 transition-all duration-300">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-indigo-500/60 shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
                      <p className="text-slate-400 text-sm leading-relaxed group-hover/item:text-slate-300">
                        {highlight}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
