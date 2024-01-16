import './Body.css'
export function Body() {
    return (
        <>
            <main>
                <a name="aboutus"></a>

                <h2 className="title-about">Sobre Nosotros</h2>

                <section className="section-quienessomos">
                    <div className="card-b border-secondary shadow rounded-4">
                        <img
                            alt="..."
                            className="img-card"
                            src="https://i.postimg.cc/cLr49TJn/aboutus.png"
                        />
                        <div className="card-body">
                            <h2 className="card-title title__card">Quienes Somos</h2>
                            <p className="card-text parrafo__card">
                                En nuestro negocio nos hemos enfocado en Atender, Aconsejar,
                                Manifestar, Conducir a nuestros clientes para crear sólidas
                                y estrechas relaciones con ellos y ser parte de su negocio.
                                Nuestra oferta se encuentra respaldada por aliados
                                tecnológicos - reconocidos a nivel global - , y por nuestra
                                cartera de servicios certificados y garantizados, en manos de un
                                recurso humano totalmente capacitado.
                            </p>
                        </div>
                    </div>

                    <div className="card-b border-secondary shadow rounded-4">
                        <img
                            alt="..."
                            className="img-card"
                            src="https://i.postimg.cc/jqpXd3ps/ourmission.png"
                        />
                        <div className="card-body">
                            <h2 className="card-title title__card">Nuestra Misión</h2>
                            <p className="card-text parrafo__card">
                                Satisfacer las necesidades de nuestros clientes a través de
                                servicios de calidad, brindando soluciones efectivas en
                                áreas de Redes de Telecomunicaciones, Fibra óptica,
                                Centrales Telefónicas, Sistemas Eléctricos, Sistemas
                                de puesta a tierra y otras actividades afines.
                            </p>
                        </div>
                    </div>

                    <div className="card-b border-secondary shadow rounded-4">
                        <img
                            alt="..."
                            className="img-card"
                            src="https://i.postimg.cc/jdyhWQTy/ourvision.png"
                        />
                        <div className="card-body">
                            <h2 className="card-title title__card">Nuestra Visión</h2>
                            <p className="card-text parrafo__card">
                                Ser la primera opcion de nuestros clientes en servicios en Redes
                                de Telecomunicaciones, Fibra óptica, Centrales
                                Telefónicas, Sistemas Eléctricos, Sistemas de puesta
                                a tierra y otras actividades afines. Líder en el medio,
                                reconocida por su calidad de servicio, atención
                                personalizada y oportuna.
                            </p>
                        </div>
                    </div>
                </section>

                {/* <!-- slider 2 - marcas de clientes --> */}
                <a name="customers"></a>

                <section className="c-clientes">
                    <h2 className="title-about">Nuestros Principales Clientes</h2>

                    <div className="carrusel-clientes">
                        <div className="carrusel--">
                            <div className="carrusel-img">
                                <img
                                    alt=""
                                    className="img-cus"
                                    src="./img/index/customers/weir.png"
                                />
                            </div>

                            <div className="carrusel-img">
                                <img 
                                alt="" 
                                className="img-cus" 
                                src="./img/index/customers/csj.jpg" />
                            </div>

                            <div className="carrusel-img">
                                <img
                                    alt=""
                                    className="img-cus"
                                    src="./img/index/customers/essalud.png"
                                />
                            </div>

                            <div className="carrusel-img">
                                <img
                                    alt=""
                                    className="img-cus"
                                    src="./img/index/customers/incor.svg"
                                />
                            </div>

                            <div className="carrusel-img">
                                <img
                                    alt=""
                                    className="img-cus"
                                    src="./img/index/customers/weir.png"
                                />
                            </div>

                            <div className="carrusel-img">
                                <img alt="" className="img-cus" src="./img/index/customers/csj.jpg" />
                            </div>

                            <div className="carrusel-img">
                                <img
                                    alt=""
                                    className="img-cus"
                                    src="./img/index/customers/essalud.png"
                                />
                            </div>

                            <div className="carrusel-img">
                                <img
                                    alt=""
                                    className="img-cus"
                                    src="./img/index/customers/gilat.png"
                                />
                            </div>

                            <div className="carrusel-img">
                                <img
                                    alt=""
                                    className="img-cus"
                                    src="./img/index/customers/telefonica.png"
                                />
                            </div>

                            <div className="carrusel-img">
                                <img
                                    alt=""
                                    className="img-cus"
                                    src="./img/index/customers/talma1.png"
                                />
                            </div>
                        </div>
                    </div>

                    <h3 className="title-about">Nuestros Principales Proveedores</h3>


                    <div className="carrusel-clientes">
                        <div className="carrusel--">
                            <div className="carrusel-img">
                                <img
                                    alt=""
                                    className="img-cus"
                                    src="./img/index/proveedores/intcomex.png"
                                />
                            </div>

                            <div className="carrusel-img">
                                <img
                                    alt=""
                                    className="img-cus"
                                    src="./img/index/proveedores/logo_2_.png"
                                />
                            </div>

                            <div className="carrusel-img">
                                <img
                                    alt=""
                                    className="img-cus"
                                    src="./img/index/proveedores/sego.png"
                                />
                            </div>

                            <div className="carrusel-img">
                                <img
                                    alt=""
                                    className="img-cus"
                                    src="./img/index/proveedores/1200px-Anixter-Logo-svg.png"
                                />
                            </div>

                            <div className="carrusel-img">
                                <img
                                    alt=""
                                    className="img-cus"
                                    src="./img/index/proveedores/intcomex.png"
                                />
                            </div>

                            <div className="carrusel-img">
                                <img
                                    alt=""
                                    className="img-cus"
                                    src="./img/index/proveedores/logo_2_.png"
                                />
                            </div>

                            <div className="carrusel-img">
                                <img
                                    alt=""
                                    className="img-cus"
                                    src="./img/index/proveedores/sego.png"
                                />
                            </div>

                            <div className="carrusel-img">
                                <img
                                    alt=""
                                    className="img-cus"
                                    src="./img/index/proveedores/1200px-Anixter-Logo-svg.png"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}