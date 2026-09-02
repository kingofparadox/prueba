function Hero() {
  return (
    <div className="p-5 mb-4 rounded-3 border border-secondary shadow-lg" style={{ backgroundColor: '#2a1b3d' }}>
      <div className="container-fluid py-3">
        <div className="row align-items-center">
          
          {/* Texto y botón de acción a la izquierda */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-5 fw-bold text-white mb-3">TIENDA ONLINE</h1>
            <p className="col-md-10 text-white-50 fs-6 mb-4">
              Descubre nuestra selección exclusiva. Explora las novedades y encuentra justo lo que buscas con la mejor calidad.
            </p>
            <a href="#productos" className="btn btn-light btn-lg px-4 fw-bold text-dark shadow-sm">
              Ver productos
            </a>
          </div>

          {/* Banner o imagen destacada a la derecha */}
          <div className="col-lg-6">
            <div className="p-4 rounded-3 text-center border border-secondary" style={{ backgroundColor: '#1a1025', minHeight: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="text-white-50 fst-italic">[ Imagen Destacada / Banner ]</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero