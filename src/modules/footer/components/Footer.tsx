import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-noir-black text-stark-white pt-32 pb-12 border-t border-white/10" id="contact">
      <div className="container mx-auto px-10 text-center">
        <p className="text-emerald-astute font-mono text-xs uppercase tracking-[0.6em] mb-12">
          Next Phase Starts Here
        </p>
        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-20 glitch-hover leading-[0.8]">
          LETS <span className="text-violet-innovation">BUILD</span><br/>THE VOID
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 mb-32">
          <button className="bg-emerald-astute text-noir-black px-12 py-5 font-black uppercase tracking-widest hover:bg-stark-white transition-all">
            Initiate Project
          </button>
          <button className="border border-white/20 hover:border-violet-innovation hover:text-violet-innovation px-12 py-5 font-black uppercase tracking-widest transition-all">
            The Manifest
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/5 text-[10px] font-mono uppercase tracking-widest text-gray-600">
          <div className="flex justify-center md:justify-start items-center gap-6">
            <a className="hover:text-emerald-astute transition-colors" href="#">
              Github
            </a>
            <a className="hover:text-emerald-astute transition-colors" href="#">
              LinkedIn
            </a>
            <a className="hover:text-emerald-astute transition-colors" href="#">
              X / Twitter
            </a>
          </div>
          <div>
            <p>© 2024 DUALITY ARCHIVE / VER.2.1.0</p>
          </div>
          <div className="flex justify-center md:justify-end gap-12">
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-astute animate-pulse"></span>
              Available
            </span>
            <span>23:59 GMT</span>
          </div>
        </div>
      </div>
      
      {/* Side navigation */}
      <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-10 items-center mix-blend-difference">
        <div className="w-px h-16 bg-white/20"></div>
        <span className="text-[10px] -rotate-90 origin-center whitespace-nowrap uppercase tracking-[0.5em] text-white/40">
          Duality Noir Portfolio
        </span>
        <div className="w-px h-16 bg-white/20"></div>
      </aside>
    </footer>
  );
};

export default Footer;