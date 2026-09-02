import { useState } from 'react'

function Contacto() {
    const [formData, setFormData] = useState({
        nombreCompleto: '',
        correo: '',
        contenido: ''
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

        // 1. Validación de Nombre Completo: Requerido, máx 100 caracteres
        if (!formData.nombreCompleto.trim()) {
            nuevosErrores.nombreCompleto = 'El nombre completo es requerido.'
        } else if (formData.nombreCompleto.length > 100) {
            nuevosErrores.nombreCompleto = 'El nombre no puede superar los 100 caracteres.'
        }

        // 2. Validación de Correo: Máx 100 caracteres y dominios específicos (si se ingresa)
        if (formData.correo.trim() !== '') {
            if (formData.correo.length > 100) {
                nuevosErrores.correo = 'El correo no puede superar los 100 caracteres.'
            } else {
                const dominiosValidos = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com']
                const esValido = dominiosValidos.some(dominio => formData.correo.endsWith(dominio))
                if (!esValido) {
                    nuevosErrores.correo = 'Solo se permiten correos @duoc.cl, @profesor.duoc.cl y @gmail.com.'
                }
            }
        }

        // 3. Validación de Contenido / Mensaje: Requerido
        if (!formData.contenido.trim()) {
            nuevosErrores.contenido = 'El contenido del mensaje es requerido.'
        }

        setErrors(nuevosErrores)

        if (Object.keys(nuevosErrores).length === 0) {
            setMensajeExito(true)
            console.log('Mensaje de contacto listo para enviar:', formData)
        } else {
            setMensajeExito(false)
        }
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 text-center">
                    
                    {/* Logotipo superior acorde al mockup */}
                    <div className="mb-3 d-flex justify-content-center">
                        <div className="border border-secondary d-flex align-items-center justify-content-center bg-dark text-white-50" style={{ width: '80px', height: '80px' }}>
                            LOGO
                        </div>
                    </div>
                    
                    <h3 className="text-white fw-bold mb-4">AnimeWord</h3>

                    {/* Tarjeta del formulario con la misma estética del login */}
                    <div className="card text-light shadow-lg border-secondary text-start" style={{ backgroundColor: '#2a1b3d' }}>
                        
                        {/* Cabecera del formulario */}
                        <div className="card-header bg-dark text-white fw-bold border-secondary py-2 text-uppercase small text-center">
                            Formulario de Contactos
                        </div>

                        <div className="card-body p-4">
                            {mensajeExito && (
                                <div className="alert alert-success text-center" role="alert">
                                    ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} noValidate>
                                
                                {/* Campo Nombre Completo */}
                                <div className="mb-3">
                                    <label className="form-label text-white-50 text-uppercase small fw-bold">Nombre Completo</label>
                                    <input 
                                        type="text" 
                                        name="nombreCompleto"
                                        value={formData.nombreCompleto}
                                        onChange={handleChange}
                                        className={`form-control bg-dark text-light border-secondary ${errors.nombreCompleto ? 'is-invalid' : ''}`}
                                        placeholder="Ingresa tu nombre"
                                    />
                                    {errors.nombreCompleto && <div className="invalid-feedback">{errors.nombreCompleto}</div>}
                                </div>

                                {/* Campo Correo */}
                                <div className="mb-3">
                                    <label className="form-label text-white-50 text-uppercase small fw-bold">Correo</label>
                                    <input 
                                        type="email" 
                                        name="correo"
                                        value={formData.correo}
                                        onChange={handleChange}
                                        className={`form-control bg-dark text-light border-secondary ${errors.correo ? 'is-invalid' : ''}`}
                                        placeholder="ejemplo@duoc.cl o @gmail.com"
                                    />
                                    {errors.correo && <div className="invalid-feedback">{errors.correo}</div>}
                                </div>

                                {/* Campo Contenido / Mensaje */}
                                <div className="mb-4">
                                    <label className="form-label text-white-50 text-uppercase small fw-bold">Contenido</label>
                                    <textarea 
                                        name="contenido"
                                        rows="3"
                                        value={formData.contenido}
                                        onChange={handleChange}
                                        className={`form-control bg-dark text-light border-secondary ${errors.contenido ? 'is-invalid' : ''}`}
                                        placeholder="Escribe tu mensaje aquí..."
                                    ></textarea>
                                    {errors.contenido && <div className="invalid-feedback">{errors.contenido}</div>}
                                </div>

                                {/* Botón Enviar Mensaje */}
                                <div className="d-flex justify-content-center">
                                    <button 
                                        type="submit" 
                                        className="btn text-white fw-bold px-5 py-2 w-50" 
                                        style={{ backgroundColor: '#1a1025', border: '1px solid #4a3363' }}
                                    >
                                        Enviar Mensaje
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

export default Contacto