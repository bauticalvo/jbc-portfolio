import { Route, Routes } from 'react-router'
import { HomeScreen } from './Pages/HomeScreen'
import { ProjectDetail } from './modules/projects/components/ProjectDetail'
import Header from './modules/navbar/components/Header'
import Footer from './modules/footer/components/Footer'

function App() {

  return (
    <div className='bg-secondary  w-full font-family overflow-x-scroll no-scrollbar'>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/project/:slug" element={ <ProjectDetail /> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
