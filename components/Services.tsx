
import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center gap-20 mb-32">
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Automation</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Focus on what matters. <br />Automate the rest.</h3>
            <p className="text-lg text-slate-500 leading-relaxed font-light mb-8">
              Our intelligent engine identifies repetitive tasks and creates workflows that save your team 20+ hours every week. Leverage AI to handle the mundane.
            </p>
            <ul className="space-y-4">
              {[
                "Smart task prioritization",
                "Automated reporting cycles",
                "Self-healing workflows"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="flex-shrink-0 w-5 h-5 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/service1/800/600" 
                alt="Automation" 
                className="rounded-3xl shadow-xl shadow-slate-200 border border-slate-100"
              />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-50 rounded-full -z-10 blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/service2/800/600" 
                alt="Global Reach" 
                className="rounded-3xl shadow-xl shadow-slate-200 border border-slate-100"
              />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-50 rounded-full -z-10 blur-2xl"></div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-4">Scalability</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Scale without friction.</h3>
            <p className="text-lg text-slate-500 leading-relaxed font-light mb-8">
              Whether you are a startup or a global enterprise, Aura scales with you. Our cloud-native infrastructure ensures 99.9% uptime regardless of traffic spikes.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-2xl font-bold text-slate-900 mb-1">99.9%</div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Reliability</div>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-2xl font-bold text-slate-900 mb-1">200ms</div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Global Latency</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
