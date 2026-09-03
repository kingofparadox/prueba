import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#5d4037' }}>
    <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">˶ˆ꒳ˆ˵ AnimeWord</NavLink>
        <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink 
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
                        aria-current="page" 
                        to="/"
                    >
                        Index
                    </NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink 
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
                        to="/nosotros"
                    >
                        Nosotros
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink 
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
                        to="/Ventas"
                    >
                        Productos
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
                        to="/Registro"
                    >
                        Registar
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
                        to="/Login"
                    >
                        Login
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
                        to="/Contacto"
                    >
                        Contactanos
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
                        to="/Blog"
                    >
                        Blog
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
    </nav>)
}

export default Navbar