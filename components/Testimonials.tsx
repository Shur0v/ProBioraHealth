
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    { name: "Sarah J.", role: "Verified Customer", text: "My dentist recommended my taking this product for a month to see how it would reduce bacteria... I am absolutely amazed at the results!", stars: 5 },
    { name: "Mark T.", role: "Oral Health Enthusiast", text: "I noticed a huge difference in the way my mouth felt and my breath smelled after only one night's use. It's truly life changing.", stars: 5 },
    { name: "Linda R.", role: "Pet Owner", text: "My dogs have used ProBiora for Dogs since they were puppies... their dental health is amazing. As a hygienist, I recommend it to everyone!", stars: 5 },
  ];

  return (
    <section className="py-32 bg-probiora-50/50 reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-probiora-800 mb-6">Healthy Mouths and <br /><span className="text-probiora-400">Happy Customers</span></h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center border border-slate-100">
               <div className="flex gap-1 mb-8">
                 {[...Array(r.stars)].map((_, idx) => (
                   <span key={idx} className="text-yellow-400 text-lg">★</span>
                 ))}
               </div>
               <p className="text-slate-600 text-lg font-light leading-relaxed italic mb-8 flex-grow">"{r.text}"</p>
               <div className="w-16 h-1 bg-probiora-100 mb-6"></div>
               <h5 className="font-black text-probiora-800">{r.name}</h5>
               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-probiora-300 mt-1">{r.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
