
import React from 'react';

const NextGenSection: React.FC = () => {
  return (
    <section className="py-32 overflow-hidden bg-white reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1 relative">
             <div className="relative rounded-[4rem] overflow-hidden shadow-2xl">
               <img src="https://picsum.photos/seed/oral-care/1000/800" alt="The Next Generation" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-probiora-800/20 to-transparent"></div>
             </div>
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-probiora-100 rounded-full blur-3xl -z-10 opacity-60"></div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-sm font-black text-probiora-400 uppercase tracking-[0.2em] mb-6">The Future</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-probiora-800 mb-8 leading-[1.1] tracking-tight">
              The Next Generation <br /> of Oral Care
            </h3>
            <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
              <p>
                Brushing and flossing are essential—but they don’t address the root cause of many oral health issues: harmful bacteria.
              </p>
              <p>
                <strong className="text-probiora-800 font-bold">ProBiora®</strong> is a simple, once-daily oral probiotic that works where brushing can’t. It helps restore beneficial bacteria in your mouth, crowding out the harmful ones responsible for bad breath, cavities, plaque buildup, and gum issues.
              </p>
              <p>
                Just one tablet a day—added to your existing routine—to support fresher breath, healthier gums, and a cleaner, whiter smile from the inside out.
              </p>
            </div>
            <button className="mt-12 px-10 py-5 bg-probiora-800 text-white font-black rounded-2xl hover:shadow-2xl transition-all uppercase tracking-widest text-xs">
              Why ProBiora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextGenSection;
