import { Route, Routes } from 'react-router'
import { HomeScreen } from './Pages/HomeScreen'
import { Navbar } from './modules/navbar/components/Navbar'
import { ProjectDetail } from './modules/projects/components/ProjectDetail'
import { ProyectScreen } from './Pages/ProyectScreen'
import { SmoothScroll } from './modules/app/hooks/SmoothScroll'
import ScrollToTop from './modules/app/hooks/useScrollTop'
import { usePageTransition } from './modules/app/hooks/usePageTransition'
import { PageTransition } from './modules/app/components/PageTransition'

function App() {

  const { isTransitioning } = usePageTransition();

  return (
    <div className='bg-secondary text-primary w-full font-family overflow-x-scroll no-scrollbar'>
      <PageTransition show={isTransitioning} />
      <ScrollToTop />
      <SmoothScroll />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/project" element={<ProyectScreen />} />
        <Route path="/project/:slug" element={ <ProjectDetail /> } />

      </Routes>
    </div>
  )
}

export default App
