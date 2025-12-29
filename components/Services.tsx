
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="scroll-mt-32">
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          Expertise
        </h2>
        <h3 className="text-4xl font-bold tracking-tight">How I can help your project</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className="p-10 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold mb-4">{service.title}</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
