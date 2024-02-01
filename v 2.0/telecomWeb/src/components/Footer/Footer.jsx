import './Footer.css'
import { NMT_INFO } from './../../utils/consts.js'

var today = new Date();
var currentYear = today.getFullYear()

export function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__main">
                    <div className="footer__right">
                        <div className="footer__logo">
                            <a href="./">
                                <img alt="nmtelecom logo" src="./img/logo.png" />
                            </a>
                        </div>

                    </div>
                    <div className="footer__">
                        <div className="footer__texto">
                            <p>Calle Enrique Cipriani 266, La Victoria</p>
                            <p>Cel: 954-193-884</p>
                            <p>Cel: 995-863-645</p>
                            <p>E-mail:
                                <a href="mailto:info@nmtelecom.pe?Subject=Solicito%20cotizacion%20del%20servicio%20de">  info@nmtelecom.pe</a>
                            </p>
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
                </div>
                <div className='footer_copyright'>
                    <span>©Copiright NM TELECOM {NMT_INFO.DATE_CREATED} - {currentYear}</span>
                </div>
            </footer>
        </>
    )
}