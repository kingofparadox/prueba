function Card({ productos, onAgregarAlCarro }) {
  return (
    <div className="row">
      {productos.map((producto) => (
        <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center" key={producto.id}>
          {/* Fondo oscuro sutil con un borde que combina con el púrpura */}
          <div style={{ width: '18rem', backgroundColor: '#fce4ec' }}>
            <img 
              src={producto.imagen} 
              className="card-img-top border-bottom border-secondary" 
              alt={producto.nombre} 
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
              <h5>{producto.nombre}</h5>
              <p>{producto.descripcion}</p>
              
              {/* Precio en formato CLP o el estándar que utilices */}
              <p>${producto.precio.toLocaleString('es-CL')}</p>
              
              {/* Botón funcional que captura el producto al hacer clic */}
              <button 
                onClick={() => onAgregarAlCarro(producto)}
                className="btn w-100 mt-auto text-white" 
                style={{ backgroundColor: '#5d4037', border: '1px solid #fce4ec' }}
              >
                Comprar / Agregar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card