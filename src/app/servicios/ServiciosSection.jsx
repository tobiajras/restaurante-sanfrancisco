import BarIcon from '@/components/icons/BarIcon';
import CafeteriaIcon from '@/components/icons/CafeteriaIcon';
import RestaurantIcon from '@/components/icons/RestaurantIcon';
import Image from 'next/image';
import React from 'react';

const ServiciosSection = () => {
  return (
    <section id='serviciosSection' className='my-10 md:my-20'>
      <div className='flex flex-col gap-32'>
        <article className='flex items-center gap-16'>
          <div>
            <div className='flex items-center gap-3 mb-3'>
              <div className='bg-color-primary p-3 rounded-full'>
                <RestaurantIcon className='w-6 h-6' />
              </div>
              <h3 className='text-2xl font-semibold'>Restaurante</h3>
            </div>
            <div className='flex flex-col gap-2 text-lg font-medium w-[500px]'>
              <p>
                Disfruta de una exquisita selección de platos elaborados con
                ingredientes frescos y de la más alta calidad.
              </p>
              <p>
                {' '}
                Nuestro restaurante ofrece una experiencia culinaria única que
                combina tradición y creatividad en un ambiente acogedor y
                elegante.
              </p>
            </div>
          </div>
          <div>
            <Image
              className='rounded-2xl'
              src='/assets/servicios/restaurante-servicios.webp'
              width={324}
              height={324}
              alt='servicio de restaurante imagen'
            />
          </div>
        </article>
        <article className='flex items-center gap-16'>
          <div>
            <Image
              className='rounded-2xl'
              src='/assets/servicios/bar-servicios.webp'
              width={324}
              height={324}
              alt='servicio de bar imagen'
            />
          </div>
          <div>
            <div className='flex items-center gap-3 mb-3'>
              <div className='bg-color-primary p-3 rounded-full'>
                <BarIcon className='w-6 h-6' />
              </div>
              <h3 className='text-2xl font-semibold'>Bar</h3>
            </div>
            <div className='flex flex-col gap-2 text-lg font-medium w-[500px]'>
              <p>
                Relájate y disfruta de nuestra amplia variedad de cócteles
                artesanales, vinos y cervezas en un entorno moderno y animado.
              </p>
              <p>
                {' '}
                Perfecto para pasar un buen rato con amigos o para un afterwork
                inolvidable.
              </p>
            </div>
          </div>
        </article>
        <article className='flex items-center gap-16'>
          <div>
            <div className='flex items-center gap-3 mb-3'>
              <div className='bg-color-primary p-3 rounded-full'>
                <CafeteriaIcon className='w-6 h-6' />
              </div>
              <h3 className='text-2xl font-semibold'>Cafetería</h3>
            </div>
            <div className='flex flex-col gap-2 text-lg font-medium w-[500px]'>
              <p>
                Encuentra el lugar perfecto para una pausa tranquila con nuestra
                selección de cafés gourmet, tés y deliciosos pasteles.
              </p>
              <p>
                {' '}
                Ideal para trabajar, reunirse con amigos o simplemente disfrutar
                de un momento de paz.
              </p>
            </div>
          </div>
          <div>
            <Image
              className='rounded-2xl'
              src='/assets/servicios/cafeteria-servicios.webp'
              width={324}
              height={324}
              alt='servicio de cafeteria imagen'
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default ServiciosSection;
