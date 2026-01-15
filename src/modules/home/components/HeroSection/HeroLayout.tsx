import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { InfoSection } from "./InfoSection";
import UpdateHeroSection from "./HeroSection2";

gsap.registerPlugin(ScrollTrigger);

export const HeroLayout = () => {

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
                <UpdateHeroSection />
            <div ref={contentRef} className="absolute inset-0">
                <InfoSection triggerRef={containerRef} />
            </div>
        </div>
    )

}