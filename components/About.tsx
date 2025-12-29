
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <div className="lg:col-span-4 sticky top-32">
          <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">
            About Me
          </h2>
          <h3 className="text-3xl font-bold tracking-tight">
            Bridge between <br /> design and code.
          </h3>
        </div>
        
        <div className="lg:col-span-8 space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          <p>
            With over 5 years of experience in the digital space, I've developed a unique perspective that blends the aesthetics of design with the logic of engineering. I don't just design interfaces; I build experiences that are production-ready.
          </p>
          <p>
            My background in UI/UX allows me to empathize deeply with users, while my technical skills in React and TypeScript enable me to architect solutions that are performant and maintainable. I specialize in complex interfaces like ERP systems, dashboards, and scalable SaaS platforms.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-50">12+</div>
              <div className="text-sm text-slate-500">Live Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-50">05</div>
              <div className="text-sm text-slate-500">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
