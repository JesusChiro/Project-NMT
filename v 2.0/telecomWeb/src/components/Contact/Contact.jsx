import './Contact.css'
import { Navbarr } from "../Home/Navbar/Navbar";
import { Footer } from '../Home/Footer/Footer';


export function Contact() {
    return (
        <>
            <Navbarr />
            <h1 className="title_contain display-4 justify-content-center p-4">Formulario de Contacto</h1>
            <div className="contain__item container-fluid p-4">
                <div className="row justify-content-center">
                    <div className="col-md-18 pt-4 pb-4 m-0 shadow rounded-4">
                        <form className="contain_form" action="https://formsubmit.co/dchiroque@nmtelecom.pe" method="POST"
                            encType="multipart/form-data">
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label" htmlFor="">Nombres:</label>
                                <div className="col-sd-10">
                                    <input type="text" className="form-control" placeholder="Put your full name" name="name" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-form-label" htmlFor="">Nro de Celular:</label>
                                <div className="col-sd-10">
                                    <input type="text" className="form-control" placeholder="Put your cellphone"
                                        name="cellphone" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="input-email" className="form-label">Email Address:</label>
                                <input id="input-email" type="text" className="form-control" placeholder="someone@gmail.com"
                                    name="email" />
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label" htmlFor="">Company:</label>
                                <div className="col-sd-10">
                                    <input type="text" className="form-control" placeholder="Write your company"
                                        name="company" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label" htmlFor="">RUC:</label>
                                <div className="col-sd-10">
                                    <input type="text" className="form-control" placeholder="Write your RUC" name="ruc" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="texto-descripcion">Detalle su solicitud:</label>
                                <textarea className="form-control" name="subject" id="texto-descripcion" cols="30"
                                    rows="10"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Subir imagen referencia</label>
                                <input type="file" className="form-control" name="attachment" accept="image/png, image/jpeg" />
                            </div>
                            <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                            <input type="hidden" name="_next" value="http://127.0.0.1:5500/contactus.html" />
                            <input type="hidden" name="_cc" value="nmunoz@nmtelecom.pe" />
                            <input type="hidden" name="_template" value="table" />
                        </form>
                    </div>
                </div>
                <div className=" col-md-4 pt-4 shadow rounded-4 contacto__maps">
                    <iframe className="maps"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15606.043073718743!2d-77.09098035!3d-12.0771453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spe!4v1680884679882!5m2!1sen!2spe"
                        width="450" height="800" style={{}} allowfullscreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <Footer />
        </>
    )
}
