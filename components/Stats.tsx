
import React from 'react';
import { Sparkles } from 'lucide-react';

const Stats: React.FC = () => {
  const items = [
    { value: '3+', label: 'years of experience' },
    { value: '> 95%', label: 'client retention rate' },
    { value: '18 /', label: 'satisfied clients' },
    { value: '12+', label: 'completed projects' }
  ];

  return (
    <div className="bg-dark text-white py-14 overflow-hidden border-y border-white/5">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, groupIdx) => (
          <div key={groupIdx} className="flex items-center">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-8 px-16 group">
                <span className="text-4xl md:text-5xl font-black font-display tracking-tighter transition-colors group-hover:text-accent">
                  {item.value}
                </span>
                <span className="text-[11px] uppercase font-bold text-slate-500 tracking-[0.2em]">
                  {item.label}
                </span>
                <Sparkles size={20} className="text-accent/30 group-hover:text-accent transition-colors" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
