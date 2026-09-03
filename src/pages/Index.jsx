import { useNavigate } from 'react-router-dom'
import Card from '../components/cartas.jsx'
import Hero from '../components/Hero.jsx'

function Index() {
    const navigate = useNavigate()
    const productos = [
      { id: 1, nombre: 'Producto A', precio: 1000, imagen: '...', descripcion: 'Descripción A' },
      { id: 2, nombre: 'Producto B', precio: 2000, imagen: '...', descripcion: 'Descripción B' },
      { id: 3, nombre: 'Producto C', precio: 3000, imagen: '...', descripcion: 'Descripción C' },
    ]
    
    return(    
      <div className="container py-4">
        <Hero />
        
        <h3 id="productos" className="mb-4 mt-4 pt-4">.⊹˖ᯓ★. ݁₊ Nuestros Productos</h3>
        
        <Card productos={productos} />
      </div>
    )
}

export default Index