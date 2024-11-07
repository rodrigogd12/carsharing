import imgsection1 from '../../assets/section1.png'
import titulo from '../../assets/titulo1.png'

export const Hero = () => {
  return (
    <section className="mt-31">

      <div className='grid grid-cols-1 md:grid-cols-2'>
{/* texto */}
        <div>
          <img src={titulo} />
          <p>
            El car sharing o uso compartido
            de vehículos, es un modelo de
            transporte que permite a los
            usuarios acceder a vehículos
            eléctrico sin necesidad de
            poseer uno.
          </p>
        </div>

{/* imagen */}
        <div>
          <img src={imgsection1} alt='imagen de inicio'/>
        </div>
      </div>
    </section>
  )
}
