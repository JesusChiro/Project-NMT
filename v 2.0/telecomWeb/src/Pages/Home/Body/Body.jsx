import './Body.css'
import { ABOUTUS, PROVIDERS, CUSTOMERS } from '../../../utils/consts.js'
export function Body() {
    return (
        <>
            <section className='my-10 px-0 sm: px-0 lg: rounded px-8 pt-6 pb-8 mx-auto items-center '>
                <h2 className="text-center text-5xl font-black">Sobre Nosotros</h2>
                <div className="mt-4 lg:grid grid-cols-3 px-4 gap-2">
                    {
                        ABOUTUS.map(({ Img, Title, Description }) => (
                            <div className=" bg-white my-2 sm: px-2 lg: rounded px-8 pt-6 pb-8 mx-auto items-center " key={Img}>
                                <img alt="Sobre Nosotros NM Telecom" className="border-8 rounded-2xl mx-auto " src={Img} />
                                <h2 className="text-center text-balance my-2 text-3xl font-extrabold text-black dark:text-white">{Title}</h2>
                                <p className="text-slate-800 text-justify text-balance font-extrabold">{Description}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className="my-4">
                <h2 className="text-center text-4xl font-black mt-2">Nuestros Principales Clientes</h2>
                <div className="slider">
                    <div className="slidertrack">
                        {
                            CUSTOMERS.map(({ Img, Alt, Id }) => (
                                <div className="slide" key={Id}>
                                    <img alt={Alt} className="my-2" src={Img} />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <h2 className="text-center text-4xl font-black mt-2">Nuestros Principales Proveedores</h2>
                <div className="slider">
                    <div className="slidertrack">
                        {
                            PROVIDERS.map(({ Img, Alt, Id }) => (
                                <div className="slide" key={Id}>
                                    <img alt={Alt} className="my-2" src={Img} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section >
        </>
    )
}