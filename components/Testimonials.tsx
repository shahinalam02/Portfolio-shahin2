
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  // Duplicate testimonials for seamless looping in the marquee
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-32 md:py-48 bg-dark overflow-hidden relative border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-20 mb-24 relative z-10">
        <div className="text-center md:text-left space-y-6">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_15px_rgba(190,242,100,0.5)]" />
            <span className="text-[10px] font-bold text-accent uppercase tracking-[0.3em]">(04) — Testimonials</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none font-display text-white">
            Endless <span className="text-secondary italic">Reviews.</span>
          </h2>
          <p className="text-slate-500 font-light max-w-sm italic text-lg leading-relaxed mx-auto md:mx-0">
            Validated by global partners through high-stakes engineering cycles.
          </p>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden py-10">
        {/* Mask edges for smooth fade-in/out effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark to-transparent z-10" />
        
        <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
          {duplicatedTestimonials.map((t, i) => (
            <div 
              key={i} 
              className="w-[350px] md:w-[450px] mx-4 p-8 md:p-12 bg-surface/40 backdrop-blur-xl rounded-[3rem] border border-white/5 flex flex-col justify-between hover:border-accent/30 transition-all group flex-shrink-0"
            >
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <div className="flex gap-1.5">
                    {[1,2,3,4,5].map(s => (
                      <Star key={s} size={14} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <Quote size={32} className="text-white/5 group-hover:text-secondary/20 transition-colors" />
                </div>
                <p className="text-lg md:text-xl leading-relaxed text-slate-300 italic font-light">
                  "{t.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-5 pt-8 mt-10 border-t border-white/5">
                <div className="w-12 h-12 rounded-2xl bg-accent text-dark flex items-center justify-center font-black text-sm shadow-xl shadow-accent/10">
                  {t.name[0]}
                </div>
                <div className="space-y-0.5">
                  <span className="text-sm font-bold text-white block">{t.name}</span>
                  <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest">Client Verification</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Aesthetic Section Label */}
      <div className="absolute bottom-0 right-0 text-[18vw] font-black font-display text-white/[0.01] pointer-events-none uppercase italic leading-none translate-y-1/2">
        Validated
      </div>
    </section>
  );
};

export default Testimonials;
