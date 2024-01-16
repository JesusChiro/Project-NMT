import './Header.css'


export function Header() {
    return (
        <>
            <main className="c-main">
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
                                <div className="slide slide_1">
                                    <div className="slide-content">
                                        <div className="slide-text">
                                            <h1 className="slide-h1">NM Telecom:</h1>

                                            <h2 className="slide-h2">SISTEMA CCTV IP</h2>

                                            <p className="slide-p">
                                                NMT ofrece vigilancia en vivo y al mejor costo en el
                                                &aacute;rea donde ud. desee, almacenando a la vez todos
                                                los eventos suscitados.
                                            </p>
                                            <button className="cta">Con&oacute;cenos...!</button>
                                        </div>

                                        <div className="slide-img">
                                            <img
                                                alt=""
                                                className="img-slide-services"
                                                src="./img/index/container/camaxis.png"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="slide slide_2">
                                    <div className="slide-content">
                                        <div className="slide-text">
                                            <h1 className="slide-h1">NM Telecom:</h1>

                                            <h2 className="slide-h2">CENTRALES TELEFONICAS</h2>

                                            <p className="slide-p">
                                                Con la finalidad de ofrecer la comunicacion entre su
                                                personal, realizamos la instalacion de sistemas de
                                                telefon&iacute;a IP de reconocidas marcas
                                            </p>
                                            <button className="cta">Con&oacute;cenos...!</button>
                                        </div>

                                        <div className="slide-img">
                                            <img
                                                alt=""
                                                className="img-slide-services"
                                                src="./img/index/container/img-3.png"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="slide slide_3">
                                    <div className="slide-content">
                                        <div className="slide-text">
                                            <h1 className="slide-h1">NM Telecom:</h1>

                                            <h2 className="slide-h2">
                                                INSTALACION DE SISTEMA DE RADIO ENLACES
                                            </h2>

                                            <p className="slide-p">
                                                Mant&eacute;n tus diferentes sedes interconectadas sin
                                                necesidad de cables con nuestros equipos de largo alcance
                                                inalambrico.
                                            </p>
                                            <button className="cta">Con&oacute;cenos...!</button>
                                        </div>

                                        <div className="slide-img">
                                            <img
                                                alt=""
                                                className="img-slide-services"
                                                src="./img/index/container/radioenlaces.png"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="slide slide_4">
                                    <div className="slide-content">
                                        <div className="slide-text">
                                            <h1 className="slide-h1">NM Telecom:</h1>

                                            <h2 className="slide-h2">SOLUCIONES QUE RESPALDAN TUS DATOS</h2>

                                            <p className="slide-p">
                                                Ofrecemos las diferentes gamas para la comunicacion de sus
                                                equipos mediante Switches, Routers y Access Points.
                                            </p>
                                            <button className="cta">Con&oacute;cenos...!</button>
                                        </div>

                                        <div className="slide-img">
                                            <img
                                                alt=""
                                                className="img-slide-services"
                                                src="./img/index/container/sw.png"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}