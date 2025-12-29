
import React from 'react';
import { ArrowUpRight, Linkedin, Facebook, Palette, Globe, Mail, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappUrl = "https://wa.me/8801518479218";
  const email = "shahinalam982.as@gmail.com";

  const socialLinks = [
    { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/shahinalamsa/", label: "LinkedIn" },
    { icon: <Palette size={18} />, href: "https://behance.net/shahinalamsa", label: "Behance" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/heyshahinalam/", label: "Instagram" },
    { icon: <Facebook size={18} />, href: "https://www.facebook.com/shahen.alam.111/", label: "Facebook" }
  ];

  return (
    <section id="contact-section" className="py-24 md:py-48 px-6 md:px-20 border-t border-white/5 relative overflow-hidden bg-dark scroll-mt-24">
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-20 lg:gap-32 relative z-10">
        
        {/* Left Side: Value Statement */}
        <div className="w-full lg:w-1/2 space-y-8 md:space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-accent" />
              <span className="text-[10px] font-black uppercase text-accent tracking-[0.4em]">Available for projects</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-[7.5vw] font-extrabold tracking-tighter leading-[0.9] font-display text-white">
              Let's create <br />
              something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">extraordinary</span>
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-slate-500 font-light italic max-w-md">
            Turning complex problems into elegant, production-ready interfaces.
          </p>
        </div>

        {/* Right Side: Structured Info Blocks */}
        <div className="w-full lg:w-[450px] space-y-16">
          
          {/* Block 1: The Identity */}
          <div className="flex items-center gap-6 group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-white/10 p-1 bg-surface shadow-2xl flex-shrink-0">
               <img src="https://picsum.photos/400/400?v=shahin-contact" alt="Shahin Alam" className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-xl md:text-2xl tracking-tight text-white">Shahin Alam</h4>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">Product Designer & Dev</p>
              <div className="flex gap-4 mt-3">
                {socialLinks.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-400 hover:text-accent transition-colors"
                    title={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Block 2: The Direct Contact */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">Start a conversation</p>
              <a 
                href={`mailto:${email}`} 
                className="group flex items-center gap-4 text-2xl md:text-3xl font-bold tracking-tight text-white hover:text-accent transition-all duration-300 break-all"
              >
                {email}
                <Mail className="text-accent opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" size={24} />
              </a>
              <p className="text-sm text-slate-500 font-medium tracking-wide">Phone: +880 1518-479218</p>
            </div>
            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed">
              Typically responds within 24 hours for new design systems and product inquiries.
            </p>
          </div>

          {/* Block 3: Actionable Next Step */}
          <div className="pt-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full px-10 py-6 bg-accent text-dark rounded-2xl font-black uppercase text-xs md:text-sm flex items-center justify-between gap-6 hover:bg-white transition-all duration-500 shadow-xl shadow-accent/10 active:scale-95 text-center"
            >
               <span>Initialize via WhatsApp</span>
               <div className="w-10 h-10 rounded-xl bg-dark/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
               </div>
            </a>
            <p className="mt-6 text-[10px] text-slate-600 uppercase tracking-widest text-center lg:text-left">
              Free 30-min architecture review
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
