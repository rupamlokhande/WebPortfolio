
import React from 'react';
import { SKILL_GROUPS } from '../constants';
import Reveal from './Reveal';

const Skills: React.FC = () => {
  return (
    <div>
      <Reveal width="100%">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Technical Stack</h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-slate-800 to-transparent"></div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILL_GROUPS.map((group, idx) => (
          <Reveal key={idx} width="100%" delay={idx * 0.1}>
            <div className="h-full p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 hover:border-indigo-500/40 hover:bg-slate-900/60 transition-all duration-500 group shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                   </svg>
                 </div>
                 <h3 className="text-xl font-bold text-slate-100">
                  {group.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 text-xs font-mono rounded-lg bg-slate-800/80 text-slate-400 border border-slate-700/50 hover:text-indigo-300 hover:border-indigo-500/30 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Skills;
