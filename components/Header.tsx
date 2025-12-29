import { Command, Menu, Terminal, X } from "lucide-react";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Projects", href: "#work" },
    { name: "Principles", href: "#principles" },
    { name: "Stack", href: "#stack" },
    { name: "Protocol", href: "#process" },
  ];

  const whatsappUrl = "https://wa.me/8801518479218";

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-6 md:top-8 left-0 right-0 z-[100] px-6">
      <nav className="max-w-screen-xl mx-auto nav-island px-6 md:px-8 py-4 rounded-3xl flex items-center justify-between shadow-2xl relative">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-dark shadow-[0_0_20px_rgba(190,242,100,0.5)] group-hover:rotate-12 transition-transform">
            <Terminal size={20} />
          </div>
          <span className="font-bold tracking-tight text-lg text-white">
            Shahin
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[14px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={openWhatsApp}
            className="hidden sm:flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white hover:bg-accent hover:text-dark transition-all"
          >
            <Command size={18} /> Initialize Call
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-accent transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 p-4 md:hidden">
            <div className="nav-island rounded-3xl border border-white/10 p-6 space-y-6 animate-in slide-in-from-top-4 duration-300">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/5">
                <button
                  onClick={openWhatsApp}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-accent text-dark text-xs font-black uppercase tracking-widest"
                >
                  <Command size={16} /> Start Project
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
