import { useParams, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { slides } from '../../../data/constants';

export const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Buscamos la data del proyecto (suponiendo que slug coincide con slide.url o un id)
  const project = slides.find(s => s.url === slug) || slides[1];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-white text-black font-sans"
    >
      {/* 🟢 Header / Navegación Superior */}
      <nav className="border-b border-black p-6 flex justify-between items-center sticky top-0 bg-white z-50">
        <button onClick={() => navigate(-1)} className="uppercase tracking-widest text-xs font-bold hover:text-accent transition-colors">
          ← Volver
        </button>
        <span className="font-mono text-xs uppercase opacity-50">Case Study — 2025</span>
      </nav>

      <main>
        {/* 🟥 Hero del Proyecto */}
        <section className="grid grid-cols-1 md:grid-cols-12 border-b border-black">
          <div className="md:col-span-7 p-8 md:p-20 flex flex-col justify-end border-b md:border-b-0 md:border-r border-black">
            <motion.h1 
              initial={{ y: 50 }} animate={{ y: 0 }}
              className="text-[10vw] font-black uppercase leading-[0.85] tracking-tighter"
            >
              {project.label[0]}
            </motion.h1>
            <div className="mt-12 flex flex-wrap gap-2">
              {project.label.map(tag => (
                <span key={tag} className="border border-black px-4 py-1 uppercase text-[10px] font-bold bg-accent text-white">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-5 bg-gray-100 flex items-center justify-center p-12">
            <img src={project.url} className="w-full h-auto grayscale shadow-2xl" alt="Preview" />
          </div>
        </section>

        {/* 🟦 Información Detallada (Bento Style) */}
        <section className="grid grid-cols-1 md:grid-cols-3 border-b border-black text-sm uppercase tracking-widest">
          <div className="p-10 border-b md:border-b-0 md:border-r border-black">
            <p className="text-accent mb-4 font-bold">Cliente</p>
            <p className="font-medium">Freelance / Studio Pro</p>
          </div>
          <div className="p-10 border-b md:border-b-0 md:border-r border-black">
            <p className="text-accent mb-4 font-bold">Rol</p>
            <p className="font-medium">Lead Designer & Fullstack Dev</p>
          </div>
          <div className="p-10">
            <p className="text-accent mb-4 font-bold">Año</p>
            <p className="font-medium">Diciembre 2025</p>
          </div>
        </section>

        {/* 🟨 Contenido del Caso de Estudio */}
        <section className="max-w-4xl mx-auto py-32 px-6">
          <h2 className="text-4xl font-light mb-12 italic uppercase">El Desafío</h2>
          <p className="text-2xl leading-relaxed text-black/80">
            En este proyecto, la meta fue unificar la identidad visual con una arquitectura de software escalable. 
            Utilizamos un enfoque **Noir** para resaltar la jerarquía tipográfica, eliminando distracciones y 
            centrándonos en la conversión del usuario mediante interacciones fluidas.
          </p>
        </section>
      </main>
    </motion.div>
  );
};