import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from 'gsap/ScrollTrigger';
import Spline from "@splinetool/react-spline";
import { InfoSection } from "./InfoSection";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        if (!containerRef.current || !contentRef.current) return;

        // Animación de zoom para el fondo
        gsap.fromTo(containerRef.current, 
            { filter: "blur(30px)"},
            {
                filter: "blur(0px)",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "center center",
                    scrub: true,
                    markers: false // Desactivar en producción
                }
            }
        );

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);


    return (
        <div 
            ref={containerRef}
            className="flex items-center justify-center h-screen w-full relative overflow-hidden will-change-transform ">
            <div className="absolute h-full w-full z-10">
                <Spline scene="/scenes/scene.splinecode"/>
            </div>
            {/* <div className="absolute h-screen w-full space-x-4 flex">
                <section className="w-1/2 h-full flex">
                    <div className="border-r border-border-grey/80 h-full w-[10vw]"></div>
                    <div className="border-r border-border-grey/80 h-full w-[20vw]"></div>
                    <div className="border-r border-border-grey/80 h-full w-[20vw]"></div>
                </section>
                <section className="w-1/2 h-full flex">
                    <div className="border-x border-border-grey/80 h-full w-[20vw] mr-2"></div>
                    <div className="border-l border-border-grey/80 h-full w-[20vw] ml-2"></div>
                    <div className="border-l border-border-grey/80 h-full w-[14vw]"></div>
                </section>
            </div> */}
            <div className="z-10">
                <h1 className="text-7xl font-bold uppercase">CODE & CANVAS</h1>
            </div>
            <div ref={contentRef} className="absolute inset-0">
                <InfoSection triggerRef={containerRef} />
            </div>

        </div>
    )
}