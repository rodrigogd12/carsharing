import { useState } from 'react'
import logo from '../../assets/logo.png'
import facebookIcon from "../../assets/facebook.ico"
import LinkedIcon from '../../assets/linkedin.ico'


const navbarlinks = [
  {
    id: 1,
    title: "HOME",
    link: "#hero"
  },
  {
    id: 2,
    title: "BENEFITS",
    link: "#beneficios"
  },
  {
    id: 3,
    title: "FAQ",
    link: "#faq"
  },
  {
    id: 4,
    title: "ABOUT US",
    link: "#nosotros"
  },
  {
    id: 5,
    title: "CONTACT US",
    link: "#contactanos"
  }
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

{/* -----------------------BOTÓN HAMBURGUESA------------------------- */}
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

{/* ---------------------MENU DE NAVEGACIÓN-------------------------- */}
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

{/* ------------------MENU REDES------------------------- */}
        <div
        className='hidden md:block'
        >
          <ul className='flex sm:space-x-8 space-x-4'>
              <li >
                <a
                href="https://www.facebook.com"
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block transition-transform duration-300 transform hover:scale-125'>
                  <img
                    src={facebookIcon}
                    alt="facebook"
                    className='w-[30px] h-[30px]' />
                </a>
              </li>
              <li >
              <a
                href="https://www.linkedin.com/company/bolivia-car-sharing/"
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block transition-transform duration-300 transform hover:scale-125'>
                <img
                  src={LinkedIcon}
                  alt="linkedin"
                  className='w-[30px] h-[30px]' />
              </a>
            </li>
          </ul>
        </div>
      </div>

{/* --------------------------MENU MOVIL-------------------------- */}
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
          <li >
            <a
              href="https://www.facebook.com"
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block transition-transform duration-300 transform hover:scale-125'>
              <img
                src={facebookIcon}
                alt="facebook"
                className='w-[30px] h-[30px]' />
            </a>
          </li>
          <li >
            <a
              href="https://www.linkedin.com/company/bolivia-car-sharing/"
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block transition-transform duration-300 transform hover:scale-125'>
              <img
                src={LinkedIcon}
                alt="linkedin"
                className='w-[30px] h-[30px]' />
            </a>
          </li>
        </ul>
      </div>

    </nav>
  )
}
