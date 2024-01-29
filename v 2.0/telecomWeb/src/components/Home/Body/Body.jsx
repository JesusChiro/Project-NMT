import './Body.css'

const ABOUTUS = [
    {
        Img: 'https://i.postimg.cc/cLr49TJn/aboutus.png',
        Alt: 'NMT nosotros',
        Title: 'Quienes Somos',
        Description: `En nuestro negocio nos hemos enfocado en Atender, Aconsejar, Manifestar, Conducir a nuestros clientes para crear sólidas
        y estrechas relaciones con ellos y ser parte de su negocio. Nuestra oferta se encuentra respaldada por aliados tecnológicos - 
        reconocidos a nivel global - y por nuestra cartera de servicios certificados y garantizados, en manos de un recurso humano totalmente capacitado.`
    },
    {
        Img: 'https://i.postimg.cc/jqpXd3ps/ourmission.png',
        Alt: 'Misión de la empresa NM TELECOM',
        Title: 'Nuestra Misión',
        Description: `Satisfacer las necesidades de nuestros clientes a través de servicios de calidad, brindando soluciones efectivas en áreas de Redes de Telecomunicaciones, 
        Fibra óptica, Centrales Telefónicas, Sistemas Eléctricos, Sistemas de puesta a tierra y otras actividades afines.`
    },
    {
        Img: 'https://i.postimg.cc/jdyhWQTy/ourvision.png',
        Title: 'Visión de la empresa NM TELECOM',
        Description: `Ser la primera opcion de nuestros clientes en servicios en Redes de Telecomunicaciones, Fibra óptica, Centrales Telefónicas, Sistemas Eléctricos, Sistemas de puesta
        a tierra y otras actividades afines. Líder en el medio, reconocida por su calidad de servicio, atención  personalizada y oportuna.`
    }
]
const CUSTOMERS = [
    {
        Img: './img/index/customers/csj.jpg',
        Alt: 'Cliente de NM TELECOM - Poder Judicial Lima Norte '
    },
    {
        Img: './img/index/customers/incor.png',
        Alt: 'Cliente de NM TELECOM - Instituto Nacional Cardiológico'
    },
    {
        Img: './img/index/customers/weir.png',
        Alt: 'Cliente de NM TELECOM - Weir Mineral Perú - VULCO Perú'
    }, {
        Img: './img/index/customers/essalud.png',
        Alt: 'Cliente de NM TELECOM - Seguro Social de Salud'
    },
    {
        Img: './img/index/customers/unp.png',
        Alt: 'Cliente de NM TELECOM - Poder Judicial Lima Norte '
    },
    {
        Img: './img/index/customers/incor.png',
        Alt: 'Cliente de NM TELECOM - Instituto Nacional Cardiológico'
    },
    {
        Img: './img/index/customers/weir.png',
        Alt: 'Cliente de NM TELECOM - Weir Mineral Perú - VULCO Perú'
    }, {
        Img: './img/index/customers/essalud.png',
        Alt: 'Cliente de NM TELECOM - Seguro Social de Salud'
    },
]
const PROVIDERS = [
    {
        Img: './img/index/proveedores/intcomex.png',
        Alt: 'Proveedor de NM TELECOM - INTCOMEX '
    },
    {
        Img: './img/index/proveedores/sego.png',
        Alt: 'Proveedor de NM TELECOM - SEGO '
    },
    {
        Img: './img/index/proveedores/anixter.svg',
        Alt: 'Proveedor de NM TELECOM - ANIXTER '
    },
    {
        Img: './img/index/proveedores/intcomex.png',
        Alt: 'Proveedor de NM TELECOM - INTCOMEX '
    },
    {
        Img: './img/index/proveedores/sego.png',
        Alt: 'Proveedor de NM TELECOM - SEGO '
    },
    {
        Img: './img/index/proveedores/anixter.png',
        Alt: 'Proveedor de NM TELECOM - ANIXTER '
    },
]
export function Body() {
    return (
        <>
            <main>
                <a name="aboutus"></a>
                <h2 className="title-about">Sobre Nosotros</h2>
                <section className="section-quienessomos">
                    {
                        ABOUTUS.map(({ Img, Title, Description }) => (
                            <div className="card-b border-secondary shadow rounded-4" key={Img}>
                                <img alt="..." className="img-card" src={Img}/>
                                <div className="card-body">
                                    <h2 className="card-title title__card">{Title}</h2>
                                    <p className="card-text parrafo__card">{Description}</p>
                                </div>
                            </div>
                        ))
                    }
                </section>
                {/* <!-- slider 2 - marcas de clientes --> */}
                <a name="customers"></a>
                <section className="c-clientes">
                    <h2 className="title-about">Nuestros Principales Clientes</h2>
                    <div className="carrusel-clientes">
                        <div className="carrusel--">
                            {
                                CUSTOMERS.map(({ Img, Alt }) => (
                                    <div className="carrusel-img" key={Img}>
                                        <img alt={Alt} className="img-cus" src={Img} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <h3 className="title-about">Nuestros Principales Proveedores</h3>
                    <div className="carrusel-clientes">
                        <div className="carrusel--">
                            {
                                PROVIDERS.map(({ Img, Alt }) => (
                                    <div className="carrusel-img" key={Img}>
                                        <img alt={Alt} className="img-cus" src={Img} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}