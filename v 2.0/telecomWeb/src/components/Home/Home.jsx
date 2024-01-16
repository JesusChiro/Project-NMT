
import { Navbarr } from "./Navbar/Navbar.jsx";
import { Body } from './Body/Body.jsx'
import { Footer } from './Footer/Footer.jsx'
import { Header } from './Header/Header.jsx'

export  function Home() {
    return (
        <>
            <Navbarr />
            <Header />
            <Body />
            <Footer />
        </>
    )
}