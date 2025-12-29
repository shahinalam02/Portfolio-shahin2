import { ArrowUpRight, Cpu, Facebook, Linkedin, Palette } from "lucide-react";
import React from "react";

const Hero: React.FC = () => {
  const scrollToWork = () => {
    const element = document.querySelector("#work");
    if (element) {
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/shahinalamsa/",
      label: "LinkedIn",
    },
    {
      icon: <Palette size={20} />,
      href: "https://behance.net/shahinalamsa",
      label: "Behance",
    },
    {
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/shahen.alam.111/",
      label: "Facebook",
    },
  ];

  return (
    <section className="pt-26 md:pt-48 pb-32 px-6 md:px-20 max-w-screen-2xl mx-auto relative">
      <div className="absolute top-0 right-0 w-[500px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 xl:gap-20 items-center lg:items-start relative z-10">
        {/* Left Side: Profile Card */}
        <div className="w-full lg:col-span-6 xl:col-span-5 animate-slide-right">
          <div className="glass-card p-4 md:p-12 rounded-[3.5rem] w-full">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 md:gap-10 mb-8 text-center sm:text-left">
              <div className="relative group flex-shrink-0">
                <div className="w-32 h-32 md:w-44 md:h-44 rounded-[2.5rem] overflow-hidden border border-white/10 relative z-10">
                  <img
                    src="./assets/Shahin.png"
                    alt="Shahin"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Status Indicator */}
                <div className="absolute bottom-1 right-2 w-8 h-8 bg-accent rounded-full border-[6px] border-[#050702] flex items-center justify-center z-20 shadow-lg">
                  <div className="w-2 h-2 bg-dark rounded-full" />
                </div>
              </div>

              <div className="space-y-6 py-2 flex-1 relative z-20">
                <div>
                  <h3 className="font-bold text-3xl md:text-5xl tracking-tight text-white leading-none">
                    Shahin <br className="hidden sm:block" /> Alam
                  </h3>
                  <p className="text-[11px] text-accent font-black uppercase tracking-[0.4em] mt-3">
                    Product Designer
                  </p>
                </div>

                {/* Social Links */}
              </div>
            </div>

            <div className="space-y-6 pt-10 border-t border-white/5">
              <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent/10 hover:border-accent/30 transition-all text-white/70 hover:text-accent flex-shrink-0"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] bg-accent/5 border border-accent/20 flex items-center justify-center text-accent shadow-[0_0_25px_rgba(190,242,100,0.1)] flex-shrink-0">
                  <Cpu size={28} className="md:w-8 md:h-8" />
                </div>

                <div>
                  <p className="text-white text-2xl md:text-3xl font-black tracking-tight leading-none mb-2">
                    3+ Years Experience
                  </p>
                  <p className="text-[10px] md:text-[11px] text-slate-500 font-bold uppercase tracking-[0.2em]">
                    Engineering Since 2019
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Headline */}
        <div className="w-full lg:col-span-6 xl:col-span-7 space-y-10 text-center lg:text-left flex flex-col justify-center animate-fade-in delay-200">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-white w-fit mx-auto lg:mx-0 shadow-2xl">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(190,242,100,0.8)]" />
            Core Systems Online
          </div>

          <h1 className="text-5xl md:text-[8vw] lg:text-[6.5vw] xl:text-[7.5vw] font-extrabold tracking-tighter leading-[0.85] font-display text-white">
            Designing <br className="lg:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
              Interfaces
            </span>{" "}
            <br />
            that feel like{" "}
            <span className="italic font-light opacity-50 text-white">
              magic.
            </span>
          </h1>
        </div>
      </div>

      {/* Hero Footer */}
      <div className="mt-20 flex flex-col md:flex-row items-end justify-between gap-12 relative z-10 border-t border-white/5 pt-12 animate-slide-up">
        <div className="w-full md:w-2/3 lg:w-3/4">
          <p className="text-xl md:text-3xl lg:text-4xl text-slate-400 max-w-4xl leading-[1.3] font-light text-center md:text-left">
            I construct{" "}
            <span className="text-white font-medium">
              high-fidelity design systems
            </span>{" "}
            and{" "}
            <span className="text-white font-medium">
              reactive frontend architectures
            </span>
            . Based in{" "}
            <span className="text-white border-b border-accent">Dhaka</span>,
            collaborating globally to redefine product thinking.
          </p>
        </div>
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <button
            onClick={scrollToWork}
            className="group px-10 py-7 md:px-12 md:py-8 bg-accent text-dark rounded-[2.5rem] font-black uppercase tracking-widest text-xs md:text-sm flex items-center justify-center gap-6 hover:scale-105 active:scale-95 transition-all shadow-[0_0_60px_rgba(190,242,100,0.2)] hover:shadow-[0_0_80px_rgba(190,242,100,0.4)] whitespace-nowrap"
          >
            View Deployment
            <div className="w-8 h-8 rounded-full bg-dark/10 flex items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight size={20} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
