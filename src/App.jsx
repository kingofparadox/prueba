import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/barraNavegacion.jsx'
import Footer from './components/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import Index from './pages/Index.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Ventas from './pages/Productos.jsx'
import Registro from './pages/Registro.jsx'
import Login from './pages/Login.jsx'
import Contacto from './pages/Contacto.jsx'
import Blog from './pages/Blog.jsx'
import Carrito from './pages/Carrito.jsx'
import { useState } from 'react'
import './index.css'

function App() {
  const [carrito, setCarrito] = useState([])

  // Función para agregar productos al carrito global
  const agregarAlCarro = (producto) => {
    setCarrito([...carrito, producto])
  }

  // Función para eliminar productos del carrito global
  const eliminarDelCarro = (indexParaBorrar) => {
    setCarrito(carrito.filter((_, index) => index !== indexParaBorrar))
  }
  const estatusGeneral = {
    backgroundColor: '#ffffffff',
    color: '#ffffffff',
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
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/Ventas" element={<Ventas onAgregarAlCarro={agregarAlCarro} carrito={carrito} />} />
          <Route path="/Carrito" element={<Carrito carrito={carrito} onEliminarDelCarro={eliminarDelCarro} />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path= "/Login" element={<Login/>}/>
          <Route path= "/Blog" element = {<Blog/>}/>
          <Route path= "/Contacto" element ={<Contacto/>}/>
          <Route path="*" element={<Index />} />
        </Routes>
        
      </main>
      <Footer />
    </div>
  )
}

export default App