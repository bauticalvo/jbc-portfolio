import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const UpdateHeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      
      particles.forEach((p, index) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha -= 0.005;

        if (p.alpha <= 0) {
          particles.splice(index, 1);
        }

        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 2,
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: (Math.random() - 0.5) * 1.5,
          alpha: 1
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-secondary flex items-center justify-center overflow-hidden">
      {/* 1. Fondo Interactivo */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* 2. El Círculo Grande (Detrás de los textos) */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div 
          className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full overflow-hidden flex relative"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: -222 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-1/2 h-full bg-black relative">
             <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          </div>
          <div className="w-1/2 h-full bg-white shadow-[0_0_150px_rgba(255,255,255,0.2)]" />
        </motion.div>
      </div>

      {/* 3. Contenedor de Textos (Por encima del círculo) */}
      <main className="relative z-20 flex w-full space-x-64 justify-between px-12 items-center pointer-events-none">
        <section className=''>

        </section>
        <section>

        </section>
        {/* Lado Izquierdo */}
        <div className=" text-right mix-blend-difference bg-white/30 backdrop-blur-3xl p-20">
          <span className="text-[10px] tracking-[0.4em] text-white uppercase block mb-6 opacity-70">Core Engineering</span>
          <h1 className="text-8xl md:text-[11rem] font-bold text-white leading-[0.75] tracking-tighter">
            WEB<br />DEV
          </h1>
        </div>

        {/* Lado Derecho */}
        <div className="flex-1 text-left mix-blend-difference bg-black/30 backdrop-blur-3xl p-20">
          <span className="text-[10px] tracking-[0.4em] text-white uppercase block mb-6 opacity-70">Visual Logic</span>
          <h1 className="text-8xl md:text-[11rem] font-bold text-white leading-[0.75] tracking-tighter">
            DESI<br />GNER
          </h1>
        </div>

      </main>

      {/* Decoración lateral e inferior */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] tracking-[0.8em] text-zinc-600 uppercase z-30">
        Duality Noir Portfolio
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
        <span className="text-[9px] tracking-[0.5em] text-zinc-500 uppercase mb-4">Explore Duality</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </div>
  );
};

export default UpdateHeroSection;