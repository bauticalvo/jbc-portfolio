import { Route, Routes } from 'react-router'
import { HomeScreen } from './Pages/HomeScreen'
import { Navbar } from './modules/navbar/components/Navbar'

function App() {

  return (
    <div className='bg-secondary  w-full font-family overflow-x-scroll no-scrollbar'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />


      </Routes>
    </div>
  )
}

export default App
