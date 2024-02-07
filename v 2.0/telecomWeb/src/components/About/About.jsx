import { NMT_INFO } from "../../utils/consts.js";
import './About.css'
export function AboutUs() {
    return (
        <>
            <div className="aboutus-container">
                <h1 className="aboutus-title">Sobre Nosotros</h1>
                <div className="aboutus-img">
                    <img src="./img/index/aboutus/image.png" />
                </div>
                <div className="aboutus-text">
                    <h2 className="aboutus-subtitle">¿Quienes somos?</h2>
                    <p className="aboutus-p">
                        {NMT_INFO.NAME} es un proveedor líder de soluciones tecnlógicas de redes
                        innovadoras. Desde nuestra creación en {NMT_INFO.DATE_CREATED}, hemos
                        estado a la vanguardia en el diseño, implementación y gestión de
                        infraestructuras de red seguras y sólidas.<br /> Nuestro equipo de
                        profesionales de redes certificados se dedica a ayudar a las empresas a
                        optimizar sus entornos de TI, garantizando una conectividad perfecta y
                        una mayor productividad.Cada miembro de nuestro equipo juega un papel
                        vital en la entrega de los resultados excepcionales que nuestros clientes
                        esperan de nosotros. Nos especializamos en una amplia gama de servicios,
                        que incluyen diseño de redes, seguridad, redes en la nube y más.
                    </p>
                    <h2 className="aboutus-subtitle">¿Cuál es nuestra visión?</h2>
                    <p className="aboutus-p">
                        Nuestra misión es empoderar a las empresas brindándoles soluciones de red
                        confiables, escalables y seguras adaptadas a sus necesidades específicas.
                        Estamos orgullosos de lo que hemos logrado hasta ahora, pero estamos aún más
                        emocionados por el futuro.<br /> Continuaremos innovando y mejorando en todo lo
                        que hacemos para cumplir y superar las expectativas de nuestros clientes.
                    </p>
                    <h2 className="aboutus-subtitle">¿Cuál es nuestra misión?</h2>
                    <p className="aboutus-p">
                        Ser la primera opcion de nuestros clientes en servicios en Redes de
                        Telecomunicaciones, Fibra Óptica, Centrales Telefónicas, Sistemas Eléctricos,
                        Sistemas de puesta a tierra y otras actividades afines. Líder en el medio,
                        reconocida por su calidad de servicio, atención personalizada y oportuna.
                    </p>
                </div>
            </div>
        </>
    )
}