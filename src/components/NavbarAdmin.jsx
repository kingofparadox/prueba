import { NavLink } from 'react-router-dom'

function NavbarAdmin() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#fce4ec' }}>
      <div className="container-fluid">
        
        {/* Logo o Identificador del Panel de Control */}
        <NavLink className="navbar-brand d-flex align-items-center text-dark fw-bold" to="/admin/home">
            <img 
                src="/img/logoPAGINA.jpg" 
                alt="Logo Admin" 
                width="40" 
                height="40" 
                className="d-inline-block align-text-top me-2 rounded-circle" 
            />
             AnimeWord <span className="badge bg-dark text-white ms-2 fs-6">Admin</span>
        </NavLink>

        <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#adminNavbarContent" 
            aria-controls="adminNavbarContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="adminNavbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink 
                        className={({ isActive }) => isActive ? 'nav-link active text-dark fw-bold' : 'nav-link text-dark'} 
                        aria-current="page" 
                        to="/admin/home"
                    >
                        Panel Principal
                    </NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink 
                        className={({ isActive }) => isActive ? 'nav-link active text-dark fw-bold' : 'nav-link text-dark'} 
                        to="/admin/productos"
                    >
                        Gestionar Productos
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink 
                        className={({ isActive }) => isActive ? 'nav-link active text-dark fw-bold' : 'nav-link text-dark'} 
                        to="/admin/usuarios"
                    >
                        Usuarios
                    </NavLink>
                </li>
            </ul>

            {/* Enlace o botón para volver al sitio público de la tienda */}
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <NavLink className="nav-link text-danger fw-bold" to="/">
                        Salir al Sitio Web
                    </NavLink>
                </li>
            </ul>
            </div>
        </div>
    </nav>
)
}

export default NavbarAdmin