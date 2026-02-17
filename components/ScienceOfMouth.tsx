
import React from 'react';

const ScienceOfMouth: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-sm font-black text-probiora-400 uppercase tracking-[0.2em] mb-6">Deep Science</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-probiora-800 mb-8 leading-tight">
              The Microbial <br /> <span className="text-probiora-500 italic font-serif font-normal">Battlefield</span>
            </h3>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed font-light">
              Your mouth is a complex ecosystem. Traditional oral care attempts to "kill" all bacteria, but that leaves a vacuum for harmful strains to return faster.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl shrink-0">⚔️</div>
                <div>
                  <h4 className="font-bold text-probiora-800 mb-1 text-base uppercase tracking-wider">Competitive Inhibition</h4>
                  <p className="text-sm text-slate-400 font-light">ProBiora strains compete for nutrients and space, naturally pushing out unwanted bacteria.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl shrink-0">🛡️</div>
                <div>
                  <h4 className="font-bold text-probiora-800 mb-1 text-base uppercase tracking-wider">Biofilm Strengthening</h4>
                  <p className="text-sm text-slate-400 font-light">Builds a resilient, healthy biofilm that protects gums and enamel 24/7.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl shrink-0">⚖️</div>
                <div>
                  <h4 className="font-bold text-probiora-800 mb-1 text-base uppercase tracking-wider">pH Balancing</h4>
                  <p className="text-sm text-slate-400 font-light">Maintains a healthy oral pH to prevent acid-loving decay from starting.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative p-1 bg-white rounded-[4rem] shadow-2xl overflow-hidden group">
              <img src="https://picsum.photos/seed/microscope/800/800" alt="Microbiome Visualization" className="w-full h-full object-cover rounded-[3.8rem] grayscale group-hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-probiora-800/10 pointer-events-none"></div>
              {/* Overlay Callout */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-dashed border-white/50 rounded-full animate-spin-slow flex items-center justify-center">
                 <div className="w-4 h-4 bg-probiora-400 rounded-full shadow-[0_0_20px_rgba(56,163,184,0.8)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceOfMouth;
