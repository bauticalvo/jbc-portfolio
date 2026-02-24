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
    const imageLayerRef = useRef<HTMLImageElement>(null);
    const glassLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerRef?.current || !proyectRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(proyectRef.current, {
        yPercent: 0,
        ease: "none",
        startAt: { yPercent: -100 },
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
        },
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imageLayerRef.current,
          start: "350% top", 
          end: "+=50%", 
          scrub: 1, 
        }
      });

      tl.fromTo(imageLayerRef.current, 
        { x: 80, y: -80 }, 
        { x: 0, y: 0, ease: "power2.out" }, 
        0
      ).fromTo(glassLayerRef.current,
        { x: -80, y: 80 }, 
        { x: 0, y: 0, ease: "power2.out" },
        0
      );
    }, proyectRef);

    return () => ctx.revert();
  }, [triggerRef]);


    return (
        <div 
            ref={proyectRef}
            className="flex flex-col items-center justify-center h-screen bg-secondary w-full relative  will-change-transform z-20">
            <Skeleton />
            <div className="absolute top-0 w-full h-[10vh] bg-linear-to-b from-secondary to-transparent z-20 "></div>
            <div className="absolute bottom-0 w-full h-[10vh] bg-linear-to-t  from-secondary to-transparent z-20 "></div>
            <div className="z-10 flex items-start w-full px-[14vw]">
                <section className="w-1/2 ">
                    <div className="text-6xl font-bold uppercase">
                        <h1>idear.</h1>
                        <h1>crear.</h1>
                        <h1>impactar.</h1>
                    </div>
                    <p className="w-full text-2xl">
                       <span className="text-lg">00. </span> Construyo identidades que trasciendan la pantalla. Mi enfoque integra la creación de sistemas visuales,
                        branding y experiencias digitales, enfocados en la experiencia del usuario.
                        {/* No solo diseño interfaces, doy vida a marcas coherentes que nacen desde un concepto gráfico sólido y evolucionan hasta convertirse en experiencias digitales de alto impacto. */}
                    </p>
                    <button 
                        className="border border-border-grey p-2 mt-4"

                    >
                        Acerca de mi
                    </button>
                </section>
                <section className="w-1/2 flex items-center justify-end">
                        <div className="glass-card h-[40vh] w-[40vh] rounded-r-2xl relative flex items-center justify-center">
                            
                            {/* Foto (Se desplaza hacia abajo a la izquierda) */}
                            <img
                            ref={imageLayerRef}
                            src="/images/perfilbyn.jpg"
                            alt="Perfil"
                            className="absolute z-40 -bottom-20 -left-20 rounded-r-2xl h-[40vh] shadow-2xl"
                            />

                            {/* Cuadrado de Vidrio/Glass (Se desplaza hacia arriba a la derecha) */}
                            <div 
                            ref={glassLayerRef}
                            className="absolute glass-card z-10 -top-20 -right-20 rounded-r-2xl h-[40vh] w-[40vh]"
                            ></div>

                        </div>
                        </section>
            </div>
        </div>
    )
}