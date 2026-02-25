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
    const glassLayerRef2 = useRef<HTMLDivElement>(null);
    const imageMobileRef = useRef<HTMLImageElement>(null);
    const glassMobileLayerRef = useRef<HTMLDivElement>(null);
    const glassMobileLayerRef2 = useRef<HTMLDivElement>(null);

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
      const tlMobile = gsap.timeline({
        scrollTrigger: {
          trigger: imageMobileRef.current,
          start: "350% top", 
          end: "+=50%", 
          scrub: 1, 
        }
      });

      tl.fromTo(imageLayerRef.current, 
        { x: 80, y: -80, scale: 0.8 }, 
        { x: 0, y: 0, ease: "power2.out", scale: 1 }, 
        0
      ).fromTo(glassLayerRef.current,
        { x: -80, y: 80, opacity: 0 , scale: 0.8}, 
        { x: 0, y: 0, ease: "power2.out", opacity: 1, scale: 1 },
        0
      ).fromTo(glassLayerRef2.current,
        { x: -80, y: 80, opacity: 0 , scale: 0.8}, 
        { x: 0, y: 0, ease: "power2.out", opacity: 1, scale: 1 },
        0
      );
      tlMobile.fromTo(imageMobileRef.current, 
        { x: 40, y: -40, scale: 0.8 }, 
        { x: 0, y: 0, ease: "power2.out", scale: 1 }, 
        0
      ).fromTo(glassMobileLayerRef.current,
        { x: 40, y: 40, opacity: 0 , scale: 0.8}, 
        { x: 0, y: 0, ease: "power2.out", opacity: 1, scale: 1 },
        0
      ).fromTo(glassMobileLayerRef2.current,
        { x: 40, y: 40, opacity: 0 , scale: 0.8}, 
        { x: 0, y: 0, ease: "power2.out", opacity: 1, scale: 1 },
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
            <div className="z-10 flex flex-col xl:flex-row items-start w-full px-8 md:px-18 xl:px-[14vw]">
                <section className="w-full xl:w-1/2 ">
                    <div className="text-4xl xl:text-6xl font-bold uppercase text-accent mb-6">
                        <h1>idear.</h1>
                        <h1>crear.</h1>
                        <h1>impactar.</h1>
                    </div>
                    <p className="w-full text-xl">
                       <span className="text-lg">01. </span> Construyo identidades que trasciendan la pantalla. Mi enfoque integra la creación de sistemas visuales,
                        branding y experiencias digitales, enfocados en la experiencia del usuario.
                        {/* No solo diseño interfaces, doy vida a marcas coherentes que nacen desde un concepto gráfico sólido y evolucionan hasta convertirse en experiencias digitales de alto impacto. */}
                    </p>
                    <button className="border border-border-grey p-2 mt-4">
                        Acerca de mi
                    </button>
                </section>
                <section className="w-full xl:w-1/2 hidden xl:flex items-center justify-center xl:justify-end">
                     <div className="  h-[40vh] w-[40vh] rounded-tr-2xl rounded-bl-2xl relative flex items-center justify-center">
                            <img
                            ref={imageLayerRef}
                            src="/images/perfilbyn.jpg"
                            alt="Perfil"
                            className="absolute z-40  rounded-tr-2xl rounded-bl-2xl h-[40vh] shadow-2xl"
                            />
                            <div 
                            ref={glassLayerRef}
                            className="absolute glass-card z-10 -top-20 -right-20 rounded-tr-2xl rounded-bl-2xl h-[40vh] w-[40vh]"
                            ></div>
                            <div 
                            ref={glassLayerRef2}
                            className="absolute glass-card z-10 -top-40 -right-40 rounded-tr-2xl rounded-bl-2xl h-[40vh] w-[40vh]"
                            ></div>

                        </div>
                 </section>
                 {/* Mobile Version */}
                <section className="w-full xl:w-1/2 flex xl:hidden items-center justify-center xl:justify-end pt-20">
                        <div className=" xl:hidden h-[20vh] w-[20vh]  rounded-tr-2xl rounded-bl-2xl relative flex items-center justify-center">
                            <img
                            ref={imageMobileRef}
                            src="/images/perfilbyn.jpg"
                            alt="Perfil"
                            className="absolute z-40 rounded-tr-2xl rounded-bl-2xl h-[20vh] shadow-2xl"
                            />
                            <div 
                            ref={glassMobileLayerRef}
                            className="absolute glass-card z-10 -top-5 right-10 rounded-tr-2xl rounded-bl-2xl h-[20vh] w-[20vh] "
                            ></div>
                            <div 
                            ref={glassMobileLayerRef2}
                            className="absolute glass-card z-10 -top-10 right-20 rounded-tr-2xl rounded-bl-2xl h-[20vh] w-[20vh] "
                            ></div>
                        </div>
                 </section>
            </div>
        </div>
    )
}