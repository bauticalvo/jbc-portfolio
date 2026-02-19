import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { InfoSection } from "./InfoSection";
import { TestHero } from "./TestHero";

gsap.registerPlugin(ScrollTrigger);

export const HeroLayout: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(containerRef.current, 
                { filter: "blur(30px)", opacity: 0 },
                {
                    filter: "blur(0px)",
                    opacity: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "center center",
                        scrub: true,
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert(); // Limpieza segura de GSAP en React
    }, []);

    return (
        <div            
            ref={containerRef}
            className="relative flex items-center justify-center h-screen w-full bg-black overflow-hidden will-change-[filter,opacity]"
        >
            <TestHero />
            <div className="absolute inset-0 z-20 pointer-events-none">
                <InfoSection triggerRef={containerRef} />
            </div>
        </div>
    );
};