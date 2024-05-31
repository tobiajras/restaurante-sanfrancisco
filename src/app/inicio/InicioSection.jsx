'use client';

import { motion } from 'framer-motion';

import LocationIcon from '@/components/icons/LocationIcon';
import Image from 'next/image';

const inicioVariants = {
  inactive: {
    opacity: 0,
    x: -30,
  },
  active: {
    opacity: 1,
    x: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.3,
    },
  },
};

const imagenVariants = {
  inactive: {
    opacity: 0,
    x: 30,
  },
  active: {
    opacity: 1,
    x: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.3,
    },
  },
};

const HomeSection = () => {
  return (
    <section className='flex justify-center' id='inicioSection'>
      <div className='flex items-center gap-3 sm:gap-8 md:gap-16 xl:gap-24 my-10 md:my-14 lg:my-20 mx-4 sm:mx-6 md:mx-8 lg:mx-10 w-full'>
        <motion.article
          variants={inicioVariants}
          initial='inactive'
          animate='active'
        >
          <div className='flex gap-1 sm:gap-2 md:gap-3 font-bold text-color-primary text-[10px] sm:text-sm md:text-base lg:text-lg'>
            <span>#Restaurante</span>
            <span>#Bar</span>
            <span>#Cafetería</span>
          </div>
          <div className='flex flex-col text-nowrap md:gap-3 text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold sm:mt-1 text-color-secondary'>
            <h2>Sabor y tradición</h2>
            <h2>en cada bocado</h2>
          </div>
          <div className='flex gap-1 items-center mt-2 md:mt-3'>
            <span>
              <LocationIcon className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-color-secondary' />
            </span>
            <h3 className='text-xs sm:text-sm md:text-lg lg:text-xl font-semibold text-color-secondary'>
              Zompantitla 7, Coyoacán
            </h3>
          </div>
          <div className='mt-5 sm:mt-6 md:mt-8'>
            <a
              className='bg-color-primary hover:bg-color-primary-dark transition-colors text-xs sm:text-sm md:text-base py-2 px-3 sm:py-2.5 sm:px-5 lg:py-3 text-color-title-light font-medium rounded'
              href='https://www.rappi.com.mx/restaurantes/1923249852-san-francisco-coyoacan'
              target='_blank'
              rel='noopener noreferrer'
            >
              Hacer pedido
            </a>
          </div>
        </motion.article>
        <motion.article
          className='relative'
          variants={imagenVariants}
          initial='inactive'
          animate='active'
        >
          <div>
            <Image
              priority
              className='w-28 sm:w-52 md:w-64 lg:w-80 xl:w-96 rounded-md md:rounded-xl lg:rounded-3xl'
              src='/assets/local-image.webp'
              width={400}
              height={500}
              alt='imagen de inicio'
            />
          </div>
          <div className='absolute -bottom-5 -left-8 sm:-left-14 md:-bottom-12 md:-left-20 lg:-bottom-16 lg:-left-24  xl:-left-28'>
            <Image
              className='w-20 sm:w-36 md:w-44 lg:w-56 xl:w-64'
              priority
              src='/assets/home-plate.webp'
              width={298}
              height={224}
              alt='image de plato'
            />
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default HomeSection;
