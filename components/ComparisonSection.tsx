
import React from 'react';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-32 bg-white reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1 order-2 lg:order-1">
            <h3 className="text-4xl lg:text-5xl font-extrabold text-probiora-800 mb-8 leading-tight">
              Not All Probiotics Are <br /><span className="text-probiora-400">Created Equal</span>
            </h3>
            
            <div className="space-y-6 text-slate-500 text-lg font-light leading-relaxed mb-12">
              <p>
                ProBiora is different because it contains <strong className="text-probiora-800">ProBiora3®</strong> - a patented blend of three beneficial strains naturally found in the mouth.
              </p>
              <p>
                By populating the mouth with beneficial bacteria, ProBiora helps crowd out harmful bacteria, restore microbiome balance, and support healthier teeth and gums.
              </p>
              <div className="p-8 bg-probiora-50 rounded-[2rem] border border-probiora-100">
                 <p className="text-sm italic">"Most competing products use strains native to the throat or gut, not the oral environment—making them far less effective at truly colonizing the mouth."</p>
              </div>
            </div>
            
            <div className="flex gap-4">
               <button className="px-10 py-5 bg-probiora-800 text-white font-black rounded-2xl hover:shadow-xl transition-all uppercase tracking-widest text-xs">Learn More</button>
               <button className="px-10 py-5 border border-slate-200 text-slate-800 font-black rounded-2xl hover:bg-slate-50 transition-all uppercase tracking-widest text-xs">Compare Strains</button>
            </div>
          </div>
          
          <div className="flex-1 order-1 lg:order-2">
            <div className="relative group">
               <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/20 to-probiora-400/20 blur-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
               <img src="https://picsum.photos/seed/teeth-graphic/800/600" alt="Tooth Micro-level Graphic" className="rounded-[4rem] shadow-2xl border-4 border-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
