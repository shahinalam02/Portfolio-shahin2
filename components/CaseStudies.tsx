import { ArrowRight, BookOpen, Cpu, Layout } from "lucide-react";
import React from "react";
import { PROJECTS } from "../constants";

interface CaseStudiesProps {
  onProjectSelect: (id: string) => void;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ onProjectSelect }) => {
  const caseStudies = PROJECTS.filter((p) => p.isCaseStudy);

  if (caseStudies.length === 0) return null;

  return (
    <section
      id="case-studies"
      className="py-40 px-6 md:px-20 relative bg-[#050702] overflow-hidden scroll-mt-24"
    >
      {/* Background Decorative Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-32">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-accent/30" />
              <span className="text-[10px] font-black uppercase text-accent tracking-[0.6em] block">
                Research & Architecture
              </span>
            </div>
            <h2 className="text-6xl md:text-[9vw] font-extrabold tracking-tighter font-display text-white leading-[0.85]">
              CASE <br /> <span className="text-accent italic">STUDIES.</span>
            </h2>
          </div>
          <div className="max-w-md space-y-6">
            <p className="text-xl text-slate-400 font-light leading-relaxed italic">
              A deep-dive archive where{" "}
              <span className="text-white font-medium">user research</span>,{" "}
              <span className="text-accent font-medium">
                technical architecture
              </span>
              , and{" "}
              <span className="text-white font-medium">product thinking</span>{" "}
              converge.
            </p>
            <div className="flex gap-4">
              <div className="px-5 py-2.5 rounded-full border border-accent/20 bg-accent/5 text-[9px] font-black uppercase tracking-widest text-accent flex items-center gap-2">
                <BookOpen size={12} /> {caseStudies.length} Deep Repositories
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              onClick={() => onProjectSelect(study.id)}
              className="group cursor-pointer relative"
            >
              <div className="space-y-10">
                {/* Image Container */}
                <div className="relative aspect-[16/10] rounded-[3.5rem] overflow-hidden glass-card border-white/5 shadow-2xl">
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100 grayscale-[0.9] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/10 to-transparent transition-opacity group-hover:opacity-40" />

                  {/* Floating Specs */}
                  <div className="absolute top-10 left-10 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                    <div className="px-4 py-2 bg-dark/60 backdrop-blur-md border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest text-white/50">
                      ID: {study.id}
                    </div>
                    <div className="px-4 py-2 bg-accent text-dark rounded-xl text-[9px] font-black uppercase tracking-widest shadow-xl flex items-center gap-2">
                      <Cpu size={12} /> {study.tags[3]}
                    </div>
                  </div>

                  {/* Corner Label */}
                  <div className="absolute bottom-10 left-10 space-y-2">
                    <div className="flex items-center gap-2 text-accent">
                      <Layout size={14} />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                        Full Project Dossier
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="px-4 space-y-8">
                  <div className="flex justify-between items-start gap-8">
                    <div className="space-y-4">
                      <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight group-hover:text-accent transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-xl text-slate-400 font-light leading-relaxed max-w-lg">
                        {study.description}
                      </p>
                    </div>
                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-accent group-hover:border-accent transition-all">
                      <ArrowRight
                        size={28}
                        className="-rotate-45 group-hover:rotate-0 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Data Points */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-white/5">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase text-slate-600 tracking-widest">
                        Client Sector
                      </span>
                      <p className="text-sm font-bold text-white">
                        {study.category}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase text-slate-600 tracking-widest">
                        Key Result
                      </span>
                      <p className="text-sm font-bold text-accent">
                        {study.finalOutcome?.improvements.split(" ")[0]}{" "}
                        Efficiency
                      </p>
                    </div>
                    <div className="hidden md:block space-y-1">
                      <span className="text-[10px] font-black uppercase text-slate-600 tracking-widest">
                        Protocol
                      </span>
                      <p className="text-sm font-bold text-white">
                        Master V2.0
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow */}
              <div className="absolute -inset-10 bg-accent/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Label */}
      <div className="absolute bottom-0 right-0 text-[20vw] font-black font-display text-white/[0.01] pointer-events-none uppercase italic leading-none translate-y-1/2">
        Studies
      </div>
    </section>
  );
};

export default CaseStudies;
