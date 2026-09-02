function Footer() {
  return (
    <footer className="text-light py-4 mt-5 border-top border-secondary" style={{ backgroundColor: '#1a1025' }}>
      <div className="container text-center text-md-start">
        <div className="row align-items-center">
          
          {/* Nombre de la empresa y derechos */}
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <h6 className="fw-bold text-white mb-1">AnimeWord</h6>
            <p className="text-white-50 small mb-0">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </div>

          {/* Información de contacto directa */}
          <div className="col-12 col-md-6 text-md-end">
            <p className="text-white-50 small mb-1">
              Contacto: <a href="mailto:contacto@miproyecto.com" className="text-light text-decoration-none">contacto@miproyecto.com</a>
            </p>
            <p className="text-white-50 small mb-0">
              Teléfono: <span className="text-light">+56 9 1234 5678</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer