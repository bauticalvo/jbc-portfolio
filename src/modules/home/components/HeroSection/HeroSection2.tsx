import React from 'react';

const UpdateHeroSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="flex-1 bg-noir-black flex flex-col justify-center items-end px-10 md:px-24 py-32 border-r border-white/5">
        <div className="max-w-md text-right">
          <span className="text-emerald-astute font-mono text-xs tracking-[0.4em] block mb-6">
            01 // DEVELOPER
          </span>
          <h1 className="text-7xl md:text-9xl font-black leading-[0.85] mb-8 uppercase tracking-tighter">
            WEB<br/>DEV
          </h1>
          <p className="text-gray-500 font-light text-lg leading-relaxed max-w-sm ml-auto">
            Engineering robust digital architecture with surgical precision. Performance-first logic hidden in the void.
          </p>
        </div>
      </div>
      <div className="flex-1 bg-stark-white flex flex-col justify-center items-start px-10 md:px-24 py-32">
        <div className="max-w-md text-left">
          <span className="text-violet-innovation font-mono text-xs tracking-[0.4em] block mb-6">
            02 // DESIGNER
          </span>
          <h1 className="text-7xl md:text-9xl font-black leading-[0.85] mb-8 text-noir-black uppercase tracking-tighter">
            DESI<br/>GNER
          </h1>
          <p className="text-gray-500 font-light text-lg leading-relaxed max-w-sm">
            Visualizing the unseen. High-contrast interfaces designed for meaningful human interaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UpdateHeroSection;