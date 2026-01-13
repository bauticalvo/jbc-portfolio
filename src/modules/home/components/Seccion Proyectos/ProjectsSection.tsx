import MotionButton from "../Custom/MotionButton"
import { Skeleton } from "../Custom/Skeleton"
import { SlideCarousel } from "./SlideCarousel"


export const ProjectsSection = () => {
  
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center">
      <Skeleton />
       <div className="absolute top-0 w-full h-[10vh] bg-linear-to-b  from-secondary to-transparent z-20 "></div>
      <section className="flex flex-col mt-[10vh] items-center justify-center z-10">
        <h1 className="text-2xl lg:text-5xl ">Proyectos Destacados</h1>
        <p><span className="text-lg">01. </span>Explora el trabajo realizado y las ideas detras de este, en profundidad y con detalle.</p>
        <MotionButton link="/project" text_1="Ver Proyectos" text_2="Ver Proyectos" />
      </section>
      <section className=" w-3/4 2xl:w-1/2  mt-10 flex items-center justify-center z-20 relative">
       <div className="absolute left-0 w-[10vh] h-full bg-linear-to-r  from-secondary to-transparent z-30 "></div>
        <SlideCarousel />
       <div className="absolute right-0 w-[10vh] h-full bg-linear-to-l  from-secondary to-transparent z-30 "></div>
      </section>

    </div>
  )
}