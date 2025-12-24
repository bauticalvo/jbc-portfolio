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
                    markers: false
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
            <div className="z-10">
                <h1 className="text-7xl font-bold uppercase">CODE & CANVAS</h1>
            </div>
            <div ref={contentRef} className="absolute inset-0">
                <InfoSection triggerRef={containerRef} />
            </div>

        </div>
    )
}