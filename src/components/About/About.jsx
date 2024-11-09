import viru from '../../assets/viru viru.png'

const About = () => {
  return (
    <section className="flex justify-center items-center bg-gray-200 px-8 py-16">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl w-full flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
        {/* Texto de información */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-center mb-4">About</h2>
          <p className="text-gray-700 mb-6">
            Bolivia Car Sharing seeks to promote new modes of transportation for users from their homes to the airport and vice versa, with compensation through the use of sharing electric vehicles. In order to achieve immediate and sustainable changes in the daily lives of users and the region itself.
          </p>
          {/* Sección de información */}
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="font-semibold text-gray-700 w-24">Phone:</span>
              <a href="tel:+59173265665" className="text-blue-500 hover:underline">
                +591 73265665
              </a>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-gray-700 w-24">Sector:</span>
              <p className="text-gray-700">Urban transport services</p>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-gray-700 w-24">Company Size:</span>
              <p className="text-gray-700">2-10 employees</p>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-gray-700 w-24">Location:</span>
              <p className="text-gray-700"> Viru Viru, Warnes</p>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-gray-700 w-24">Founded:</span>
              <p className="text-gray-700">2024</p>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="flex-1">
          <img
            src={viru} // Reemplaza este URL con la URL del mapa
            alt="Mapa de ubicación"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
