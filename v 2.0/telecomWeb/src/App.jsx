import { AboutUs } from './components/About/About.jsx'
import { Router } from './Router.jsx'
import './styles.css'
import { Home } from './components/Home/Home.jsx'
import { Contact } from './components/Contact/Contact.jsx'
import Page404 from './components/404.jsx'
import SearchPage from './components/Search.jsx'

const appRoutes = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/about',
    Component: AboutUs,
  },
  {
    path: '/contact',
    Component: Contact,
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]


export function App() {

  return (
    <>
      <div className='allWeb'>
        <Router routes={appRoutes} defaultComponent={Page404} />
      </div>
    </>
  )
}
