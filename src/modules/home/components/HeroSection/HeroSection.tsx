import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Props {
    // La referencia del contenedor que disparará el efecto al hacer scroll
    ref: React.RefObject<HTMLDivElement>;
}

export const HeroSection: React.FC<Props> = ({ ref }) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 1. Carga del Script de Fluidos
        const existingScript = document.querySelector(`script[src="/webgl-fluid.js"]`);
        if (!existingScript) {
            const script = document.createElement('script');
            script.src = '/webgl-fluid.js';
            script.async = true;
            document.body.appendChild(script);
        }

        // 2. Animación de Blur Dinámico
        if (sectionRef.current && ref.current) {
            gsap.to(sectionRef.current, {
                filter: "blur(20px)  ",
                scale: 0.95,
                zIndex: -100,
                ease: "none",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top top",      
                    end: "bottom top",     
                    scrub: true,           
                }
            });
        }

        return () => {
            // Limpieza de ScrollTriggers para evitar fugas de memoria
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [ref]);

    return (
        <div 
            ref={sectionRef} 
            className="relative w-full h-screen bg-black overflow-hidden will-change-[filter,transform]"
        >
            <canvas 
                id="canvas" 
                className="block w-full h-full"
                style={{ 
                    filter: 'grayscale(100%) brightness(0.7)',
                }}
            />

            <section className="absolute top-1/2 left-1/2 h-full flex flex-col justify-center items-center md:items-start -translate-x-1/2 -translate-y-1/2 space-y-20 md:space-y-0 pointer-events-none glass-bg w-full pt-[10vh] pb-6 px-4 mix-blend-difference">
                <div className="text-right flex flex-col justify-end items-end mix-blend-difference h-1/2 w-full p-6 2xl:p-20 ">
                    <span className="text-[10px] tracking-[0.4em] text-accent uppercase block mb-6 opacity-70">Core Engineering</span>
                    <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-bold text-accent leading-[0.75] tracking-tighter">
                        WEB<br />DEV
                    </h1>
                </div>

                <div className="flex flex-col  text-left mix-blend-difference h-1/2 w-full p-6 2xl:p-20">
                    <span className="text-[10px] tracking-[0.4em] text-accent uppercase block mb-6 opacity-70">Visual Logic</span>
                    <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-bold text-accent leading-[0.75] tracking-tighter">
                       UX-UI <br />DESIGNER
                    </h1>
                </div>
            </section>
        </div>
    );
};