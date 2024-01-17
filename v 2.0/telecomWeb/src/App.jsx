import { Suspense, lazy } from 'react'

import { AboutUs } from './components/About/About.jsx'
import { Router } from './Router.jsx'
import { Route } from './Route.jsx'
import './styles.css'
import { Home } from './components/Home/Home.jsx'
import { Contact } from './components/Contact/Contact.jsx'
import Page404 from './components/404.jsx'
import SearchPage from './components/Search.jsx'

// const Home = lazy(() => import('./components/Home/Home.jsx'))
// // const LazyAboutUs = lazy(() => import('./components/About/About.jsx'))
// // const LazyContactUs = lazy(() => import('./components/Contact/Contact.jsx'))
// // const Lazy404 = lazy(() => import('./components/404.jsx'))



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
        <Suspense fallback={<p>Cargando....</p>}>
          <Router routes={appRoutes} defaultComponent={Page404}>
            <Route path='/' Component={Home} />
            <Route path='/about' Component={AboutUs} />
            <Route path='/contact' Component={Contact} />
          </Router >
        </Suspense >
      </div>

    </>

  )
}