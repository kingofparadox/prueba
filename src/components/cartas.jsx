function Card({ productos }) {
  return (
    <div className="row">
      {productos.map((producto) => (
        <div className="col-12 col-md-6 col-lg-4 mb-4" key={producto.id}>
          {/* Fondo oscuro sutil con un borde que combina con el púrpura */}
          <div className="card text-light shadow-lg border-secondary h-100" style={{ width: '18rem', backgroundColor: '#2a1b3d' }}>
            <img 
              src={producto.imagen} 
              className="card-img-top border-bottom border-secondary" 
              alt={producto.nombre} 
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title fw-bold text-white">{producto.nombre}</h5>
              <p className="card-text text-white-50 flex-grow-1">{producto.descripcion}</p>
              
              {/* Precio en blanco nítido o un tono suave que combine con la gama */}
              <p className="fw-bold fs-4 text-light mt-2 mb-3">${producto.precio}</p>
              
              {/* Botón con estilo limpio que acompaña la interfaz */}
              <a href="#" 
                className="btn w-100 mt-auto text-white" 
                style={{ backgroundColor: '#1a1025', border: '1px solid #4a3363' }}>Comprar</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card