import {  FaFacebook, FaLinkedin, FaGithub, FaCommentDots } from 'react-icons/fa';

const Footer = () => {
  const copyright = String.fromCodePoint(0x00A9);
  const year = '2024';
  const companyName = 'Bolivia Car Sharing';
  return (
    <section className="flex flex-col items-center bg-gray-100 p-0 m-0">

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
          <span>
            {`${copyright} ${year} ${companyName}`}
          </span>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
