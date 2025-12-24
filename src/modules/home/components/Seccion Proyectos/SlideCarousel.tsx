import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { slides } from '../../../../data/constants'

export const SlideCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [maxScroll, setMaxScroll] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const x = useMotionValue(0)
  const navigate = useNavigate()

  useEffect(() => {
    const updateIndex = () => {
      const currentX = x.get()
      if (maxScroll === 0) return
      const index = Math.round(Math.abs(currentX) / (carouselRef.current?.offsetWidth! / 4))
      setCurrentIndex(index)
    }

    const unsubscribe = x.on("change", updateIndex)
    return () => unsubscribe()
  }, [maxScroll, x])

  useEffect(() => {
    if (carouselRef.current) {
      setMaxScroll(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    }
  }, [])

  const handleDetail = (slug: string) => {
    navigate(`/proyects/${slug}`)
  }

  return (
    <div className="relative w-full flex flex-col items-center gap-8">
      <div className="relative w-full overflow-hidden border-y border-black/10 py-10">
        <motion.div
          ref={carouselRef}
          className="flex cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragConstraints={{ right: 0, left: -maxScroll }}
          dragElastic={0.05}
        >
          {slides.map((slide, index) => (
            <motion.div
              key={`${slide.url}-${index}`}
              className="shrink-0 w-[30vw] px-2" 
            >
              <div className="w-full h-[70vh] 2xl:h-[50vh] flex flex-col  overflow-hidden group">
                <div className="w-full h-full flex items-center justify-center bg-dark-grey  relative">
                  <img
                    src={slide.url}
                    alt={slide.url}
                    className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-500"
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
                  <section className='absolute bottom-0 left-0 w-full bg-linear-to-t  from-secondary via-secondary  to-transparent p-4 text-primary'>
                    <h2 >TITULO</h2>
                    <p className='group-hover:opacity-100 opacity-0'>Texto Descriptivo</p>
                  </section>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="flex gap-6">
        {slides.map((_, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center gap- cursor-pointer relative">
                <span className={`h-1 absolute transition-all duration-300    ${
                currentIndex === index 
                ? "w-6 bg-accent" 
                : "w-4 bg-primary"
              }`}></span>
                <span className={`w-1 absolute transition-all duration-300   ${
                currentIndex === index 
                ? "h-6 bg-accent" 
                : "h-1 bg-primary"
              }`}></span>
            </div>
          )
        })}
      </div>
    </div>
  )
}