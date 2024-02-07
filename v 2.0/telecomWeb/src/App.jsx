import { AboutUs } from './components/About/About.jsx'
import { Home } from './components/Home/Home.jsx'
import { Contact } from './components/Contact/Contact.jsx'
import { Services } from './components/Services/Services.jsx'
import { Customers } from './components/Customers/Customers.jsx'
import Page404  from './components/404.jsx'
import { Navbarr } from './components/Navbar/Navbar.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { Route, Routes } from 'react-router-dom'


export function App() {
  return (
    <>
      <div className='allWeb'>
        <div className='justbody'>
          <Navbarr />
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/nosotros' Component={AboutUs} />
            <Route path='/contacto' Component={Contact} />
            <Route path='/soluciones' Component={Services} />
            <Route path='/clientes' Component={Customers} />
            <Route path='*' Component={Page404} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  )
}