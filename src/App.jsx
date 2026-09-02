import Navbar from './components/barraNavegacion.jsx'
import Footer from './components/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import Index from './pages/Index.jsx'
import Home from './pages/Home.jsx'
import Ventas from './pages/Productos.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  const estatusGeneral = {
    backgroundColor: '#411a75',
    color: '#f4f2f7',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  }

  return (
    <div style={estatusGeneral}>
      <Navbar />
      <main className="container pt-4" style={{ flexGrow: 1 }}>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Ventas" element={<Ventas />} />
          <Route path="*" element={<Index />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App