import { Footer } from "../Footer/Footer.jsx";
import { Navbarr } from "../Navbar/Navbar.jsx";
import { PROVIDERS, CUSTOMERS } from '../../utils/consts.js'

import './Customers.css'
export function Customers() {
    return (
        <>
            <Navbarr />
            <h1 className="title_contain display-4 justify-content-center p-4">NUESTROS CLIENTES</h1>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button aria-controls="panelsStayOpen-collapseOne" aria-expanded="true"
                            className="accordion-button" data-bs-target="#panelsStayOpen-collapseOne"
                            data-bs-toggle="collapse" type="button">Nuestros Principales Clientes
                        </button>
                    </h2>
                    <div className="accordion-collapse collapse show" id="panelsStayOpen-collapseOne">
                        {
                            CUSTOMERS.map(({ Img, Alt, Id }) => (
                                <div className="accordion-body" key={Id}>
                                    <img alt={Alt} className="img__logo" src={Img} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button aria-controls="panelsStayOpen-collapseTwo" aria-expanded="false"
                            className="accordion-button collapsed" data-bs-target="#panelsStayOpen-collapseTwo"
                            data-bs-toggle="collapse" type="button">
                            Nuestros Principales Proveedores
                        </button>
                    </h2>
                    <div className="accordion-collapse collapse" id="panelsStayOpen-collapseTwo">
                        {
                            PROVIDERS.map(({ Img, Alt, Id }) => (
                                <div className="accordion-body" key={Id}>
                                    <img alt={Alt} className="img__logo" src={Img} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}