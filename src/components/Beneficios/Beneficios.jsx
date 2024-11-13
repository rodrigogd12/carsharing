import { FaLeaf, FaRoad, FaMoneyBillWave } from 'react-icons/fa';
import banner from '../../assets/banner.png';

const Beneficios = () => {
  return (
    <section className="flex justify-center items-center bg-gray-200 mt-8">
      <div className="bg-white rounded-lg shadow-lg max-w-6xl">
        <img className="w-full rounded-t-lg" src={banner} alt="Banner" />
        <h2 className="text-2xl font-bold text-center mb-6 mt-5">
          Benefits of Car Sharing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-8 pr-8">
          {/* Reducción de emisiones */}
          <div className="flex items-start">
            <FaLeaf className="text-green-600 w-10 h-10 mr-4" />
            <div>
              <h3 className="text-lg font-bold">
                Emissions reduction
              </h3>
              <p className="text-gray-700">
                Emphasizes how the use of electric vehicles reduces air pollution and contributes to combating climate change.
              </p>
            </div>
          </div>

          {/* Descongestión vehicular */}
          <div className="flex items-start">
            <FaRoad className="text-yellow-600 w-10 h-10 mr-4" />
            <div>
              <h3 className="text-lg font-bold">
                Vehicle decongestion
              </h3>
              <p className="text-gray-700">
                Highlights how car sharing helps reduce the number of vehicles in circulation, easing traffic and improving road flow.
              </p>
            </div>
          </div>

          {/* Ahorro económico */}
          <div className="flex items-start pb-8">
            <FaMoneyBillWave className="text-green-700 w-10 h-10 mr-4" />
            <div>
              <h3 className="text-lg font-bold">
                Economic savings
              </h3>
              <p className="text-gray-700">
                Highlights the economic benefits of car sharing, such as avoiding the fixed costs of owning a vehicle (insurance, maintenance, etc.).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
