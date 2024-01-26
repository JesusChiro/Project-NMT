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
                        Desde nuestra creación en {NMT_INFO.DATE_CREATED}, hemos estado a la vanguardia en el diseño, implementación
                        y gestión de infraestructuras de red seguras y sólidas.
                        Nuestro equipo de profesionales de redes certificados se dedica a ayudar a las empresas a optimizar sus
                        entornos de TI, garantizando una conectividad perfecta y una mayor productividad.
                        Nos especializamos en una amplia gama de servicios, que incluyen diseño de redes, seguridad, redes en la nube y más.
                        Nuestra misión es empoderar a las empresas brindándoles soluciones de red confiables, escalables y seguras adaptadas a
                        sus necesidades específicas. Únase a nosotros mientras continuamos dando forma al futuro de las redes.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}