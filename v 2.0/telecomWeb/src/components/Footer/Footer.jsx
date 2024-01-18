import './Footer.css'


var today = new Date();
var year = today.getFullYear()

export function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__main">
                    <div className="footer__right">
                        <div className="footer__logo">
                            <a href="./index.html"
                            ><img alt="nmtelecom logo" src="./img/logo.png"
                                /></a>
                        </div>

                        <div className="footer__texto">
                            <p>Calle Enrique Cipriani 266, La Victoria</p>

                            <p>Cel: 954-193-884</p>

                            <p>Cel: 995-863-645</p>

                            <p>
                                E-mail:
                                <a
                                    href="mailto:info@nmtelecom.pe?Subject=Solicito%20cotizacion%20del%20servicio%20de"
                                >info@nmtelecom.pe</a
                                >
                            </p>
                            <p>©Copiright NM TELECOM 2013 - {year}</p>
                        </div>
                    </div>

                    <div className="footer__rrss">
                        <h4>Nuestras Redes Sociales</h4>

                        <div className="footer-icon">
                            <a
                                className="whatsapp-btn"
                                href="https://wa.me/+51967761056?text=Hola%20quisiera%20informacion%20sobre%20los%20servicios%20que%20brindan"
                                target="_blank"
                                rel="noreferrer"
                            ><img
                                    alt="whatsapp telecom"
                                    className="btnwsp"
                                    src="././img/iconwp1.png"
                                />
                            </a>
                            <a href="https://www.facebook.com/nmtelecom.pe/">
                                <img
                                    alt="facebook telecom"
                                    className="footer__fb"
                                    src="./img/icons/facebook.png"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}