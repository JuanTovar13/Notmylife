import { Route, Routes } from 'react-router'
import Landing from './pages/Landing'
import UniverseHub from './pages/UniverseHub'
import SofiaProfile from './pages/universe/SofiaProfile'
import PoliceReport from './pages/universe/PoliceReport'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/universo" element={<UniverseHub />} />
      <Route path="/universo/sofia" element={<SofiaProfile />} />
      <Route path="/universo/informe" element={<PoliceReport />} />
    </Routes>
  )
}

export default App
