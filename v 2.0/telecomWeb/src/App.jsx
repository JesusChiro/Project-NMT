import { AboutUs } from './components/About/About.jsx'
import { Home } from './components/Home/Home.jsx'
import { Contact } from './components/Contact/Contact.jsx'
import { Services } from './components/Services/Services.jsx'
import { Customers } from './components/Customers/Customers.jsx'
import Page404 from './components/404.jsx'
import { Navbarr } from './components/Navbar/Navbar.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import LoginPage from './components/User/LoginPage.jsx'
import RegisterPage from './components/User/RegisterPage.jsx'
import { Route, Routes } from 'react-router-dom'


export function App() {
  return (
    <>
      <div className='allWeb'>
        <div className='justbody'>
          <Navbarr />
          <Routes>
            {/* Rutas comunes */}
            <Route path='/' element={<Home />} />
            <Route path='/nosotros' element={<AboutUs />} />
            <Route path='/contacto' element={<Contact />} />
            <Route path='/soluciones' element={<Services />} />
            <Route path='/clientes' element={<Customers />} />
            <Route path='*' element={<Page404 />} />
            {/* Corresponde al acceso a la BD */}
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/tasks' element={<h1>Tasks Page</h1>} />
            <Route path='/add-task' element={<h1>new tasks</h1>} />
            <Route path='/tasks/:id' element={<h1>update tasks</h1>} />
            <Route path='/profile' element={<h1>profile</h1>} />

          </Routes>
          <Footer />
        </div>
      </div>
    </>
  )
}