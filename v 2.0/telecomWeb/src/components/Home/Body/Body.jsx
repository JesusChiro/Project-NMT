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
        Title: 'Nuestra Visión',
        Alt: 'Visión de la empresa NM TELECOM',
        Description: `Ser la primera opcion de nuestros clientes en servicios en Redes de Telecomunicaciones, Fibra óptica, Centrales Telefónicas, Sistemas Eléctricos, Sistemas de puesta
        a tierra y otras actividades afines. Líder en el medio, reconocida por su calidad de servicio, atención  personalizada y oportuna.`
    }
]
const CUSTOMERS = [
    {
        Id: '1',
        Img: './img/index/customers/csj.jpg',
        Alt: 'Cliente de NM TELECOM - Poder Judicial Lima Norte '
    },
    {
        Id: '2',
        Img: './img/index/customers/incor.png',
        Alt: 'Cliente de NM TELECOM - Instituto Nacional Cardiológico'
    },
    {
        Id: '3',
        Img: './img/index/customers/weir.png',
        Alt: 'Cliente de NM TELECOM - Weir Mineral Perú - VULCO Perú'
    }, {
        Id: '4',
        Img: './img/index/customers/essalud.png',
        Alt: 'Cliente de NM TELECOM - Seguro Social de Salud'
    },
    {
        Id: '5',
        Img: './img/index/customers/unp.png',
        Alt: 'Cliente de NM TELECOM - Poder Judicial Lima Norte '
    },
    {
        Id: '6',
        Img: './img/index/customers/csj.jpg',
        Alt: 'Cliente de NM TELECOM - Poder Judicial Lima Norte '
    },
    {
        Id: '7',
        Img: './img/index/customers/incor.png',
        Alt: 'Cliente de NM TELECOM - Instituto Nacional Cardiológico'
    },
    {
        Id: '8',
        Img: './img/index/customers/weir.png',
        Alt: 'Cliente de NM TELECOM - Weir Mineral Perú - VULCO Perú'
    }, {
        Id: '9',
        Img: './img/index/customers/essalud.png',
        Alt: 'Cliente de NM TELECOM - Seguro Social de Salud'
    },
    {
        Id: '10',
        Img: './img/index/customers/unp.png',
        Alt: 'Cliente de NM TELECOM - Poder Judicial Lima Norte '
    }
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
        Img: './img/index/proveedores/perfection.svg',
        Alt: 'Proveedor de NM TELECOM - Perefection '
    },
]
export function Body() {
    return (
        <>
            <section className="section-quienessomos">
                <h2 className="title-about">Sobre Nosotros</h2>
                <div className="about-nosotros">
                    {
                        ABOUTUS.map(({ Img, Title, Description }) => (
                            <div className="card-b border-secondary shadow rounded-4" key={Img}>
                                <img alt="Sobre Nosotros NM Telecom" className="img-card" src={Img} />
                                <h2 className="title__card">{Title}</h2>
                                <p className="card-text">{Description}</p>
                            </div>
                        ))
                    }
                </div>

            </section>

            <section className="section-quienessomos">
                <h2 className="title-about">Nuestros Principales Clientes</h2>
                <div className="slider">
                    <div className="slidertrack">
                        {
                            CUSTOMERS.map(({ Img, Alt, Id }) => (
                                <div className="slide" key={Id}>
                                    <img alt={Alt} className="img-cus" src={Img} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className="section-quienessomos">
                <h2 className="title-about">Nuestros Principales Proveedores</h2>
                <div className="slider">
                    <div className="slidertrack">
                        {
                            PROVIDERS.map(({ Img, Alt }) => (
                                <div className="slide" key={Img}>
                                    <img alt={Alt} className="img-cus" src={Img} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section >
        </>
    )
}