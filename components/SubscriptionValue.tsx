
import React from 'react';

const SubscriptionValue: React.FC = () => {
  return (
    <section className="py-24 bg-white reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-probiora-800 rounded-[4rem] p-12 lg:p-24 relative overflow-hidden text-center lg:text-left">
          {/* Background Detail */}
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-probiora-100/5 rounded-full -mb-64 -mr-64 blur-3xl"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
            <div className="flex-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-probiora-300 text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-white/10">
                Exclusive Offer
              </span>
              <h3 className="text-4xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                Save 20% on Every <br /><span className="text-probiora-300 italic font-serif font-normal">Subscription</span>
              </h3>
              <ul className="space-y-4 mb-12">
                {[
                  "Free standard shipping on all orders",
                  "Convenient auto-delivery every 30-90 days",
                  "Swap products or cancel anytime",
                  "Unlock exclusive expert dental content"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-slate-300">
                    <div className="w-5 h-5 bg-probiora-400 rounded-full flex items-center justify-center text-[10px] text-white">✓</div>
                    <span className="text-sm font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="px-12 py-6 bg-white text-probiora-800 font-black rounded-2xl hover:bg-probiora-100 transition-all uppercase tracking-widest text-xs">
                Build My Subscription
              </button>
            </div>
            
            <div className="w-full max-w-sm lg:max-w-none lg:flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 blur-[120px] rounded-full"></div>
                <img src="https://picsum.photos/seed/bundle/600/800" alt="Family Bundle" className="relative z-10 rounded-[3rem] shadow-3xl rotate-3 border-4 border-white/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionValue;
