'use client';

import { useEffect, useState } from 'react';

import { Link } from 'react-scroll';
import HamburguerIcon from './icons/HamburguerIcon';
import CloseIcon from './icons/CloseIcon';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className='sticky flex justify-center items-center top-0 left-0 w-full h-24 z-40 bg-color-bg-primary'>
      <div className='flex justify-between items-center mx-6 sm:mx-8 md:mx-10 w-full h-full max-w-6xl'>
        <Link
          to='inicioSection'
          spy={true}
          smooth={true}
          offset={-96}
          duration={500}
          className='cursor-pointer flex items-center gap-3 text-lg text-color-text-light hover:text-color-title-light transition-colors py-6 sm:py-5'
        >
          <Image
            src='/assets/logo-restaurantecf.webp'
            width={50}
            height={50}
            alt='logo restaurante'
          />
          <span>Restaurante San Francisco</span>
        </Link>
        <nav
          className={`${
            isOpen
              ? 'left-0 opacity-100'
              : '-left-full md:left-0 opacity-0 md:opacity-100'
          } absolute top-0  h-screen w-1/2 bg-color-bg-primary md:hidden md:w-auto md:h-auto md:mt-0 duration-300`}
        >
          <ul className='flex flex-col md:flex-row gap-3 py-16 px-8 md:p-0 md:gap-5 text-lg'>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                to='inicioSection'
                spy={true}
                smooth={true}
                offset={-96}
                duration={500}
                className='cursor-pointer text-color-text-light hover:text-color-title-light transition-colors block'
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                to='serviciosSection'
                spy={true}
                smooth={true}
                offset={-96}
                duration={500}
                className='cursor-pointer text-color-text-light hover:text-color-title-light transition-colors block'
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                to='testimoniosSection'
                spy={true}
                smooth={true}
                offset={-96}
                duration={500}
                className='cursor-pointer text-color-text-light hover:text-color-title-light transition-colors block'
              >
                Testimonios
              </Link>
            </li>
            <li>
              <Link
                to='nosotrosSection'
                spy={true}
                smooth={true}
                offset={-96}
                duration={500}
                className='cursor-pointer text-color-text-light hover:text-color-title-light transition-colors block'
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                to='contactoSection'
                spy={true}
                smooth={true}
                offset={-96}
                duration={500}
                className='cursor-pointer text-color-text-light hover:text-color-title-light transition-colors block'
              >
                Contacto
              </Link>
            </li>
          </ul>
          <button
            onClick={() => setIsOpen(false)}
            className='md:hidden absolute top-0 right-0 m-7'
          >
            <CloseIcon className='w-7 h-7 fill-color-text-light hover:fill-color-title-light transition-colors' />
          </button>
        </nav>
        <nav
          className={`hidden absolute top-0  h-screen w-1/2 bg-color-bg-primary md:block md:relative md:w-auto md:h-auto md:mt-0 nav-animation`}
        >
          <ul className='flex flex-col md:flex-row gap-3 py-16 px-6 md:p-0 md:gap-5'>
            <li>
              <Link
                to='inicioSection'
                spy={true}
                smooth={true}
                offset={-96}
                duration={500}
                className='cursor-pointer text-color-text-light hover:text-color-title-light transition-colors block'
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to='serviciosSection'
                spy={true}
                smooth={true}
                offset={-96}
                duration={500}
                className='cursor-pointer text-color-text-light hover:text-color-title-light transition-colors block'
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                to='testimoniosSection'
                spy={true}
                smooth={true}
                offset={-96}
                duration={500}
                className='cursor-pointer text-color-text-light hover:text-color-title-light transition-colors block'
              >
                Testimonios
              </Link>
            </li>
            <li>
              <Link
                to='nosotrosSection'
                spy={true}
                smooth={true}
                offset={-96}
                duration={500}
                className='cursor-pointer text-color-text-light hover:text-color-title-light transition-colors block'
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to='contactoSection'
                spy={true}
                smooth={true}
                offset={-96}
                duration={500}
                className='cursor-pointer text-color-text-light hover:text-color-title-light transition-colors block'
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        <button className='md:hidden' onClick={() => handleNav()}>
          <HamburguerIcon className='fill-color-text-light w-9 h-9 hover:fill-color-title-light transition-colors' />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
