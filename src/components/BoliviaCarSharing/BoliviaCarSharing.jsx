import { FaGooglePlay, FaApple } from 'react-icons/fa';

const BoliviaCarSharing = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-200 mt-31">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl flex flex-col md:flex-row">

        {/* Imagen del teléfono */}
        <div className="flex justify-center md:justify-start md:w-1/2 mb-6 md:mb-0">
          <img
            src="path/to/phone-image.png"
            alt="Mapa en el teléfono"
            className="w-64 rounded-lg"
          />
        </div>

        {/* Texto de los beneficios */}
        <div className="md:w-1/2 ml-0 md:ml-6">
          <h2 className="text-2xl font-bold mb-4">
            ¿Por qué elegir Bolivia Car Sharing?
          </h2>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Tu seguridad es nuestra prioridad</h3>
            <p className="text-gray-700">
              Con viajes geolocalizados, conductores identificados para cuidarte durante el viaje.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">El estándar de calidad más alto</h3>
            <p className="text-gray-700">
              Conductores profesionales, vehículos modernos y posibilidad de elegir tus preferencias de viaje de la forma más fácil. Por fin viajarás como te mereces.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Claridad y transparencia en los precios</h3>
            <p className="text-gray-700">
              Siempre te mostramos el precio antes de aceptar el viaje para que tú decidas cómo moverte por la ciudad. Sin sorpresas.
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