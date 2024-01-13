import { Body } from './components/Body/Body.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { Header } from './components/Header/Header.jsx'
import { Navbar } from './components/Navbar/Navbar.jsx'
import './styles.css'


export function App() {
  return (
    <>
      <div className='allWeb'>
        <Navbar />
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  )
}
