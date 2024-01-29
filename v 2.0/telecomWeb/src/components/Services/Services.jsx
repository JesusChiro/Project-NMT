import { Footer } from '../Footer/Footer.jsx'
import { Navbarr } from '../Navbar/Navbar.jsx';
import './Services.css'

const SERVICES = [
    {
        img: 'https://i.postimg.cc/7YdpQSXQ/telecity-tenue.jpg',
        title: 'Ingeniería de Data-Center',
        text: `Esta Solución que NMT implementa para las instalaciones de Data Center se inició aprovechando las innovaciones 
        tecnológicas y el gran crecimiento de la industria. Impartiendo una filosofía de diseño flexible, mixto y modular, 
        la solución se utiliza para construir Data Center con costos efectivos de los clientes, cubriendo la consultoría, 
        planificación, diseño, implementación y la optimización de las instalaciones del DC.`
    },
    {
        img: 'https://i.postimg.cc/44c16MnM/12.jpg',
        title: 'Sistemas de Deteccion de Incendios',
        text: `Ofrecemos a nuestros clientes un servicio profesional de protección y extinción de incendios adecuado al entorno 
        que se requiere proteger. La misión que tenemos inicia de una grandísima estrategia plasmada en una ingeniería de Campo,
        el suministro de equipos y materiales con altos estándares calidad, la implementación del sistema con personal calificado,
        el gerenciamiento del mismo por profesionales selectos y un permanente servicio post venta que permitirá mantener los sistemas 
        en buen estado durante el ciclo de vida del equipo.`
    },
    {
        img: 'https://i.postimg.cc/G2ML5zMs/77675535.jpg',
        title: 'Sistemas de Control de Energia',
        text: `Puesta a tierra de los equipos eléctricos Nuestro principal propósito es eliminar los peligros que ocurre cuando hay 
        malas instalaciones eléctricas en las construcciones de nuestros actuales y futuros clientes. Además, también vendemos 
        equipo UPS para prevenir los cortes de energía que influyen en los futuros problemas de equipos de un Datacenter. Por ende, 
        nos preocupamos por el bienestar de los DC de nuestros clientes para que no haya problemas durante su red no tenga ningún 
        inconveniente si sucede algún desperfecto durante su alimentación eléctrica.`
    },
    {
        img: 'https://i.postimg.cc/XJGH7sbd/cctv.jpg',
        title: 'Sistema CCTV',
        text: `Brindamos el servicio de venta e instalacion de equipos de Computo para su empresa o negocio con su respectivo soporte 24/7.`
    },
    {
        img: 'https://i.postimg.cc/PfLJTY8H/best-home-office-set-up-for-remote-workers-1648516920.jpg',
        title: 'Equipos de Computo',
        text: `Brindamos el servicio de venta e instalacion de equipos de Computo para su empresa o negocio con su respectivo soporte 24/7.`
    },
    {
        img: 'https://i.postimg.cc/VvzKBmtB/networkelements3.jpg',
        title: 'Network Devices',
        text: `Ofrecemos al cliente una gama selecta de equipos de redes de acuerdo a las necesidades de su empresa con equipo ya sea
        para sistemas wired o wireless.`
    },
    {
        img: 'https://i.postimg.cc/R0XhVTRS/proyecto-ingenieria.jpg',
        title: 'Ingeniería de Proyectos',
        text: `Brindamos el diseño e implementacion de Centros de Datos para el manejo completo de su red y monitoreo de servicios de servidores.`
    },
    {
        img: 'https://i.postimg.cc/1t0bGW86/crear-pagina-web-gratis-img-header.jpg',
        title: 'Creación de Sistemas Web',
        text: 'Realizamos el servicio de paginas y sistemas web de acuerdo a la necesidad del cliente.'
    },
    {
        img: 'https://i.postimg.cc/SxkRcKDt/Ejemplo1.jpg',
        title: 'Instalación de Digital Signage',
        text: 'Ofrecemos la instalacion de pantallas para cartelería Digital, videowall, salas de videoconferencia.'
    }
]
export function Services() {
    return (
        <>
            <Navbarr />
            <div className='Card__container'>
                {
                    SERVICES.map(({ img, title, text }) => (
                        <div className='Card' key={img} >
                            <img className='Card__img' src={img} alt={title} />
                            <div className='Card__body'>
                                <h3 className='Card__title'>{title}</h3>
                                <p className='Card__text'>{text}</p>
                                <button className='Card__btn'>Ver Más...</button>
                            </div>
                        </div>
                    ))
                }
            </div >
            <Footer />
        </>

    )
}