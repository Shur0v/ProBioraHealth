
import React from 'react';

const ProductFamily: React.FC = () => {
  const products = [
    { name: "ProBiora", sub: "Standard Strength", color: "from-probiora-300 to-probiora-400", img: "https://picsum.photos/seed/p1/400/500" },
    { name: "ProBiora Kids", sub: "Gentle Formula", color: "from-orange-300 to-orange-400", img: "https://picsum.photos/seed/pk/400/500" },
    { name: "ProBiora Pro", sub: "Extra Strength", color: "from-blue-400 to-blue-600", img: "https://picsum.photos/seed/pp/400/500" },
    { name: "ProBiora Pets", sub: "Oral Health for Pets", color: "from-green-300 to-green-500", img: "https://picsum.photos/seed/ppets/400/500" },
  ];

  return (
    <section className="py-32 reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-probiora-800 mb-6 tracking-tight leading-tight">
            Dental Probiotics <br /><span className="text-probiora-400">for the Whole Family.</span>
          </h2>
          <p className="text-slate-500 text-lg font-light leading-relaxed">
            Daily oral probiotics designed to balance the oral microbiome, support gum and tooth health, freshen breath, and gently whiten teeth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div key={i} className="group relative bg-white rounded-[3rem] p-8 border border-slate-100 hover:border-probiora-200 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="mb-8 overflow-hidden rounded-2xl bg-slate-50 aspect-[4/5] relative">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black uppercase text-white bg-gradient-to-r ${p.color}`}>
                  Top Rated
                </div>
              </div>
              <h3 className="text-xl font-black text-probiora-800 mb-2">{p.name}</h3>
              <p className="text-sm text-slate-400 mb-6">{p.sub}</p>
              <button className="w-full py-4 rounded-2xl bg-slate-50 group-hover:bg-probiora-800 group-hover:text-white text-probiora-800 font-bold text-xs uppercase tracking-widest transition-all">
                Learn More
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-4">
           <button className="px-10 py-5 bg-probiora-800 text-white font-black rounded-2xl hover:shadow-xl transition-all uppercase tracking-widest text-xs">Why ProBiora</button>
           <button className="px-10 py-5 bg-probiora-100 text-probiora-800 font-black rounded-2xl hover:bg-probiora-200 transition-all uppercase tracking-widest text-xs">Compare Formulas</button>
        </div>
      </div>
    </section>
  );
};

export default ProductFamily;
