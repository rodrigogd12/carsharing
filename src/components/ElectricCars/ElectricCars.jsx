import hev from "../../assets/hev.png";
import bev from "../../assets/bev.png";
import phev from "../../assets/phev.png";
import fcev from "../../assets/fcev.png";

export const ElectricCars = () => {
  // Array containing data for each car type
  const carTypes = [
    {
      title: "Hybrid Electric Vehicles (HEV)",
      description:
        "These vehicles use both electric and gasoline power, but unlike PHEVs, they cannot be plugged in to charge. The internal combustion engine is fueled by gasoline and works alongside an electric motor.",
      image: hev,
    },
    {
      title: "Battery Electric Vehicles (BEV)",
      description:
        '"All-electric vehicles," these are battery-powered and fully powered by the electricity stored in the battery pack.',
      image: bev,
    },
    {
      title: "Plug-In Hybrid Electric Vehicles (PHEV)",
      description:
        "These vehicles combine both electric power and gasoline or diesel power. The combination of power sources is determined by the drive train.",
      image: phev,
    },
    {
      title: "Fuel Cell Vehicles (FCEV)",
      description:
        "Similar to BEVs, these vehicles use only an electric motor to propel the vehicle. However, they are powered by hydrogen fuel cells that charge the batteries.",
      image: fcev,
    },
  ];

  return (
    <div className="bg-gray-200 py-10">
      {/* Single Card for All Content */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-10 mt-8">
        <h2 className="text-3xl font-bold text-center mb-10">Our Cars</h2>

        {carTypes.map((car, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
          >
            <img
              src={car.image}
              alt={car.title}
              className="w-full md:w-1/3 h-40 object-cover rounded-md"
            />
            <div className="md:ml-6 md:mr-6 text-center md:text-left mt-4 md:mt-0">
              <h3 className="text-xl font-bold">{car.title}</h3>
              <p className="text-gray-700 mt-2">{car.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectricCars;
