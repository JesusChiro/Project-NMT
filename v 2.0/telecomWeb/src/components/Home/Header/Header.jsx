import './Header.css'

const SLIDERHEADER = [
    {
        Title: 'NM TELECOM',
        Subtitle: 'SISTEMA CCTV IP',
        Description: `NMT ofrece vigilancia en vivo y al mejor costo en el área donde ud. desee, almacenando a la vez todos
        los eventos suscitados.`,
        Img: './img/index/container/camaxis.png',
    },
    {
        Title: 'NM TELECOM',
        Subtitle: 'CENTRALES TELEFONICAS',
        Description: `Con la finalidad de ofrecer la comunicacion entre su personal, realizamos la instalacion de sistemas de
        telefonía IP de reconocidas marcas`,
        Img: './img/index/container/img-3.png',
    },
    {
        Title: 'NM TELECOM',
        Subtitle: 'INSTALACION DE SISTEMA DE RADIO ENLACES',
        Description: `Mantén tus diferentes sedes interconectadas sin necesidad de cables con nuestros equipos de largo alcance
        inalambrico.`,
        Img: './img/index/container/radioenlaces.png',
    },

    {
        Title: 'NM TELECOM',
        Subtitle: 'SOLUCIONES QUE RESPALDAN TUS DATOS',
        Description: `Ofrecemos las diferentes gamas para la comunicacion de sus
        equipos mediante Switches, Routers y Access Points.`,
        Img: './img/index/container/sw.png',
    },
]

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
                                {
                                    SLIDERHEADER.map(({ Title, Subtitle, Description, Img }) => (
                                        <div className="slide slide_1" key={Img}>
                                            <div className="slide-content">
                                                <div className="slide-text">
                                                    <h1 className="slide-h1">{Title}</h1>
                                                    <h2 className="slide-h2">{Subtitle}</h2>
                                                    <p className="slide-p">{Description}</p>
                                                    <button className="cta">Conócenos...!</button>
                                                </div>
                                                <div className="slide-img">
                                                    <img alt="" className="img-slide-services" src={Img} />
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}