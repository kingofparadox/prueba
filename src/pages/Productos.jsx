import Card from '../components/cartas'
import { Link } from 'react-router-dom'

function producto({ onAgregarAlCarro, carrito }) {
  const listaProductos = [
    { id: 1, nombre: 'Figura Goku SSJ', descripcion: 'Edición coleccionista limitada.', precio: 34990, imagen: 'https://via.placeholder.com/150' },
    { id: 2, nombre: 'Manga Chainsaw Man Vol. 1', descripcion: 'Tomo impreso oficial.', precio: 9990, imagen: 'https://via.placeholder.com/150' },
    { id: 3, nombre: 'Figura Nezuko Kamado', descripcion: 'Versión demonio a escala.', precio: 42990, imagen: 'https://via.placeholder.com/150' }
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
