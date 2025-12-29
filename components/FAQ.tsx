
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 md:py-48 bg-dark px-6 md:px-20 border-t border-white/5 relative overflow-hidden scroll-mt-24">
      {/* Decorative background element for focus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full pointer-events-none opacity-50" />

      <div className="max-w-4xl mx-auto space-y-24 relative z-10">
        <div className="space-y-6 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="w-10 h-[1px] bg-accent/50" />
            <span className="text-[10px] font-black uppercase text-accent tracking-[0.4em] block">Inquiry Protocol</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none font-display text-white">
            Common <br className="hidden md:block" /> <span className="text-secondary italic">Questions.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-lg mx-auto lg:mx-0">
            Transparent answers regarding my process, availability, and technical approach.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((item, i) => {
            const isActive = open === i;
            return (
              <div 
                key={i} 
                className={`transition-all duration-500 rounded-[2rem] border ${
                  isActive 
                    ? 'bg-white/[0.03] border-accent/20 shadow-2xl shadow-accent/5' 
                    : 'bg-transparent border-white/5 hover:border-white/10'
                }`}
              >
                <button 
                  onClick={() => setOpen(isActive ? null : i)}
                  className="w-full p-8 md:p-10 flex justify-between items-center text-left transition-colors group"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                     <div className={`text-sm font-black font-display tracking-widest transition-colors ${isActive ? 'text-accent' : 'text-slate-600'}`}>
                       {String(i + 1).padStart(2, '0')}
                     </div>
                     <span className={`text-xl md:text-2xl font-bold tracking-tight transition-all ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                       {item.q}
                     </span>
                  </div>
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all flex-shrink-0 ${
                    isActive ? 'bg-accent border-accent text-dark rotate-180' : 'border-white/10 text-slate-500'
                  }`}>
                    {isActive ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 md:px-10 pb-10 flex gap-6 md:gap-10">
                    {/* Visual spacer to align with question text */}
                    <div className="w-5 md:w-9 flex-shrink-0" />
                    <div className="space-y-6">
                      <div className="h-px w-full bg-white/5" />
                      <p className="text-slate-300 text-lg leading-relaxed font-light max-w-2xl">
                        {item.a}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] font-black text-accent uppercase tracking-[0.2em]">
                        <HelpCircle size={12} /> Detailed Response
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action within FAQ section */}
        <div className="pt-10 flex flex-col items-center gap-8 text-center">
          <div className="space-y-2">
            <p className="text-slate-300 text-lg md:text-xl font-medium">Still have a specific query?</p>
            <p className="text-slate-500 text-sm max-w-sm mx-auto">I'm usually available for a quick chat regarding architecture and systems design.</p>
          </div>
          <a 
            href="#contact-section" 
            className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-xs md:text-sm font-black uppercase tracking-widest text-white hover:bg-accent hover:text-dark transition-all duration-300"
          >
            Direct Channel Available
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-dark/10 transition-colors">
              <Plus size={14} className="group-hover:rotate-45 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
