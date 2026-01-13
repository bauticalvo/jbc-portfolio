import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ScrollText = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(" ");
  

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const wordsElements = containerRef.current?.querySelectorAll(".word");

      if (wordsElements) {
        gsap.to(wordsElements, {
          color: "#ffffff",
          stagger: 0.1,     
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 30%", 
            end: "top 5%",   
            scrub: true,      
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className=" px-6 w-[80%]  flex justify-center ">
      <h2 
        ref={containerRef} 
        className="max-w-2xl text-lg lg:text-2xl font-black uppercase tracking-tighter leading-tight flex flex-wrap justify-center gap-x-[0.3em]"
      >
        {words.map((word, i) => (
          <span 
            key={i} 
            className="word inline-block" 
            style={{ color: "#333333" }} // Gris oscuro inicial
          >
            {word}
          </span>
        ))}
      </h2>
    </section>
  );
};