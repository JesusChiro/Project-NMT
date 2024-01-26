import { Footer } from "../Footer/Footer.jsx";
import { Navbarr } from "../Navbar/Navbar.jsx";
import './Customers.css'
export function Customers() {
    return (
        <>
            <Navbarr />
            <main className="c-main">
                <h1 className="title_contain display-4 justify-content-center p-4">NUESTROS CLIENTES</h1>

                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item " >
                        <h2 className="accordion-header">
                            <button aria-controls="panelsStayOpen-collapseOne" aria-expanded="true"
                                className="accordion-button" data-bs-target="#panelsStayOpen-collapseOne"
                                data-bs-toggle="collapse" type="button">Nuestros Principales Clientes
                            </button>
                        </h2>

                        <div className="accordion-collapse collapse show" id="panelsStayOpen-collapseOne">
                            <div className="accordion-body">
                                <img alt="" className="img__logo" src="https://i.postimg.cc/L5nxvxWX/weir.png" />
                                <img alt="" className="img__logo" src="https://i.postimg.cc/NfwFHTwX/csj.jpg" />
                                <img alt="" className="img__logo" src="https://i.postimg.cc/hj4yQDbV/essalud.png" />
                                <img alt="" className="img__logo" src="https://i.postimg.cc/tTrrhK2w/gilat.png" />
                                <img alt="" className="img__logo" src="https://i.postimg.cc/kMp1DdVt/talma1.png" />
                                <img alt="" className="img__logo" src="https://i.postimg.cc/MHNdLykY/telefonica.png" />
                            </div>
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
                            <div className="accordion-body">
                                <img alt="" className="img__logo" src="https://i.postimg.cc/522XPKV8/image.png" />
                                <img alt="" className="img__logo" src="https://i.postimg.cc/VLjh74Rs/Logo.png" />
                                <img alt="" className="img__logo" src="https://i.postimg.cc/dQ2SqPQY/1200px-Anixter-Logo-svg.png" />
                                <img alt="" className="img__logo" src="https://i.postimg.cc/x8XC3y1G/logo-2.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </main >
            <Footer />
        </>
    )
}