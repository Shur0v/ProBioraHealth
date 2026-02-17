
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden medical-gradient">
      {/* Abstract Medical Patterns */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-probiora-100/50 rounded-l-[10rem] -z-10 translate-x-20 rotate-3"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-probiora-100 text-probiora-800 text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-probiora-200">
              Science-Backed Oral Care
            </span>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-probiora-800 leading-[1.05] mb-8 tracking-tighter">
              Time to Upgrade <br />
              <span className="text-probiora-400 font-serif italic font-normal">Your Oral Care.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-500 max-w-xl mb-12 leading-relaxed font-light">
              Welcome to the Power of Positive Bacteria. ProBiora's patented dental probiotics repopulate your mouth's good bacteria while crowding out the bad.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-10 py-5 bg-probiora-800 text-white font-black rounded-2xl hover:shadow-2xl hover:shadow-probiora-800/30 transition-all transform hover:-translate-y-1 uppercase tracking-widest text-sm">
                Shop Now
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-probiora-800 font-black rounded-2xl border border-probiora-100 hover:bg-probiora-50 transition-all uppercase tracking-widest text-sm">
                Why ProBiora?
              </button>
            </div>
            
            <div className="mt-16 flex items-center justify-center lg:justify-start gap-4 grayscale opacity-60">
               <img src="https://via.placeholder.com/100x40?text=WOMEN+OWNED" alt="Certification" className="h-10" />
            </div>
          </div>
          
          <div className="flex-1 relative reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="relative z-10 animate-slow-float">
              <img 
                src="https://picsum.photos/seed/dental-probiotic/800/1000" 
                alt="Smiling Professional with ProBiora" 
                className="rounded-[4rem] shadow-2xl border-[12px] border-white max-h-[600px] w-full object-cover"
              />
              <div className="absolute -bottom-10 -right-10 glass-card p-6 rounded-3xl shadow-2xl border border-white/50 max-w-[240px]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Clinically Proven</span>
                </div>
                <p className="text-sm font-semibold text-probiora-800">100% Beneficial Dental Strains</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
