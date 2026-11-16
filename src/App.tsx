import { Route, Routes } from 'react-router'
import Landing from './pages/Landing'
import UniverseHub from './pages/UniverseHub'
import SofiaProfile from './pages/universe/SofiaProfile'
import PoliceReport from './pages/universe/PoliceReport'
import NewsArchive from './pages/universe/NewsArchive'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/universo" element={<UniverseHub />} />
      <Route path="/universo/sofia" element={<SofiaProfile />} />
      <Route path="/universo/informe" element={<PoliceReport />} />
      <Route path="/universo/noticias" element={<NewsArchive />} />
    </Routes>
  )
}

export default App
