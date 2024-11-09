import { FaFacebook, FaLinkedin, FaGithub, FaCommentDots } from 'react-icons/fa';

const Footer = () => {
  const copyright = String.fromCodePoint(0x00A9);
  const year = '2024';
  const companyName = 'Bolivia Car Sharing';

  return (
    <section className="bg-gray-100">
      <footer className="bg-gray-800 text-white w-full py-8 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center md:space-x-8">
            {/* Información de Contacto */}
            <div className="mb-6 md:mb-0 md:w-1/3">
              <h3 className="text-lg font-semibold mb-2">Bolivia Car Sharing</h3>
              <p className="text-sm">Contáctanos:</p>
              <p className="text-sm mt-1">+591 77XXXXXX</p>
              <p className="text-sm">boliviacarsharing@gmail.com</p>
              <p className="text-sm mt-2">Ubicación: Bolivia</p>
            </div>

            {/* Redes Sociales */}
            <div className="mb-6 md:mb-0 md:w-1/3 flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-2">Síguenos</h3>
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

            {/* Información Legal */}
            <div className="md:w-1/3 text-center md:text-right">
              <h3 className="text-lg font-semibold mb-2">Legal</h3>
              <p className="text-sm">Términos y Condiciones</p>
              <p className="text-sm">Política de Privacidad</p>
            </div>
          </div>

          {/* Derechos Reservados */}
          <div className="text-center text-sm text-gray-500 mt-6">
            <span>{`${copyright} ${year} ${companyName}. Todos los derechos reservados.`}</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
