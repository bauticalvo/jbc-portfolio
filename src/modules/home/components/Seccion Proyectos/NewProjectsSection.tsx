import React from 'react';

const NewProjectsSection: React.FC = () => {
  return (
    <section className="py-32 px-10 md:px-24 bg-noir-black border-y border-white/5" id="work">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <span className="text-emerald-astute font-mono text-xs tracking-[0.5em] uppercase mb-4 block">
            Selected Works
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Featured<br/><span className="text-white/20">Projects</span>
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
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW9H4dt3NHsszUdaqfrqVYH2NhKuZ_AyFu9UXsE30gWBcSDssOqK_pHlmJ7u6k0jmgUh2SBo_YwvY4FHc01wqGBrcYcp0_8tcGt26tCeySQ-MxMHYQj0tgJ6sGanuASMSWBTzFx4Oavlshs4wmwRP3FYx26g_OkvWSv12cZIq0PlREVZBmepQ3L3-gxixNCNerZ6qruykqUob3UFD6bqlPtn-il2yEqsqIIPODc8EJSXTWwWCB585aF2sWO25BhAxGDJmMLGhpmg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir-black via-noir-black/40 to-transparent p-10 flex flex-col justify-end">
            <span className="text-emerald-astute font-mono text-xs mb-4">01. ARCHIVE</span>
            <h3 className="text-4xl font-black uppercase mb-4">The Monolith Interface</h3>
            <p className="text-gray-300 max-w-md mb-8 leading-relaxed">
              A high-performance dashboard for institutional data visualization. Built with extreme attention to load speeds and visual hierarchy.
            </p>
            <a className="inline-flex items-center gap-4 group/btn" href="#">
              <span className="text-[10px] font-black uppercase tracking-widest group-hover/btn:text-emerald-astute transition-colors">
                View Case
              </span>
              <div className="h-px w-12 bg-white group-hover/btn:bg-emerald-astute group-hover/btn:w-20 transition-all"></div>
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-span-12 md:col-span-4 bento-card group">
          <div className="p-10 flex flex-col h-full">
            <span className="text-violet-innovation font-mono text-xs mb-4">02. BRAND</span>
            <h3 className="text-2xl font-black uppercase mb-6">Void Identity</h3>
            <p className="text-gray-500 text-sm mb-12">
              Complete rebranding for a boutique AI firm focused on transparency. Visual systems inspired by brutalist architecture.
            </p>
            <div className="mt-auto">
              <img
                alt="Project"
                className="w-full aspect-square object-cover mb-8 filter grayscale hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxb7lYAY29d5UiXeWWiwPfSWvAz-8mTaqXvgkj21nKDBwoLnYVpTk5SZodxTOfsDbNiREGUaYTnbBG2Img2cWKFAs8qawb82U1kLSgPhEDE2vtPICTdwvJX8yDe2M-xlKpToFegoU1drFh9T-w4L2tPYU5mE_2udJzm3zS9REEDYmbd79G48PQ_T_P81AD0MQplVduWgvi4AL0iIhOazqj50danHdFawgPdM1R2kt_soctY8Gzj2pJtjmh3HbhUbq1YVjJTSHPHg"
              />
              <button className="w-full border border-white/20 py-4 text-[10px] font-black uppercase tracking-widest hover:border-violet-innovation hover:text-violet-innovation transition-all">
                View Case
              </button>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-span-12 md:col-span-4 bento-card group">
          <div className="p-10">
            <span className="text-emerald-astute font-mono text-xs mb-4">03. SYSTEM</span>
            <h3 className="text-2xl font-black uppercase mb-6">Pulse Engine</h3>
            <p className="text-gray-500 text-sm mb-10">
              Custom e-commerce logic layer designed for high-frequency transactions. 100% test coverage and zero-latency routing.
            </p>
            <button className="text-emerald-astute text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA28fic2YDHVz7pDiEglWKlCwIem2Yd05WRB6nNobveUapBae27KEw8D6k9DOvlb2bTcsh9RvyAIzwoV2lk2e7XVEPmBgXaHLfIbk3TItXEJdHigUJX99YYY1KHTGursOiGm1lc2CAgo6uxsVDbnV6V_SlT3h3QoKYpGFTb7mkFKA34IJfdH9BkuLcfpfYQKFfg5d6968v2BkoWA_wSI2jccojYK6nSu0XBowrmoAeTIIv2YFEvf8zRnEMeJMSEMD5F0b743MKNew"
            />
          </div>
          <div className="relative z-10 p-12 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start">
              <span className="text-noir-black font-mono text-xs font-bold tracking-widest uppercase">
                04. EXPERIMENT
              </span>
              <span className="text-violet-innovation font-black text-4xl">/04</span>
            </div>
            <div>
              <h3 className="text-4xl font-black uppercase text-noir-black mb-4">Kinetic Typography</h3>
              <p className="text-gray-500 max-w-sm mb-6">
                Exploring the intersection of motion and readability in immersive web environments.
              </p>
              <button className="bg-noir-black text-stark-white px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-violet-innovation transition-all">
                Launch Lab
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Method Section */}
      <section className="py-32 bg-stark-white text-noir-black px-10 md:px-24 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="lg:col-span-1">
            <h2 className="text-6xl font-black uppercase tracking-tighter leading-none mb-8">
              The<br/>Method
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We believe in the tension between radical innovation and rigorous structure. Our process is a dance between light and shadow.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-l-4 border-emerald-astute pl-8">
              <p className="text-4xl font-black mb-2">99.9%</p>
              <p className="text-xs font-mono uppercase tracking-widest text-emerald-astute mb-4">
                Astute Reliability
              </p>
              <p className="text-gray-400 text-sm">
                Every line of code is optimized for extreme performance and future-proof scalability.
              </p>
            </div>
            <div className="border-l-4 border-violet-innovation pl-8">
              <p className="text-4xl font-black mb-2">∞/01</p>
              <p className="text-xs font-mono uppercase tracking-widest text-violet-innovation mb-4">
                Innovative Disruption
              </p>
              <p className="text-gray-400 text-sm">
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