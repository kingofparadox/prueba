import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        correo: '',
        password: ''
    })

    const [errors, setErrors] = useState({})
    const [mensajeExito, setMensajeExito] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let nuevosErrores = {}

        // 1. Validación de Correo (Requerido, máx 100 caracteres, dominios específicos)
        if (!formData.correo.trim()) {
            nuevosErrores.correo = 'El correo es requerido.'
        } else if (formData.correo.length > 100) {
            nuevosErrores.correo = 'El correo no puede superar los 100 caracteres.'
        } else {
            const dominiosValidos = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com']
            const esValido = dominiosValidos.some(dominio => formData.correo.endsWith(dominio))
            if (!esValido) {
                nuevosErrores.correo = 'Solo se permiten correos @duoc.cl, @profesor.duoc.cl y @gmail.com.'
            }
        }

        // 2. Validación de Contraseña (Requerida, entre 4 y 10 caracteres)
        if (!formData.password) {
            nuevosErrores.password = 'La contraseña es requerida.'
        } else if (formData.password.length < 4 || formData.password.length > 10) {
            nuevosErrores.password = 'La contraseña debe tener entre 4 y 10 caracteres.'
        }

        setErrors(nuevosErrores)

        // Si pasa la validación local "medio funciona" mostrando el éxito y simulando el acceso
        if (Object.keys(nuevosErrores).length === 0) {
            setMensajeExito(true)
            console.log('Datos de inicio de sesión válidos:', formData)
            
            // Opcional: Redirigir al index después de un segundo simulando un login exitoso
            setTimeout(() => {
                navigate('/')
            }, 1500)
        } else {
            setMensajeExito(false)
        }
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 text-center">
                    
                    {/* Logotipo o espacio superior (según tu mockup) */}
                    <div className="mb-3 d-flex justify-content-center">
                        <div className="border border-secondary d-flex align-items-center justify-content-center bg-dark text-white-50" style={{ width: '80px', height: '80px' }}>
                            LOGO
                        </div>
                    </div>
                    
                    <h3 className="text-white fw-bold mb-4">AnimeWord</h3> {/* Nombre de tu empresa */}

                    {/* Tarjeta del formulario */}
                    <div className="card text-light shadow-lg border-secondary text-start" style={{ backgroundColor: '#2a1b3d' }}>
                        
                        {/* Cabecera interna del recuadro de sesión */}
                        <div className="card-header bg-dark text-white fw-bold border-secondary py-2">
                            inicio de sesión
                        </div>

                        <div className="card-body p-4">
                            {mensajeExito && (
                                <div className="alert alert-success text-center" role="alert">
                                    ¡Inicio de sesión exitoso! Redirigindo...
                                </div>
                            )}

                            <form onSubmit={handleSubmit} noValidate>
                                
                                {/* Campo Correo */}
                                <div className="mb-3">
                                    <label className="form-label text-white-50 text-uppercase small fw-bold">Correo</label>
                                    <input 
                                        type="email" 
                                        name="correo"
                                        value={formData.correo}
                                        onChange={handleChange}
                                        className={`form-control bg-dark text-light border-secondary ${errors.correo ? 'is-invalid' : ''}`}
                                        placeholder="ejemplo@duoc.cl"
                                    />
                                    {errors.correo && <div className="invalid-feedback">{errors.correo}</div>}
                                </div>
                                {/* Campo Contraseña */}
                                <div className="mb-4">
                                    <label className="form-label text-white-50 text-uppercase small fw-bold">Contraseña</label>
                                    <input 
                                        type="password" 
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={`form-control bg-dark text-light border-secondary ${errors.password ? 'is-invalid' : ''}`}
                                        placeholder="4 a 10 caracteres"
                                    />
                                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                </div>
                                {/* Botón Iniciar Sesión */}
                                <div className="d-flex justify-content-center">
                                    <button 
                                        type="submit" 
                                        className="btn text-white fw-bold px-5 py-2 w-50" 
                                        style={{ backgroundColor: '#1a1025', border: '1px solid #4a3363' }}
                                    >
                                        Iniciar sesión
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login