import { Route, Routes } from 'react-router'
import { HomeScreen } from './Pages/HomeScreen'
import { ProjectDetail } from './modules/projects/components/ProjectDetail'
import { ProyectScreen } from './Pages/ProyectScreen'
import { SmoothScroll } from './modules/app/hooks/SmoothScroll'
import ScrollToTop from './modules/app/hooks/useScrollTop'
import { usePageTransition } from './modules/app/hooks/usePageTransition'
import { PageTransition } from './modules/app/components/PageTransition'
import Header from './modules/navbar/components/Header'
import Footer from './modules/footer/components/Footer'

function App() {

  const { isTransitioning } = usePageTransition();

  return (
    <div className='bg-secondary text-primary w-full font-family overflow-x-scroll no-scrollbar'>
      <PageTransition show={isTransitioning} />
      <ScrollToTop />
      <SmoothScroll />
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/project" element={<ProyectScreen />} />
        <Route path="/project/:slug" element={ <ProjectDetail /> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
