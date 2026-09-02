import { useNavigate } from 'react-router-dom'
import Card from '../components/cartas.jsx'
import Hero from '../components/Hero.jsx' // 1. Importas el Hero

function Producto() {
    const navigate = useNavigate()
    const productos = [
      { id: 1, nombre: 'Producto A', precio: 1000, imagen: '...', descripcion: 'Descripción A' },
      { id: 2, nombre: 'Producto B', precio: 2000, imagen: '...', descripcion: 'Descripción B' },
      { id: 3, nombre: 'Producto C', precio: 3000, imagen: '...', descripcion: 'Descripción C' },
    ]
    
    return(    
      <div className="container py-4">
        
        
        <Card productos={productos} />
      </div>
    )
}

export default Producto