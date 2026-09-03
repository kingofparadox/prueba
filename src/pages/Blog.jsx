import '../index.css'

function Blog() {
    
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    
                    {/* Contenedor principal estilizado */}
                    <div className="card text-light shadow-lg border-secondary p-4 p-md-5" style={{ backgroundColor: '#fff9c4' }}>
                        
                        <h1 >
                            Blog & Comunidad AnimeWord
                        </h1>
                        <p>
                            Conoce las experiencias de nuestros coleccionistas y resuelve tus dudas principales en un solo lugar.
                        </p>

                        {/* Botones de navegación interna (Anclajes rápidos) */}
                        <div className="d-flex justify-content-center gap-3 mb-5">
                            <a href="#casos-exito" className="btn btn-outline-light btn-sm px-4 fw-bold">
                                Casos de Éxito
                            </a>
                            <a href="#preguntas-frecuentes" className="btn btn-outline-light btn-sm px-4 fw-bold">
                                Preguntas Frecuentes
                            </a>
                        </div>

                        {/* SECCIÓN 1: Casos de Éxito */}
                        <section id="casos-exito" className="mb-5 pt-3">
                            <h3>
                                ⪩ ⪨ ꠹ Casos de Éxito: Historias de nuestros Coleccionistas
                            </h3>

                            <div className="card bg-dark text-light border-secondary p-4 mb-3">
                                <h5>"La vitrina de Carlos: De una figura a una colección épica"</h5>
                                <p>Cliente desde 2024</p>
                                <p>
                                    Carlos nos contactó buscando su primera figura original de *Demon Slayer*. Hoy, un par de años y varias adquisiciones después, su estantería es un santuario completamente equipado. Nos alegra haberlo acompañado en cada preventa y entrega asegurando que cada caja llegara en estado de colección.
                                </p>
                            </div>

                            <div className="card bg-dark text-light border-secondary p-4">
                                <h5>"El rincón otaku de Valentina y su set de coleccionista"</h5>
                                <p>Cliente desde 2025</p>
                                <p>
                                    Valentina necesitaba un regalo especial y terminó enamorándose de nuestras ediciones limitadas. Gracias a nuestra asesoría personalizada, logró conseguir piezas exclusivas de importación que creía imposibles de encontrar en Chile, con seguimiento en vivo de su envío.
                                </p>
                            </div>
                        </section>

                        {/* SECCIÓN 2: Preguntas Frecuentes (FAQ) */}
                        <section id="preguntas-frecuentes" className="pt-3">
                            <h3>
                                (˶˃𐃷˂˶) Preguntas Frecuentes
                            </h3>

                            <div className="mb-4">
                                <h5>¿Las figuras y productos son 100% originales?</h5>
                                <p className="text-white-50">
                                    Absolutamente. Solo trabajamos con marcas y distribuidores oficiales de Japón (Good Smile Company, Kotobukiya, Bandai, entre otros). Cero imitaciones chinas o piratas.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h5>¿Cómo se realizan los envíos a regiones?</h5>
                                <p className="text-white-50">
                                    Empacamos cada figura con múltiples capas de burbuja y cajas reforzadas para evitar cualquier daño en las esquinas durante el transporte a lo largo de todo Chile.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h5>¿Qué dominios aceptan para registrarse?</h5>
                                <p>
                                    Por motivos de seguridad y validación interna de nuestro proyecto, permitimos registros utilizando correos institucionales de Duoc (`@duoc.cl`, `@profesor.duoc.cl`) y cuentas personales de `@gmail.com`.
                                </p>
                            </div>
                        </section>

                        {/* Botón para volver arriba */}
                        <div className="mt-4 pt-3 border-top border-secondary text-center">
                            <a href="#" className="text-white-50 text-decoration-none small">
                                ↑ Volver arriba
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blog