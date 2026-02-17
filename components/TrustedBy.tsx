
import React from 'react';

const TrustedBy: React.FC = () => {
  const logos = [
    { name: 'Acme', url: 'https://picsum.photos/seed/l1/120/40' },
    { name: 'Globex', url: 'https://picsum.photos/seed/l2/120/40' },
    { name: 'Soylent', url: 'https://picsum.photos/seed/l3/120/40' },
    { name: 'Initech', url: 'https://picsum.photos/seed/l4/120/40' },
    { name: 'Umbrella', url: 'https://picsum.photos/seed/l5/120/40' },
    { name: 'Hooli', url: 'https://picsum.photos/seed/l6/120/40' },
  ];

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-12">
          Empowering teams at world-class companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale transition-all hover:grayscale-0">
          {logos.map((logo) => (
            <img 
              key={logo.name} 
              src={logo.url} 
              alt={logo.name} 
              className="h-8 md:h-10 object-contain hover:scale-110 transition-transform cursor-pointer" 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
