import React from 'react';
import { FaEnvelope, FaPhone, FaGooglePlay, FaApple, FaFacebook, FaLinkedin, FaGithub, FaCommentDots } from 'react-icons/fa';

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

      {/* Pie de página */}
      <footer className="bg-gray-800 text-white w-full py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start px-4">
          {/* Información de Contacto */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">Bolivia Car Sharing</h3>
            <p className="mt-2">Contáctanos:</p>
            <p className="mt-1">+591 77XXXXXX</p>
            <p>boliviacarsharing@gmail.com</p>
            <p className="mt-2">Bolivia</p>
          </div>

          {/* Iconos de descarga */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="#" className="flex items-center space-x-1 bg-black text-white px-4 py-2 rounded-lg">
              <FaGooglePlay />
              <span>Google Play</span>
            </a>
            <a href="#" className="flex items-center space-x-1 bg-black text-white px-4 py-2 rounded-lg">
              <FaApple />
              <span>App Store</span>
            </a>
          </div>

          {/* Redes Sociales */}
          <div className="flex space-x-4">
            <a href="#" className="text-white text-2xl hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="#" className="text-white text-2xl hover:text-blue-700">
              <FaLinkedin />
            </a>
            <a href="#" className="text-white text-2xl hover:text-gray-500">
              <FaGithub />
            </a>
            <a href="#" className="text-white text-2xl hover:text-gray-500">
              <FaCommentDots />
            </a>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-6">
          2024 Rodrigo Gonzales Dolz
        </div>
      </footer>
    </section>
  );
};

export default Contacto;
