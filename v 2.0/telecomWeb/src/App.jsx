import { Router } from './Router.jsx'
import { Route } from './Route.jsx'
import { Home } from './components/Home/Home.jsx'
import { AboutUs } from './components/About/About.jsx'
import { Contact } from './components/Contact/Contact.jsx'
import Page404 from './components/404.jsx'
import SearchPage from './components/Search.jsx'
import './styles.css'

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

export function App() {
  return (
    <>
      <div className='allWeb'>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={AboutUs} />
          <Route path='/contact' Component={Contact} />
        </Router >
      </div>
    </>
  )
}
