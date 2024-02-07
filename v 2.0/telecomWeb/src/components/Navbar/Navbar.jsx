import { Link } from 'react-router-dom'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Navbarr() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-primary">
                <Container className="header">
                    <Navbar.Brand >
                        <Link to="/">
                            <img className="header__logo" src='./img/logo.png' />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='toogle' />
                    <Navbar.Collapse id="basic-navbar-nav"  >
                        <Nav className="me-auto header__links">
                            <Link className="header__link" to="/nosotros">Nosotros</Link>
                            <Link className="header__link" to="/soluciones">Soluciones</Link>
                            <Link className="header__link" to="/clientes">Nuestros Clientes</Link>
                            <Link className="header__link" to="/contacto">Contacto</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}