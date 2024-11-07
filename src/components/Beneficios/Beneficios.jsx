import { FaLeaf, FaRoad, FaMoneyBillWave } from 'react-icons/fa';

const Beneficios = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-200 mt-32">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl">
        <h2 className="text-xl font-bold text-center mb-6">
          Beneficios del Car Sharing Ecológico
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Reducción de emisiones */}
          <div className="flex items-start">
            <FaLeaf className="text-green-600 w-10 h-10 mr-4" />
            <div>
              <h3 className="text-lg font-bold">Reducción de emisiones</h3>
              <p className="text-gray-700">
                Enfatiza cómo el uso de vehículos eléctricos disminuye la contaminación del aire y contribuye a combatir el cambio climático.
              </p>
            </div>
          </div>

          {/* Descongestión vehicular */}
          <div className="flex items-start">
            <FaRoad className="text-yellow-600 w-10 h-10 mr-4" />
            <div>
              <h3 className="text-lg font-bold">Descongestión vehicular</h3>
              <p className="text-gray-700">
                Resalta cómo el car sharing ayuda a reducir el número de vehículos en circulación, aliviando el tráfico y mejorando la fluidez vial.
              </p>
            </div>
          </div>

          {/* Ahorro económico */}
          <div className="flex items-start">
            <FaMoneyBillWave className="text-green-700 w-10 h-10 mr-4" />
            <div>
              <h3 className="text-lg font-bold">Ahorro económico</h3>
              <p className="text-gray-700">
                Destaca los beneficios económicos del car sharing, como evitar los gastos fijos de un vehículo propio (seguro, mantenimiento, etc.).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
