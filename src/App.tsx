import { Route, Routes } from 'react-router'
import { HomeScreen } from './Pages/HomeScreen'
import { Navbar } from './modules/navbar/components/Navbar'
import { ProjectDetail } from './modules/projects/components/ProjectDetail'

function App() {

  return (
    <div className='bg-secondary  w-full font-family overflow-x-scroll no-scrollbar'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/project/:slug" element={ <ProjectDetail /> } />

      </Routes>
    </div>
  )
}

export default App
