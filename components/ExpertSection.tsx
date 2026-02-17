
import React from 'react';

const ExpertSection: React.FC = () => {
  return (
    <section className="py-32 bg-slate-900 overflow-hidden relative reveal">
      <div className="absolute top-0 right-0 w-[60%] h-full bg-probiora-800/10 -z-10 blur-3xl rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1">
             <img src="https://picsum.photos/seed/dentist/800/1000" alt="Doctor" className="rounded-[4rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full" />
          </div>
          
          <div className="flex-1 text-white">
            <h2 className="text-sm font-black text-probiora-400 uppercase tracking-[0.3em] mb-8">Clinical Authority</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold mb-10 leading-tight">The Healthy Mouth <span className="text-probiora-300">Experts.</span></h3>
            
            <div className="space-y-8 text-slate-300 text-lg font-light leading-relaxed">
              <p>
                With 35 plus years of oral-care probiotic research under our belts, what makes a healthy mouth is our specialty.
              </p>
              <p>
                Landmark oral health research led by microbiologist <strong className="text-white">Jeffrey D. Hillman, DMD, PhD</strong>, and a team of researchers, led to the development of ProBiora probiotics.
              </p>
              <blockquote className="border-l-4 border-probiora-400 pl-8 italic text-xl text-probiora-100 py-2">
                "The Leading Experts all Agree: Not only is ProBiora dentist-recommended, but we actually rely on top dental professionals to advise us on our full line of products."
              </blockquote>
            </div>
            
            <button className="mt-12 px-10 py-5 bg-white text-probiora-900 font-black rounded-2xl hover:bg-probiora-100 transition-all uppercase tracking-widest text-xs">
              Meet the Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
