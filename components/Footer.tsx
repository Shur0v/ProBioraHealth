
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-probiora-800 text-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img src="/logo.jpg" alt="ProBiora Health" className="h-12 w-auto object-contain rounded-lg" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
              Redefining oral health through clinical science and the power of beneficial bacteria.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map(i => <div key={i} className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-probiora-800 transition-all cursor-pointer">f</div>)}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8 text-probiora-300">Shop</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">ProBiora Adult</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ProBiora Kids</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ProBiora Pro</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ProBiora Pets</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8 text-probiora-300">Resources</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">Clinical Research</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8 text-probiora-300">Newsletter</h4>
            <p className="text-slate-400 text-xs mb-6 font-light italic">Stay updated on the latest in oral health science.</p>
            <div className="flex bg-white/5 p-1 rounded-xl">
              <input type="text" placeholder="Email address" className="bg-transparent px-4 py-2 text-sm focus:outline-none flex-grow text-white" />
              <button className="px-4 py-2 bg-white text-probiora-800 font-bold text-xs uppercase rounded-lg hover:bg-probiora-100 transition-all">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500 font-light">© 2024 ProBiora Health Inc. All Rights Reserved. FDA statement placeholder text here.</p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
