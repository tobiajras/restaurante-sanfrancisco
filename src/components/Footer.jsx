'use client';

import Image from 'next/image';
import InstagramIcon from './icons/InstagramIcon';
import FacebookIcon from './icons/FacebookIcon';
import WhatsappIcon from './icons/WhatsappIcon';

import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className='flex justify-center pt-10 pb-16 shadow-top-lg bg-color-bg-primary '>
      <div className='flex flex-col w-full max-w-6xl mx-4 sm:mx-6 md:mx-8 lg:mx-10'>
        <section className='flex md:justify-center w-full'>
          <div className='flex flex-col md:flex-row gap-8 lg:gap-32 w-full justify-between max-w-6xl  py-10'>
            <article className='flex w-full flex-col'>
              <div className='flex items-center gap-3'>
                <Image
                  className=' w-16'
                  src='assets/logo-restaurantecf.webp'
                  alt='bmasb logo'
                  width={60}
                  height={60}
                />
                <div className='flex flex-col font-medium text-color-title-light leading-5 text-lg'>
                  <span className=''>Restaurante</span>
                  <span className=''>San Francisco</span>
                </div>
              </div>
              <p className='text-sm mt-3 max-w-96 text-color-text-light'>
                Con más de 20 años de experiencia, nos dedicamos con pasión a
                ofrecer experiencias culinarias únicas y a crear momentos
                inolvidables
              </p>
              <div className='flex gap-4 mt-4'>
                <a
                  href='https://www.whatsapp.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <WhatsappIcon className='w-8 h-8 text-color-primary-light hover:text-color-primary transition-colors' />
                </a>
                <a
                  href='https://www.facebook.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FacebookIcon className='w-8 h-8 text-color-primary-light hover:text-color-primary transition-colors' />
                </a>
                <a
                  href='https://www.instagram.com/restsanfranciscocoyoacan'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <InstagramIcon className='w-8 h-8 text-color-primary-light hover:text-color-primary transition-colors' />
                </a>
              </div>
            </article>
            <article className='flex md:justify-center'>
              <div>
                <h4 className='text-color-title-light'>Menú</h4>
                <ul className='flex flex-col text-color-text-light'>
                  <li>
                    <Link
                      to='inicioSection'
                      spy={true}
                      smooth={true}
                      offset={-96}
                      duration={500}
                      className=' hover:text-color-title-light transition-colors cursor-pointer'
                    >
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='serviciosSection'
                      spy={true}
                      smooth={true}
                      offset={-160}
                      duration={500}
                      className=' hover:text-color-title-light transition-colors cursor-pointer'
                    >
                      Servicios
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='testimoniosSection'
                      spy={true}
                      smooth={true}
                      offset={-160}
                      duration={500}
                      className=' hover:text-color-title-light transition-colors cursor-pointer'
                    >
                      Testimonios
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='nosotrosSection'
                      spy={true}
                      smooth={true}
                      offset={-160}
                      duration={500}
                      className=' hover:text-color-title-light transition-colors cursor-pointer'
                    >
                      Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='ubicacionSection'
                      spy={true}
                      smooth={true}
                      offset={-160}
                      duration={500}
                      className=' hover:text-color-title-light transition-colors cursor-pointer'
                    >
                      Ubicación
                    </Link>
                  </li>
                </ul>
              </div>
            </article>
            <article className='w-full'>
              <div>
                <h4 className='text-color-title-light'>Dirección</h4>
                <p className='text-color-text-light'>Zompantitla 7, Coyoacán</p>
              </div>
              <div>
                <h4 className='text-color-title-light'>Teléfono</h4>
                <span className='text-color-text-light'>744 3771311</span>
              </div>
              <div>
                <h4 className='text-color-title-light'>Email</h4>
                <a
                  href='mailto:info@bmasbgroup.com'
                  className='text-color-text-light hover:text-color-title-light transition-colors'
                >
                  restaurantesanfrancisco@gmail.com
                </a>
              </div>
            </article>
          </div>
        </section>
        <section className='flex justify-center'>
          <article className='flex text-color-text-light flex-col md:flex-row justify-between items-center text-sm sm:text-base gap-3 sm:gap-5 pt-8 border-t border-color-primary-light w-full max-w-6xl'>
            <div className='flex flex-col sm:flex-row items-center gap-2'>
              <span>© Copyright 2024</span>
              <span className='hidden sm:block'>-</span>
              <span>Restaurante San Francisco</span>
            </div>
            <div className='flex gap-1'>
              <span>Desarrollado por:</span>
              <a
                href='https://www.linkedin.com/in/tobiasajras/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-color-primary-light hover:text-color-primary hover:font-medium transition-all'
              >
                Tobías Ajras
              </a>
            </div>
          </article>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
