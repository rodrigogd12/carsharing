import About from "./components/About/About"
import Beneficios from "./components/Beneficios/Beneficios"
import BoliviaCarSharing from "./components/BoliviaCarSharing/BoliviaCarSharing"
import Contacto from "./components/Contacto/Contacto"
import Preguntas from "./components/FAQ/Preguntas"
import { Hero } from "./components/Hero/Hero"
import { NavBar } from "./components/NavBar/NavBar"

function App() {


  return (
    <div
    className="overflow-auto min-h-screen"
    >
      <NavBar />
      <Hero />
      <div id="beneficios">
        <Beneficios />
      </div>
      <div id="nosotros">
        <BoliviaCarSharing />
      </div>
      <div id="faq">
        <Preguntas />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contactanos">
        <Contacto />
      </div>
    </div>

  )
}

export default App
