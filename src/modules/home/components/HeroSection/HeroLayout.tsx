import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { InfoSection } from "./InfoSection";
import { HeroSection } from "./HeroSection";

gsap.registerPlugin(ScrollTrigger);

export const HeroLayout: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    return (
<div            
            ref={containerRef}
            className="relative w-full min-h-screen bg-black"
        >
            <div className="sticky top-0 z-20 h-screen w-full">
                <HeroSection ref={containerRef} />
            </div>

            {/* InfoSection ahora fluye naturalmente para que el Pin de GSAP funcione */}
            <div className="absolute top-0 w-full">
                <InfoSection triggerRef={containerRef} />
            </div>
        </div>
    );
};