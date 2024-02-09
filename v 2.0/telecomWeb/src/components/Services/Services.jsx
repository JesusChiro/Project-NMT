import { SERVICES } from '../../utils/consts.js';
import './Services.css'
import Button from 'react-bootstrap/Button';
export function Services() {
    return (
        <>
            <div className='Card__container'>
                {
                    SERVICES.map(({ img, title, text }) => (
                        <div className='Card' key={img} >
                            <img className='Card__img' src={img} alt={title} />
                            <div className='Card__body'>
                                <h3 className='Card__title'>{title}</h3>
                                <p className='Card__text'>{text}</p>
                                <Button variant='primary' className='Card__btn'>Ver Más...</Button>
                            </div>
                        </div>
                    ))
                }
            </div >
        </>

    )
}