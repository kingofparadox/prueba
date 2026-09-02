import { useState } from 'react'
import Card from '../components/cartas'

function productos() {
  // Estado para almacenar los productos elegidos
  const [carrito, setCarrito] = useState([])

  // Lista de ejemplo (puedes adaptarla a tus datos)
  const listaProductos = [
    { id: 1, nombre: 'Figura Goku SSJ', descripcion: 'Edición coleccionista limitada.', precio: 34990, imagen: '/ruta-imagen.jpg' },
    { id: 2, nombre: 'Manga Chainsaw Man Vol. 1', descripcion: 'Tomo impreso oficial.', precio: 9990, imagen: '/ruta-imagen2.jpg' }
  ]

  // Función que recibe el producto clickeado y lo añade al carrito
  const agregarAlCarro = (productoSeleccionado) => {
    setCarrito([...carrito, productoSeleccionado])
    console.log('Producto agregado al carrito:', productoSeleccionado.id)
  }

  return (
    <div className="container py-5">
      <h2 className="text-white fw-bold mb-4">Catálogo de Productos</h2>
      
      {/* Indicador rápido del carrito */}
      <div className="mb-4 text-white-50">
        🛒 Productos en el carrito: <span className="badge bg-light text-dark">{carrito.length}</span>
      </div>

      {/* Le pasamos la función como prop al componente Card */}
      <Card productos={listaProductos} onAgregarAlCarro={agregarAlCarro} />
    </div>
  )
}

export default productos