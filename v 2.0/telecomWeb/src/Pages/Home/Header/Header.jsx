import './Header.css'
import { SLIDERHEADER } from '../../../utils/consts'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom'
export function Header() {
    return (
        <>
            {/* slider 1 - objeto debajo de nav  */}
            <a className="services"></a>
            <div id="slider">
                {/* <!--contenedor principal --> */}
                <div id="slides">
                    {/* <!--contenedor que agrupa todos los div una detras de otro --> */}
                    <div id="overflow">
                        {/* <!--contenedor que agrupa el inner dentro del cuadro  --> */}
                        <div className="inner">
                            {/* <!--contenedor que agrupa los slides en la platilla de slides --> */}
                            {
                                SLIDERHEADER.map(({ Title, Subtitle, Description, Img, AltSlider }) => (
                                    <div className="slide" key={Img}>
                                        <div className="slide-content">
                                            <div className="slide-text">
                                                <h1 className="slide-h1">{Title}</h1>
                                                <h2 className="slide-h2">{Subtitle}</h2>
                                                <p className="slide-p">{Description}</p>
                                                <NavLink className="" to="/nosotros">
                                                    <Button variant='primary' className="cta">Conócenos...!</Button>
                                                </NavLink>

                                            </div>
                                            <div className="slide-img">
                                                <img alt={AltSlider} className="img-slide-services" src={Img} />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}