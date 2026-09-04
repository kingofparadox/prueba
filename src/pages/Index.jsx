import { useNavigate } from 'react-router-dom'
import Card from '../components/cartas.jsx'
import Hero from '../components/Hero.jsx'

function Index() {
    const navigate = useNavigate()
    const productos = [
      { id: 1, nombre: 'Fluttershy', precio: 20000, imagen: '/img/fluttershy.jpg', descripcion: 'My little pony Fluttershy' },
      { id: 2, nombre: 'Kanade Tachibana', precio: 20000, imagen: '/img/angel_beats.png', descripcion: 'Angel Beats Kanade Tachibana' },
      { id: 3, nombre: 'Yuno Gasai', precio: 30000, imagen: '/img/yunogasai1.png', descripcion: 'Mirai Nikki Yuno Gasai' },
    ]
    
    return(    
      <div className="container py-4">
        <Hero />
        
        <h3>.⊹˖ᯓ★. ݁₊ Nuestros Productos</h3>
        
        <Card productos={productos} />
      </div>
    )
}

export default Index