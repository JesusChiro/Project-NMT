import { Footer } from "../Footer/Footer";
import { Navbarr } from "../Navbar/Navbar";
import { NMT_INFO } from "../../utils/consts.js";
import './About.css'
export function AboutUs() {
    return (
        <>
            <Navbarr />
            <div className="about-us-container">
                <h1 className="title">Sobre Nosotros</h1>
                <div className="about-us-img">
                    <img src="./img/aboutus.jpg" />
                </div>
                <div className="about-us-text">
                    <p>
                        {NMT_INFO.NAME} es un proveedor líder de soluciones de redes innovadoras.
                        Desde nuestra creación en {NMT_INFO.DATE_CREATED}, hemos estado a la
                        vanguardia en el diseño, implementación y gestión de infraestructuras de
                        red seguras y sólidas. Nuestro equipo de profesionales de redes certificados
                        se dedica a ayudar a las empresas a optimizar sus entornos de TI,
                        garantizando una conectividad perfecta y una mayor productividad.Cada miembro
                        de nuestro equipo juega un papel vital en la entrega de los resultados
                        excepcionales que nuestros clientes esperan de nosotros.
                        Nos especializamos en una amplia gama de servicios, que incluyen diseño de
                        redes, seguridad, redes en la nube y más. Nuestra misión es empoderar a
                        las empresas brindándoles soluciones de red confiables, escalables y seguras
                        adaptadas a sus necesidades específicas.
                        Estamos orgullosos de lo que hemos logrado hasta ahora, pero estamos aún más 
                        emocionados por el futuro. Continuaremos innovando y mejorando en todo lo 
                        que hacemos para cumplir y superar las expectativas de nuestros clientes.
                        Únase a nosotros mientras continuamos dando forma al futuro de las redes.
                        Gracias por visitar nuestro sitio web. Si tienes alguna pregunta o te gustaría 
                        saber más sobre nosotros y lo que podemos hacer por ti, no dudes en ponerte en 
                        contacto con nosotros.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}