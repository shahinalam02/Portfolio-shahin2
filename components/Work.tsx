
import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Monitor, Smartphone } from 'lucide-react';

interface WorkProps {
  onProjectSelect: (id: string) => void;
}

const Work: React.FC<WorkProps> = ({ onProjectSelect }) => {
  // Only show standard (non-case study) projects in this section
  const standardProjects = PROJECTS.filter(p => !p.isCaseStudy);

  if (standardProjects.length === 0) return null;

  return (
    <section id="work" className="py-40 px-6 md:px-20 relative scroll-mt-24 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto space-y-32">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-6">
            <span className="text-[11px] font-bold text-accent uppercase tracking-[0.5em] block">Interface Portfolio</span>
            <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter font-display uppercase italic opacity-10 text-white leading-none">PROJECTS</h2>
            <p className="text-2xl font-light text-slate-400 max-w-2xl leading-relaxed">
              Curated digital products focused on <span className="text-white">problem-solution</span> parity across <span className="text-accent">web & mobile</span> landscapes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {standardProjects.map((project, index) => (
            <div 
              key={project.id} 
              onClick={() => onProjectSelect(project.id)}
              className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <div className="glass-card rounded-[3rem] p-4 transition-all duration-700 hover:translate-y-[-10px] relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-[#0c0514]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-1000 grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent" />
                  
                  <div className="absolute top-8 left-8">
                     <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-accent">
                       {project.category.includes('App') ? <Smartphone size={20} /> : <Monitor size={20} />}
                     </div>
                  </div>
                </div>
                
                <div className="p-10 space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase text-accent tracking-[0.3em]">{project.category}</span>
                    <span className="text-xs text-slate-500 font-bold">{project.timeline?.split(' ')[0] || '2024'}</span>
                  </div>
                  <h4 className="text-4xl font-bold font-display tracking-tight text-white group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  <div className="h-px w-full bg-white/5 group-hover:bg-accent/30 transition-colors" />
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <span className="text-[9px] font-black uppercase text-slate-600 tracking-widest">About</span>
                      <span className="text-[9px] font-black uppercase text-slate-600 tracking-widest">Problem</span>
                      <span className="text-[9px] font-black uppercase text-slate-600 tracking-widest">Solution</span>
                    </div>
                    <ArrowUpRight size={20} className="text-slate-500 group-hover:text-accent transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
