import { FaEnvelope, FaPhone} from 'react-icons/fa';

const Contacto = () => {

  return (
    <section className="flex flex-col items-center bg-gray-100 p-8 mt-31">
      {/* Formulario de Contacto */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-10">
        <h2 className="text-center text-xl font-bold mb-4">Contacto</h2>
        <form className="space-y-4">
          <div className="flex items-center bg-gray-200 rounded-lg px-4 py-2">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent flex-1 focus:outline-none text-gray-700 placeholder-gray-500"
            />
          </div>
          <div className="flex items-center bg-gray-200 rounded-lg px-4 py-2">
            <FaPhone className="text-gray-500 mr-2" />
            <input
              type="tel"
              placeholder="Teléfono"
              className="bg-transparent flex-1 focus:outline-none text-gray-700 placeholder-gray-500"
            />
          </div>
          <button className="w-full bg-white border border-green-600 text-green-600 rounded-lg py-2 font-semibold hover:bg-green-600 hover:text-white transition">
            Enviar
          </button>
        </form>
      </div>

    </section>
  );
};

export default Contacto;
