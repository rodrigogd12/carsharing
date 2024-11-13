import { NavBar } from "./components/NavBar/NavBar"
import { Home } from "./components/Hero/Home"
import Beneficios from "./components/Beneficios/Beneficios"
import BoliviaCarSharing from "./components/BoliviaCarSharing/BoliviaCarSharing"
import Preguntas from "./components/Preguntas/Preguntas"
import About from "./components/About/About"
import Contacto from "./components/Contacto/Contacto"
import Footer from "./components/Footer/Footer"
import { ElectricCars } from "./components/ElectricCars/ElectricCars"

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
      <div id="porque">
        <BoliviaCarSharing />
      </div>
      <ElectricCars/>
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
