import Header from '../sections/Header'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Equipos from '../sections/Equipos'
import Benefits from '../sections/Benefits'
import QRSection from '../sections/QRSection'
import Location from '../sections/Location'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Equipos />
        <Benefits />
        <QRSection />
        <Location />
      </main>
      <Footer />
    </>
  )
}
