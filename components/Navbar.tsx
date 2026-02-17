
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-probiora-800 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
            P
          </div>
          <span className="text-xl font-extrabold text-probiora-800 tracking-tight uppercase">
            ProBiora<span className="font-light text-probiora-400">Health</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {['Products', 'Health Benefits', 'Why Different', 'Learn', 'About'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[13px] font-bold text-probiora-800/70 hover:text-probiora-800 uppercase tracking-widest transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="hidden sm:block text-xs font-bold text-probiora-800 uppercase tracking-widest px-4 py-2">
            Professional Portal
          </a>
          <button className="bg-probiora-800 text-white text-xs font-bold px-7 py-3 rounded-full hover:bg-probiora-700 hover:shadow-xl hover:-translate-y-0.5 transition-all uppercase tracking-widest">
            Buy Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
