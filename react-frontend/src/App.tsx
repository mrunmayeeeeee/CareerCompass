import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import AptitudeTest from "./pages/AptitudeTest"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aptitude" element={<AptitudeTest />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App