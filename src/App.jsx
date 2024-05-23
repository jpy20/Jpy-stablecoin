import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage.jsx'
import Procedures from './pages/procedurePage.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
AOS.init();
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route index element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/useage" element={<Procedures />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
