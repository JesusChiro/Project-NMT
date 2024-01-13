import './Navbar.css'



export function Navbar() {
    return (
        <>
            <header className="header">
                <div className="container__header">
                    <div className="header__logo">
                        <a href="./index.html"
                        ><img alt="nmtelecom" src="./img/logo.png"
                            /></a>
                    </div>

                    <nav className="header__nav" id="nav">
                        <ul className="header__links">
                            <li className="header__link">
                                <a className="#aboutus" id="linknav">About Us</a>
                            </li>
                            <li className="header__link">
                                <a href="#services" id="linknav2">Our Services</a>
                            </li>
                            <li className="header__link">
                                <a href="#customers" id="linknav3">Main Customers</a>
                            </li>
                            <li className="header__link">
                                <a href="./contactus.html" id="linknav4">Contactain Us</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="header__logo-menu" id="cerrar"></div>
                </div>
            </header>
        </>
    )
}