function Card({ productos }) {
  return (
    <div className="row">
      {productos.map((producto) => (
        <div className="col" key={producto.id}>
          <div className="card" style={{ width: '18rem' }}>
            <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">{producto.descripcion}</p>
              <p className="fw-bold">${producto.precio}</p>
              <a href="#" className="btn btn-primary">Comprar</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card