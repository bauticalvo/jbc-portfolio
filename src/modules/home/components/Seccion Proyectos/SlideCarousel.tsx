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

  // Sincronizar el índice de los puntos con el drag
  useEffect(() => {
    const updateIndex = () => {
      const currentX = x.get()
      if (maxScroll === 0) return
      // Calculamos el índice basado en cuánto hemos arrastrado
      const index = Math.round(Math.abs(currentX) / (carouselRef.current?.offsetWidth! / 2))
      setCurrentIndex(index)
    }

    const unsubscribe = x.on("change", updateIndex)
    return () => unsubscribe()
  }, [maxScroll, x])

  useEffect(() => {
    if (carouselRef.current) {
      // El scroll máximo es el ancho total menos lo que se ve en pantalla
      setMaxScroll(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    }
  }, [])

  const handleDetail = (slug: string) => {
    navigate(`/proyects/${slug}`)
  }

  return (
    <div className="relative w-full flex flex-col items-center gap-8">
      {/* 🟢 Contenedor del Carrusel */}
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
              className="shrink-0 w-1/3 px-4" // 👈 w-1/2 para que se vean exactamente 2
            >
              <div className="w-full h-[50vh] flex flex-col bg-secondary border border-black overflow-hidden group">
                <div className="w-full h-[70%] flex items-center justify-center bg-secondary border-b border-black p-6">
                  <img
                    src={slide.url}
                    alt={slide.url}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 select-none"
                    draggable="false"
                  />
                </div>

                <div className="flex flex-col justify-between h-[30%] p-6">
                  <h3 className="text-black font-black uppercase text-lg tracking-tighter">
                    {slide.label.join(" / ")}
                  </h3>
                  <button
                    onClick={() => handleDetail(slide.url as string)}
                    className="self-start border border-black px-6 py-2 text-xs font-bold uppercase hover:bg-accent hover:text-secondary transition-all"
                  >
                    Explorar Proyecto
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 🔵 Indicadores (Dots) */}
      <div className="flex gap-6">
        {slides.map((_, index) => {
          // Lógica para que solo se marquen los puntos que representan los "pares"
          // O todos, si prefieres navegación individual
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