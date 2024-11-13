import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';

const Contacto = () => {
  return (
    <section className="flex flex-col items-center bg-gray-100 py-12 px-6">
      <div className="flex flex-col md:flex-row gap-10 justify-center w-full max-w-4xl">
        {/* Formulario de Contacto */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mb-10 md:mb-0">
          <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">Users Contact Us</h2>

          <form className="space-y-5">
            {/* Campo de Nombre */}
            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
              <FaUser className="text-gray-500 mr-3" />
              <input
                type="text"
                placeholder="Nombre Completo"
                className="bg-transparent flex-1 focus:outline-none text-gray-700 placeholder-gray-500"
              />
            </div>

            {/* Campo de Email */}
            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
              <FaEnvelope className="text-gray-500 mr-3" />
              <input
                type="email"
                placeholder="Correo Electrónico"
                className="bg-transparent flex-1 focus:outline-none text-gray-700 placeholder-gray-500"
              />
            </div>

            {/* Campo de Teléfono */}
            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
              <FaPhone className="text-gray-500 mr-3" />
              <input
                type="tel"
                placeholder="Número de Teléfono"
                className="bg-transparent flex-1 focus:outline-none text-gray-700 placeholder-gray-500"
              />
            </div>

            {/* Campo de Comentario */}
            <div className="bg-gray-100 rounded-lg px-4 py-3">
              <textarea
                placeholder="Escribe tu mensaje aquí..."
                className="bg-transparent w-full h-32 resize-none focus:outline-none text-gray-700 placeholder-gray-500"
              />
            </div>

            {/* Botón Enviar */}
            <button className="w-full bg-green-600 text-white rounded-lg py-3 font-semibold hover:bg-green-700 transition">
              Enviar
            </button>
          </form>
        </div>

        {/* Formulario de Registro */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">Partners Contact Us</h2>

          <form className="space-y-5">
            {/* Campo de Nombre */}
            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
              <FaUser className="text-gray-500 mr-3" />
              <input
                type="text"
                placeholder="Nombre Completo"
                className="bg-transparent flex-1 focus:outline-none text-gray-700 placeholder-gray-500"
              />
            </div>

            {/* Campo de Email */}
            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
              <FaEnvelope className="text-gray-500 mr-3" />
              <input
                type="email"
                placeholder="Correo Electrónico"
                className="bg-transparent flex-1 focus:outline-none text-gray-700 placeholder-gray-500"
              />
            </div>

            {/* Campo de Teléfono */}
            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
              <FaPhone className="text-gray-500 mr-3" />
              <input
                type="tel"
                placeholder="Número de Teléfono"
                className="bg-transparent flex-1 focus:outline-none text-gray-700 placeholder-gray-500"
              />
            </div>

            {/* Campo de Comentario */}
            <div className="bg-gray-100 rounded-lg px-4 py-3">
              <textarea
                placeholder="Escribe tu mensaje aquí..."
                className="bg-transparent w-full h-32 resize-none focus:outline-none text-gray-700 placeholder-gray-500"
              />
            </div>

            {/* Botón Registrarse */}
            <button className="w-full bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition">
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
