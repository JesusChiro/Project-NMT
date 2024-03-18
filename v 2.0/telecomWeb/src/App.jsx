import { AboutUs } from './Pages/About/About.jsx'
import { Home } from './Pages/Home/Home.jsx'
import { Contact } from './Pages/Contact/Contact.jsx'
import { Services } from './Pages/Services/Services.jsx'
import { Customers } from './Pages/Customers/Customers.jsx'
import Page404 from './Pages/404/404.jsx'
import { Navbarr } from './components/Navbar/Navbar.jsx'
import { Footer } from './Pages/Footer/Footer.jsx'
import LoginPage from './Pages/User/LoginPage.jsx'
import RegisterPage from './Pages/User/RegisterPage.jsx'
import { Route, Routes } from 'react-router-dom'
import TasksPage from './Pages/User/TaskPage.jsx'
import TasksFormPage from './Pages/User/TaskFormPage.jsx'
import ProfilePage from './Pages/User/ProfilePage.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'


export function App() {
  return (
    <>
      <div className='allWeb'>
        <div className='justbody'>
          <main className='container mx-auto px-10'>
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
              {/* Rutas Protegidas */}
              <Route element={<ProtectedRoute />}>
                <Route path='/tasks' element={<TasksPage />} />
                <Route path='/add-task' element={<TasksFormPage />} />
                <Route path='/tasks/:id' element={<TasksFormPage />} />
                <Route path='/profile' element={<ProfilePage />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}