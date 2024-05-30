import LocationIcon from '@/components/icons/LocationIcon';
import Image from 'next/image';
import React from 'react';

const HomeSection = () => {
  return (
    <section id='inicioSection'>
      <div className='flex items-center gap-16 mt-10 mb-20 md:mt-20 md:mb-40'>
        <article>
          <div className='flex gap-3 font-semibold text-color-primary'>
            <span>#Restaurante</span>
            <span>#Bar</span>
            <span>#Cafetería</span>
          </div>
          <div className='text-6xl font-bold mt-1'>
            <h2>Sabor y tradición</h2>
            <h2>en cada bocado</h2>
          </div>
          <div className='flex gap-1 items-center  mt-4'>
            <span>
              <LocationIcon className='w-6 h-6' />
            </span>
            <h3 className='text-2xl font-semibold'>Zompantitla 7, Coyoacán</h3>
          </div>
          <div className='mt-8'>
            <a
              className='bg-color-primary hover:bg-color-primary-dark transition-colors py-3 px-5 text-color-title-light font-medium rounded'
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
              className='rounded-3xl'
              src='/assets/local-image.webp'
              width={400}
              height={500}
              alt='imagen de inicio'
            />
          </div>
          <div className='absolute -bottom-24 -left-24'>
            <Image
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
