import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Navbarr } from "../Navbar/Navbar";
import { Footer } from '../Footer/Footer.jsx';
import './Contact.css'
import { CONTACT_US, RRSS } from '../../utils/consts.js';


export const Contact = () => {

    const refForm = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const servicesId = 'service_mggtwlp'
        const templateId = 'template_azov3sv'
        const apikey = '048wb8pPNZw5GviLV'

        emailjs.sendForm(servicesId, templateId, refForm.current, apikey)
            .then(result => console.log(result.text))
            .catch(error => console.log(error))
    }
    return (
        <>
            <Navbarr />
            <div className='contact-body'>
                <form ref={refForm} action="" onSubmit={handleSubmit}>
                    <div className="header-contact">
                        <h2>Contact Us</h2>
                        <p>Please fill this form</p>
                    </div>
                    <fieldset className='field-name'>
                        <label className="symbol-required name" htmlFor=''>Nombres Completos:</label>
                        <input name='username' type="text" placeholder='Ej: Juan Perez' required />
                    </fieldset>
                    <fieldset className='field-email'>
                        <label className="symbol-required name" name='email'>Email:</label>
                        <input placeholder='Ej: jperez@mail.com' type='email' name='email' id='email' required />
                    </fieldset>
                    <fieldset className='field-message'>
                        <label className="symbol-required name" htmlFor=''>Mensaje:</label>
                        <textarea maxLength='500' placeholder='Soy Juan Perez de la empresa:....... y deseo información...' name='message' id='' cols='30' rows='' required />
                    </fieldset>
                    <button className='btn-send'>Send</button>
                </form>
                <section className='contact-links'>
                    {
                        CONTACT_US.map(({ Id, Text, Name, Email, Phone, LinkToWsp, Icon }) => (
                            <div className="contact-link-card border-secondary shadow rounded-4" key={Id}>
                                <aside className="contact-link-right">
                                    <img alt="" className="contact-link-img" src={Icon} />
                                </aside>
                                {/* <a href={LinkToWsp} rel="">
                                    {RRSS.map(({ Id, Alt, Src }) => (
                                        <img alt={Alt} className="contact-link-rs" src={Src} key={Id} />
                                    ))}
                                </a> */}
                                <section className='contact-link-left'>
                                    <h2 className="contact-link-text">{Text}</h2>
                                    <p className="contact-link-text">{Name}</p>
                                    <p className="contact-link-text">{Email}</p>
                                    <p className="contact-link-text">{Phone}</p>
                                </section>
                            </div>
                        ))
                    }
                </section>
            </div>
            <Footer />
        </>
    )
}
