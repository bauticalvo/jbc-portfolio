import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-8 mix-blend-difference">
        <div className="flex items-center gap-3">
          {/* <div className="size-5 border-2 border-accent"></div> */}
          <h2 className="text-xl font-black tracking-tighter uppercase leading-none">
            J<span className="text-accent">.</span>B<span className="text-accent">.</span>Calvo
          </h2>
        </div>
        <nav className="hidden md:flex gap-12 text-xs font-bold uppercase tracking-[0.3em] text-white">
          <a className="hover:text-accent transition-colors" href="#work">
            Projects
          </a>
          <a className="hover:text-accent transition-colors" href="#about">
            About
          </a>
          <a className="hover:text-accent transition-colors" href="#contact">
            Contact
          </a>
        </nav>
        <button className="border border-accent text-accent hover:bg-accent hover:text-noir-black px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all">
          Hire Expert
        </button>
      </header>
    </>
  );
};

export default Header;