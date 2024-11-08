import { FaGooglePlay, FaApple } from 'react-icons/fa';
import phono from '../../assets/telefono.png'

const BoliviaCarSharing = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-200 mt-31">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl flex flex-col md:flex-row">

        {/* Imagen del teléfono */}
        <div className="flex justify-center md:justify-start md:w-1/2 mb-6 md:mb-0">
          <img
            src={phono}
            alt="Mapa en el teléfono"
            className="w-64 rounded-lg"
          />
        </div>

        {/* Texto de los beneficios */}
        <div className="md:w-1/2 ml-0 md:ml-6">
          <h2 className="text-2xl font-bold mb-4">
            Why choose Bolivia Car Sharing?
          </h2>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Your safety is our priority</h3>
            <p className="text-gray-700">
              With geolocated trips, identified drivers to take care of you during the trip.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">The highest quality standard</h3>
            <p className="text-gray-700">
              Professional drivers, modern vehicles and the ability to choose your travel preferences in the easiest way. You will finally travel as you deserve.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              Clarity and transparency in prices
            </h3>
            <p className="text-gray-700">
              We always show you the price before accepting the trip so that you can decide how to get around the city. No surprises.
            </p>
          </div>

          {/* Iconos de descarga */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg">
              <FaGooglePlay className="w-5 h-5" />
              <span>Disponible en Google Play</span>
            </a>
            <a href="#" className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg">
              <FaApple className="w-5 h-5" />
              <span>Consíguelo en App Store</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoliviaCarSharing;