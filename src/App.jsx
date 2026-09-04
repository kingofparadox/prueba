import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Navbar from './components/barraNavegacion.jsx'
import NavbarAdmin from './components/NavbarAdmin.jsx'
import Footer from './components/Footer.jsx'
import Index from './pages/Index.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Ventas from './pages/Productos.jsx'
import Registro from './pages/Registro.jsx'
import Login from './pages/Login.jsx'
import Blog from './pages/Blog.jsx'
import Contacto from './pages/Contacto.jsx'
import Carrito from './pages/Carrito.jsx'
import AdminHome from './pages/AdminHome.jsx'
import AdminUser from './pages/AdminUser.jsx'

import './index.css'

function MainLayout({ carrito, agregarAlCarro, eliminarDelCarro, isAdmin, setIsAdmin }) {
  const location = useLocation()
  
  const esAdmin = isAdmin || location.pathname.startsWith('/admin')

  const estatusGeneral = {
    backgroundColor: '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  }

  return (
    <div style={estatusGeneral}>
      {esAdmin ? <NavbarAdmin /> : <Navbar />}

      <main className="container pt-4" style={{ flexGrow: 1 }}>
        <Routes>
          {/* Rutas de Administrador primero para evitar que choquen con otras */}
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/usuarios" element={<AdminUser />} />

          {/* Rutas generales */}
          <Route path="/" element={<Index />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/Ventas" element={<Ventas onAgregarAlCarro={agregarAlCarro} carrito={carrito} />} />
          <Route path="/Carrito" element={<Carrito carrito={carrito} onEliminarDelCarro={eliminarDelCarro} />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Login" element={<Login onLogin={(estado) => setIsAdmin(estado)} />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="*" element={<Index />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  const [carrito, setCarrito] = useState([])
  const [isAdmin, setIsAdmin] = useState(false)

  const agregarAlCarro = (producto) => {
    setCarrito([...carrito, producto])
  }

  const eliminarDelCarro = (indexParaBorrar) => {
    setCarrito(carrito.filter((_, index) => index !== indexParaBorrar))
  }

  return (

      <MainLayout 
        carrito={carrito} 
        agregarAlCarro={agregarAlCarro} 
        eliminarDelCarro={eliminarDelCarro}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      />

  )
}

export default App