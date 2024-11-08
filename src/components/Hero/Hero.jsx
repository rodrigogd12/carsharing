import imgf from '../../assets/fondo1.jpeg'
import banner from '../../assets/banner.png'

export const Hero = () => {
  return (
    <section >
      <div className="w-full h-64 overflow-hidden">
        <img src={banner} alt="banner" className="w-full h-full object-cover" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-10'>
{/* texto */}
        <div className='mt-12'>
          <div className='ml-8'>
            <h1 className='text-4xl font-bold text-gray-800'>
              IN BOLIVIA CAR SHARING WE SEEK TO PROVIDE NEW MODES OF TRANSPORTATION
            </h1>
          </div>
          <div className='mt-8 ml-8 mr-9'>

            <h1 className='text-2xl text-gray-800'>
              Car sharing or vehicle sharing is a transportation model that allows users to access electric vehicles without having to own one.
            </h1>
          </div>
         
        </div>

{/* imagen */}
        <div>
          <img src={imgf} alt='imagen de inicio'/>
        </div>
      </div>
    </section>
  )
}
