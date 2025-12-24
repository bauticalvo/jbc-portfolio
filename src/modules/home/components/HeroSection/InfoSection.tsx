import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import { Skeleton } from "../Custom/Skeleton";

gsap.registerPlugin(ScrollTrigger);

interface Props {
    triggerRef: React.RefObject<HTMLDivElement> | null;
}

export const InfoSection = ({triggerRef }: Props) => {

      const proyectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerRef?.current || !proyectRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(proyectRef.current, {
        yPercent: 0,
        ease: "none",
        startAt: { yPercent: 100 },
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
        },
      });
    }, proyectRef);

    return () => ctx.revert();
  }, [triggerRef]);


    return (
        <div 
            ref={proyectRef}
            className="flex flex-col items-center justify-center h-screen bg-secondary w-full relative overflow-hidden will-change-transform z-30">
            <Skeleton />
            <div className="absolute top-0 w-full h-[10vh] bg-linear-to-b from-secondary to-transparent z-20 "></div>
            <div className="absolute bottom-0 w-full h-[10vh] bg-linear-to-t  from-secondary to-transparent z-20 "></div>
            <div className="z-10 flex items-start w-full px-[14vw]">
                <section >
                    <div className="text-6xl font-bold uppercase">
                        <h1>idear.</h1>
                        <h1>crear.</h1>
                        <h1>impactar.</h1>
                    </div>
                    <p className="w-1/2 text-xl">
                        Construyo identidades que trasciendan la pantalla. Mi enfoque integra la creación de sistemas visuales,
                        branding y experiencias digitales, enfocados en la experiencia del usuario.
                        {/* No solo diseño interfaces, doy vida a marcas coherentes que nacen desde un concepto gráfico sólido y evolucionan hasta convertirse en experiencias digitales de alto impacto. */}
                    </p>
                    <button 
                        className="border border-border-grey p-2 mt-4"

                    >
                        Acerca de mi
                    </button>
                </section>
                <section className=""></section>
            </div>
        </div>
    )
}