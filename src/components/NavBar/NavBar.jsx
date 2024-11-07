import { useState } from 'react'
import logo from '../../../public/logo.png'


const navbarlinks = [
  {
    id: 1,
    title: "Home",
    link: "/"
  },
  {
    id: 1,
    title: "Beneficios",
    link: "/"
  },
  {
    id: 1,
    title: "Nosotros",
    link: "/"
  },
  {
    id: 1,
    title: "Contactanos",
    link: "/"
  }
]

const navbarRedes = [
  {
    id: 1,
    title: "facebook",
    link: "https://www.facebook.com",
    icon: "/public/facebook.ico"
  },
  {
    id: 1,
    title: "linkedin",
    link: "https://www.linkedin.com/company/bolivia-car-sharing/",
    icon: "/public/linkedin.ico"
  },
]

export const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav>
      <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>

{/* Logo */}
        <div>
          <img
            className='inline-block transition-transform duration-300 transform hover:scale-125 w-[80px]'
            src={logo} alt='Logo de la pagina Bolivia Car Sharing' />
        </div>
{/* Boton de hamburguesa */}
        <button
        onClick={toggleMenu}
        className='md:hidden'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            {isOpen ? (<path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />) : (<path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h12M4 12h16M4 18h16'
            />)}

          </svg>
        </button>

{/* Menu de navegacion */}
        <div className='hidden md:block'>
          <ul className='flex sm:space-x-8 space-x-4'>
            {navbarlinks.map((link) => (
              <li key={link.id}>
                <a
                  className='text-slate-800 sm:text-lg text-sm hover:text-slate-700 transition-transform hover:scale-110 transform inline-block duration-300'
                  href={link.link}>{link.title}
                  </a>
              </li>
            ))}
          </ul>
        </div>
{/* menu redes */}
        <div
        className='hidden md:block'
        >
          <ul className='flex sm:space-x-8 space-x-4'>
            {navbarRedes.map((redes) => (
              <li key={redes.id}>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block transition-transform duration-300 transform hover:scale-125'>
                  <img
                    src={redes.icon} alt={redes.title} href={redes.link} className='w-[30px] h-[30px]' />
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

{/* menu movil */}
      <div
        className={`md:hidden absolute w-full bg-slate-300 transition-all duration-300 ${isOpen ? "opacity-100 visible": "opacity-0 invisible"}`}
      >
        <ul className='flex flex-col px-4 py-2'>
          {navbarlinks.map((link) => (
            <li
              className='py-2 text-center'
              key={link.id}>
              <a
                className='text-slate-800 hover:text-slate-700'
                href={link.link} onClick={() => setIsOpen(false)}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <ul className={`flex space-x-4 px-4 py-2 border-t border-slate-900 justify-center`}>
          {navbarRedes.map((redes) => (
            <li key={redes.id}>
              <a
                className=''
                href={redes.link}
                onClick={() => setIsOpen(false)}
                target='_blank'
                rel='noopener noreferrer'
                >
                <img
                  className='w-[30px] h-[30px]'
                  src={redes.icon} alt={redes.title} />
              </a>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  )
}
