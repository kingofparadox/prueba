import Card from '../components/cartas'
import { Link } from 'react-router-dom'

function producto({ onAgregarAlCarro, carrito }) {
  const listaProductos = [
    { id: 1, nombre: 'Producto A', precio: 1000, imagen: '/img/miku.jpg', descripcion: 'Descripción A' },
    { id: 2, nombre: 'Producto B', precio: 2000, imagen: '/img/miku.jpg', descripcion: 'Descripción B' },
    { id: 3, nombre: 'Producto C', precio: 3000, imagen: '/img/pelorosangelbeats.jpg', descripcion: 'Descripción C' },
    { id: 4, nombre: 'Fluttershy', precio: 20000, imagen: '/img/fluttershy.jpg', descripcion: 'My little pony Fluttershy' },
    { id: 5, nombre: 'Kanade Tachibana', precio: 20000, imagen: '/img/angel_beats.png', descripcion: 'Angel Beats Kanade Tachibana' },
    { id: 6, nombre: 'Yuno Gasai', precio: 30000, imagen: '/img/yunogasai1.png', descripcion: 'Mirai Nikki Yuno Gasai' },
    
  ]

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1>Catálogo de Productos</h1>
          <p>Explora y añade tus coleccionables favoritos.</p>
        </div>

        <Link to="/carrito" className="btn btn-light fw-bold position-relative shadow-sm">
          🛒 Ver Carrito
          {carrito.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {carrito.length}
            </span>
          )}
        </Link>
      </div>

      <hr className="border-secondary mb-4" />

      <Card productos={listaProductos} onAgregarAlCarro={onAgregarAlCarro} />
    </div>
  )
}

export default producto
