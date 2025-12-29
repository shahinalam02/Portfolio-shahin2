
import React from 'react';
import { Instagram, Globe, Layout, ArrowUpRight, Linkedin, Facebook } from 'lucide-react';

const Socials: React.FC = () => {
  const links = [
    { name: 'LinkedIn', icon: <Linkedin />, href: 'https://linkedin.com/in/shahinalamsa/', color: 'text-blue-500' },
    { name: 'Behance', icon: <Layout />, href: 'https://behance.net/shahinalamsa', color: 'text-blue-400' },
    { name: 'Instagram', icon: <Instagram />, href: 'https://www.instagram.com/heyshahinalam/', color: 'text-pink-500' },
    { name: 'Dribbble', icon: <Globe />, href: 'https://dribbble.com/Shahinalam98', color: 'text-pink-400' },
    { name: 'Facebook', icon: <Facebook />, href: 'https://www.facebook.com/shahen.alam.111/', color: 'text-blue-600' },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact-section');
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-32 bg-dark px-6 md:px-20 border-t border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">(06) — Connect</span>
          </div>
          <h2 className="text-7xl font-extrabold tracking-tighter leading-none font-display text-white">
            I'm all over the internet
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 glass-card rounded-3xl border border-white/5 flex flex-col justify-between aspect-square group hover:border-accent/40 transition-all"
            >
              <div className="flex justify-between items-start">
                <h4 className="text-xl font-bold text-white">{link.name}</h4>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black bg-white/5 ${link.color}`}>
                  {link.icon}
                </div>
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2 group-hover:text-white transition-colors">
                Follow me <ArrowUpRight size={14} />
              </div>
            </a>
          ))}
          <div 
            onClick={scrollToContact}
            className="p-8 bg-accent rounded-3xl flex flex-col justify-between aspect-square group cursor-pointer lg:col-span-1 shadow-[0_0_30px_rgba(190,242,100,0.2)] hover:shadow-accent/40 transition-all"
          >
             <h4 className="text-2xl font-black text-white">Get in touch</h4>
             <ArrowUpRight size={48} className="text-white group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
