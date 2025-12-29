
import React from 'react';
import { PROCESS } from '../constants';
import { ChevronRight } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-40 px-6 md:px-20 bg-surface/30 border-y border-white/5 relative scroll-mt-24">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-4 space-y-10">
          <span className="text-[11px] font-bold text-accent uppercase tracking-[0.5em] block">Operation Protocol</span>
          <h2 className="text-6xl font-extrabold tracking-tighter leading-none font-display text-white">
            The <br /> Protocol
          </h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            A methodical approach to shipping high-impact products, ensuring zero friction from discovery to deployment.
          </p>
          <div className="p-8 glass-card rounded-3xl border-accent/20">
             <div className="text-accent font-black text-2xl mb-2">99.8%</div>
             <p className="text-xs uppercase font-bold text-slate-500 tracking-widest">Efficiency Rating</p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-4">
          {PROCESS.map((step, index) => (
            <div key={index} className="group p-10 glass-card rounded-[2rem] flex flex-col md:flex-row gap-10 items-center hover:bg-secondary/5 transition-all">
              <div className="text-5xl font-black font-display text-secondary/10 group-hover:text-secondary transition-colors italic">
                {step.icon}
              </div>
              <div className="flex-1 space-y-2">
                <h4 className="text-2xl font-bold tracking-tight text-white group-hover:text-accent transition-colors">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xl">{step.description}</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="text-accent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
