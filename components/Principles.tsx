
import React from 'react';
import { PRINCIPLES } from '../constants';
import { Target, Zap, Infinity } from 'lucide-react';

const Principles: React.FC = () => {
  return (
    <section id="principles" className="py-40 px-6 md:px-20 bg-dark relative overflow-hidden border-t border-white/5 scroll-mt-24">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2" />
      
      <div className="max-w-screen-2xl mx-auto space-y-32 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-accent/30" />
              <span className="text-[10px] font-black uppercase text-accent tracking-[0.6em] block">Core Logic</span>
            </div>
            <h2 className="text-6xl md:text-9xl font-extrabold tracking-tighter font-display text-white leading-[0.85]">
              Design <br /> <span className="text-accent italic font-light opacity-50">Ethos.</span>
            </h2>
          </div>
          <div className="max-w-sm space-y-6">
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              My work is guided by a rigid set of architectural rules designed to maximize user efficiency and visual clarity.
            </p>
            <div className="flex gap-4">
               <div className="px-4 py-2 rounded-full border border-white/5 text-[9px] font-bold uppercase tracking-widest text-slate-600">
                 System v5.0
               </div>
               <div className="px-4 py-2 rounded-full border border-white/5 text-[9px] font-bold uppercase tracking-widest text-slate-600">
                 Atomic Design
               </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {PRINCIPLES.map((p, i) => (
            <div key={i} className="group p-10 md:p-14 glass-card rounded-[3.5rem] border border-white/5 relative overflow-hidden transition-all duration-700 hover:-translate-y-4">
              {/* Kinetic Background Number */}
              <div className="absolute -top-12 -right-8 text-[12rem] font-black font-display text-white/[0.02] group-hover:text-accent/[0.03] transition-colors leading-none italic select-none">
                0{i + 1}
              </div>
              
              {/* Icon Container */}
              <div className="relative z-10 mb-12">
                <div className="w-20 h-20 rounded-[2rem] bg-surface border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-dark transition-all duration-500 group-hover:rotate-12 shadow-2xl">
                  {React.cloneElement(p.icon as React.ReactElement, { size: 32 })}
                </div>
              </div>

              <div className="relative z-10 space-y-6">
                <h4 className="text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-accent transition-colors">
                  {p.title}
                </h4>
                <div className="h-px w-12 bg-accent/20 group-hover:w-full transition-all duration-700" />
                <p className="text-slate-500 leading-relaxed font-light text-lg">
                  {p.desc}
                </p>
              </div>

              {/* Decorative corner tag */}
              <div className="absolute bottom-8 right-10 text-[10px] font-black text-white/5 group-hover:text-accent transition-colors uppercase tracking-[0.2em]">
                Active Protocol
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
