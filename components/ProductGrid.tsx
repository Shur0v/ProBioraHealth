
import React from 'react';

const ProductGrid: React.FC = () => {
  const features = [
    {
      title: "Seamless Integration",
      desc: "Connect your workflow with over 200+ popular enterprise tools automatically.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Real-time Analytics",
      desc: "Gain deep insights into user behavior with our low-latency processing engine.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Advanced Security",
      desc: "Enterprise-grade encryption and security protocols protecting your data 24/7.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>,
      color: "bg-emerald-50 text-emerald-600"
    }
  ];

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-4">Features</h2>
          <p className="text-4xl font-extrabold text-slate-900 mb-6">Built for performance</p>
          <p className="text-lg text-slate-500 font-light">
            Everything you need to launch, scale, and manage your products with precision and ease.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="group p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:border-primary-100 hover:shadow-2xl hover:shadow-primary-500/5 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className={`w-14 h-14 ${f.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed font-light">{f.desc}</p>
              <button className="mt-8 text-sm font-bold text-primary-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
