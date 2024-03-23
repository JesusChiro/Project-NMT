import { NMT_INFO } from '../../utils/consts'
export function AboutUs() {
    return (
        <>
            <div className='my-10 bg-white sm:px-5 px-2 lg:shadow-md rounded px-8 pt-6 pb-8 mx-auto items-center '>
                <h1 className='items-center text-center text-3xl font-extrabold dark:text-white py-4 sm:text-5xl'>Sobre Nosotros</h1>
                <div className=''>
                    <img className='border-8 rounded-2xl mx-auto'
                        alt="About us - NM Telecom "
                        src="./img/index/aboutus/image.webp"
                    >
                    </img>
                </div>
                <div className="text-justify py-8 mx-2 sm: mx-4 lg: mx-8 py-4">
                    <h2 className="text-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">¿Quienes somos?</h2>
                    <p className="mb-3 text-gray-500 dark:text-gray-400 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">
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
                    <h2 className="text-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">¿Cuál es nuestra visión?</h2>
                    <p className="mb-3 text-gray-500 dark:text-gray-400  first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">
                        Nuestra misión es empoderar a las empresas brindándoles soluciones de red
                        confiables, escalables y seguras adaptadas a sus necesidades específicas.
                        Estamos orgullosos de lo que hemos logrado hasta ahora, pero estamos aún más
                        emocionados por el futuro.<br /> Continuaremos innovando y mejorando en todo lo
                        que hacemos para cumplir y superar las expectativas de nuestros clientes.
                    </p>
                    <h2 className="text-center  mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">¿Cuál es nuestra misión?</h2>
                    <p className="mb-3 text-gray-500 dark:text-gray-400  first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">
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