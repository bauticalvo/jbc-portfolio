import { motion } from 'framer-motion'
import { ScrollText } from "../modules/home/components/Custom/ScrollText"
import { slides } from '../data/constants'
import { Skeleton } from '../modules/home/components/Custom/Skeleton'


export const ProyectScreen = () => {


    return(
        <div className="h-auto min-h-screen w-full flex flex-col space-y-12 items-center justify-center relative">
            <Skeleton />
            <section className='flex flex-col items-center justify-center space-y-8 mt-[20vh] z-10'>
                <h1 className=" text-3xl lg:text-7xl text-center uppercase">Trabajos y Proyectos <br></br>Destacados</h1>
                <div className="w-full flex justify-center">
                    <ScrollText text="Explora el trabajo realizado y las ideas detras de este, en profundidad y con detalle." />
                </div>
            </section>
            <section className="max-w-6xl mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {slides.map((slide, index) => (
            <motion.div
              key={`${slide.url}-${index}`}
              className="shrink-0 lg:w-[25vw] px-2" 
            >
              <div className="w-full h-[50vh] 2xl:h-[50vh] flex flex-col border border-border-grey  overflow-hidden group">
                <div className="w-full h-full flex items-center justify-center bg-dark-grey  relative">
                  <img
                    src={slide.url}
                    alt={slide.url}
                    className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-700"
                    draggable="false"
                  />
                  <section className='absolute top-4 left-4 flex space-x-2'>
                  {
                    slide.label.map((labelItem, labelIndex) => (
                      <span 
                        key={`${labelItem}-${labelIndex}`}
                        className=" bg-dark-grey text-primary text-xs font-bold p-2 "
                      >{labelItem}</span>
                    ))
                  }
                  </section>
                  <section className='absolute bottom-0 left-0 flex flex-col items-start justify-end h-full w-full bg-linear-to-t  from-secondary from-10% via-transparent via-40% to-90% to-transparent p-4 text-primary'>
                    <h2 className='group-hover:-translate-y-4 translate-y-14 transition-all duration-700 font-bold text-2xl'>{slide.title}</h2>
                    <p className='group-hover:opacity-100 opacity-0 translate-y-14 group-hover:-translate-y-4 transition-all duration-700'>{slide.description}</p>
                  </section>

                </div>
              </div>
            </motion.div>
          ))}
            </section>
        </div>
    )
}