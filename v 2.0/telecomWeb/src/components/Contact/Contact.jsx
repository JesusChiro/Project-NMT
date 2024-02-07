import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'
import { CONTACT_US } from '../../utils/consts.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
            <div className='contact-body'>
                <form ref={refForm} action="" onSubmit={handleSubmit}>
                    <div className="header-contact">
                        <h2>Contáctanos</h2>
                        <p>Por favor, rellena el formulario</p>
                    </div>
                    <fieldset className='field-name'>
                        <label className="symbol-required name" htmlFor=''>Nombres Completos:</label>
                        <Form.Control name='username' type="text" placeholder='Ej: Juan Perez' required />
                    </fieldset>
                    <fieldset className='field-email'>
                        <label className="symbol-required name" name='email'>Email:</label>
                        <Form.Control type="email" placeholder="Enter email" name='email' id='email' required />
                    </fieldset>
                    <fieldset className='field-message'>
                        <label className="symbol-required name" htmlFor=''>Mensaje:</label>
                        <Form.Control maxLength='500' placeholder='Soy Juan Perez de la empresa... y deseo información 
                        sobre...' name='message' as="textarea" rows={3} required />
                    </fieldset>
                    <Button variant='primary' className='btn-send' type="submit">Send</Button>
                </form>
                <section className='contact-links'>
                    <div className="contact-link-head">
                        <h2>Contacto Directo</h2>
                    </div>

                    {
                        CONTACT_US.map(({ Id, Work, AltWork, IconWork, Name, LinkMail, Email, Phone, LinkToWsp }) => (
                            <div className="contact-link-card border-secondary shadow rounded-4" key={Id}>
                                <section>
                                    <h2 className="contact-link-title">{Work}</h2>
                                </section>
                                <div className='contact-link-body'>
                                    <section className='contact-link-left'>
                                        <img alt={AltWork} className="contact-link-img" src={IconWork} />
                                    </section>
                                    <aside className="contact-link-right">
                                        <p className="contact-link-text">👨‍💻{Name}</p>
                                        <p className="contact-link-text">
                                            <a href={LinkMail}>✉ {Email}</a>
                                        </p>
                                        <a href={LinkToWsp}>
                                            <div className='contact-link-wsp'>
                                                <p className="contact-link-text">📱{Phone}</p>
                                            </div>
                                        </a>
                                    </aside>
                                </div>
                            </div>
                        ))}
                </section >
            </div >
        </>
    )
}
