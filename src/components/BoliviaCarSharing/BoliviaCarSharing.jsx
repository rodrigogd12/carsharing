import phono from '../../assets/telefono.png'
import boliviacar from '../../assets/boliviacar.png'
import typecars from '../../assets/typeCars.jpeg'

const BoliviaCarSharing = () => {
  return (
    <section className="flex justify-center  bg-gray-200 mt-8">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl flex flex-col md:flex-row">

        {/* Imagen del teléfono */}
        <div className="flex justify-center md:justify-center md:w-1/2 mb-6 md:mb-0">
          <img
            src={typecars}
            alt="Mapa en el teléfono"
            className=" rounded-lg"
          />
        </div>

        {/* Texto de los beneficios */}
        <div className="flex h-screen md:w-1/2 ml-0 md:ml-6">
          <div className=' mr-5'>
          <h2 className="text-2xl font-bold mt-6 mb-6  ">
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

            <div className='mt-12 mb-4'>
              <img src={boliviacar}/>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoliviaCarSharing;