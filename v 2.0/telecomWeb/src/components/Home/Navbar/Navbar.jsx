import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Navbarr() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-primary">
                <Container className="header">
                    <Navbar.Brand href="#home">
                        <img className="header__logo" src='./img/logo.png' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='toogle' />
                    <Navbar.Collapse id="basic-navbar-nav"  >
                        <Nav className="me-auto header__links">
                            <Nav.Link className="header__link" href="#aboutus">Nosotros</Nav.Link>
                            <Nav.Link className="header__link" href="#services">Nuestros Servicios</Nav.Link>
                            <Nav.Link className="header__link" href="#customers">Nuestros Clientes</Nav.Link>
                            <Nav.Link className="header__link" href="#services">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}