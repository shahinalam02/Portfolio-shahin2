
import React, { useEffect, useRef } from 'react';
import { X, ArrowRight, Github, Shield, CheckCircle2, Target, Search, PenTool, Lightbulb, TrendingUp, Info, Cpu, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [project.id]);

  const SectionTitle = ({ num, title, icon: Icon, colorClass = "text-accent" }: { num: string, title: string, icon: any, colorClass?: string }) => (
    <div className="flex items-center gap-6 mb-16">
      <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${colorClass} shadow-xl`}>
        <Icon size={24} />
      </div>
      <div className="space-y-1">
        <span className="text-[10px] font-black uppercase text-slate-600 tracking-[0.5em] block">Phase {num}</span>
        <h3 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter uppercase font-display italic">{title}</h3>
      </div>
    </div>
  );

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[200] bg-dark overflow-y-auto scroll-smooth animate-in fade-in duration-700 no-scrollbar"
    >
      {/* HUD Navigation */}
      <nav className="fixed top-0 left-0 right-0 p-6 md:p-10 flex justify-between items-center z-[250] pointer-events-none">
        <button 
          onClick={onClose} 
          className="pointer-events-auto group flex items-center gap-6 bg-white/5 backdrop-blur-3xl border border-white/10 px-8 py-4 rounded-full hover:bg-accent hover:text-dark transition-all duration-500 shadow-2xl"
        >
          <X size={20} className="group-hover:rotate-90 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Close Dossier</span>
        </button>
        <div className="hidden md:flex pointer-events-auto items-center gap-10 px-10 py-4 rounded-full bg-white/5 backdrop-blur-3xl border border-white/10">
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${project.isInProgress ? 'bg-amber-500' : 'bg-accent'} animate-pulse`} />
            <span className="text-[10px] font-black uppercase tracking-widest text-white/50">
              {project.isCaseStudy ? 'MASTER CASE STUDY' : 'PROJECT BRIEF'}
            </span>
          </div>
          <div className="w-[1px] h-4 bg-white/10" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">ID: {project.id}</span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden flex items-end pb-24">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-20">
          <div className="max-w-6xl space-y-12">
            <div className="space-y-8">
              <div className="flex flex-wrap gap-4">
                {project.isInProgress && (
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-xl">
                    <Shield size={14} /> Active Phase
                  </div>
                )}
                {project.tags.map(tag => (
                  <span key={tag} className={`px-5 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-[0.3em] text-accent`}>
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-[10vw] font-extrabold tracking-tighter leading-[0.8] font-display text-white uppercase italic">
                {project.title.split('-')[0]} <br />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r from-accent to-white`}>
                  {project.title.split('-')[1] || project.category}
                </span>
              </h1>
              <p className="text-2xl md:text-4xl text-slate-400 font-light max-w-4xl leading-tight">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-16 border-t border-white/5">
              <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Protocol Role</p>
                <p className="text-xl font-bold text-white">{project.role || 'Design Lead'}</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Timeline Cycle</p>
                <p className="text-xl font-bold text-white">{project.timeline || '2024'}</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Tech Stack</p>
                <p className="text-xl font-bold text-white">{project.tags.slice(0, 2).join(' + ')}</p>
              </div>
              <div className="flex gap-4 items-center">
                 {project.githubLink && (
                  <a href={project.githubLink} className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-white/50 hover:text-accent hover:border-accent transition-all">
                    <Github size={24} />
                  </a>
                )}
                <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black text-white/30 uppercase tracking-widest">
                  Secure Source
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dossier Content */}
      <div className="bg-dark pt-48 pb-60">
        <div className="max-w-screen-xl mx-auto px-6 md:px-20 space-y-64">
          
          {/* Section 2: Problem */}
          {project.problemStatement && (
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-24">
              <div className="lg:col-span-12">
                <SectionTitle num="02" title="The Problem" icon={Target} colorClass="text-accent" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                  <div className="lg:col-span-8">
                    <div className={`p-16 rounded-[4rem] bg-white/[0.01] border border-accent/10 relative overflow-hidden group`}>
                       <div className="relative z-10 space-y-12">
                          <div className="space-y-6">
                            <h4 className={`text-[11px] font-black text-accent uppercase tracking-[0.5em]`}>Contextual Friction</h4>
                            <p className="text-3xl md:text-5xl font-light text-slate-300 leading-[1.2] tracking-tight">
                              {project.problemStatement.context}
                            </p>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-16 border-t border-white/5">
                            <div className="space-y-4">
                              <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest block">Primary Users</span>
                              <p className="text-2xl text-white font-bold leading-tight">{project.problemStatement.users}</p>
                            </div>
                            <div className="space-y-4">
                              <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest block">Operational Impact</span>
                              <p className={`text-2xl text-accent font-bold leading-tight`}>{project.problemStatement.impact}</p>
                            </div>
                          </div>
                       </div>
                    </div>
                  </div>
                  <div className="lg:col-span-4 flex flex-col justify-center space-y-8">
                    <p className="text-lg text-slate-500 font-light leading-relaxed italic">
                      "Identifying core system failures requires a deep understanding of legacy behavior and user fatigue patterns."
                    </p>
                    <div className="h-px w-20 bg-accent/20" />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Section 3 & 4 (Master Studies Only) */}
          {project.isCaseStudy && (
            <>
              {/* Strategy */}
              {project.goals && (
                <section className="space-y-24">
                  <SectionTitle num="03" title="Design Strategy" icon={TrendingUp} colorClass="text-accent" />
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                      {project.goals.primary.map((goal, i) => (
                        <div key={i} className="p-12 bg-surface/50 rounded-[3rem] border border-white/5 flex flex-col justify-between hover:border-accent/30 transition-all aspect-square group">
                          <span className="text-6xl font-black font-display text-white/5 group-hover:text-accent/10 transition-colors italic">0{i+1}</span>
                          <p className="text-2xl text-white font-light leading-tight">{goal}</p>
                        </div>
                      ))}
                    </div>
                    <div className="lg:col-span-4 space-y-10">
                      <div className="p-12 rounded-[3rem] bg-accent/5 border border-accent/20 space-y-6">
                        <Cpu className="text-accent" size={32} />
                        <div>
                          <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-3">Target KPI</p>
                          <p className="text-2xl font-bold text-white leading-tight">{project.goals.successDefinition}</p>
                        </div>
                      </div>
                      <div className="p-12 rounded-[3rem] bg-white/[0.02] border border-white/5">
                         <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-3">Constraints</p>
                         <p className="text-lg text-slate-500 font-light italic leading-relaxed">{project.goals.constraints}</p>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Research */}
              {project.researchInsights && (
                <section className="space-y-24">
                  <SectionTitle num="04" title="Intelligence" icon={Search} colorClass="text-accent" />
                  <div className="space-y-16">
                    <p className="text-4xl md:text-6xl text-slate-500 font-light leading-[1.1] tracking-tighter italic">
                      "{project.researchInsights.summary}"
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {project.researchInsights.findings.map((finding, i) => (
                        <div key={i} className="glass-card p-12 rounded-[2.5rem] flex flex-col justify-between aspect-square group hover:bg-accent/5 transition-all">
                          <Lightbulb className="text-accent opacity-30 group-hover:opacity-100 transition-all" size={32} />
                          <p className="text-xl font-bold text-white leading-snug">{finding}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}
            </>
          )}

          {/* Section 5: The Build */}
          <section className="space-y-24">
            <SectionTitle 
              num={project.isCaseStudy ? "05" : "03"} 
              title={project.isCaseStudy ? "Evolution" : "The Build"} 
              icon={Layers} 
              colorClass="text-accent" 
            />
            <div className="space-y-20">
              <p className="text-2xl md:text-4xl text-slate-400 font-light leading-snug max-w-4xl">
                {project.designProcess?.summary || "Engineering a visual language that prioritizes functional clarity over aesthetic noise."}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {project.gallery?.slice(0, 2).map((img, i) => (
                   <div key={i} className="aspect-[16/10] rounded-[4rem] overflow-hidden border border-white/5 relative group bg-surface shadow-2xl">
                      <img src={img} className="w-full h-full object-cover grayscale opacity-80 transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100" alt="Process Evolution" />
                      <div className="absolute top-10 left-10 p-5 bg-dark/60 backdrop-blur-xl rounded-2xl border border-white/10">
                        <p className={`text-[10px] font-black text-accent uppercase tracking-[0.4em]`}>
                          Phase 0{i+1} Output
                        </p>
                      </div>
                   </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 6: Outcome */}
          <section className="space-y-32">
            <SectionTitle 
              num={project.isCaseStudy ? "06" : "04"} 
              title="Final Logic" 
              icon={CheckCircle2} 
              colorClass="text-accent" 
            />
            <div className="space-y-24">
              <div className="relative aspect-[21/9] w-full rounded-[4.5rem] overflow-hidden border border-white/5 group bg-surface">
                 <img 
                  src={project.gallery?.[project.gallery.length - 1] || project.imageUrl} 
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" 
                  alt="Final Deployment"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
              </div>
              {project.finalOutcome && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                  <div className="lg:col-span-7 space-y-12">
                     <h4 className={`text-[11px] font-black text-accent uppercase tracking-[0.5em]`}>Integrated Feature Set</h4>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {project.finalOutcome.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-6 p-8 bg-white/5 border border-white/5 rounded-3xl hover:border-accent/30 transition-all">
                            <div className={`w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_rgba(190,242,100,0.5)]`} />
                            <span className="text-xl text-white font-medium">{f}</span>
                          </div>
                        ))}
                     </div>
                  </div>
                  <div className="lg:col-span-5 flex flex-col justify-center space-y-10">
                     <div className="space-y-4">
                       <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Efficiency Shift</span>
                       <p className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-none italic font-display">
                          {project.finalOutcome.improvements}
                       </p>
                     </div>
                     {project.finalOutcome.liveUrl && (
                       <a href={project.finalOutcome.liveUrl} className={`w-fit flex items-center gap-6 px-10 py-6 rounded-2xl bg-accent text-dark font-black uppercase tracking-widest text-xs hover:bg-white transition-transform`}>
                         Verify Deployment <ArrowRight size={18} className="-rotate-45" />
                       </a>
                     )}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Section 7: Retro (Master Studies Only) */}
          {project.isCaseStudy && project.learnings && (
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-24 pt-48 border-t border-white/5">
              <div className="lg:col-span-4">
                <SectionTitle num="07" title="Growth" icon={Lightbulb} colorClass="text-accent" />
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-24">
                <div className="space-y-12">
                   <h4 className="text-[11px] font-black text-accent uppercase tracking-[0.5em]">Retrospective</h4>
                   <ul className="space-y-10">
                     {project.learnings.map((l, i) => (
                       <li key={i} className="flex gap-6 items-start">
                         <div className="w-2 h-2 rounded-full bg-accent mt-3 shrink-0" />
                         <p className="text-2xl text-slate-400 font-light leading-relaxed">{l}</p>
                       </li>
                     ))}
                   </ul>
                </div>
                <div className="space-y-12">
                   <h4 className="text-[11px] font-black text-white uppercase tracking-[0.5em]">Future Roadmap</h4>
                   <ul className="space-y-10">
                     {project.nextSteps?.map((s, i) => (
                       <li key={i} className="flex gap-6 items-start">
                         <div className="w-2 h-2 rounded-full bg-white mt-3 shrink-0 opacity-20" />
                         <p className="text-2xl text-slate-400 font-light leading-relaxed">{s}</p>
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            </section>
          )}

          {/* Closure */}
          <div className="pt-64 flex flex-col md:flex-row justify-between items-center gap-24">
            <div className="space-y-6 text-center md:text-left">
              <p className="text-[11px] font-black text-slate-700 uppercase tracking-[0.6em]">End of Dossier</p>
              <h4 className="text-6xl md:text-8xl font-black text-white opacity-20 hover:opacity-100 transition-all cursor-pointer italic font-display uppercase tracking-tighter">
                Next Record →
              </h4>
            </div>
            <button 
              onClick={onClose}
              className="group flex items-center gap-10 px-16 py-10 bg-white/5 border border-white/10 rounded-[3rem] text-sm font-black uppercase tracking-[0.4em] text-white hover:bg-accent hover:text-dark transition-all shadow-2xl"
            >
              Exit Terminal
              <ArrowRight size={20} className="group-hover:translate-x-4 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
