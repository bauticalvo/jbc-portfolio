import { Skeleton } from "../Custom/Skeleton"
import { SlideCarousel } from "./SlideCarousel"


export const ProjectsSection = () => {
  
  return (
    <div className="h-screen w-full relative flex flex-col items-center justify-center">
      <Skeleton />
       <div className="absolute top-0 w-full h-[10vh] bg-linear-to-b  from-secondary to-transparent z-20 "></div>
      <section className="flex flex-col items-center justify-center z-10">
        <h1 className="text-5xl ">Proyectos Destacados</h1>
        <p>Explora el trabajo realizado y las ideas detras de este, en profundidad y con detalle.</p>
        <button className="border border-border-grey p-2 mt-4">Ver Proyectos</button>
      </section>
      <section className=" w-full mt-10 flex items-center justify-center z-20 ">
        <SlideCarousel />
      </section>

    </div>
  )
}