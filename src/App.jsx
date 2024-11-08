import About from "./components/About/About"
import Beneficios from "./components/Beneficios/Beneficios"
import BoliviaCarSharing from "./components/BoliviaCarSharing/BoliviaCarSharing"
import Contacto from "./components/Contacto/Contacto"
import Footer from "./components/Footer/Footer"

import { Home } from "./components/Hero/Home"
import { NavBar } from "./components/NavBar/NavBar"
import Preguntas from "./components/Preguntas/Preguntas"

function App() {


  return (
    <div
    className="overflow-auto min-h-screen"
    >
      <NavBar />
      <Home />
      <div id="beneficios">
        <Beneficios />
      </div>
      <div id="nosotros">
        <BoliviaCarSharing />
      </div>
      <div id="faq">
      <Preguntas/>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contactanos">
        <Contacto />
      </div>
      <Footer/>
    </div>

  )
}

export default App
