import { Footer } from '../Footer/Footer.jsx'
import { Navbarr } from '../Navbar/Navbar.jsx';
import { SERVICES } from '../../utils/consts.js';
import './Services.css'
export function Services() {
    return (
        <>
            <Navbarr />
            <div className='Card__container'>
                {
                    SERVICES.map(({ img, title, text }) => (
                        <div className='Card' key={img} >
                            <img className='Card__img' src={img} alt={title} />
                            <div className='Card__body'>
                                <h3 className='Card__title'>{title}</h3>
                                <p className='Card__text'>{text}</p>
                                <button className='Card__btn'>Ver Más...</button>
                            </div>
                        </div>
                    ))
                }
            </div >
            <Footer />
        </>

    )
}