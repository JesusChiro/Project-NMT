import './Body.css'
import { ABOUTUS, PROVIDERS, CUSTOMERS } from '../../../utils/consts'
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
                            PROVIDERS.map(({ Img, Alt,Id }) => (
                                <div className="slide" key={Id}>
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