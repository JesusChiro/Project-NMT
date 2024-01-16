import { Body } from './components/Home/Body/Body.jsx'
import { Footer } from './components/Home/Footer/Footer.jsx'
import { Header } from './components/Home/Header/Header.jsx'
import { Navbarr } from './components/Home/Navbar/Navbar.jsx'
import './styles.css'


export function App() {
  return (
    <>
      <div className='allWeb'>
        <Navbarr />
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  )
}
