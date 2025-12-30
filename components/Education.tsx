
import React from 'react';
import { EDUCATIONS } from '../constants';
import Reveal from './Reveal';

const Education: React.FC = () => {
  return (
    <div>
      <Reveal width="100%">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Education</h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-slate-800 to-transparent"></div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EDUCATIONS.map((edu, idx) => (
          <Reveal key={idx} width="100%" delay={idx * 0.2}>
            <div className="relative p-8 rounded-3xl bg-slate-900/30 border border-slate-800/50 hover:bg-slate-900/50 transition-all duration-500 group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM3.89 9L12 4.57 20.11 9 12 13.43 3.89 9z" />
                </svg>
              </div>
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 text-[10px] font-mono font-bold text-indigo-400 bg-indigo-500/10 rounded-full mb-4 uppercase tracking-tighter">
                  {edu.period}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{edu.institution}</h3>
                <p className="text-slate-400 font-medium">{edu.degree}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Education;
