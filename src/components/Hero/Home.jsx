import imgf from '../../assets/fondo1.jpeg';
import bannersito from '../../assets/banersito.png';

export const Home = () => {
  return (
    <>
      <div className="w-full h-auto overflow-hidden m-0 p-0">
        <img
          src={bannersito}
          alt="banner"
          className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[30rem] object-cover"
        />
      </div>

      <section className="flex justify-center items-center bg-gray-200 m-4 sm:m-8 px-4 sm:px-8 py-8">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 sm:mt-10">
            {/* Texto */}
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center md:text-left">
                IN BOLIVIA CAR SHARING WE SEEK TO PROVIDE NEW MODES OF TRANSPORTATION
              </h1>
              <p className="mt-6 text-gray-700 text-base sm:text-lg text-center md:text-left">
                Car sharing or vehicle sharing is a transportation model that allows users to access electric vehicles without having to own one.
              </p>
            </div>

            {/* Imagen */}
            <div className="flex justify-center md:justify-end">
              <img
                src={imgf}
                alt="imagen de inicio"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
