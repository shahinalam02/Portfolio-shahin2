
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-6 md:px-20 border-t border-white/5 bg-dark">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-black tracking-tighter font-display text-white">
          Shahin Alam<span className="text-accent">_</span>
        </div>
        
        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          Copyright © {new Date().getFullYear()} Shahin Alam UI/UX Architect
        </div>
        
        <div className="flex gap-4">
           <div className="px-4 py-1.5 rounded-full border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/50">
             System Status: Stable
           </div>
           <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-[9px] font-black uppercase tracking-widest">
             Made in React
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
