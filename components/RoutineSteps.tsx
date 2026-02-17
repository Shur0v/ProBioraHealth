
import React from 'react';

const RoutineSteps: React.FC = () => {
  const steps = [
    { title: "Bedtime Ritual", desc: "Take it at night when bacterial repopulation is most effective.", icon: "🌙" },
    { title: "Just One Tablet", desc: "Chew or let it dissolve on your tongue after brushing.", icon: "💊" },
    { title: "Gargle & Wait", desc: "If using mouthwash, wait 30 minutes before taking ProBiora.", icon: "⏳" },
    { title: "Experience it", desc: "In as little as 30 days, feel fresher, cleaner, and brighter.", icon: "🌟" },
  ];

  return (
    <section className="py-32 bg-white reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-probiora-800 mb-6">How to Add ProBiora <br /><span className="text-probiora-400">to Your Routine</span></h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative p-10 bg-probiora-50/50 rounded-[3rem] border border-transparent hover:border-probiora-100 hover:bg-white hover:shadow-xl transition-all duration-500">
              <div className="text-5xl mb-8">{s.icon}</div>
              <h4 className="text-lg font-black text-probiora-800 mb-4">{s.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-light">{s.desc}</p>
              <div className="absolute top-6 right-8 text-4xl font-black text-probiora-100/50">{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoutineSteps;
