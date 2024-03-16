import { NavLink } from 'react-router-dom'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NMT_INFO } from '../../utils/consts';
import { useAuth } from '../../context/AuthContext'

export function Navbarr() {
    const { isAuthenticated, logout, user } = useAuth()

    console.log(user);
    return (
        <>
            <Navbar expand="lg" className="bg-body-primary">
                <Container className="header">
                    <Navbar.Brand >
                        <NavLink to="/">
                            <img alt={NMT_INFO.ALTLOGO} className="header__logo" src={NMT_INFO.LOGO} />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='toogle' />
                    <Navbar.Collapse id="basic-navbar-nav"  >
                        <Nav className="me-auto header__links">
                            <NavLink
                                className="header__link"
                                to="/nosotros">Nosotros
                            </NavLink>
                            <NavLink
                                className="header__link"
                                to="/soluciones">Soluciones
                            </NavLink>
                            <NavLink
                                className="header__link"
                                to="/clientes">Nuestros Clientes
                            </NavLink>
                            <NavLink
                                className="header__link"
                                to="/contacto">Contacto
                            </NavLink>
                            {isAuthenticated ? (
                                <>
                                    <NavLink>
                                        Welcome  
                                        {/* {newUser} */}
                                    </NavLink>
                                    <NavLink
                                        className="header__link"
                                        to="/add-task">Añade una tarea
                                    </NavLink>
                                    <NavLink
                                        className="header__link"
                                        to="/" onClick={() => { logout() }}>Logout
                                    </NavLink>
                                </>
                            ) : (
                                <>
                                    <NavLink
                                        className="header__link"
                                        to="/login">Login
                                    </NavLink>
                                    <NavLink
                                        className="header__link"
                                        to="/register">Register
                                    </NavLink>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    )
}