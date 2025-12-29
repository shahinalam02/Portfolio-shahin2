import {
  Figma,
  Globe,
  Layers,
  Layout,
  Palette,
  PenTool,
  Type,
} from "lucide-react";
import React from "react";

const Skills: React.FC = () => {
  const highlightTools = [
    {
      name: "Figma",
      desc: "UI/UX design, wireframing, and design systems",
      icon: <Figma className="text-[#F24E1E]" />,
      color: "bg-orange-500/10",
    },
    {
      name: "Webflow",
      desc: "Responsive websites with visual CMS control",
      icon: <Globe className="text-[#4353FF]" />,
      color: "bg-blue-600/10",
    },
    {
      name: "Framer",
      desc: "Interactive prototypes and modern landing pages",
      icon: <Layers className="text-[#0055FF]" />,
      color: "bg-blue-500/10",
    },
  ];

  const creativeTools = [
    {
      name: "Adobe Illustrator",
      icon: <Palette size={18} />,
      category: "Vector",
    },
    {
      name: "Adobe Photoshop",
      icon: <PenTool size={18} />,
      category: "Raster",
    },
    { name: "Adobe InDesign", icon: <Type size={18} />, category: "Layout" },
  ];

  return (
    <section
      id="stack"
      className="py-40 bg-dark px-6 md:px-20 relative overflow-hidden border-t border-white/5 scroll-mt-24"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2" />

      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
        {/* Left Headline Section */}
        <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-40 h-fit">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(190,242,100,0.5)]" />
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.4em]">
              (02) — Tools & Skills
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none font-display text-white">
            My creative <br />{" "}
            <span className="text-accent italic font-light">toolbox.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-md font-light leading-relaxed">
            I leverage the latest technologies to ensure your product is not
            only beautiful but also performant and scalable.
          </p>

          {/* Creative Tools Pill Section */}
          <div className="pt-8 space-y-4">
            <h4 className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]">
              Creative Suite Detail
            </h4>
            <div className="flex flex-wrap gap-3">
              {creativeTools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:border-accent/30 transition-all cursor-default group"
                >
                  <div className="text-accent/50 group-hover:text-accent transition-colors">
                    {tool.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="lg:col-span-7 space-y-12">
          {/* Section: No-Code & Visual Dev */}
          <div className="space-y-6">
            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-secondary">
              No-Code & Visual Development
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {highlightTools.map((tool) => (
                <div
                  key={tool.name}
                  className="p-8 glass-card rounded-[2.5rem] flex flex-col md:flex-row md:items-center gap-10 border border-white/5 hover:border-accent/40 transition-all group relative overflow-hidden"
                >
                  {/* Subtle highlight effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />

                  <div
                    className={`w-20 h-20 rounded-2xl ${tool.color} flex items-center justify-center group-hover:scale-110 transition-transform border border-white/5 relative z-10`}
                  >
                    {React.cloneElement(tool.icon as React.ReactElement, {
                      size: 36,
                    })}
                  </div>
                  <div className="flex-1 relative z-10">
                    <h4 className="font-bold text-3xl tracking-tight mb-2 text-white group-hover:text-accent transition-colors">
                      {tool.name}
                    </h4>
                    <p className="text-slate-400 text-lg font-light leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Tip / Service card */}
          <div className="p-8 rounded-[2.5rem] bg-secondary/5 border border-secondary/20 flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
              <Layout size={20} />
            </div>
            <p className="text-slate-400 text-sm italic font-light">
              I specialize in moving these Adobe tools into detailed case
              studies and technical documentation to focus on production-ready
              systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
