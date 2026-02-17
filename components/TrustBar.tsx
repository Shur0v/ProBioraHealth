
import React from 'react';

const TrustBar: React.FC = () => {
  const awards = [
    "DENTIST RECOMMENDED",
    "CLINICALLY PROVEN",
    "PATENTED FORMULA",
    "EST. 1985",
    "MADE IN THE USA"
  ];

  return (
    <div className="bg-probiora-800 py-6 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="flex items-center justify-between gap-8 whitespace-nowrap animate-marquee md:animate-none md:flex-row flex-col">
          {awards.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-probiora-300">✦</span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
