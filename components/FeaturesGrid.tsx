
import React from 'react';

const FeaturesGrid: React.FC = () => {
  const reasons = [
    { title: "Freshens Breath", desc: "Naturally neutralizes odors at the source.", icon: "🌬️" },
    { title: "Supports Gums", desc: "Healthier, stronger gums through bacterial balance.", icon: "🦷" },
    { title: "Whitens Teeth", desc: "Brightens your smile without harsh chemicals.", icon: "✨" },
    { title: "Reduces Bacteria", desc: "Crowds out harmful bacteria effectively.", icon: "🛡️" },
    { title: "Combats Cavities", desc: "Helps prevent decay and gum irritation.", icon: "🍎" },
    { title: "Beyond Brushing", desc: "Reaches areas bristles simply can't.", icon: "🚀" },
  ];

  return (
    <section className="py-32 bg-probiora-50/20 reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-probiora-800 tracking-tighter">
            6 Reasons You’ll <br /> <span className="text-probiora-400">Love ProBiora</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="space-y-12 order-2 lg:order-1">
            {reasons.slice(0, 3).map((r, i) => (
              <div key={i} className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform flex-shrink-0">
                  {r.icon}
                </div>
                <div>
                  <h4 className="text-lg font-black text-probiora-800 mb-2">{r.title}</h4>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center py-12 lg:py-0">
             <div className="relative w-full max-w-sm group">
                <div className="absolute inset-0 bg-probiora-400/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform"></div>
                <img src="https://picsum.photos/seed/bottle/500/700" alt="ProBiora Bottle" className="relative z-10 w-full drop-shadow-2xl animate-slow-float" />
             </div>
          </div>
          
          <div className="space-y-12 order-3">
            {reasons.slice(3).map((r, i) => (
              <div key={i} className="flex flex-row-reverse items-start gap-6 group lg:text-right">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform flex-shrink-0">
                  {r.icon}
                </div>
                <div>
                  <h4 className="text-lg font-black text-probiora-800 mb-2">{r.title}</h4>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
