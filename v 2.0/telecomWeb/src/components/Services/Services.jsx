import { Footer } from '../Footer/Footer.jsx'
import { Navbarr } from '../Navbar/Navbar.jsx';
import './Services.css'

const SERVICES = [
    {
        img: 'https://mecanetperu.com/blog/wp-content/uploads/2020/03/beneficios-de-instalacion-de-cableado-estructurado.jpg',
        title: 'Web Design',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quasi, quidem, quibusdam, quod, quaerat, quasi.'
    },
    {
        img: 'https://mecanetperu.com/blog/wp-content/uploads/2020/03/beneficios-de-instalacion-de-cableado-estructurado.jpg',
        title: 'Programming',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quasi, quidem, quibusdam, quod, quaerat, quasi.'
    },
    {
        img: 'https://mecanetperu.com/blog/wp-content/uploads/2020/03/beneficios-de-instalacion-de-cableado-estructurado.jpg',
        title: 'IT',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quasi, quidem, quibusdam, quod, quaerat, quasi.'
    },
    {
        img: 'https://mecanetperu.com/blog/wp-content/uploads/2020/03/beneficios-de-instalacion-de-cableado-estructurado.jpg',
        title: 'Backend',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quasi, quidem, quibusdam, quod, quaerat, quasi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quasi, quidem, quibusdam, quod, quaerat, quasi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quasi, quidem, quibusdam, quod, quaerat, quasi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quasi, quidem, quibusdam, quod, quaerat, quasi.'
    },
    {
        img: 'https://mecanetperu.com/blog/wp-content/uploads/2020/03/beneficios-de-instalacion-de-cableado-estructurado.jpg',
        title: 'Programming',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quasi, quidem, quibusdam, quod, quaerat, quasi.'
    }
]
export function Services() {

    return (
        <>
            <Navbarr />
            <div className='Card__container'>
                {/* <Container fluid="md" style={{ background: 'white' }}> */}-
                {
                    SERVICES.map(({ img, title, text }) => (
                        <>
                            <div className='Card' >
                                <img className='Card__img' src={img} alt={title} />
                                <div className='Card__body'>
                                    <h3 className='Card__title'>{title}</h3>
                                    <p className='Card__text'>{text}</p>
                                    <button className='Card__btn'>Ver Más...</button>
                                </div>
                            </div>
                        </>
                    ))
                }
                {/* </Container> */}
            </div >
            <Footer />
        </>

    )
}