import React from 'react';

const NewProjectsSection: React.FC = () => {
  return (
    <section className="py-32 px-10 md:px-24 bg-noir-black border-y border-white/5" id="work">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 text-accent">
        <div>
          <span className=" font-mono text-xs tracking-[0.5em] uppercase mb-4 block">
            Obras Seleccionadas
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Proyectos<br/><span className="text-surface">Destacados</span>
          </h2>
        </div>
        <p className="text-gray-500 max-w-xs font-light">
          A curated exploration of digital duality across development and design disciplines.
        </p>
      </div>
      
      <div className="bento-grid">
        {/* Project 1 */}
        <div className="col-span-12 md:col-span-8 bento-card min-h-[500px] group">
          <img
            alt="Project Image"
            className="absolute inset-0 w-full h-full object-contain object-top opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            src='/images/mockup-ser-apple.png'
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir-black via-noir-black/30 to-transparent p-10 flex flex-col justify-end">
            <span className="text-accent font-mono text-xs mb-4">01. ARCHIVE</span>
            <h3 className="text-4xl font-black uppercase mb-4">The Monolith Interface</h3>
            <p className="text-gray-300 max-w-md mb-8 leading-relaxed">
              A high-performance dashboard for institutional data visualization. Built with extreme attention to load speeds and visual hierarchy.
            </p>
            <button className="inline-flex items-center gap-4 group/btn">
              <span className="text-[10px] font-black uppercase tracking-widest group-hover/btn:text-accent transition-all">
                View Case
              </span>
              <div className="h-px w-12 bg-white group-hover/btn:bg-accent group-hover/btn:w-20 transition-all"></div>
            </button>
          </div>
        </div>
        {/* Project 2 */}
        <div className="col-span-12 md:col-span-4 bento-card group">
          <div className="p-10 flex flex-col h-full">
            <span className="text-accent font-mono text-xs mb-4">02. BRAND</span>
            <h3 className="text-2xl font-black uppercase mb-6">Void Identity</h3>
            <p className="text-gray-500 text-sm mb-12">
              Complete rebranding for a boutique AI firm focused on transparency. Visual systems inspired by brutalist architecture.
            </p>
            <div className="mt-auto">
              <div className="relative ">
              <img
                alt="Project"
                className="w-full aspect-square object-cover mb-8 filter grayscale group-hover:grayscale-0 transition-colors duration-500 relative"
                src='/logos/tifosi-square.jpg'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-black via-noir-black/30 group-hover:from-noir-black/90 group-hover:via-noir-black/0 transition-colors duration-700 to-transparent p-10 flex flex-col justify-end"></div>
              </div>
              <button className="w-full border border-white/20 py-4 text-[10px] font-black uppercase tracking-widest hover:border-accent hover:text-accent transition-all">
                View Case
              </button>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-span-12 md:col-span-4 bento-card group">
          <div className="p-10">
            <span className="text-accent font-mono text-xs mb-4">03. SYSTEM</span>
            <h3 className="text-2xl font-black uppercase mb-6">Pulse Engine</h3>
            <p className="text-gray-500 text-sm mb-10">
              Custom e-commerce logic layer designed for high-frequency transactions. 100% test coverage and zero-latency routing.
            </p>
            <button className="text-accent text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
              View Technicals <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Project 4 */}
        <div className="col-span-12 md:col-span-8 bento-card min-h-[350px] group bg-stark-white">
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
            <img
              alt="Background"
              className="w-full h-full object-cover"
              src='/images/mockup-vitam-web.png'
            />
          </div>
          <div className="relative z-10 p-12 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start">
              <span className="text-accent font-mono text-xs font-bold tracking-widest uppercase">
                04. EXPERIMENT
              </span>
            </div>
            <div>
              <h3 className="text-4xl font-black uppercase text-primary mb-4">Kinetic Typography</h3>
              <p className="text-gray-500 max-w-sm mb-6">
                Exploring the intersection of motion and readability in immersive web environments.
              </p>
              <button className="button-glass  px-8 py-3 text-[10px] font-black uppercase tracking-widest  transition-all">
                Launch Lab
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Method Section */}
      <section className="py-32 backdrop-invert-10 rounded-3xl text-accent px-10 md:px-24 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 ">
          <div className="lg:col-span-1   ">
            <h2 className="text-6xl font-black uppercase tracking-tighter leading-none mb-8">
              The<br/>Method
            </h2>
            <p className="text-primary text-lg leading-relaxed">
              We believe in the tension between radical innovation and rigorous structure. Our process is a dance between light and shadow.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-l-4 border-accent pl-8">
              <p className="text-4xl font-black mb-2">99.9%</p>
              <p className="text-xs font-mono uppercase tracking-widest text-accent mb-4">
                Astute Reliability
              </p>
              <p className="text-primary text-sm">
                Every line of code is optimized for extreme performance and future-proof scalability.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-8">
              <p className="text-4xl font-black mb-2">∞/01</p>
              <p className="text-xs font-mono uppercase tracking-widest text-accent mb-4">
                Innovative Disruption
              </p>
              <p className="text-primary text-sm">
                Pushing creative boundaries to ensure your brand stands apart in a saturated market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default NewProjectsSection;