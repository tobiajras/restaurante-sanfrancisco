import LocationIcon from '@/components/icons/LocationIcon';
import Image from 'next/image';
import React from 'react';

const HomeSection = () => {
  return (
    <section id='inicioSection'>
      <div className='flex items-center gap-3 sm:gap-8 md:gap-16 mt-10 mb-20 md:mt-20 md:mb-40 mx-6 sm:mx-8 md:mx-10'>
        <article>
          <div className='flex gap-1 sm:gap-2 md:gap-3 font-bold text-color-primary text-[10px] sm:text-sm md:text-base'>
            <span>#Restaurante</span>
            <span>#Bar</span>
            <span>#Cafetería</span>
          </div>
          <div className='flex flex-col text-nowrap md:gap-3 text-xl lg:text-6xl font-bold sm:mt-1 text-color-secondary'>
            <h2>Sabor y tradición</h2>
            <h2>en cada bocado</h2>
          </div>
          <div className='flex gap-1 items-center mt-2 sm:mt-4'>
            <span>
              <LocationIcon className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-color-secondary' />
            </span>
            <h3 className='text-xs md:text-2xl font-semibold text-color-secondary'>
              Zompantitla 7, Coyoacán
            </h3>
          </div>
          <div className='mt-5 sm:mt-8'>
            <a
              className='bg-color-primary hover:bg-color-primary-dark transition-colors text-xs sm:text-sm md:text-base py-2 sm:py-3 px-3 sm:px-5 text-color-title-light font-medium rounded'
              href='https://www.rappi.com.mx/restaurantes/1923249852-san-francisco-coyoacan'
              target='_blank'
              rel='noopener noreferrer'
            >
              Hacer pedido
            </a>
          </div>
        </article>
        <article className='relative'>
          <div>
            <Image
              priority
              className='rounded-md md:rounded-xl lg:rounded-3xl'
              src='/assets/local-image.webp'
              width={400}
              height={500}
              alt='imagen de inicio'
            />
          </div>
          <div className='absolute -bottom-5 -left-8 sm:-bottom-24 sm:-left-24'>
            <Image
              className='w-20'
              priority
              src='/assets/home-plate.webp'
              width={298}
              height={224}
              alt='image de plato'
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default HomeSection;
