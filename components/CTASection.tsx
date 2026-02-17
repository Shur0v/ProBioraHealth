
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-slate-900 rounded-[3rem] p-12 md:p-24 overflow-hidden shadow-2xl shadow-slate-900/40">
          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] -mr-64 -mt-64"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -ml-64 -mb-64"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
              Ready to redefine your workflow?
            </h2>
            <p className="text-xl text-slate-400 mb-12 font-light">
              Join thousands of innovative teams who have already made the switch. Start your 14-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10">
                Get Started Free
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-slate-800 text-white font-bold rounded-2xl border border-slate-700 hover:bg-slate-700 transition-all">
                Contact Sales
              </button>
            </div>
            <p className="mt-10 text-slate-500 text-sm">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
