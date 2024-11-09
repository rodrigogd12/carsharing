import imgf from '../../assets/fondo1.jpeg'
import bannersito from '../../assets/banersito.png'

export const Home  = () => {
  return (
    <>
      <div className="w-full h-auto overflow-hidden m-0 p-0">
        <img src={bannersito} alt="banner" className="w-full h-full object-cover" />
      </div>
      <section className='flex justify-center items-center  bg-gray-200 m-8 ' >
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl">
          <div className='grid grid-cols-1 md:grid-cols-2 mt-10 '>
{/* texto */}
        <div className='mt-2'>
          <div className='ml-8'>
            <h1 className='text-4xl font-bold text-gray-800'>
              IN BOLIVIA CAR SHARING WE SEEK TO PROVIDE NEW MODES OF TRANSPORTATION
            </h1>
          </div>
          <div className='mt-8 ml-8 mr-9'>

            <h1 className=' text-gray-700'>
              Car sharing or vehicle sharing is a transportation model that allows users to access electric vehicles without having to own one.
            </h1>
          </div>
        </div>

{/* imagen */}
        <div>
          <img src={imgf} alt='imagen de inicio'/>
        </div>
        </div>
      </div>
      </section>
    </>
  )
}
