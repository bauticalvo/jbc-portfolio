import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

const logos = [
  { src:  "/logos/hey-apple_logo.png", alt: 'Hey Apple' },
  { src: "/logos/logo_reverie_alterno.png", alt: 'Reverie Decants' },
  { src: "/logos/logo_3.png", alt: 'El Ascensor MKT' },
  { src: "/logos/tifosi_logo.svg", alt: 'Tifosi Cuore' },
];
   

export const InfiniteLogos = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!sliderRef.current) return;

      const slider = sliderRef.current;
      const totalWidth = slider.scrollWidth;
      const singleSetWidth = totalWidth / 3;

      gsap.set(slider, { x: 0 });

      gsap.to(slider, {
        x: -singleSetWidth, 
        duration: 20,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % singleSetWidth)
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-12 border-y h-[15vh] border-border-grey bg-secondary z-10 overflow-hidden w-full">
      <div ref={containerRef} className="w-full overflow-hidden relative">
        <div ref={sliderRef} className="flex flex-nowrap shrink-0 items-center">
          
          {[1, 2, 3].map((setIndex) => (
            <div key={setIndex} className="flex shrink-0 items-center">
              {logos.map((logo, i) => (
                <div 
                  key={`${setIndex}-${i}`} 
                  className="mx-12 w-32 md:w-40 flex-none grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-10 w-full object-contain pointer-events-none"
                    width="160"
                    height="40"
                  />
                </div>
              ))}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};